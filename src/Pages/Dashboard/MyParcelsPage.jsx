import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuthHook from '../../Hooks/useAuthHook';
import useAxiosSequre from '../../Hooks/useAxiosSequre';

const MyParcelsPage = () => {
const {user}=useAuthHook()
const sequreAxios=useAxiosSequre() 
    const {data}=useQuery({
        queryKey:['myParcel', user?.email],
        queryFn:async()=>{
            const result=sequreAxios.get(`/parcels?email=${user?.email}`)
            return result
        }
    })

    console.log(data?.data)

    return (
        <div>
            my parcels page
        </div>
    );
};

export default MyParcelsPage;