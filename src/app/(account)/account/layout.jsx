"use client";
import React, { useEffect } from "react";
import styles from "./layout.module.scss";
import useAuthStore from "@/stores/authStore";
import AccountNav from "./components/AccountNav/AccountNav";
import AddToCartArrow2 from "@/icons/AddToCart/AddToCartArrow2";
import AddToCartArrow1 from "@/icons/AddToCart/AddToCartArrow1";
import NeedAssistance from "@/components/NeedAssistance/NeedAssistance";
import { useRouter } from "next/navigation";
import LogoutButtn from "@/icons/LogoutButtn";

const DashboardLayout = ({ children }) => {
  const { user, logout, isHydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isHydrated) return;
    if (!user) {
      router.push("/log-in");
    }
  }, [user, router]);

  return (
    <>
      <section className={styles.dashboard}>
        <div className="_container">
          <div className={styles.top}>
            <h2>
              Welcome, <span>{user?.firstName}!</span>
            </h2>

            <button onClick={logout}>
              <LogoutButtn />
            </button>
          </div>
          <div className={styles.body}>
            <AccountNav />
            <div>{children}</div>
          </div>
        </div>
      </section>
      <NeedAssistance />
    </>
  );
};

export default DashboardLayout;
