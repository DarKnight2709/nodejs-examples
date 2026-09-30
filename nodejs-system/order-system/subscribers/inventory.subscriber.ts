import { orderEvents } from "../order.events";
import type { Order } from "../order.types";

// SUBSCRIBER 2: Module Kho Hàng (Inventory)
orderEvents.on("order:placed", (order: Order) => {
  console.log(
    `[Inventory] Đang trừ tồn kho ${order.quantity} sản phẩm cho đơn #${order.id}`,
  );
});
