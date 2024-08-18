import React, { useState } from "react";
import loginIcons from "../assest/signinicon.jpg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import imageTobase64 from "../helpers/imageTobase64";
import SummaryApi from "../common";
import { enqueueSnackbar } from "notistack";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file);

    setData((prev) => {
      return {
        ...prev,
        profilePic: imagePic,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(SummaryApi.signUP.url, {
        method: SummaryApi.signUP.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();
      if (dataApi.success) {
        enqueueSnackbar(dataApi.message, { variant: "success" });
        navigate("/Login");
      } else if (dataApi.error) {
        enqueueSnackbar(dataApi.message, { variant: "error" });
      }
    } else {
      enqueueSnackbar("Please Correct Password And Confirm Password", {
        variant: "error",
      });
    }
  };

  return (
    <section id="signup">
      <div className="mx-auto container p-3">
        <div className="bg-white p-6  w-full max-w-sm mx-auto ">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || loginIcons} alt="login icon" />
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-85 cursor-pointer bg-slate-200 pb-3 pt-1 text-center absolute bottom-0 w-full">
                  Upload Profile
                </div>
                <input
                  type="file"
                  className="hidden display-none"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>

          <form className="pt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name:</label>
              <div className="bg-slate-100 p-2">
                <input
                  required
                  type="text"
                  placeholder="enter name"
                  value={data.name}
                  onChange={handleOnChange}
                  name="name"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Email:</label>
              <div className="bg-slate-100 p-2">
                <input
                  required
                  type="email"
                  placeholder="enter email"
                  value={data.email}
                  onChange={handleOnChange}
                  name="email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  name="password"
                  onChange={handleOnChange}
                  value={data.password}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                </div>
              </div>
            </div>
            <div className="grid">
              <label>Confirm Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="enter confirm password"
                  name="confirmPassword"
                  onChange={handleOnChange}
                  value={data.confirmPassword}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <span>
                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
            </div>
            <button className=" bg-blue-400 hover:bg-blue-500  text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 ">
              SignUp
            </button>
          </form>
          <p className="my-5">
            Already have account ?
            <Link
              to={"/login"}
              className=" text-blue-400 hover:text-blue-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
