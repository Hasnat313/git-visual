import axios from "axios";
import { BASE_URL } from "./BASE_URL";

const API = axios.create({
    baseURL: BASE_URL,

});

export const userSignup = (data) => API.post("/auth/register", data);
export const userLogin = (data) => API.post("/auth/login", data);