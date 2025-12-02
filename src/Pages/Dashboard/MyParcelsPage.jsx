import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuthHook from "../../Hooks/useAuthHook";
import useAxiosSequre from "../../Hooks/useAxiosSequre";
import { FaRegEdit, FaSearch } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcelsPage = () => {
  const { user } = useAuthHook();
  const sequreAxios = useAxiosSequre();
  const { data, refetch } = useQuery({
    queryKey: ["myParcel", user?.email],
    queryFn: async () => {
      const result = await sequreAxios.get(`/parcels?email=${user?.email}`);
      return result;
    },
  });

  const parcels = data?.data;
  console.log(parcels);

  const handledDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        sequreAxios.delete(`/parcels/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount === 1) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Payment</th>
            <th>Delivery Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parcels?.map((parcel, index) => (
            <tr key={parcel._id}>
              <td>{index + 1}</td>
              <td>{parcel?.parcelName}</td>
              <td>{parcel?.cost}</td>

              <td>
                {parcel?.paymentStatus === "paid" ? (
                  <span className="text-green-500">Paid</span>
                ) : (
                  <Link
                    to={`/dashboard/payment/${parcel?._id}`}
                    className="btn btn-primary text-secondary btn-sm"
                  >
                    Pay
                  </Link>
                )}
              </td>

              <td>{parcel?.deliveryStatus}</td>
              <td className="space-x-2">
                {/* view */}
                <button className="btn btn-square hover:btn-primary">
                  <FaSearch></FaSearch>
                </button>

                {/* edit */}
                <button className="btn btn-square hover:btn-primary">
                  <FaRegEdit></FaRegEdit>
                </button>

                {/* delete */}
                <button
                  onClick={() => handledDelete(parcel?._id)}
                  className="btn btn-square hover:btn-primary"
                >
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyParcelsPage;
