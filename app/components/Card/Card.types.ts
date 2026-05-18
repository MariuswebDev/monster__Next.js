import { ReactNode } from "react";

export type CardVariant = "default" | "outlined" | "elevated";

export interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  variant?: CardVariant;
  onClick?: () => void;
}
