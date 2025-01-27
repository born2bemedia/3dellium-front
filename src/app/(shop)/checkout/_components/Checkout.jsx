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

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      addressLine1: user?.addressLine1 || "",
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

  const handleCreateOrder = async (data) => {
    try {
      let userId = null;

      // Check if user exists by email
      const existingUser = await fetchUserByEmail(data.email);

      if (existingUser) {
        userId = existingUser.id;
      } else {
        // Register new user if no user exists
        const password = Math.random().toString(36).slice(-8); // Generate random password
        const newUser = await registerUser({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password,
        });

        userId = newUser.id;
      }

      // Create order data
      const orderData = {
        orderNumber: `ORD-${Date.now()}`,
        user: userId,
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
          body: JSON.stringify({ data: orderData }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error("Failed to create order");
      }

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
      <div className="_container">
        {cart.length > 0 ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h3>Billing Address</h3>
              <div>
                <label>First Name</label>
                <input {...register("firstName")} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </div>
              <div>
                <label>Last Name</label>
                <input {...register("lastName")} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </div>
              <div>
                <label>Address Line 1</label>
                <input {...register("addressLine1")} />
                {errors.addressLine1 && <p>{errors.addressLine1.message}</p>}
              </div>
              <div>
                <label>City</label>
                <input {...register("city")} />
                {errors.city && <p>{errors.city.message}</p>}
              </div>
              <div>
                <label>ZIP Code</label>
                <input {...register("zip")} />
                {errors.zip && <p>{errors.zip.message}</p>}
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
                    />
                  )}
                />
                {errors.country && <p>{errors.country.message}</p>}
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
                    />
                  )}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
              </div>
              <div>
                <label>Email</label>
                <input {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <h3>Order Summary</h3>
              {cart.map((item) => (
                <div key={item.id}>
                  <p>
                    {item.name} x {item.quantity}
                  </p>
                  <p>€{item.quantity * item.attributes.price}</p>
                </div>
              ))}
              <p>Total: €{totalAmount}</p>
            </div>
            <div>
              <label>
                <input type="checkbox" {...register("terms")} />
                Accept Terms and Conditions
              </label>
              {errors.terms && <p>{errors.terms.message}</p>}
            </div>
            <div>
              <label>
                <input type="checkbox" {...register("refundPolicy")} />
                Accept Refund Policy
              </label>
              {errors.refundPolicy && <p>{errors.refundPolicy.message}</p>}
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

export default Checkout;
