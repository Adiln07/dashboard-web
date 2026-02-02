import AxiosConfig from "@/services/AxiosConfig";

export const AuthApi = {
  authLogin: async (body: any) => {
    try {
      const response = await AxiosConfig.post("/login", body, {
        withCredentials: true,
      });

      return response.data;
    } catch (err) {
      throw err;
    }
  },
};
