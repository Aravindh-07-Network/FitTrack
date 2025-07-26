// src/api/index.js

import axios from "axios";

// 👇 Create axios instance that points to your local server
const API = axios.create({
  baseURL: "http://localhost:8080/api", 
});

// ✅ Always use API instance for requests
export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);
export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
