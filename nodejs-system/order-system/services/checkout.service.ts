import { orderEvents } from "../order.events";
import type { Order } from "../order.types";

// Xử lý tạo đơn và phát sự kiện ra Event Bus
export function checkout(order: Order) {
  console.log("[Checkout] Đã lưu đơn hàng vào DB thành công.");

  // Phát sự kiện (Publish)
  orderEvents.emit("order:placed", order);

  console.log("[Checkout] Hoàn tất luồng thanh toán.");
}
