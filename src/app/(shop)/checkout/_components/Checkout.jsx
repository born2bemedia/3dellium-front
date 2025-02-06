"use client";
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

const Checkout = () => {
  const { cart, clearCart, totalAmount } = useCartStore();
  const { user, fetchUserByEmail, registerUser } = useAuthStore();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

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
        country: data.country.label,
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
        zip: user.zip || "",
        country: user.country || "",
      });
    }
  }, [user, reset]);

  const handleCreateOrder = async (data) => {
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
          country: data.country.label,
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
        console.error("Error response:", errorData);
        throw new Error("Failed to create order");
      }

      await updateUserProfile(userId, data);

      clearCart();
      router.push("/thankyou");
    } catch (error) {
      console.error("Order creation failed:", error);
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
            maxWidth: "600px",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {cart.length > 0 ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "10px",
                  color: "#1d4c29",
                  textAlign: "center",
                }}
              >
                Billing Address
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                }}
              >
                <div>
                  <label>First Name</label>
                  <input
                    {...register("firstName")}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      fontSize: "16px",
                    }}
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
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      fontSize: "16px",
                    }}
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
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    fontSize: "16px",
                  }}
                />
                {errors.addressLine1 && (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {errors.addressLine1.message}
                  </p>
                )}
              </div>

              <div>
                <label>City</label>
                <input
                  {...register("city")}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    fontSize: "16px",
                  }}
                />
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
                  <input
                    {...register("zip")}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      fontSize: "16px",
                    }}
                  />
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
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px",
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
                <input
                  {...register("email")}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    fontSize: "16px",
                  }}
                />
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

              <div>
                <label>
                  <input type="checkbox" {...register("terms")} /> Accept Terms
                  and Conditions
                </label>
                {errors.terms && (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {errors.terms.message}
                  </p>
                )}
              </div>

              <div>
                <label>
                  <input type="checkbox" {...register("refundPolicy")} /> Accept
                  Refund Policy
                </label>
                {errors.refundPolicy && (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {errors.refundPolicy.message}
                  </p>
                )}
              </div>

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
                Submit
              </button>
            </form>
          ) : (
            <p style={{ textAlign: "center", fontSize: "18px", color: "#555" }}>
              Your cart is empty.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;
