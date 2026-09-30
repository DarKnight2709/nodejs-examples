import { checkout, orderEvents, type Order } from "./order-system";

// 1. Thử nghiệm sự kiện .once() trên Event Bus
orderEvents.once("system:ready", () => {
  console.log("[System] Hệ thống đã sẵn sàng nhận đơn (Chỉ log đúng 1 lần)!");
});

// Kích hoạt sự kiện system:ready 2 lần để thấy sự khác biệt của .once()
orderEvents.emit("system:ready");
orderEvents.emit("system:ready"); // Lần 2 này sẽ bị bỏ qua

console.log("\n--- Bắt đầu tạo đơn hàng ---");

// 2. Tạo đơn hàng và kích hoạt thanh toán thông qua module
const newOrder: Order = {
  id: "ORD_101",
  customerEmail: "khachhang@example.com",
  quantity: 2,
};

checkout(newOrder);
