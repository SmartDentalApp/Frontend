import axiosInstance from "../../axiosClient";
import { ICredentials, ILoginResponse } from "./types";

const baseURL = "/auth"

export const login = async (credentials: ICredentials) => {
    // Use axiosInstance to make API call
    const response = await axiosInstance.post<ILoginResponse>(`${baseURL}/login`, credentials);
    return response.data;
  };
  