import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewsCard = ({ review }) => {
  const { userName, review: testomonials, user_photoURL, user_email } = review;
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 max-w-md border border-gray-100">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-teal-300 text-3xl mb-4" />

      {/* Description */}
      <p className="text-secondary leading-relaxed">{testomonials}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-5"></div>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        {/* Profile Circle */}
        <img
          src={user_photoURL}
          alt=""
          className="rounded-full w-12 h-12 object-cover"
        />

        {/* Name & Role */}
        <div>
          <h3 className="font-semibold text-[#004F4A]">{userName}</h3>
          <p className="text-gray-500 text-sm">{user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
