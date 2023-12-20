import axios  from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://fooddelwappbyshivam.herokuapp.com/api/"
})