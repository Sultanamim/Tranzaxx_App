import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://tranzaxx.com/api",
});

// Function to dynamically set headers, including the token
const setHeaders = (token = null) => ({
  Authorization: token ? `Bearer ${token}` : undefined,
  "Content-Type": "application/json",
  Accept: "application/json",
  "Content-Language": "en",
  "X-AppApiToken": "Uk1DSFlVUVhIRXpHbWt6d2pIZjlPTG15akRPN2tJTUs=",
  "X-AppType": "docs",
});

// GET request function
export const getRequest = async (endpoint, params = {}, token = null) => {
  try {
    const headers = setHeaders(token);
    const response = await apiClient.get(endpoint, {
      params,
      headers,
    });
    return response.data;
  } catch (error) {
    console.error(`GET ${endpoint} failed:`, error);
    throw error;
  }
};

// POST request function
export const postRequest = async (endpoint, data = {}, token = null) => {
  try {
    const headers = setHeaders(token);
    const response = await apiClient.post(endpoint, data, { headers });
    return response.data;
  } catch (error) {
    console.error(`POST ${endpoint} failed:`, error);
    throw error;
  }
};

// PUT request function
export const putRequest = async (endpoint, data = {}, token = null) => {
  try {
    const headers = setHeaders(token);
    const response = await apiClient.put(endpoint, data, { headers });
    return response.data;
  } catch (error) {
    console.error(`PUT ${endpoint} failed:`, error);
    throw error;
  }
};

// DELETE request function
export const deleteRequest = async (endpoint, token = null) => {
  try {
    const headers = setHeaders(token);
    const response = await apiClient.delete(endpoint, { headers });
    return response.data;
  } catch (error) {
    console.error(`DELETE ${endpoint} failed:`, error);
    throw error;
  }
};

// ALl GET Requests
export const getCategoryList = () => getRequest("/categories");
export const getSubCategoryList = (parentId) =>
  getRequest(`/categories?parentId=${parentId}&embed=iure`);
export const getHomeSections = () => getRequest("/homeSections");
export const getALLPackages = () => getRequest("/packages");
export const getALLCountries = () => getRequest("/countries");
export const getALLPosts = () =>
  getRequest(
    "/posts?embed=user,category,postType,city,latestPayment,savedByLoggedUser,pictures,videos"
  );
export const getSinglePosts = (id) =>
  getRequest(
    `/posts/${id}?embed=user,category,postType,city,latestPayment,savedByLoggedUser,pictures,videos`
  );
export const getSinglePostsWithDetail = (id) =>
  getRequest(
    `/posts/${id}?embed=user,category,postType,city,latestPayment,savedByLoggedUser,pictures,videos&detailed=features`
  );
export const getCities = (countryCode) =>
  getRequest(
    `/countries/${countryCode}/cities?embed=country,subAdmin1,subAdmin2`
  );
export const getCanadaCities = () => getRequest(`/countries/CA/cities`);

export const getPrivacyPage = () => getRequest(`/pages/Privacy`);
export const getTermsPage = () => getRequest(`/pages/Terms`);
export const getAntiScamPage = () => getRequest(`/pages/Anti-scam`);
export const getSocialLinks = () => getRequest(`/settings/social_link`);
export const getSavedPost = (token) => getRequest(`/savedPosts`, {}, token);
export const getSavedSearches = (token) =>
  getRequest(`/savedSearches`, {}, token);
export const getListPayments = (token) =>
  getRequest(`/payments?embed=post,paymentMethod,package,currency`, {}, token);
export const getListThreads = (token) => getRequest(`/threads`, {}, token);
export const getFilteredThreads = (filter, token) =>
  getRequest(`/threads?filter=${filter}`, {}, token);
export const getSingleThread = (id, token) =>
  getRequest(`threads/${id}/messages`, {}, token);

//ALL POSt Requests
export const createUser = (userData) => postRequest("/users", userData);
export const sendContact = (data) => postRequest("/contact", data);
export const reportPost = (id, data) =>
  postRequest(`/posts/${id}/report`, data);
export const sendMessage = (data, token) =>
  postRequest(`/threads`, data, token);

export const bulkMessage = (ids, type, token) =>
  postRequest(`/threads/bulkUpdate/${ids}?type=${type}`, {}, token);

// PUT API requests
export const updateMessage = (id, data, token) =>
  putRequest(`/threads/${id}`, data, token);

//Delete API Requests
export const deleteSavePost = (postId, token) =>
  deleteRequest(`/savedPosts/${postId}`, token);

export const deleteMessage = (id, token) =>
  deleteRequest(`/threads/${id}`, token);
