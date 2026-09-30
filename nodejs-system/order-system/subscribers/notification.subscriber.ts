import { orderEvents } from "../order.events";
import type { Order } from "../order.types";

// SUBSCRIBER 1: Module Gửi Thông Báo (Notification)
orderEvents.on("order:placed", (order: Order) => {
  console.log(
    `[Notification] Đã gửi email xác nhận đơn hàng #${order.id} tới ${order.customerEmail}`,
  );
});
