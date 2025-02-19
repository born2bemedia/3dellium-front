"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.scss";
import AddToCartArrow2 from "@/icons/AddToCart/AddToCartArrow2";
import AddToCartArrow1 from "@/icons/AddToCart/AddToCartArrow1";
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
  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    password: false,
    confirmPassword: false,
  });
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
    <div className={styles.setPassword}>
      <div className={styles.setPasswordInner}>
        <h2>Set New Password</h2>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputWrap}>
            <label>New Password:</label>
            <div>
              <input
                className={errors.password ? styles.error : ""}
                type={showPasswords.password ? "text" : "password"}
                {...register("password")}
              />
              <button
                type="button"
                onClick={() =>
                  setShowPasswords((prev) => ({
                    ...prev,
                    password: !prev.password,
                  }))
                }
                className={styles.eyeIcon}
              >
                {showPasswords.password ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <div className={styles.inputWrap}>
            <label>Confirm Password:</label>
            <div>
              <input
                className={errors.confirmPassword ? styles.error : ""}
                type={showPasswords.confirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
              />
              <button
                type="button"
                onClick={() =>
                  setShowPasswords((prev) => ({
                    ...prev,
                    confirmPassword: !prev.confirmPassword,
                  }))
                }
                className={styles.eyeIcon}
              >
                {showPasswords.confirmPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <button className={styles.submitButton} type="submit">
            <div>
              <AddToCartArrow2 />
              <span>Set</span>
              <AddToCartArrow1 />
            </div>
          </button>
        </form>

        {message && <p>{message}</p>}
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
