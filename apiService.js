import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://tranzaxx.com/api",
  headers: {
    "Content-Type": "application/json",
    // Add other default headers here if needed
  },
});

export const getRequest = async (endpoint, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error(`GET ${endpoint} failed:`, error);
    throw error;
  }
};

export const postRequest = async (endpoint, data = {}) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(`POST ${endpoint} failed:`, error);
    throw error;
  }
};

// ALl GET Requests
export const getCategoryList = () => getRequest("/categories");
export const getHomeSections = () => getRequest("/homeSections");
export const getALLPackages = () => getRequest("/packages");
export const getALLCountries = () => getRequest("/countries");
export const getALLPosts = () => getRequest("/posts");
export const getCities = (countryCode) =>
  getRequest(`/countries/${countryCode}/cities`);

//ALL POSt Requests
export const createUser = (userData) => postRequest("/users", userData);
