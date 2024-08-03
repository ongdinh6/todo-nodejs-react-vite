import axios from "axios";
import { useSnackbar } from "stores/contexts.tsx";

const axiosInstance = axios.create({
  baseURL: "",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("@@@@@@Axios Request error: ", error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response) {
      // Error response from the server
      const status = error.response.status;
      const message = error.response.data?.message || 'An error occurred';

      console.log("@@@@@Error Response Axios: ", error);
      // Dispatch an action or call a function to show Snackbar
      // For simplicity, we assume there's a global snackbar context
      if (status >= 400 && status <= 500) {
        // const { showSnackbar } = useSnackbar(); // Hook to show snackbar
        // showSnackbar({ message, severity: "error" });
      }
    }

    return Promise.reject(error as Error);
  },
);

export default axiosInstance;
