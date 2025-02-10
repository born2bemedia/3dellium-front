"use client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuthStore from "@/stores/authStore";
import { useEffect, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const getCountryOptionByCode = (code) => {
  const countries = countryList().getData();
  return countries.find((country) => country.value === code);
};

export default function DashboardPage() {
  const { user, updateUser, isHydrated } = useAuthStore();
  const [userCountry, setUserCountry] = useState("");
  const router = useRouter();

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setUserCountry(user?.country);
    console.log(user?.country);
  }, [user]);

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      addressLine1: user?.address || "",
      city: user?.city || "",
      state: user?.state || "",
      zip: user?.zip || "",
      country: null,
    },
  });

  const onSubmit = async (data) => {
    try {
      const userUpdatePayload = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        address: data.addressLine1,
        city: data.city,
        state: data.state || "N/A",
        zip: data.zip,
        country: data.country.value,
      };
      await updateUser(userUpdatePayload);
      setSuccessMessage("Profile updated successfully!");
    } catch (error) {
      setSuccessMessage("Failed to update profile. Please try again.");
    }
  };

  useEffect(() => {
    if (!isHydrated) return;
    if (user) {
      reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        addressLine1: user.address || "",
        city: user.city || "",
        state: user.state || "",
        zip: user.zip || "",
        country: user.country ? getCountryOptionByCode(user.country) : null,
      });
    } else {
      router.push("/log-in");
    }
  }, [user, reset, router]);

  return (
    <div>
      <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#1d4c29" }}>
        Update Profile
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          {...register("firstName")}
          placeholder="First Name"
          style={{
            width: "100%",
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
            width: "100%",
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
            width: "100%",
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
          {...register("addressLine1")}
          placeholder="Address"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />
        <p style={{ color: "red", fontSize: "14px" }}>
          {errors.addressLine1?.message}
        </p>

        <input
          {...register("city")}
          placeholder="City"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />
        <p style={{ color: "red", fontSize: "14px" }}>{errors.city?.message}</p>

        <input
          {...register("state")}
          placeholder="State"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />
        <p style={{ color: "red", fontSize: "14px" }}>
          {errors.state?.message}
        </p>

        <input
          {...register("zip")}
          placeholder="ZIP Code"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />
        <p style={{ color: "red", fontSize: "14px" }}>{errors.zip?.message}</p>

        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={countryList().getData()}
              onChange={(value) => field.onChange(value)}
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
        <p style={{ color: "red", fontSize: "14px" }}>
          {errors.country?.message}
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
          Update Profile
        </button>
      </form>

      {successMessage && (
        <p style={{ marginTop: "15px", color: "green", fontSize: "14px" }}>
          {successMessage}
        </p>
      )}
    </div>
  );
}
