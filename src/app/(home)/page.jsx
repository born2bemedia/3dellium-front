"use client";
import styles from "./page.module.scss";
import useAuthStore from "@/stores/authStore";

export default function Home() {
  const { user, logout } = useAuthStore();

  return (
    <>
      <div className={styles.page}>
        <p>Page</p>
        <h1>Title</h1>
        {user ? (
          <div>
            <h3>User Details:</h3>
            <p>Email: {user.email}</p>
            <p>Name: {user.firstName}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <p>No user logged in</p>
        )}
      </div>
    </>
  );
}
