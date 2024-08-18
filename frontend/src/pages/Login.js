import React, { useContext, useState } from "react";
import loginIcons from "../assest/signinicon.jpg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { enqueueSnackbar } from "notistack";
import Context from "../context";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { fetchUserDetails } = useContext(Context);

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

    const dataResponse = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      enqueueSnackbar(dataApi.message, { variant: "success" });
      navigate("/");
      fetchUserDetails();
    } else if (dataApi.error) {
      enqueueSnackbar(dataApi.message, { variant: "error" });
    }
  };
  console.log("data login", data);
  return (
    <section id="login">
      <div className="mx-auto container p-10">
        <div className="bg-white p-6  w-full max-w-sm mx-auto ">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icon" />
          </div>

          <form className="pt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email:</label>
              <div className="bg-slate-100 p-2">
                <input
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
              <Link
                to={"/forget-password"}
                className="block w-fit ml-auto hover:underline hover:text-blue-500"
              >
                Forgot password ?
              </Link>
            </div>

            <button className=" bg-blue-400 hover:bg-blue-500  text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 ">
              Login
            </button>
          </form>
          <p className="my-5">
            Don't have account ?
            <Link
              to={"/sign-up"}
              className=" text-blue-400 hover:text-blue-500 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
