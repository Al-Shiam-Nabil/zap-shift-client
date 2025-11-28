import axios from "axios";
import React, { useEffect } from "react";
import useAuthHook from "./useAuthHook";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSequre = () => {
  const { user,logOutUser } = useAuthHook();
  const navigate=useNavigate()

  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((config) => {
      // Do something before request is sent
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });

    const responseInterceptor = instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error.status);
        if(error.status === 401 || error.status === 403){
logOutUser().then(()=>{
  navigate('/login')
})
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [user,logOutUser,navigate]);

  return instance;
};

export default useAxiosSequre;
