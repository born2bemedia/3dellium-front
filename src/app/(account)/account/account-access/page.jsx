"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState, Suspense, useEffect } from "react";
import useAuthStore from "@/stores/authStore";

// Validation Schema
const schema = yup.object().shape({
  currentPassword: yup.string().required("Current password is required"),
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
  const { user, token, isHydrated } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/me`,
          {
            withCredentials: true,
          }
        );
        console.log("User details:", response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }
    fetchUserDetails();
  }, [user]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/${user.id}`,
        {
          currentPassword: data.currentPassword,
          password: data.password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setMessage("Your password has been updated!");
    } catch (error) {
      console.error("Error updating password:", error);
      setMessage(
        "Failed to update password. Please check your current password."
      );
    }
  };

  return (
    <div>
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
        {/* Current Password Field */}
        <input
          {...register("currentPassword")}
          type="password"
          placeholder="Current Password"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />
        <p style={{ color: "red", fontSize: "14px" }}>
          {errors.currentPassword?.message}
        </p>

        {/* New Password Field */}
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

        {/* Confirm New Password Field */}
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
  );
}

export default function SetPasswordPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SetPasswordForm />
    </Suspense>
  );
}
