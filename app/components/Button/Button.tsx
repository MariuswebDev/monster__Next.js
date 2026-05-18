"use client";

import { ButtonProps } from "./Button.types";
import "./Button.css";

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn 
        btn--${variant}
        btn--${size}
        ${isLoading ? "btn--loading" : ""}
        ${className}
        `.trim()}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
