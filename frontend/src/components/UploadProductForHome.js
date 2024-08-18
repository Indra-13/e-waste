

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from "../helpers/uploadImage";
import DisplayImage from "./DisplayImage";
import { MdDelete } from "react-icons/md";
import SummaryApi from "../common";
import { useSnackbar } from "notistack";

const UploadProductForHome = ({ onClose, fetchData }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState({
    userName: "",
    userEmail: "",
    mobileNumber: "",
    productName: "",
    brandName: "",
    location: "", // Added location field
    productImage: [],
    description: "",
  });
  const [openFullScreen, setOpenFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [isEwaste, setIsEwaste] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadImageCloudinary = await uploadImage(file);
      setData((prev) => ({
        ...prev,
        productImage: [...prev.productImage, uploadImageCloudinary.url],
      }));

      // Check if the uploaded image is an e-product
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://127.0.0.1:8000/detect-ewaste/", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        if (result.isEwaste) {
          setIsEwaste(true);
          enqueueSnackbar(
            "This is an e-product. You can proceed with the upload.",
            {
              variant: "success",
            }
          );
        } else {
          setIsEwaste(false);
          enqueueSnackbar("This is not an e-product. Upload disabled.", {
            variant: "error",
          });
        }
      } catch (error) {
        console.error("Error detecting e-waste:", error);
        enqueueSnackbar("Error detecting e-waste. Please try again.", {
          variant: "error",
        });
      }
    }
  };

  const handleDeleteProductImage = (index) => {
    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);
    setData((prev) => ({ ...prev, productImage: newProductImage }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    if (isEwaste) {
      try {
        const response = await fetch(SummaryApi.uploadProductForHome.url, {
          method: SummaryApi.uploadProductForHome.method,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();
        if (responseData.success) {
          enqueueSnackbar(responseData?.message, { variant: "success" });
          onClose();
        } else if (responseData.error) {
          enqueueSnackbar(responseData?.message, { variant: "error" });
        }
      } catch (error) {
        enqueueSnackbar("Error uploading product. Please try again.", {
          variant: "error",
        });
      }
    } else {
      enqueueSnackbar(
        "Upload not allowed. The item is not classified as an e-product.",
        { variant: "error" }
      );
    }
    setUploading(false);
  };

  return (
    <div className="fixed w-full h-full bg-slate-200 bg-opacity-30 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-full max-w-xl h-full max-h-[80%] overflow-hidden">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">Upload Product</h2>
          <div
            className="w-fit ml-auto text-2xl hover:text-gray-400 cursor-pointer"
            onClick={onClose}
          >
            <IoMdClose />
          </div>
        </div>
        <form
          className="grid p-4 gap-3 overflow-y-scroll h-full pb-10"
          onSubmit={handleSubmit}
        >
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            id="userName"
            placeholder="Enter your name"
            name="userName"
            required
            value={data.userName}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
          />

          <label htmlFor="userEmail">User Email:</label>
          <input
            type="email"
            id="userEmail"
            placeholder="Enter your email"
            name="userEmail"
            required
            value={data.userEmail}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
          />

          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            placeholder="Enter your mobile number"
            name="mobileNumber"
            required
            value={data.mobileNumber}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
          />

          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            name="productName"
            required
            value={data.productName}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
          />

          <label htmlFor="brandName">Brand Name:</label>
          <input
            type="text"
            id="brandName"
            required
            placeholder="Enter brand name"
            value={data.brandName}
            name="brandName"
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
          />

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            name="location"
            required
            value={data.location}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
          />

          <label htmlFor="productImage">Product Image:</label>
          <div className="p-2 bg-slate-100 border rounded h-48 w-full flex justify-center items-center">
            <label htmlFor="uploadImage">
              <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                <span className="text-5xl cursor-pointer">
                  <FaCloudUploadAlt />
                </span>
                <p className="text-sm">Upload Product Image</p>
                <input
                  type="file"
                  required
                  id="uploadImage"
                  className="hidden"
                  onChange={handleUploadProduct}
                />
              </div>
            </label>
          </div>
              <p className="text-blue-600 text-xs">
                *Please upload product image
              </p>

          <div>
            {data?.productImage[0] ? (
              <div className="flex items-center gap-2">
                {data.productImage.map((el, index) => (
                  <div
                    className="w-20 h-20 overflow-hidden relative"
                    key={el + index}
                  >
                    <img
                      src={el}
                      alt={`Uploaded product image ${index + 1}`}
                      className="w-full h-full object-cover"
                      onClick={() => {
                        setFullScreenImage(el);
                        setOpenFullScreen(true);
                      }}
                    />

                    <span
                      className="absolute top-1 right-1 text-blue-400 rounded cursor-pointer"
                      onClick={() => handleDeleteProductImage(index)}
                    >
                      <MdDelete />
                    </span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <label htmlFor="description" className="mt-3">
            Description:
          </label>
          <textarea
            className="h-28 bg-slate-100 border resize-none p-1"
            placeholder="Enter product description"
            rows={3}
            name="description"
            onChange={handleOnChange}
          ></textarea>

          <button
            className={`bg-green-500 text-white text-lg font-medium my-2 p-2 rounded cursor-pointer ${
              uploading ? "bg-green-300 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
      {openFullScreen && (
        <DisplayImage
          image={fullScreenImage}
          handleClose={() => setOpenFullScreen(false)}
        />
      )}
    </div>
  );
};

export default UploadProductForHome;
