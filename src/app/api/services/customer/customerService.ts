import { AxiosResponse } from "axios";
import axiosInstance from "../../axiosClient";
import { ICustomerPostRequestModel, ICustomersGetResponseModel } from "./types";

const baseURL = "/customer";

export const createCustomer = async (customerData: ICustomerPostRequestModel) => {
  const response = await axiosInstance.post(baseURL, customerData);
  return response.data;
};

export const getCustomers = async () => {
  const config = {
    params: {
      page: 1,
      pageSize: 999999
    }
  }
  const response: AxiosResponse<ICustomersGetResponseModel[]> = await axiosInstance.get(baseURL, config);
  return response;
};
