import axios from "axios";
import { BASE_URL, BASE_URL_Local } from "./BASE_URL";
import { setupInterceptorsTo } from "../interceptor.js"

const API = setupInterceptorsTo(

    axios.create({
        baseURL: BASE_URL,


    }));
// console.log(localStorage.getItem("access_token"));

/*auth APIs*/

export const userSignup = (data) => API.post("/auth/register", data);
export const userLogin = (data) => API.post("/auth/login", data);
export const userLogout = (data) => API.post("/auth/logout", data);
export const refreshToken = (data) => API.post("/auth/refresh-tokens", data);


/*users*/

export const getUser = (data) => API.get(`/users/${data}`);
export const updateUser = (id, data) => API.patch(`/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/users/${id}`);


/*posts*/

export const addPost = (data) => API.post(`/posts`, data);
export const updatePost = (id, data) => API.patch(`/posts/${id}`, data);
export const getPostById = (id) => API.get(`/posts/${id}`);
export const getAllposts = () => API.get(`/posts`);
export const deletePost = () => API.get(`/posts`);
export const viewPost = (id) => API.get(`/posts/view/${id}`);
export const likePost = (id) => API.get(`/posts/like/${id}`);

/*subscription*/

export const purchase = (data) => API.post(`/subscriptions/pay`, data);
export const subscribe = (id) => API.get(`/subscriptions/subscribe?sessionId=${id}`);
export const getSubscription = (id) => API.get(`/subscriptions/user/${id}`);


/*jobs*/

export const addJob = (data) => API.post(`/jobs`, data);
export const getJobs = () => API.get(`/jobs`);

/*conversations*/

export const newConversation = (data) => API.post(`/conversations/init`, data);
export const getMessagesInConversation = (id) => API.get(`/conversations/messages/?conversationId=${id}`);
export const newMessage = (data) => API.post(`/conversations/messages`, data);
export const readMessage = (data) => API.post(`/conversations/messages/read`, data);

