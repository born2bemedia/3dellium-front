import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,

      registerUser: async (userData) => {
        try {
          console.log("Sending registration data:", userData);
          const response = await axios.post(`${cmsUrl}/api/users`, userData, {
            withCredentials: true,
          });

          console.log("Registration successful:", response.data);

          // Automatically log in the user after successful registration
          const loginResponse = await axios.post(
            `${cmsUrl}/api/users/login`,
            {
              email: userData.email,
              password: userData.password,
            },
            {
              withCredentials: true,
            }
          );

          set({
            user: loginResponse.data.user,
            token: loginResponse.data.token,
          });
          localStorage.setItem("token", loginResponse.data.token);

          return loginResponse.data;
        } catch (error) {
          throw new Error("Registration failed");
        }
      },

      login: async (email, password) => {
        const response = await axios.post(
          `${cmsUrl}/api/users/login`,
          { email, password },
          { withCredentials: true }
        );
        set({ user: response.data.user, token: response.data.token });
        localStorage.setItem("token", response.data.token);
      },

      logout: async () => {
        set({ user: null, token: null });
        localStorage.removeItem("token");
        console.log("Logged out locally.");
      },
      fetchUserByEmail: async (email) => {
        try {
          const { token } = get(); // Get the token from the store if available
          const response = await axios.get(
            `${cmsUrl}/api/users?where[email][equals]=${email}`,
            {
              headers: {
                Authorization: token ? `Bearer ${token}` : "",
              },
            }
          );

          if (response.data?.docs?.length > 0) {
            return response.data.docs[0]; // Return the first user matching the email
          }

          return null; // Return null if no user is found
        } catch (error) {
          console.error("Error fetching user by email:", error);
          throw new Error("Failed to fetch user by email");
        }
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
