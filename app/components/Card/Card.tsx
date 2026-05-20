"use client";
import { CardProps } from "./Card.types";
import "./card.css";

export default function Card({
  title,
  description,
  variant = "default",
  children,
  onClick,
}: CardProps) {
  return (
    <div
      className={` card
    card--${variant}
    `}
      onClick={onClick}
      style={{
        padding: "40px",
        border: variant === "outline" ? "1px solid blue" : "none",
        boxShadow:
          variant === "elevated"
            ? "0px 2px 15px rgba(255,201, 211, 0.1)"
            : "none",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
}
