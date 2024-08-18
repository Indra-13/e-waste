import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { HiUserCircle } from "react-icons/hi2";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ROLE from "../common/role";

export const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  // If logged in as admin only it shows the admin panel
  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/");
    }
  }, [user, navigate]); // Include `navigate` in the dependency array

  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden">
      <aside className="bg-white min-h-full w-full  max-w-60 customShadow">
        <div className="h-35 bg- bg-blue-400 flex justify-center items-center flex-col">
          <div className="text-5xl cursor-pointer reative flex justify-center">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                className="w-20 h-20 rounded-full mt-2 "
                alt={user?.name}
              />
            ) : (
              <HiUserCircle />
            )}
          </div>
          <p className="text-lg font-bold ">{user?.role}</p>
          <p className="capitalize text-base font-semibold mb-2">
            {user?.name}
          </p>
        </div>

        {/***navigation */}
        <div className="grid p-4">
          <Link to={"all-users"} className="px-2 py-1 hover:bg-slate-100">
            All Users
          </Link>
          <Link to={"all-products"} className="px-2 py-1  hover:bg-slate-100">
            All Products
          </Link>
          <Link to={"all-traders"} className="px-2 py-1  hover:bg-slate-100">
            All Traders
          </Link>
          <Link to={"allE-waste"} className="px-2 py-1  hover:bg-slate-100">
            All E-Waste
          </Link>
        </div>
      </aside>
      <main className="w-full h-full p-2">
        <Outlet></Outlet>{" "}
      </main>
    </div>
  );
};

export default AdminPanel;
