// Basic primitive types
export type ID = string & { readonly __brand: "ID" };

export function createId(id: string): ID {
  return id as ID;
}

export interface User {
  id: ID;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
  createdAt: Date;
}

// status types
export type status = "pending" | "success" | "error" | "loading";

// Generic response
export interface Response<T> {
  status: status;
  data?: T;
  error?: string;
}

// Form types
export interface FormData {
  username: string;
  email: string;
  password: string;
}
