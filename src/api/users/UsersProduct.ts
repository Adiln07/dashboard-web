import AxiosConfig from "@/services/AxiosConfig";

export const userProductApi = {
  getAllProducts: async () => {
    try {
      const response = await AxiosConfig.get("/products", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed Get API Products bro");
    }
  },

  getProductById: async (id: string) => {
    try {
      const response = await AxiosConfig.get(`/products/${id}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed Get API Product By ID bro");
    }
  },

  addProduct: async (body: any) => {
    try {
      const response = await AxiosConfig.post("/products", body, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed Post API Product ");
    }
  },

  editProductById: async (id: string, body: any) => {
    try {
      const response = await AxiosConfig.patch(`/products/${id}`, body, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {}
    throw new Error("Failed Patch API Product By ID");
  },
};
