/* eslint-disable @typescript-eslint/no-explicit-any */
import { STATUS_CODES } from "@/utils/constants";
import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  Method,
  ResponseType,
} from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 180000,
});

// common request instance
const request = async ({
  method,
  url,
  data,
  headers,
  baseURL,
  params,
  responseType,
}: {
  method: Method;
  url: string;
  data?: any;
  headers?: any;
  baseURL?: string;
  params?: any;
  responseType?: ResponseType;
}) => {
  try {
    const config: AxiosRequestConfig = {
      url,
      method,
      headers,
      baseURL,
      params,
      data,
      responseType,
    };

    const response = await instance.request(config);
    const payload = response.data || null;

    if (headers) {
      return {
        data: payload,
        headers: response.headers,
      };
    }

    return payload;
  } catch (error: any) {
    console.error("error from httpService: ", error);
    if (error.status === STATUS_CODES.INTERNAL_SERVER_ERROR) {
      window.location.href = "/error";
    }
    return {
      data: null,
      headers: null,
    }
  }
};

export const get = (url: string, params?: any, baseURL?: string, data?: any) =>
  request({ method: "get", url, params, baseURL, data });

export const post = (url: string, data: any, params?: any) =>
  request({ method: "post", url, data, params });

export const put = (url: string, data: any, params?: any) =>
  request({ method: "put", url, data, params });

export const patch = (url: string, data: any, params?: any) =>
  request({ method: "patch", url, data, params });

export const del = (url: string, data?: any) =>
  request({ method: "delete", url, data });

export const download = (url: string, params?: any) =>
  request({ method: "get", url, params, responseType: "blob" });
