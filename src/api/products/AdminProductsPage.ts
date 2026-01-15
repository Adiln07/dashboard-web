import AxiosConfig from "@/services/AxiosConfig";
import { Axios } from "axios";

export const productApi = {
  getAllProducts: async () => {
    try {
      const response = await AxiosConfig.get("/products");
      return response.data;
    } catch (error) {
      throw new Error("Failed Get API Products bro");
    }
  },
  getProductById: async (id: string) => {
    try {
      const response = await AxiosConfig.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed Get API Product BY ID BRO");
    }
  },
  addProduct: async (body: any) => {
    try {
      const response = await AxiosConfig.post("/products", body);
      return response.data;
    } catch (error) {
      throw new Error("Failed Post API Product ");
    }
  },
};
