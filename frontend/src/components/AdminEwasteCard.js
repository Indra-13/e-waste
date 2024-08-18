import React from "react";
import { MdDelete } from "react-icons/md";

const AdminEwasteCard = ({ data, onDelete }) => {
  return (
    <div className="bg-white border rounded p-4 shadow-md w-80">
      <div className="relative">
        <h3 className="font-bold text-lg mb-2">
          {data.location.toUpperCase()}
        </h3>
        <span
          className="absolute top-2 right-2 text-red-500 cursor-pointer"
          onClick={() => onDelete(data._id)}
        >
          <MdDelete />
        </span>
      </div>
      <p className="mb-2 font-semibold">User Name: {data.userName}</p>
      <p className="mb-2 font-semibold">User Email: {data.userEmail}</p>
      <p className="mb-2 font-semibold">Mobile Number: {data.mobileNumber}</p>
      <p className="mb-2 font-semibold">Products {data.productName}</p>
      <p className="mb-2 font-semibold">Brands: {data.brandName}</p>
      <p className="mb-2 font-semibold">Location: {data.location}</p>
      <p className="mb-2 font-semibold">Description: {data.description}</p>
      <div className="flex flex-wrap gap-2">
        {data.productImage.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product image ${index + 1}`}
            className="w-20 h-20 object-cover border rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default AdminEwasteCard;
