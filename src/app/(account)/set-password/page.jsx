"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState, Suspense } from "react";
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

function SetPasswordForm() {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f4f4f4",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#fff",
          padding: "25px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            marginBottom: "15px",
            color: "#1d4c29",
          }}
        >
          Set New Password
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <input
            {...register("password")}
            type="password"
            placeholder="New Password"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.password?.message}
          </p>

          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirm Password"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.confirmPassword?.message}
          </p>

          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#1d4c29",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#000")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1d4c29")}
          >
            Set Password
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: "15px",
              color: message.includes("success") ? "green" : "red",
              fontSize: "14px",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default function SetPasswordPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SetPasswordForm />
    </Suspense>
  );
}
