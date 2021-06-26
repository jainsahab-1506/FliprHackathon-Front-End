import axios from "axios";
import { SITE_URL, SERVER_URL } from "./requests";

axios.defaults.xsrfHeaderName = "X-CSRFToken";

var instance = axios.create({
  baseURL: SERVER_URL,
});

const authToken = sessionStorage.getItem("Token");
instance.defaults.headers.common["Authorization"] = authToken
  ? `Bearer ${authToken}`
  : "";

export default instance;
