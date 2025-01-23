"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

// Validation Schema
const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default function SetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = async (data) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/reset-password`,
        {
          token,
          password: data.password,
        }
      );
      setMessage("Your password has been successfully updated!");
    } catch (error) {
      setMessage("Failed to reset password. Try again.");
    }
  };

  return (
    <div>
      <h2>Set New Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("password")}
          type="password"
          placeholder="New Password"
        />
        <p>{errors.password?.message}</p>

        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
        />
        <p>{errors.confirmPassword?.message}</p>

        <button type="submit">Set Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
