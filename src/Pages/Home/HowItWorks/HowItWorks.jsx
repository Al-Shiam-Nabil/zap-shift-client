import React from "react";
import bookingImage from "../../../assets/bookingIcon.png";

const HowItWorks = () => {
  return (
    <div>
      <h2 className="text-secondary font-bold text-2xl mb-5">How it Works</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-xl space-y-1">
          <img src={bookingImage} alt="" />
          <h3 className="text-secondary font-semibold text-xl">
            Booking Pick & Drop
          </h3>
          <p className="text-base-300">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>


  <div className="bg-white p-5 rounded-xl space-y-1">
          <img src={bookingImage} alt="" />
          <h3 className="text-secondary font-semibold text-xl">
            Booking Pick & Drop
          </h3>
          <p className="text-base-300">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

          <div className="bg-white p-5 rounded-xl space-y-1">
          <img src={bookingImage} alt="" />
          <h3 className="text-secondary font-semibold text-xl">
            Booking Pick & Drop
          </h3>
          <p className="text-base-300">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

          <div className="bg-white p-5 rounded-xl space-y-1">
          <img src={bookingImage} alt="" />
          <h3 className="text-secondary font-semibold text-xl">
            Booking Pick & Drop
          </h3>
          <p className="text-base-300">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
