// import axios untuk permintaan HTTP
import axios from "axios";

export async function addData(currentTab, formData) {
  try {
    const response = await axios.post(`/api/${currentTab}/add`, formData);
    return response.data;
  } catch (error) {
    throw error; // Melemparkan kesalahan untuk penanganan lebih lanjut
  }
}

export async function getData(currentTab) {
  try {
    const response = await axios.get(`/api/${currentTab}/get`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateData(currentTab, formData) {
  try {
    const response = await axios.put(`/api/${currentTab}/update`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function login(formData) {
  try {
    const response = await axios.post(`/api/login`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
}
