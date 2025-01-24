"use client";
import useCountryCode from "@/utils/useCountryCode";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import styles from "./ContactForm.module.scss";

// Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("Your Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10,15}$/, "Invalid phone number")
    .required("Phone Number is required"),
});

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const countryCode = useCountryCode();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const phoneValue = watch("phone");

  const onSubmit = async (data) => {
    try {
      console.log("Form submitted", data);
      setSuccessMessage("Your message has been sent successfully!");
    } catch (error) {
      setSuccessMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.full}>
          <input
            type="text"
            {...register("name")}
            placeholder="Your Name"
            className={errors.name && styles.invalid}
          />
          {touchedFields.name || errors.name ? (
            <span className={styles.error}>{errors.name?.message}</span>
          ) : (
            ""
          )}
        </div>

        <div>
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className={errors.email && styles.invalid}
          />
          {touchedFields.email || errors.email ? (
            <span className={styles.error}>{errors.email?.message}</span>
          ) : (
            ""
          )}
        </div>

        <div>
          <PhoneInput
            country={countryCode}
            className={`${styles.phoneWrap} ${errors.email && styles.invalid}`}
            value={phoneValue}
            onChange={(phone) =>
              setValue("phone", phone, {
                shouldTouch: true,
                shouldValidate: true,
              })
            }
            inputProps={{
              name: "phone",
              placeholder: "Phone Number",
            }}
          />
          {touchedFields.phone || errors.phone ? (
            <span className={styles.error}>{errors.phone?.message}</span>
          ) : (
            ""
          )}
        </div>

        <div className={styles.full}>
          <textarea {...register("message")} placeholder="Message"></textarea>
        </div>

        <button type="submit">Send</button>
      </form>

      {successMessage && (
        <span className={styles.success}>{successMessage}</span>
      )}
    </div>
  );
};

export default ContactForm;
