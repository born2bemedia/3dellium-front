"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import styles from "./PassReset.module.scss";
import AddToCartArrow2 from "@/icons/AddToCart/AddToCartArrow2";
import AddToCartArrow1 from "@/icons/AddToCart/AddToCartArrow1";

export default function PassReset({ setPassReset }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/forgot-password`,
        {
          email: data.email,
        }
      );
      setMessage("Check your email for the password reset link.");
    } catch (error) {
      setMessage("Error sending reset email.");
    }
  };

  return (
    <div className={styles.reset}>
      <h3>
        No Worries! <br />
        Let’s Get You Back In.
      </h3>
      <p>Enter your email, and we’ll send you a link to reset your password.</p>

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

        <button className={styles.submitButton} type="submit">
          <div>
            <AddToCartArrow2 />
            <span>Reset Password</span>
            <AddToCartArrow1 />
          </div>
        </button>
      </form>

      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}
