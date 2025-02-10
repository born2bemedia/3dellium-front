"use client";
import React from "react";
import styles from "./layout.module.scss";
import useAuthStore from "@/stores/authStore";
import AccountNav from "./components/AccountNav/AccountNav";
import AddToCartArrow2 from "@/icons/AddToCart/AddToCartArrow2";
import AddToCartArrow1 from "@/icons/AddToCart/AddToCartArrow1";

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuthStore();
  return (
    <section className={styles.dashboard}>
      <div className="_container">
        <div className={styles.top}>
          <h2>
            Welcome, <span>{user?.firstName}!</span>
          </h2>

          <button onClick={logout}>
            <div>
              <AddToCartArrow2 />
              <span>Log Out</span>
              <AddToCartArrow1 />
            </div>
          </button>
        </div>
        <div className={styles.body}>
          <AccountNav />
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
