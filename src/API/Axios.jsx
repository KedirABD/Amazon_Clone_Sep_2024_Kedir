import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://amazon-backend-kedir-sep-2024.onrender.com/",
});
export { axiosInstance };

// http://127.0.0.1:5001/clone-kedir-sep24-evanga/us-central1/api
