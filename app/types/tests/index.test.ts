import { createId, User } from "@/app";
import type { status } from "@/app";

// Test 1: Type safety
const user: User = {
  id: createId("user-1"),
  name: "John",
  email: "john@example.com",
  role: "admin",
  createdAt: new Date(),
};

console.log("✅ User type created successfully:", user);

// Test 2: Status type
const status: status = "success";
console.log("✅ Status type works with:", status);
