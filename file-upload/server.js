import http from 'http';
import multer from 'multer';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB hard-stop limit
    // fileSize: 1024 // this for the fileSize test.
    fieldNameSize: 10, // max 10 characters for field key name
    fieldSize: 20, // max 20 bytes/characters allowd for field value
  },
}).single('avatar');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/upload') {
    console.log('\n--- [1] Raw HTTP Request Arrived ---');
    console.log('Content-Type Header:', req.headers['content-type']);

    // 3. Multer is a standard (req, res, next) middleware function.
    // In raw Node.js, we invoke it manually and pass our own callback as `next`.
    upload(req, res, (err) => {
      console.log('--- [2] Multer Finished Parsing Stream ---');

      // A. Handle Multer / Stream Limit Errors
      if (err instanceof multer.MulterError) {
        let statusCode = 400;
  let message = err.message;

      if (err.code === 'LIMIT_FILE_SIZE') {
        statusCode = 413; // Payload Too Large
        message = 'File too large! Max 2MB allowed.';
      } else if (err.code === 'LIMIT_UNEXPECTED_FILE') {
        message = 'Unexpected field name. Expected a single file under "avatar".';
      } else if (err.code === 'LIMIT_FIELD_KEY') {
        message = 'Field name too long! Max 10 characters allowed.';
      } else if (err.code === 'LIMIT_FIELD_VALUE') {
        message = 'Field value too long! Max 20 characters allowed.';
      }
      res.writeHead(statusCode, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: message, errorCode: err.code }));
      } else if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Unknown server error' }));
      }

      // B. Check if file was provided
      if (!req.file) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'No file uploaded under field "avatar"' }));
      }

      // C. Inspect what Multer created in memory
      console.log('Parsed text fields (req.body):', req.body);
      console.log('Extracted file object (req.file metadata):', {
        fieldname: req.file.fieldname,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
      });

      // D. Verify Magic Bytes on the assembled Buffer
      const firstBytesHex = req.file.buffer.subarray(0, 3).toString('hex').toUpperCase();
      console.log(`Buffer length in RAM: ${req.file.buffer.length} bytes`);
      console.log(`First 3 Magic Bytes: 0x${firstBytesHex}`);

      const isRealJpeg = firstBytesHex === 'FFD8FF';

      if (!isRealJpeg) {
        console.log('🚨 REJECTED: Magic bytes do NOT match JPEG!');
        res.writeHead(422, { 'Content-Type': 'application/json' });
        return res.end(
          JSON.stringify({
            error: 'Validation failed: File claims to be an image but binary signature is not JPEG.',
            detectedHeader: `0x${firstBytesHex}`,
          }),
        );
      }

      // E. Success!
      console.log('✅ APPROVED: Genuine JPEG verified.');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(
        JSON.stringify({
          message: 'Upload successful!',
          originalname: req.file.originalname,
          sizeBytes: req.file.size,
          magicBytes: `0x${firstBytesHex}`,
        }),
      );
    });

    return;
  }

  // Fallback 404
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

server.listen(3000, () => {
  console.log('Raw HTTP + Multer server running on http://localhost:3000');
});