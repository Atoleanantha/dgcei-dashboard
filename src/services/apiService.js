import axios from "axios";


const baseURL = process.env.REACT_APP_API_BASE_URL;


export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${baseURL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const postData = async (endpoint, data, config = {}) => {
    try {
      const response = await axios.post(`${baseURL}${endpoint}`, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  

export const deleteData = async (endpoint) => {
  try {
    const response = await axios.delete(`${baseURL}${endpoint}`);
    console.log("delete URL:",baseURL+endpoint);
    
    return response.data;
  } catch (error) {
    console.error("Delete error:", error);
    throw error;
  }
};
export const updateData = async (endpoint) => {
  try {
    const response = await axios.patch(`${baseURL}${endpoint}`);
    console.log("update URL:",baseURL+endpoint);
    
    return response.data;
  } catch (error) {
    console.error("update error:", error);
    throw error;
  }
};
