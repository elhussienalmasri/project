import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: "https://hussein-developer.herokuapp.com/api/"

})