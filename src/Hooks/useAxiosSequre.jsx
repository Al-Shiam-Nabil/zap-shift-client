import axios from 'axios';
import React from 'react';

const instance = axios.create({
  baseURL: 'http://localhost:3000',

});

const useAxiosSequre = () => {
    return instance
};

export default useAxiosSequre;
