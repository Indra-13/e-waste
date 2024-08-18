import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import SummaryApi from "../common";
import { enqueueSnackbar } from "notistack";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const UploadTraders = ({ onClose, fetchData }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    TraderName: "",
    TraderMobileNumber:"",
    Location:"",
    Email:"",
    Password:"",
    
  });


  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(SummaryApi.uploadTraders.url, {
      method: SummaryApi.uploadTraders.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (responseData.success) {
      enqueueSnackbar(responseData.message, { variant: "success" });
      onClose();
      fetchData();
    } else if (responseData.error) {
      enqueueSnackbar(responseData.message, { variant: "error" });
    }
  };

  return (
    <div className="fixed w-full  h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-bold text-lg">Upload Product</h2>
          <div
            className="w-fit ml-auto text-2xl hover:text-blue-600 cursor-pointer"
            onClick={onClose}
          >
            <CgClose />
          </div>
        </div>

        <form
          className="grid p-4 gap-2 overflow-y-scroll h-full pb-5"
          onSubmit={handleSubmit}
        >
          <label htmlFor="TraderName">Trader Name :</label>
          <input
            type="text"
            id="TraderName"
            placeholder="enter TraderName"
            name="TraderName"
            value={data.TraderName}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />
          <label htmlFor="TraderMobileNumber">Trader MobileNumber :</label>
          <input
            type="text"
            id="TraderMobileNumber"
            placeholder="enter TraderMobileNumber"
            name="TraderMobileNumber"
            value={data.TraderMobileNumber}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />
          <label htmlFor="Location">Location :</label>
          <input
            type="text"
            id="LocationName"
            placeholder="enter Location"
            name="Location"
            value={data.Location}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />
          <label htmlFor="Email">Email :</label>
          <input
            type="text"
            id="Email"
            placeholder="enter Email"
            name="Email"
            value={data.Email}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />
          <label>Password:</label>
          <div className="bg-slate-100 p-2 flex">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="enter password"
              name="Password" // Changed from 'password' to 'Password'
              onChange={handleOnChange}
              value={data.Password}
              className="w-full h-full outline-none bg-transparent"
            />
            <div
              className="cursor-pointer text-xl"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <span>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
            </div>
          </div>

          <button className="px-3 py-2 bg-blue-400 text-white mb-10 hover:bg-blue-600">
            Upload Trader
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadTraders;
