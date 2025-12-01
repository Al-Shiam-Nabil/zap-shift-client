import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import { MdAdminPanelSettings, MdRemoveModerator } from "react-icons/md";
import useAuthHook from "../../../Hooks/useAuthHook";
import Swal from "sweetalert2";

const UsersManagementPage = () => {
  const sequreAxios = useAxiosSequre();
  const {user}=useAuthHook()
  console.log(user)

  const {refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await sequreAxios.get("/users");
      return data?.data;
    },
  });

  const handleAddAdmin=(user)=>{
    const info={role:'admin'}
    sequreAxios.patch(`/users/${user?._id}`,info).then(data=>
    {
console.log(data.data)
        if(data?.data?.modifiedCount){
            refetch()
               Swal.fire({
                         position: "top-end",
                         icon: "success",
                         title: `You successfully set as admin ${user?.displayName}`,
                         showConfirmButton: false,
                         timer: 2000
                       }); 
        }
    }
        
    )
  }

  const handleRemoveAdmin=(user)=>{
     const info={role:'user'}
    sequreAxios.patch(`/users/${user?._id}`,info).then(data=>
    {
console.log(data.data)
        if(data?.data?.modifiedCount){
            refetch()
               Swal.fire({
                         position: "top-end",
                         icon: "success",
                         title: `You successfully removed as admin ${user?.displayName}`,
                         showConfirmButton: false,
                         timer: 2000
                       }); 
        }
    }
        
    )
  }

  console.log(users);

  //   {
  //     "_id": "692343a44492ed05ea2a7e16",
  //     "displayName": "biscuits",
  //     "email": "fiqa@gmail.com",
  //     "photoURL": "https://i.ibb.co/JjRh5gtw/20240507-121035.jpg",
  //     "role": "user",
  //     "createdAt": "2025-11-23T17:25:56.117Z"
  // }

  return (
    <div>
      <h2>All users</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Role</th>
              <th>Admin Action</th>
              <th>Other Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user?.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.displayName}</div>
                      <div className="text-sm opacity-50">{user?.email}</div>
                    </div>
                  </div>
                </td>
                <td>{user?.role}</td>
                <td>
                  {user?.role === "admin" ? (
                    <button onClick={()=>handleRemoveAdmin(user)}  className="btn text-xl bg-red-500">
                      <MdRemoveModerator></MdRemoveModerator>
                    </button>
                  ) : (
                    <button onClick={()=>handleAddAdmin(user)} className="btn text-xl bg-green-500">
                      <MdAdminPanelSettings />
                    </button>
                  )}
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagementPage;
