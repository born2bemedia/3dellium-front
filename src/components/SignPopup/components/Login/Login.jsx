"use client";
import useAuthStore from "@/stores/authStore";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import usePopupStore from "@/stores/popupStore";
import styles from "./Login.module.scss";
import AddToCartArrow2 from "@/icons/AddToCart/AddToCartArrow2";
import AddToCartArrow1 from "@/icons/AddToCart/AddToCartArrow1";
// Validation Schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(4, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const { login, user } = useAuthStore();
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    password: false,
    confirmPassword: false,
  });

  const { signPopupType, setSignPopupType, setSignPopupDisplay } =
    usePopupStore();

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
      setSignPopupDisplay(false);
      router.push("/account");
    } catch (error) {
      setSuccessMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className={styles.formWrap}>
      <h3>Access your account</h3>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputWrap}>
          <label>Your Email:</label>
          <div>
            <input
              className={errors.email ? styles.error : ""}
              type="email"
              {...register("email")}
            />
          </div>
        </div>

        <div className={styles.inputWrap}>
          <label>Your Password:</label>
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
        <button className={styles.submitButton} type="submit">
          <div>
            <AddToCartArrow2 />
            <span>Log In</span>
            <AddToCartArrow1 />
          </div>
        </button>
        <div className={styles.forgotPassword}>
          Forgot your password?{" "}
          <button onClick={() => setSignPopupType("reset")}>Click here</button>
        </div>
      </form>
    </div>
  );
}
