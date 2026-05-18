"use client";
import { CardProps } from "./Card.types";

export default function Card({
  title,
  description,
  children,
  variant = "default",
  onClick,
}: CardProps) {
  return (
    <div
      className={`card card--${variant}`}
      onClick={onClick}
      style={{
        border: variant === "outlined" ? "1px solid #ccc" : "none",
        boxShadow:
          variant === "elevated" ? "0 2px 8px rgba(207,119,20,0.1)" : "none",
        padding: "20px",
        borderRadius: "8px",
        cursor: onclick ? "pointer" : "auto",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
}
