import axios from "axios";

export const api = axios.create({
   baseURL: "https://blog-fake-api.onrender.com",
   timeout: 8 * 1000,
});

const token = localStorage.getItem("@TOKEN");
