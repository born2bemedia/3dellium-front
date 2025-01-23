"use client";
import useAuthStore from "@/stores/authStore";

export default function Home() {
  const { user, logout } = useAuthStore();

  return (
    <>
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
    </>
  );
}
