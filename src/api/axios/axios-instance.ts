import axios, {AxiosInstance} from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "",
  timeout: 10000, // 요청 타임아웃 10000ms
});


