import React from "react";

import serviceImage from "../../../assets/service.png";

const OurServices = () => {
  return (
    <div className="bg-secondary rounded-2xl p-10  my-20 text-center">
      <h2 className="text-white font-bold text-2xl">Our Services</h2>
      <p className="text-base-200 max-w-3xl mx-auto mt-3 mb-7">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
        <div className="bg-white p-5 rounded-xl hover:bg-primary transition-colors duration-500 space-y-2">
          <div className="flex justify-center">
            <img src={serviceImage} alt="" className="" />
          </div>
          <h3 className="text-secondary font-semibold text-xl">
            Express & Standard Delivery
          </h3>
          <p className="text-base-300 ">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl hover:bg-primary transition-colors duration-500 space-y-2">
          <div className="flex justify-center">
            <img src={serviceImage} alt="" className="" />
          </div>
          <h3 className="text-secondary font-semibold text-xl">
            Express & Standard Delivery
          </h3>
          <p className="text-base-300 ">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl hover:bg-primary transition-colors duration-500 space-y-2">
          <div className="flex justify-center">
            <img src={serviceImage} alt="" className="" />
          </div>
          <h3 className="text-secondary font-semibold text-xl">
            Express & Standard Delivery
          </h3>
          <p className="text-base-300 ">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl hover:bg-primary transition-colors duration-500 space-y-2">
          <div className="flex justify-center">
            <img src={serviceImage} alt="" className="" />
          </div>
          <h3 className="text-secondary font-semibold text-xl">
            Express & Standard Delivery
          </h3>
          <p className="text-base-300 ">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl hover:bg-primary transition-colors duration-500 space-y-2">
          <div className="flex justify-center">
            <img src={serviceImage} alt="" className="" />
          </div>
          <h3 className="text-secondary font-semibold text-xl">
            Express & Standard Delivery
          </h3>
          <p className="text-base-300 ">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl hover:bg-primary transition-colors duration-500 space-y-2">
          <div className="flex justify-center">
            <img src={serviceImage} alt="" className="" />
          </div>
          <h3 className="text-secondary font-semibold text-xl">
            Express & Standard Delivery
          </h3>
          <p className="text-base-300 ">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
