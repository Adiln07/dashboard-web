import AxiosConfig from "@/services/AxiosConfig";

export const productApi = {
  getAllProducts: async () => {
    try {
      const response = await AxiosConfig("/products");
      return response.data;
    } catch (error) {
      throw new Error("Failed Get API Products bro");
    }
  },
  getProductById: async (id: string) => {},
};
