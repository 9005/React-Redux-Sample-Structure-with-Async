import axios from 'axios';

export default {
  getFormDetails: async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const result = await axios.get(url);
    return result.data;
  },
  submitFormData: async (requestBody) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    await axios.post(url, requestBody);
    return 'successfully added form data';
  }
};