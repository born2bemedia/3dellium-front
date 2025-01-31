"use client";
import React from "react";
import Link from "next/link";

const Thankyou = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            marginBottom: "15px",
            color: "#1d4c29",
          }}
        >
          Thank you for your order!
        </h1>

        <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
          Your order has been successfully placed. We appreciate your business!
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            backgroundColor: "#1d4c29",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#000")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#1d4c29")}
        >
          Go home
        </Link>
      </div>
    </section>
  );
};

export default Thankyou;
