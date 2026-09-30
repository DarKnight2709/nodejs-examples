server.on("request", async (req, res) => {
  const query = runVeryHeavyDatabaseQuery();

  // Nếu client tắt trình duyệt giữa chừng -> dừng query ngay để cứu server
  req.on("close", () => {
    if (!res.writableEnded) {
      console.log("Client đã ngắt kết nối, hủy truy vấn tốn tài nguyên!");
      query.cancel();
    }
  });

  const data = await query;
  res.end(JSON.stringify(data));
});
