"use client";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuthStore from "@/stores/authStore";
import { useState } from "react";
import Link from "next/link";
import styles from "./Register.module.scss";
import AddToCartArrow2 from "@/icons/AddToCart/AddToCartArrow2";
import AddToCartArrow1 from "@/icons/AddToCart/AddToCartArrow1";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import usePopupStore from "@/stores/popupStore";

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
  terms: yup
    .boolean()
    .required("You must accept the terms and conditions")
    .oneOf([true], "You must accept the terms and conditions"),
  refundPolicy: yup
    .boolean()
    .required("You must accept the refund policy")
    .oneOf([true], "You must accept the refund policy"),
});

export default function Register() {
  const { registerUser } = useAuthStore();
  const [successMessage, setSuccessMessage] = useState("");
  const { thanksPopupDisplay, setThanksPopupDisplay, setSignPopupDisplay } =
    usePopupStore();

  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setValue,
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
      setSignPopupDisplay(false);
      setThanksPopupDisplay(true);
      reset();
    } catch (error) {
      setSuccessMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className={styles.register}>
      <h3>Join 3Dellium</h3>
      <p>One step left! Fill out the form:</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formInner}>
          <div className={styles.inputWrap}>
            <label>First name:</label>
            <div>
              <input
                className={errors.firstName ? styles.error : ""}
                {...register("firstName")}
              />
            </div>
          </div>

          <div className={styles.inputWrap}>
            <label>Last name:</label>
            <div>
              <input
                className={errors.lastName ? styles.error : ""}
                {...register("lastName")}
              />
            </div>
          </div>

          <div className={styles.inputWrap}>
            <label>Phone:</label>
            <div>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country={"us"}
                    onChange={(value) => setValue("phone", value)}
                  />
                )}
              />
            </div>
          </div>

          <div className={styles.inputWrap}>
            <label>Email:</label>
            <div>
              <input
                className={errors.email ? styles.error : ""}
                type="email"
                {...register("email")}
              />
            </div>
          </div>

          <div className={styles.inputWrap}>
            <label>Password:</label>
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
        </div>
        {successMessage && (
          <p
            style={{
              marginTop: "0",
              color: "red",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            {successMessage}
          </p>
        )}

        <div className={styles.submitButtonWrap}>
          <button className={styles.submitButton} type="submit">
            <div>
              <AddToCartArrow2 />
              <span>Join</span>
              <AddToCartArrow1 />
            </div>
          </button>
          <div className={styles.terms}>
            <div>
              <label>
                <input
                  className={errors.terms ? styles.error : ""}
                  type="checkbox"
                  {...register("terms")}
                />
                <span>
                  I have read and agree to 3Dellium’s Terms and Conditions and
                  Privacy Policy.
                </span>
              </label>
            </div>

            <div>
              <label>
                <input
                  className={errors.refundPolicy ? styles.error : ""}
                  type="checkbox"
                  {...register("refundPolicy")}
                />{" "}
                <span>
                  I confirm that I am over 18 years old and accept the above
                  terms.
                </span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
