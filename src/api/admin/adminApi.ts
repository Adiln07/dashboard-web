import AxiosConfig from "@/services/AxiosConfig";
import { register } from "module";

export const adminApi = {
  getAllUsersAdmin: async () => {
    try {
      const response = await AxiosConfig.get("/admin/users", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed Get API Users bro");
    }
  },
  registerUserByAdmin: async (body: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await AxiosConfig.post("/admin/users/register", body, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed Register User by Admin bro");
    }
  },
};
