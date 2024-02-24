import axios from "axios";

export default axios.create({
  baseURL: `http://${process.env.REACT_APP_API_URL}/api`,
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': '*'
  }
});