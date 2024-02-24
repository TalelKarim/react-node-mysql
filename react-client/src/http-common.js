import axios from "axios";

const apiInstance = axios.create({
  baseURL: `http://${process.env.REACT_APP_API_URL}/api`,
  headers: {
    "Content-type": "application/json",
  }
});

// Add an interceptor to include custom headers for every request
apiInstance.interceptors.request.use((config) => {
  config.headers["Access-Control-Allow-Origin"] = "*";
  config.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";
  return config;
});

export default apiInstance;
