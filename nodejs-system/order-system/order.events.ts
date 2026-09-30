import { EventEmitter } from "node:events";

// Singleton Event Bus cho toàn bộ module Order
export const orderEvents = new EventEmitter();
