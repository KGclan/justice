import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://api.punkapi.com/v2/",
});