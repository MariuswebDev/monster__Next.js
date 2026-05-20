import { ReactNode } from "react";

export type CardVariant = "default" | "outline" | "elevated";

export interface CardProps {
  title: string;
  description: string;
  variant: CardVariant;
  children?: ReactNode;
  onClick?: () => void;
}
