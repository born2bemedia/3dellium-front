"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function ResetPasswordPage() {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_CMS_URL}/api/users/forgot-password`, {
        email: data.email,
      });
      setMessage("Check your email for the password reset link.");
    } catch (error) {
      setMessage("Error sending reset email.");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} type="email" placeholder="Enter your email" required />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
