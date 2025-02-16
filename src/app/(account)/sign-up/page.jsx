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
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: "20px",
            textDecoration: "none",
            fontSize: "18px",
            color: "#1d4c29",
            fontWeight: "600",
          }}
        >
          Sign up
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <input
            {...register("firstName")}
            placeholder="First Name"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.firstName?.message}
          </p>

          <input
            {...register("lastName")}
            placeholder="Last Name"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.lastName?.message}
          </p>

          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.email?.message}
          </p>

          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            style={{
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
              padding: "10px",
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
            Register
          </button>
        </form>

        {successMessage && (
          <p
            style={{
              marginTop: "15px",
              color: "green",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
}
