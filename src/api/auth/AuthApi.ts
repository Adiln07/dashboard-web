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

  authLogout: async () => {
    try {
      const response = await AxiosConfig.post(
        "logout",
        {},
        {
          withCredentials: true,
        },
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  getProfile: async () => {
    try {
      const response = await AxiosConfig.get("/profile", {
        withCredentials: true, // WAJIB
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
