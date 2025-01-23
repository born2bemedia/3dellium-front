"use client";
import useAuthStore from "@/stores/authStore";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Link from "next/link";

// Validation Schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(4, "Password must be at least 6 characters").required("Password is required"),
});

export default function LoginPage() {
  const { login, user } = useAuthStore();
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      setSuccessMessage("Login successful!");
    } catch (error) {
      setSuccessMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
        <Link href="/">Home</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email")} placeholder="Email" />
        <p>{errors.email?.message}</p>

        <input type="password" {...register("password")} placeholder="Password" />
        <p>{errors.password?.message}</p>

        <button type="submit">Login</button>
      </form>

      {successMessage && <p>{successMessage}</p>}

      {user && (
        <div>
          <h3>User Details:</h3>
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p>
        </div>
      )}
    </div>
  );
}
