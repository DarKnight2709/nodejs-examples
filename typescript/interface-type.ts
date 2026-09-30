// Use interface by default for object shapes, data transfer objects (DTOs), models, and public API definitions where declaration merging and clear inheritance are beneficial.

// 1. Data Transfer Objects (DTOs) & Models
interface CreateUserDto {
  email: string;
  passwordHash: string;
  role: string;
}

interface UserModel extends CreateUserDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Class Contracts
interface CacheStore {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, ttlSeconds?: number): Promise<void>;
  delete(key: string): Promise<boolean>;
}

class RedisCache implements CacheStore {
  async get(key: string) {
    return null;
  }
  async set(key: string, value: string) {}
  async delete(key: string) {
    return true;
  }
}

// 3. Public APIs & Declaration Merging
// Library code:
interface ExpressRequest {
  url: string;
  headers: Record<string, string>;
}

// User application code
interface ExpressRequest {
  user?: { id: string; role: string };
}

// Resulting shape includes both:
const req: ExpressRequest = {
  url: "/dashboard",
  headers: { authorization: "Bearer token" },
  user: { id: "u_123", role: "admin" },
};

//  Use type whenever you need unions, primitives, tuples, utility transforms, or complex type algebra.

// 1. Union Types
type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

// 2. Primitive Aliasing & Tuples
type UUID = string;
type EpochTimestamp = number;

// Tuple (fixed length and ordered element types)
type Coordinate = [latitude: number, longitude: number];

const location: Coordinate = [37.7749, -122.4194];

// 3. Utility Transforms (Mapped Types)
interface Product {
  id: string;
  title: string;
  price: number;
}

// Mapped type: make all fields optional and nullable
type NullablePartial<T> = {
  [K in keyof T]?: T[K] | null;
};

type ProductPatchPayload = NullablePartial<Product>;
// Equivalent to: { id?: string | null; title?: string | null; price?: number | null; }

// 4.Complex Type Algebra

// Template literal type algebra
type HttpMethod = "GET" | "POST";
type Endpoint = "/users" | "/orders";
type ApiRoute = `${HttpMethod} ${Endpoint}`;
// Resolves to: "GET /users" | "GET /orders" | "POST /users" | "POST /orders"
