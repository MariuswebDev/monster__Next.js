export type ID = string & { readonly __brand: "ID" };

export function createId(id: string) {
  return id as ID;
}

export interface Product {
  id: ID;
  name: string;
  price: number;
  category: "electronics" | "clothing" | "food";
  instock: boolean;
  createdAt: Date;
}
