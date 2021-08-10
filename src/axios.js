import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-a1ee6/us-central1/api", // the API {the cloud function} URL
});

export default instance;
