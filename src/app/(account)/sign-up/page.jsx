"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuthStore from "@/stores/authStore";
import { useState } from "react";
import Link from "next/link";

// Validation schema with repeat password
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default function RegisterPage() {
  const { registerUser } = useAuthStore();
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
      await registerUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });
      setSuccessMessage("Registration successful! You can now log in.");
    } catch (error) {
      setSuccessMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <Link href="/">Home</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <p>{errors.firstName?.message}</p>

        <input {...register("lastName")} placeholder="Last Name" />
        <p>{errors.lastName?.message}</p>

        <input {...register("email")} type="email" placeholder="Email" />
        <p>{errors.email?.message}</p>

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <p>{errors.password?.message}</p>

        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
        />
        <p>{errors.confirmPassword?.message}</p>

        <button type="submit">Register</button>
      </form>

      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}
