import React from "react";
import styles from "./AccountNav.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AccountNav = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <Link
        href="/dashboard"
        className={pathname === "/dashboard" ? styles.current : ""}
      >
        Your orders
      </Link>
      <Link
        href="/dashboard/your-data"
        className={pathname === "/dashboard/your-data" ? styles.current : ""}
      >
        Your Data
      </Link>
    </nav>
  );
};

export default AccountNav;
