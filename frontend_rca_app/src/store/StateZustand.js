import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => {
  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
  });

  // const token = localStorage.getItem("token");
  // if (token) {
  //   api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // }

  return {
    storie: "",
    currentUser: "",
    offerProfiles: [],
    offerDetails: [],
    profileDetails: {},
    isLoading: false, // Add isLoading state

    getCurrentUser: async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await api.get(`/user`, { headers });
        const data = response.data;
        set({ currentUser: data });
      } catch (error) {
        console.error("Error fetching posts:", error.message);
        throw error; // Rethrow the error for handling in calling code
      }
    },
    getOfferProfiles: async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await api.get(`/offer/profile`, { headers });
        const data = response.data;
        set({ offerProfiles: data.profile });
      } catch (error) {
        console.error("Error fetching posts:", error.message);
        throw error; // Rethrow the error for handling in calling code
      }
    },
    getofferDetails: async (profileId) => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        set({ isLoading: true }); // Set isLoading to true when fetching
        const response = await api.get(`/offer/profile/offer/${profileId}`, {
          headers,
        });
        const data = response.data;
        console.log(data);
        set({ offerDetails: data.offer, profileDetails: data });
      } catch (error) {
        console.error("Error fetching posts:", error.message);
        throw error; // Rethrow the error for handling in calling code
      } finally {
        set({ isLoading: false }); // Set isLoading to false when done
      }
    },

    logoutUser: async (navigate, token) => {
      try {
        localStorage.removeItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await api.post("/logout", { headers }); // Capture the response here

        if (token) {
          console.log("a");
        }
        console.log("b");

        // You can now access the response if needed
        console.log("Logout response:", response.data);

        // Redirect to a specific route (e.g., the login page)
        navigate("/login"); // Assuming you have passed the "navigate" function as a parameter
      } catch (error) {
        console.error("Error fetching posts:", error.message);
        throw error; // Rethrow the error for handling in calling code
      }
    },
  };
});
export default useStore;
