import { createId } from "@/app";
import { Product } from "@/app/product";

const product: Product = {
  id: createId("item_1"),
  name: "phone",
  price: 279,
  category: "electronics",
  instock: true,
  createdAt: new Date(),
};
