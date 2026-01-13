import axios from "axios";

const AxiosConfig = axios.create({
  baseURL: "http://localhost:2000/",
  timeout: 10000,
});

export default AxiosConfig;
