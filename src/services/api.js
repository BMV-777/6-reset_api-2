import axios from 'axios';

axios.defaults.baseURL = 'https://63a5bdb7318b23efa79c4cd8.mockapi.io';

export const addMaterial = async (values) => {
  const response = await axios.post('/materials', values);
  return response.data;
};

export const getMaterials = async () => {
  const response = await axios.get('/materials');
  return response.data;
};
