import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSequre from "../../Hooks/useAxiosSequre";
import useAuthHook from "../../Hooks/useAuthHook";

const AddParcelPage = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const sequreAxios=useAxiosSequre()
  const {user}=useAuthHook()

  // const senderRegion = watch("senderRegion");

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const serviceCenters = useLoaderData();
  const allRegions = serviceCenters.map((r) => r.region);

  const regions = [...new Set(allRegions)];

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((d) => d.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleAddParcel = (data) => {
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const isDocument = data.parcelType === "document";

    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (data.parcelWeight === 0) {
        return;
      }
      if (data.parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
        console.log(cost);
      } else {
        if (isSameDistrict) {
          const extraCost = (data.parcelWeight - 3) * 40;
          cost = 110 + extraCost;
        } else {
          const extraCost = (data.parcelWeight - 3) * 40;
          cost = 110 + extraCost + 40;
        }
      }
    }

    Swal.fire({
      title: "Are you sure?",
      text: `You want to send a parcel for ${cost} BDT.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, accepted!",
    }).then((result) => {
      if (result.isConfirmed) {

        sequreAxios.post('/parcels',data).then(result=>{
          console.log(result.data)
        })


        Swal.fire({
          title: "Accpected",
          text: "Your parcel has been accpected",
          icon: "success",
        });
      }
    });

    console.log(cost);
    console.log(data);
  };

  return (
    <div className="bg-white p-5 my-10 rounded-2xl">
      <h2 className="text-3xl font-bold text-secondary">Add Parcel</h2>

      <h3 className="text-xl font-semibold text-secondary my-3">
        Enter Your Parcel Details :
      </h3>
      <form onSubmit={handleSubmit(handleAddParcel)}>
        {/* document */}
        <div className="my-3">
          <label className="label mr-10">
            <input
              type="radio"
              value="document"
              {...register("parcelType")}
              className="radio"
              defaultChecked
            />{" "}
            Document
          </label>

          <label className="label">
            <input
              type="radio"
              value="non-document"
              {...register("parcelType")}
              className="radio"
            />{" "}
            Non-Document
          </label>
        </div>

        {/* product name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <fieldset className="fieldset ">
            <label className="label">Parcel Name </label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg) </label>
            <input
              type="number"
              {...register("parcelWeight", {
                valueAsNumber: true,
                required: true,
              })}
              min={0}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender details */}
          <fieldset className="fieldset ">
            <h3 className="text-lg font-semibold text-secondary my-3">
              Sender Details
            </h3>
            {/* sender name */}
            <label className="label">Sender Name </label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full"
              placeholder="Sender Name"
              defaultValue={user?.displayName}
            />

            {/* sender email */}
            <label className="label">Sender Email </label>
            <input
              type="email"
              {...register("senderEmail")}
              className="input w-full"
              placeholder="Sender Email"
               defaultValue={user?.email}
            />

            {/* sender region */}
            <label className="label">Sender Region</label>
            <select
              {...register("senderRegion")}
              defaultValue="Pick your region"
              className="select"
            >
              <option disabled={true}>Pick your region</option>

              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>

            {/* sender district */}
            <label className="label">Sender District</label>
            <select
              {...register("senderDistrict")}
              defaultValue="Pick your district"
              className="select"
            >
              <option disabled={true}>Pick your district</option>

              {districtsByRegion(senderRegion).map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>

            {/* address */}
            <label className="label">Address </label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />

            {/* pickup instruction */}
            <label className="label">Pickup Instruction </label>
            <textarea
              className="textarea w-full resize-none"
              {...register("pickupInstruction")}
              placeholder="Pickup Instruction"
            ></textarea>
          </fieldset>

          {/* receiver details */}
          <fieldset className="fieldset ">
            <h3 className="text-lg font-semibold text-secondary my-3">
              Receiver Details
            </h3>
            {/* receiver name */}
            <label className="label">Receiver Name </label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            />

            {/* receiver email */}
            <label className="label">Receiver Email </label>
            <input
              type="email"
              {...register("reveiverEmail")}
              className="input w-full"
              placeholder="Receiver Email"
            />

            {/* receiver region */}
            <label className="label">Receiver Region</label>
            <select
              {...register("receiverRegion")}
              defaultValue="Pick your region"
              className="select"
            >
              <option disabled={true}>Pick your region</option>

              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>

            {/* receiver district */}
            <label className="label">Receiver District</label>
            <select
              {...register("receiverDistrict")}
              defaultValue="Pick your district"
              className="select"
            >
              <option disabled={true}>Pick your district</option>

              {districtsByRegion(receiverRegion).map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>

            {/* address */}
            <label className="label">Address </label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            />

            {/* receiver instruction */}
            <label className="label">Receiver Instruction </label>
            <textarea
              className="textarea w-full resize-none"
              {...register("receiverInstruction")}
              placeholder="Receiver Instruction"
            ></textarea>
          </fieldset>
        </div>
        <input
          className="btn btn-primary text-secondary"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddParcelPage;
