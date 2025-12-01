import React from "react";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import { IoMdPersonAdd } from "react-icons/io";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ApproveRider = () => {
  const sequreAxios = useAxiosSequre();

  const {refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await sequreAxios.get("/riders");
      return res.data;
    },
  });

  const updateStatusFunc=(id,status,email)=>{
   const updateStatus={status: status,email}

    sequreAxios.patch(`/riders/${id}`,updateStatus).then(result=>{
        console.log(result.data)

        if(result.data?.modifiedCount){
            refetch()
                     Swal.fire({
             position: "top-end",
             icon: "success",
             title: `Rider ${status} successfully.`,
             showConfirmButton: false,
             timer: 2000
           }); 
        }
    })
  }

const handleApproved=(rider)=>{
 updateStatusFunc(rider?._id,"approved",rider?.email)
}

const handleRejected=(rider)=>{
 updateStatusFunc(rider?._id,"rejected",rider?.email)
}

  return (
    <div>
      <h2>Rider Approval List . ({riders.length})</h2>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Region</th>
              <th>District</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {/* {
    "_id": "6923722856e8d59dd5c23300",
    "name": "Al shiam Nabil",
    "email": "abc@code.com",
    "region": "Chattogram",
    "district": "Cumilla",
    "status": "pending",
    "createdAt": "2025-11-23T20:44:24.887Z"
} */}

            {riders.map((rider, index) => (
              <tr key={rider?._id}>
                <th>{index + 1}</th>
                <td>{rider?.name}</td>
                <td>{rider?.region}</td>
                <td>{rider?.district}</td>
                <td>{rider?.status}</td>
                <td className="space-x-3 whitespace-nowrap">
                    {/* approved */}
                  <button onClick={()=>(handleApproved(rider))} className="btn">
                    <IoMdPersonAdd></IoMdPersonAdd>
                  </button>

                  {/* reject */}
                  <button onClick={()=>handleRejected(rider)} className="btn">
                    <IoPersonRemoveSharp></IoPersonRemoveSharp>
                  </button>

                  {/* delete */}
                  <button className="btn">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRider;
