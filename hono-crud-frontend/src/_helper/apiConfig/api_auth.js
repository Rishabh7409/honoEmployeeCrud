import axios from "axios";
import { URL_CONFIG } from "../../_constant/config/url_config";

const API_AUTH = axios.create({
    baseURL: URL_CONFIG.DEV_URL,
});

API_AUTH.interceptors.request.use(function (request) {
    return request;
});

API_AUTH.interceptors.response.use((response) => {
    return response;
});

API_AUTH.interceptors.response.use(undefined, (error) => {
    return Promise.reject(error);
});

export default API_AUTH;
