import axios from "axios";

export const endpoints = {
    'categories': '/categories/',
}

export default axios.create({
    baseURL: "https://thanhduong.pythonanywhere.com"
});