import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}/products`;

const ProductAPI = {
  async getAll() {
    const response = await axios.get(BASE_URL, {
      params: { t: Date.now() },
    });
    return response.data;
  },
};

export default ProductAPI;
