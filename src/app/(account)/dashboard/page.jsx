"use client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuthStore from "@/stores/authStore";
import { useEffect, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL; // e.g., "https://your-cms.com"

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

// This async function fetches orders for a given user by calling the external API.
// Helper function to fetch orders
async function getOrders(userId, token, userEmail) {
  try {
    const url = `${API_URL}/api/orders?where[user][equals]=${userId}`;
    console.log(url);
    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}

export default function DashboardPage() {
  const { user, logout, updateUser, token, isHydrated } = useAuthStore();
  const router = useRouter();

  // Orders state
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [ordersError, setOrdersError] = useState("");

  // Profile update success/error message state
  const [successMessage, setSuccessMessage] = useState("");

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
      country: user?.country || "",
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

  // Reset form with user data; if no user, redirect to login
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
        country: user.country || "",
      });
    } else {
      router.push("/log-in");
    }
  }, [user, reset, router]);

  // Fetch orders using the external API once the user is available.
  useEffect(() => {
    if (user) {
      setLoadingOrders(true);
      const userId = user._id || user.id;
      const userEmail = user.email;
      getOrders(userId, token, userEmail)
        .then((ordersData) => {
          setOrders(ordersData);
          setLoadingOrders(false);
        })
        .catch((error) => {
          setOrdersError("Failed to load orders");
          setLoadingOrders(false);
        });
    }
  }, [user]);

  const thStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2",
    textAlign: "left",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  return (
    <div>
      <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#1d4c29" }}>
        Your Orders
      </h3>
      {loadingOrders ? (
        <p>Loading orders...</p>
      ) : ordersError ? (
        <p style={{ color: "red" }}>{ordersError}</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div style={{ overflowX: "auto", marginBottom: "20px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>Order Number</th>
                <th style={thStyle}>Total</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Download</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id || order.orderNumber}>
                  <td style={tdStyle}>{order.orderNumber}</td>
                  <td style={tdStyle}>${order.total.toFixed(2)}</td>
                  <td style={tdStyle}>{order.status}</td>
                  <td style={tdStyle}>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td style={tdStyle}>
                    {order.items.map((item) =>
                      item.product.files?.length > 0 ? (
                        item.product.files.map((file, index) => (
                          <div key={index}>
                            <a
                              href={`${API_URL}${file.file.url}`}
                              download
                              style={{
                                color: "#1d4c29",
                                textDecoration: "none",
                                fontWeight: "bold",
                              }}
                            >
                              {file.file.filename}
                            </a>
                          </div>
                        ))
                      ) : (
                        <></>
                      )
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
