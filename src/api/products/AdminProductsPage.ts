import AxiosConfig from "@/services/AxiosConfig";
// import { Axios } from "axios";

export const productApi = {
  uploadFile: async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await AxiosConfig.post("/uploadFile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed Upload File");
    }
  },
};
