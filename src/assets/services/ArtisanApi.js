import { apiClient } from "./config"; // Ensure apiClient is properly configured

// Register a new artisan
export const apiSignup = async (payload) => {
  return await apiClient.post("/users/register", payload); // Adjust payload as needed
};

// Login for artisans
export const apiLogin = async (payload) => {
  return await apiClient.post("/users/login", payload); // Adjust payload as needed
};

// Fetch services for the authenticated user
export const apiGetUserServices = async () => {
  return await apiClient.get("/users/me/services");
};

// Add a new service
export const apiAddService = async (payload) => {
  return await apiClient.post("/services", payload); // Include name, description, price, and category
};

// Update an existing service
export const apiUpdateService = async (serviceId, payload) => {
  return await apiClient.patch(`/services/${serviceId}`, payload); // Include fields to update
};

// Delete a service
export const apiDeleteService = async (serviceId) => {
  return await apiClient.delete(`/services/${serviceId}`);
};
