import axios from "axios";

export const API = "http://localhost:1200";

export const deleteData = (endpoint) => {
  try {
    const response = axios.delete(API + endpoint);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
