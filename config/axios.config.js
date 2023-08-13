import axios from "axios";

const DEV = process.env.NODE_ENV !== "production";

const api = axios.create({
  baseURL: DEV ? `${process.env.LOCAL_ADDRESS}` : `${process.env.SITE_ADDRESS}`,
  timeout: 10000,
});

export default api;
