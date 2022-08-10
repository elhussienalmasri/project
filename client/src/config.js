import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: "http://hussein-developer.herokuapp.com/api/"

})