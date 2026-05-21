"use client";

import { useForm } from "@/app/hooks/useForm";
import Button from "../Button/Button";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const form = useForm<LoginFormData>({
    email: "",
    password: "",
  });

  const handleSubmit = form.handleSubmit(async (values) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }
  });
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={form.values.email}
          onChange={(e) => form.setFieldValue("email", e.target.value)}
          onBlur={() => form.setFieldTouched("email", true)}
          style={{
            width: "100%",
            padding: "8px",
            border:
              form.errors.email && form.touched.email
                ? "2px solid red"
                : "1px solid #ccc",
          }}
        />
        {form.errors.email && form.touched.email && (
          <p className="text-red-600">{form.errors.email}</p>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={form.values.password}
          onChange={(e) => form.setFieldValue("password", e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            border:
              form.errors.password && form.touched.password
                ? "2px solid red"
                : "1px solid #ccc",
          }}
        />
        {form.errors.password && form.touched.password && (
          <p style={{ color: "red", fontSize: "0.875rem" }}>
            {form.errors.password}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        isLoading={form.isSubmitting}
        className="w-full"
      >
        Login
      </Button>
    </form>
  );
}
