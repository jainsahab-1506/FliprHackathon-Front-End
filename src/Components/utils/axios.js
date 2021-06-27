import axios from "axios";
import { SITE_URL, SERVER_URL } from "./requests";
import Session from "../../service/session.js";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

var instance = axios.create({
  baseURL: "https://flipr-new.herokuapp.com",
});

const authToken = Session.get("token");
instance.defaults.headers.common["Authorization"] = authToken
  ? `Bearer ${authToken}`
  : "";

export default instance;
