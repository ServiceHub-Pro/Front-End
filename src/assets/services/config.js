import axios from "axios";

// Load the base URL from environment variables
const baseUrl = import.meta.env.VITE_BASE_URL || "https://servicehub-api.onrender.com"; // Fallback to your API base URL

// Retrieve the token from localStorage
const token = localStorage.getItem("Token");

// Set the default Authorization header if the token exists
if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} else {
    console.warn("No authentication token found. Ensure the user is logged in.");
}

// Create an instance of axios with the base URL
export const apiClient = axios.create({
    baseURL: baseUrl,
});

// Log the base URL for debugging purposes
console.log("API Base URL:", baseUrl);
