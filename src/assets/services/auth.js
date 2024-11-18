const token = localStorage.getItem("Token");
if (token) {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} else {
  console.warn("Token not found. Make sure to log in.");
}
