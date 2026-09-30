// 1. Generic Interface: Vỏ bọc chuẩn cho mọi API Response
interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  data: T; // T sẽ nhận kiểu cụ thể khi sử dụng
  timestamp: string;
}

// 2. Các Model cụ thể
interface UserProfile {
  id: string;
  email: string;
}

interface ProductItem {
  sku: string;
  price: number;
}

// 3. Sử dụng Generics:
async function getUserProfile(): Promise<ApiResponse<UserProfile>> {
  return {
    success: true,
    statusCode: 200,
    data: { id: "u_123", email: "dev@example.com" },
    timestamp: new Date().toISOString(),
  };
}

// Khi dùng:
async function run() {
  const res = await getUserProfile();
  console.log(res.data.email); // TS autocomplete được '.email', không lo gõ sai chính tả
  // res.data.price;          // Báo lỗi ngay lập tức!
}

run();
