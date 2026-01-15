// import axios from "axios";

// const AxiosConfig = axios.create({
//   baseURL: "http://localhost:2000/",
//   timeout: 10000,
// });

// export default AxiosConfig;

import axios from "axios";

const AxiosConfig = axios.create({
  baseURL:
    typeof window !== "undefined"
      ? `http://${window.location.hostname}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`
      : "",
});

export default AxiosConfig;

// import axios from "axios";

// let AxiosConfig = axios.create({
//   baseURL: "http://localhost:2000", // fallback
// });

// export const initBackendUrl = async () => {
//   try {
//     const res = await fetch("/api/backend-url");
//     const data = await res.json();

//     AxiosConfig = axios.create({
//       baseURL: data.backendUrl,
//     });

//     console.log("Backend connected to:", data.backendUrl);
//   } catch (err) {
//     console.error("Failed to load backend URL", err);
//   }
// };

// export default AxiosConfig;
// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// });

// export default api;
