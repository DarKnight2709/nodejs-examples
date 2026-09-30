import http from "node:http";

const PORT = 3000;

// 1. Khởi tạo instance HTTP Server
const server = http.createServer((req, res) => {
  // 2. Parse method, URL và headers từ Request
  const { method, url, headers } = req;

  // Endpoint 1: GET /api/status
  if (method === "GET" && url === "/api/status") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        status: "Running",
        timestamp: new Date().toISOString(),
        client: {
          host: headers["host"],
          userAgent: headers["user-agent"],
        },
      }),
    );
    return;
  }

  // Endpoint 2: POST /api/echo
  if (method === "POST" && url === "/api/echo") {
    // Parse và validate header Content-Type
    const contentType = headers["content-type"];
    if (!contentType?.includes("application/json")) {
      res.writeHead(415, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          error: "Unsupported Media Type. Expected application/json",
        }),
      );
      return;
    }

    const bodyChunks: Buffer[] = [];

    // Hứng từng chunk dữ liệu qua stream
    req.on("data", (chunk: Buffer) => {
      bodyChunks.push(chunk);
    });

    // Gom toàn bộ body và trả lời thủ công
    req.on("end", () => {
      try {
        const rawBody = Buffer.concat(bodyChunks).toString("utf-8");
        const parsedBody = JSON.parse(rawBody);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            message: "Data received successfully!",
            authHeader: headers["authorization"] ?? "None",
            yourData: parsedBody,
          }),
        );
      } catch {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON format" }));
      }
    });
    return;
  }

  // Fallback: 404 cho các route không tồn tại
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Route Not Found" }));
});

// similar
// const server = new http.Server();
// server.on("request", requestListener);
// server.listen(PORT);

server.on("connection", (socket) => {
  console.log("Connect successfully");
  console.log(socket);
});

server.listen(PORT, () => {
  console.log(`[HTTP Server] Đang chạy tại http://localhost:${PORT}`);
});

// server.listen(PORT);

// server.on("listening", () => {
//   console.log(`[HTTP Server] Đang chạy tại http://localhost:${PORT}`);
// });
