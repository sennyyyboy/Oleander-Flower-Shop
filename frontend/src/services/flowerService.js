import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/flowers/';

export const getFlowers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createFlower = async (flower) => {
    await axios.post(API_URL, flower);
};

export const updateFlower = async (id, flower) => {
    await axios.put(`${API_URL}${id}`, flower);
};

export const deleteFlower = async (id) => {
    await axios.delete(`${API_URL}${id}`);
};