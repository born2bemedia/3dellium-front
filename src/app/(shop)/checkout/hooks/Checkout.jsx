"use client";
import styles from "./Checkout.module.scss";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Select from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useCartStore from "@/stores/cartStore"; // Zustand cart store
import useAuthStore from "@/stores/authStore"; // Zustand auth store
import Cart from "../Cart/Cart";
import AddToCartArrow2 from "@/icons/AddToCart/AddToCartArrow2";
import AddToCartArrow1 from "@/icons/AddToCart/AddToCartArrow1";

const getCountryOptionByCode = (code) => {
  const countries = countryList().getData();
  return countries.find((country) => country.value === code);
};

// Add these constants at the top
const inputStyles = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px",
};

const Checkout = () => {
  const { cart, clearCart, totalAmount } = useCartStore();
  const { user, fetchUserByEmail, registerUser } = useAuthStore();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required."),
    lastName: Yup.string().required("This field is required."),
    addressLine1: Yup.string().required("This field is required."),
    city: Yup.string().required("This field is required."),
    zip: Yup.string().required("This field is required."),
    country: Yup.object()
      .shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
      .nullable()
      .required("This field is required."),
    email: Yup.string()
      .email("Please provide a valid email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    terms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions."
    ),
    refundPolicy: Yup.boolean().oneOf(
      [true],
      "You must accept the refund policy."
    ),
  });

  const updateUserProfile = async (userId, data) => {
    try {
      const userUpdatePayload = {
        phone: data.phone,
        address: data.addressLine1,
        city: data.city,
        state: data.state || "N/A",
        zip: data.zip,
        country: data.country.value,
      };

      console.log("Updating user with:", userUpdatePayload);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
          body: JSON.stringify(userUpdatePayload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to update user:", errorData);
        throw new Error("User update failed");
      }

      console.log("User profile updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      addressLine1: user?.address || "",
      addressLine2: user?.addressLine2 || "",
      city: user?.city || "",
      zip: user?.zip || "",
      country: null,
      email: user?.email || "",
      phone: user?.phone || "",
      terms: false,
      refundPolicy: false,
    },
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    console.log(user);
    if (user) {
      reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        addressLine1: user.address || "",
        city: user.city || "",
        state: user.state || "",
        phone: user?.phone || "",
        zip: user.zip || "",
        country: user.country ? getCountryOptionByCode(user.country) : null,
      });
    }
  }, [user, reset]);

  const handleCreateOrder = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      let userId = null;

      // Check if user exists by email
      const existingUser = await fetchUserByEmail(data.email);

      if (existingUser) {
        userId = existingUser.id;
      } else {
        const password = Math.random().toString(36).slice(-8);
        const newUser = await registerUser({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password,
        });

        userId = newUser.id;
      }

      // Update user profile first
      await updateUserProfile(userId, data);

      const orderData = {
        orderNumber: `ORD-${Date.now()}`,
        user: { id: userId },
        items: cart.map((item) => ({
          product: item.id,
          quantity: item.quantity,
          price: item.attributes.price,
        })),
        total: totalAmount,
        status: "pending",
        paymentMethod: "bank_transfer",
        billingAddress: {
          street: data.addressLine1,
          city: data.city,
          state: data.state || "N/A",
          zip: data.zip,
          country: data.country.value,
        },
        notes: data.specialNotes || "",
      };

      console.log(
        "Payload being sent:",
        JSON.stringify({ data: orderData }, null, 2)
      );

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create order");
      }

      // Send order confirmation email
      const emailPayload = {
        orderNumber: orderData.orderNumber,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        items: orderData.items,
        total: orderData.total,
        paymentMethod: orderData.paymentMethod,
        billingAddress: orderData.billingAddress,
        notes: orderData.notes,
      };

      const emailResponse = await fetch("/api/emails/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      if (!emailResponse.ok) {
        console.error("Failed to send order email.");
      }

      clearCart();
      router.push("/thankyou");
    } catch (error) {
      console.error("Order creation failed:", error);
      setSubmitError(
        error.message || "Failed to process order. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = (data) => {
    handleCreateOrder(data);
  };

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.checkout}>
        <div className="_container">
          <div className={styles.checkoutForm}>
            {cart.length > 0 ? (
              <div className={styles.checkoutWrapper}>
                <h1>Your Cart, Ready to Go</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.body}>
                  <div className={styles.col1}>
                    <h2>Your Order</h2>
                    <Cart />
                  </div>
                  <div className={styles.col2}>
                    <h2>Billing Data</h2>
                    <div>
                      <div>
                        <div>
                          <label>First Name</label>
                          <input
                            {...register("firstName")}
                            style={inputStyles}
                          />
                          {errors.firstName && (
                            <p style={{ color: "red", fontSize: "14px" }}>
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label>Last Name</label>
                          <input
                            {...register("lastName")}
                            style={inputStyles}
                          />
                          {errors.lastName && (
                            <p style={{ color: "red", fontSize: "14px" }}>
                              {errors.lastName.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label>Address Line 1</label>
                        <input
                          {...register("addressLine1")}
                          style={inputStyles}
                        />
                        {errors.addressLine1 && (
                          <p style={{ color: "red", fontSize: "14px" }}>
                            {errors.addressLine1.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label>City</label>
                        <input {...register("city")} style={inputStyles} />
                        {errors.city && (
                          <p style={{ color: "red", fontSize: "14px" }}>
                            {errors.city.message}
                          </p>
                        )}
                      </div>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "10px",
                        }}
                      >
                        <div>
                          <label>ZIP Code</label>
                          <input {...register("zip")} style={inputStyles} />
                          {errors.zip && (
                            <p style={{ color: "red", fontSize: "14px" }}>
                              {errors.zip.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label>Country</label>
                          <Controller
                            name="country"
                            control={control}
                            render={({ field }) => (
                              <Select
                                {...field}
                                options={countryList().getData()}
                                onChange={(value) => setValue("country", value)}
                                styles={{
                                  control: (provided) => ({
                                    ...provided,
                                    padding: "5px",
                                    fontSize: "16px",
                                  }),
                                }}
                              />
                            )}
                          />
                          {errors.country && (
                            <p style={{ color: "red", fontSize: "14px" }}>
                              {errors.country.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label>Phone</label>
                        <Controller
                          name="phone"
                          control={control}
                          render={({ field }) => (
                            <PhoneInput
                              {...field}
                              country={"us"}
                              onChange={(value) => setValue("phone", value)}
                              inputStyle={{
                                ...inputStyles,
                              }}
                            />
                          )}
                        />
                        {errors.phone && (
                          <p style={{ color: "red", fontSize: "14px" }}>
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label>Email</label>
                        <input {...register("email")} style={inputStyles} />
                        {errors.email && (
                          <p style={{ color: "red", fontSize: "14px" }}>
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <h3
                        style={{
                          fontSize: "20px",
                          marginTop: "20px",
                          color: "#1d4c29",
                          textAlign: "center",
                        }}
                      >
                        Order Summary
                      </h3>
                      <div
                        style={{
                          backgroundColor: "#f9f9f9",
                          padding: "15px",
                          borderRadius: "5px",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {cart.map((item) => (
                          <div
                            key={item.id}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "5px 0",
                            }}
                          >
                            <p>
                              {item.name} x {item.quantity}
                            </p>
                            <p>€{item.quantity * item.attributes.price}</p>
                          </div>
                        ))}
                        <p
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            textAlign: "right",
                            marginTop: "10px",
                          }}
                        >
                          Total: €{totalAmount}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col3}>
                    <h2>Order Summary</h2>
                    <div className={styles.orderSummary}></div>
                    <div className={styles.orderSubmit}>
                      <div className={styles.terms}>
                        <div>
                          <label>
                            <input type="checkbox" {...register("terms")} />
                            <span>
                              I have read and agree to 3Dellium’s Terms and
                              Conditions.
                            </span>
                          </label>
                          {errors.terms && (
                            <p style={{ color: "red", fontSize: "14px" }}>
                              {errors.terms.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label>
                            <input
                              type="checkbox"
                              {...register("refundPolicy")}
                            />{" "}
                            <span>
                              I have read and agree to the Refund Policy.
                            </span>
                          </label>
                          {errors.refundPolicy && (
                            <p style={{ color: "red", fontSize: "14px" }}>
                              {errors.refundPolicy.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <button type="submit" disabled={isSubmitting}>
                        <div>
                          <AddToCartArrow2 />
                          <span>{isSubmitting ? "Loading..." : "Order"}</span>
                          <AddToCartArrow1 />
                        </div>
                      </button>
                    </div>
                    {submitError && (
                      <div
                        style={{
                          color: "red",
                          marginBottom: "15px",
                          textAlign: "center",
                        }}
                      >
                        {submitError}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            ) : (
              <p
                style={{ textAlign: "center", fontSize: "18px", color: "#555" }}
              >
                Your cart is empty.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
