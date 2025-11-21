import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuthHook from '../../Hooks/useAuthHook';
import useAxiosSequre from '../../Hooks/useAxiosSequre';
import { FaRegEdit, FaSearch } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const MyParcelsPage = () => {
const {user}=useAuthHook()
const sequreAxios=useAxiosSequre() 
    const {data}=useQuery({
        queryKey:['myParcel', user?.email],
        queryFn:async()=>{
            const result=await sequreAxios.get(`/parcels?email=${user?.email}`)
            return result
        }
    })

    const parcels=data?.data
console.log(parcels)
    return (
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>SL</th>
        <th>Name</th>
        <th>Cost</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
   {
    parcels?.map((parcel,index)=><tr key={parcel._id}>
        <td>{index+1}</td>
        <td>{parcel?.parcelName}</td>
        <td>{parcel?.cost}</td>
        <td>Blue</td>
        <td className='space-x-2'>
<button className="btn btn-square hover:btn-primary">
<FaSearch></FaSearch>
</button>

<button className="btn btn-square hover:btn-primary">
<FaRegEdit></FaRegEdit>
</button>

<button className="btn btn-square hover:btn-primary">
<RiDeleteBin6Line />

</button>

        </td>
      </tr>)
   }
      
     
    
    </tbody>
  </table>
</div>
    );
};

export default MyParcelsPage;