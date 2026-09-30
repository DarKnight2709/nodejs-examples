// 1. Nạp các subscribers để đăng ký lắng nghe sự kiện với Event Bus
import "./subscribers/notification.subscriber";
import "./subscribers/inventory.subscriber";

// 2. Export public API của module
export { orderEvents } from "./order.events";
export type { Order } from "./order.types";
export { checkout } from "./services/checkout.service";
