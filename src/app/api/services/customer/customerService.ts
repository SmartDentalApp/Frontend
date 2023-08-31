import axiosInstance from "../../axiosClient";
import { ICustomer } from "./types";

const baseURL = "/customer"

export const createCustomer = async (customerData: ICustomer) => {
    const response = await axiosInstance.post(baseURL, customerData);
    return response.data;
  };
  