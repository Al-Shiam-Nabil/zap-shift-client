import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAxiosSequre from "../../Hooks/useAxiosSequre";
import Swal from "sweetalert2";

const BeARider = () => {
  const {
    register,
    handleSubmit,
 control,
    formState: { errors },
  } = useForm();

  const sequreAxios=useAxiosSequre()

  const serviceCenters = useLoaderData();

  const allRegions = serviceCenters.map((r) => r.region);
  const regions = [...new Set(allRegions)];
//   const region = watch("region");

  const region=useWatch({control,name:'region'})

  const handleDistricts = (e) => {
    const filterDistricts = serviceCenters.filter((d) => d.region === e);
    const districts = filterDistricts.map((d) => d.district);

    return districts;
  };

  const handleRiderSubmit = (data) => {
    sequreAxios.post('/riders',data).then(res=>{
                    console.log(res.data.message)
                    Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${res.data.message}`,
  showConfirmButton: false,
  timer: 2000
});

        if(res.data.insertedId){
            console.log(res.data)
                      Swal.fire({
  position: "top-end",
  icon: "success",
  title: 'successfully applied',
  showConfirmButton: false,
  timer: 2000
});
        }
    })
  };

  return (
    <div className="bg-white p-5 my-5 rounded-2xl">
      <h3 className="text-2xl text-secondary font-bold">Be A Rider</h3>

      <div>
        <form
          onSubmit={handleSubmit(handleRiderSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* left */}
          <div>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                {...register("name")}
                className="input w-full"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input w-full"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">error</p>
              )}
            </fieldset>
          </div>

          {/* right */}
          <div>
            <fieldset className="fieldset">
              <label className="label">Your Region</label>

              <select
                {...register("region")}
                defaultValue="Select your region"
                className="select"
              >
                <option disabled={true}>Select your region</option>

                {regions.map((region, index) => (
                  <option key={index}>{region}</option>
                ))}
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <label className="label">Your District</label>
              <select {...register('district')} defaultValue="Select your district" className="select">
                <option disabled={true}>Select your district</option>
                {handleDistricts(region).map((district, index) => (
                  <option key={index}>{district}</option>
                ))}
              </select>
            </fieldset>
          </div>
          <button className="btn btn-primary text-secondary mt-4">
           Apply as a rider
          </button>
        </form>
      </div>
    </div>
  );
};

export default BeARider;
