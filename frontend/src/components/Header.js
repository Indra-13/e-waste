// // import React, { useContext, useState } from "react";
// import Logo from "./Logo";
// import { PiShoppingCartFill } from "react-icons/pi";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { PiGiftThin } from "react-icons/pi";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import SummaryApi from "../common";
// import { useSnackbar } from "notistack";
// import { setUserDetails } from "../store/userSlice";
// import ROLE from "../common/role";
// import Context from "../context";
// import { GiNuclearWaste } from "react-icons/gi";
// import { MdOutlineManageSearch } from "react-icons/md";
// import { useContext, useState } from "react";

// const Header = () => {
//   const user = useSelector((state) => state?.user?.user);
//   const dispatch = useDispatch();
//   const [menuDisplay, setMenuDisplay] = useState(false);
//   const context = useContext(Context);
//   const navigate = useNavigate();
//   const searchInput = useLocation();
//   const URLSearch = new URLSearchParams(searchInput?.search);
//   const searchQuery = URLSearch.getAll("q");
//   const [search, setSearch] = useState(searchQuery);
//   const { enqueueSnackbar } = useSnackbar();

//   const handleLogout = async () => {
//     const fetchData = await fetch(SummaryApi.logout_user.url, {
//       method: SummaryApi.logout_user.method,
//       credentials: "include",
//     });

//     const data = await fetchData.json();

//     if (data.success) {
//       enqueueSnackbar(data.message, { variant: "success" });
//       dispatch(setUserDetails(null));
//       navigate("/");
//     } else if (data.error) {
//       enqueueSnackbar(data.message, { variant: "error" });
//     }
//   };

//   const handleSearch = (e) => {
//     const { value } = e.target;
//     setSearch(value);

//     if (value) {
//       navigate(value ? `/search?q=${value}` : "/search");
//     } else {
//       navigate("/search");
//     }
//   };

//   return (
//     <header className="h-16 shadow-md bg-white fixed w-full z-40">
//       <div className="h-full container mx-auto flex items-center px-4 justify-between">
//         <div className="flex gap-4 text-3xl">
          // <Link to={"/"}>
          //   <Logo />
          // </Link>
//           <Link to={"/e-wastepage"}>
//             <GiNuclearWaste />
//           </Link>
//         </div>

//         <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
//           <input
//             type="text"
//             placeholder="search product here..."
//             className="w-full outline-none"
//             onChange={handleSearch}
//             value={search}
//           />
//           <div className="flex-lg min-w-[50px] h-7 text-xl hover:bg-blue-500 bg-blue-400 flex items-center justify-center rounded-r-full">
//             <MdOutlineManageSearch />
//           </div>
//         </div>

//         <div className="flex items-center gap-7">
//           <div className="relative flex justify-center">
//             {user?._id && (
//               <div
//                 className="text-3xl cursor-pointer relative flex justify-center"
//                 onClick={() => setMenuDisplay((prev) => !prev)}
//               >
//                 {user?.profilePic ? (
//                   <img
//                     src={user?.profilePic}
//                     className="w-10 h-10 rounded-full"
//                     alt={user?.name}
//                   />
//                 ) : (
//                   <FaRegCircleUser />
//                 )}
//               </div>
//             )}

//             {menuDisplay && (
//               <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
//                 <nav>
//                   {user?.role === ROLE.ADMIN && (
//                     <Link
//                       to={"/admin-panel/all-products"}
//                       className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
//                       onClick={() => setMenuDisplay((prev) => !prev)}
//                     >
//                       Admin Panel
//                     </Link>
//                   )}
//                   {user?.role === ROLE.GENERAL && (
//                     <Link
//                       to={"/myprofile"}
//                       className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
//                       onClick={() => setMenuDisplay((prev) => !prev)}
//                     >
//                       My Profile
//                     </Link>
//                   )}
//                   {user?.role === ROLE.TRADER && (
//                     <>
//                       <Link
//                         to={"/myprofile"}
//                         className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
//                         onClick={() => setMenuDisplay((prev) => !prev)}
//                       >
//                         My Profile
//                       </Link>
//                       <Link
//                         to={"/traderaccount"}
//                         className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
//                         onClick={() => setMenuDisplay((prev) => !prev)}
//                       >
//                         Trader Account
//                       </Link>
//                     </>
//                   )}
//                 </nav>
//               </div>
//             )}
//           </div>

//           {user?._id && (
//             <Link to={"/cart"} className="text-2xl relative">
//               <span>
//                 <PiShoppingCartFill />
//               </span>

//               <div className="bg-blue-400 text-black text-lg w-4 h-4 rounded-full p-1 flex items-center justify-center absolute -top-1 -right-2">
//                 <p className="text-sm">{context?.cartProductCount}</p>
//               </div>
//             </Link>
//           )}
//           {user?._id && (
//             <Link className="text-3xl relative">
//               <span>
//                 <PiGiftThin />
//               </span>
//             </Link>
//           )}

//           <div>
//             {user?._id ? (
//               <button
//                 onClick={handleLogout}
//                 className="px-3 py-1 rounded-full bg-blue-400 hover:bg-blue-500"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 to={"/login"}
//                 className="px-3 py-1 rounded-full bg-blue-400 hover:bg-blue-500"
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
// Header.js
// import React, { useState, useEffect, useContext } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate,Link } from 'react-router-dom';
// import { useSnackbar } from 'notistack';
// import { PiShoppingCartFill, PiGiftThin } from 'react-icons/pi';
// import { FaRegCircleUser } from 'react-icons/fa6';
// import Logo from './Logo';
// import Context from '../context';
// import SummaryApi from '../common';
// import { setUserDetails } from '../store/userSlice';
// import ROLE from "../common/role";
// import { GiNuclearWaste } from "react-icons/gi";

// const Header = () => {
//   const user = useSelector((state) => state?.user?.user);
//   const dispatch = useDispatch();
//   const [menuDisplay, setMenuDisplay] = useState(false);
//   const [rewardPoints, setRewardPoints] = useState(0);
//   const context = useContext(Context);
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   useEffect(() => {
//     const fetchRewardPoints = async () => {
//       try {
//         const response = await fetch(`${SummaryApi.getUserRewardPoints.url}?userEmail=${encodeURIComponent(user.email)}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         const data = await response.json();

//         if (data.success) {
//           setRewardPoints(data.data.points);
//         } else {
//           enqueueSnackbar(data.message, { variant: 'error' });
//         }
//       } catch (error) {
//         enqueueSnackbar('An error occurred while fetching reward points.', { variant: 'error' });
//       }
//     };

//     if (user) {
//       fetchRewardPoints();
//     }
//   }, [user, enqueueSnackbar]);

//   const handleLogout = async () => {
//     try {
//       const response = await fetch(SummaryApi.logout_user.url, {
//         method: SummaryApi.logout_user.method,
//         credentials: 'include',
//       });

//       const data = await response.json();

//       if (data.success) {
//         enqueueSnackbar(data.message, { variant: 'success' });
//         dispatch(setUserDetails(null));
//         navigate('/');
//       } else {
//         enqueueSnackbar(data.message, { variant: 'error' });
//       }
//     } catch (error) {
//       enqueueSnackbar('An error occurred during logout.', { variant: 'error' });
//     }
//   };

//   return (
//     <header className="h-16 shadow-md bg-white fixed w-full z-40">
//       <div className="h-full container mx-auto flex items-center px-4 justify-between">
//         <div className="flex gap-4 text-3xl">
//           <Logo />
//           <Link to="/e-wastepage">
//             <GiNuclearWaste />
//           </Link>
//         </div>

//         <div className="flex items-center gap-7">
//           <div className="relative flex justify-center">
//             {user?._id && (
//               <div
//                 className="text-3xl cursor-pointer relative flex justify-center"
//                 onClick={() => setMenuDisplay((prev) => !prev)}
//               >
//                 {user?.profilePic ? (
//                   <img
//                     src={user?.profilePic}
//                     className="w-10 h-10 rounded-full"
//                     alt={user?.name}
//                   />
//                 ) : (
//                   <FaRegCircleUser />
//                 )}
//               </div>
//             )}

//             {menuDisplay && (
//               <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
//                 <nav>
//                   {user?.role === ROLE.ADMIN && (
//                     <Link
//                       to="/admin-panel/all-products"
//                       className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
//                       onClick={() => setMenuDisplay((prev) => !prev)}
//                     >
//                       Admin Panel
//                     </Link>
//                   )}
//                   {user?.role === ROLE.GENERAL && (
//                     <Link
//                       to="/myprofile"
//                       className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
//                       onClick={() => setMenuDisplay((prev) => !prev)}
//                     >
//                       My Profile
//                     </Link>
//                   )}
//                   {user?.role === ROLE.TRADER && (
//                     <>
//                       <Link
//                         to="/myprofile"
//                         className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
//                         onClick={() => setMenuDisplay((prev) => !prev)}
//                       >
//                         My Profile
//                       </Link>
//                       <Link
//                         to="/traderaccount"
//                         className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
//                         onClick={() => setMenuDisplay((prev) => !prev)}
//                       >
//                         Trader Account
//                       </Link>
//                     </>
//                   )}
//                 </nav>
//               </div>
//             )}
//           </div>

//           {user?._id && (
//             <Link to="/cart" className="text-2xl relative">
//               <PiShoppingCartFill />
//               <div className="bg-blue-400 text-black text-lg w-4 h-4 rounded-full p-1 flex items-center justify-center absolute -top-1 -right-2">
//                 <p className="text-sm">{context?.cartProductCount}</p>
//               </div>
//             </Link>
//           )}
          // {user?._id && (
          //   <Link to={"/rewardpage"} className="text-3xl relative">
          //     <PiGiftThin />
          //     <div className="bg-blue-400 text-black text-lg w-4 h-4 rounded-full p-1 flex items-center justify-center absolute -top-1 -right-2">
          //       <p className="text-sm">{rewardPoints}</p>
          //     </div>
          //   </Link>
          // )}

//           <div>
//             {user?._id ? (
//               <button
//                 onClick={handleLogout}
//                 className="px-3 py-1 rounded-full bg-blue-400 hover:bg-blue-500"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 to="/login"
//                 className="px-3 py-1 rounded-full bg-blue-400 hover:bg-blue-500"
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { PiShoppingCartFill } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from "./Logo";
import Context from "../context";
import SummaryApi from "../common";
import { setUserDetails } from "../store/userSlice";
import ROLE from "../common/role";
import { GiNuclearWaste } from "react-icons/gi";
import { PiGiftThin } from "react-icons/pi";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    try {
      const response = await fetch(SummaryApi.logout_user.url, {
        method: SummaryApi.logout_user.method,
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        enqueueSnackbar(data.message, { variant: "success" });
        dispatch(setUserDetails(null));
        navigate("/");
      } else {
        enqueueSnackbar(data.message, { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("An error occurred during logout.", { variant: "error" });
    }
  };

  return (
    <header className="h-16 shadow-md bg-white fixed w-full z-40">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="flex gap-4 text-3xl">
          <Link to={"/"}>
            <Logo />
          </Link>
          <Link to="/e-wastepage">
            <GiNuclearWaste />
          </Link>
        </div>

        <div className="flex items-center gap-7">
          <div className="relative flex justify-center">
            {user?._id && (
              <div
                className="text-3xl cursor-pointer relative flex justify-center"
                onClick={() => setMenuDisplay((prev) => !prev)}
              >
                {user?.profilePic ? (
                  <img
                    src={user?.profilePic}
                    className="w-10 h-10 rounded-full"
                    alt={user?.name}
                  />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>
            )}

            {menuDisplay && (
              <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
                <nav>
                  {user?.role === ROLE.ADMIN && (
                    <Link
                      to="/admin-panel/all-products"
                      className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                      onClick={() => setMenuDisplay((prev) => !prev)}
                    >
                      Admin Panel
                    </Link>
                  )}
                  {user?.role === ROLE.GENERAL && (
                    <Link
                      to="/myprofile"
                      className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                      onClick={() => setMenuDisplay((prev) => !prev)}
                    >
                      My Profile
                    </Link>
                  )}
                  {user?.role === ROLE.TRADER && (
                    <>
                      <Link
                        to="/myprofile"
                        className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                        onClick={() => setMenuDisplay((prev) => !prev)}
                      >
                        My Profile
                      </Link>
                      <Link
                        to="/traderaccount"
                        className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                        onClick={() => setMenuDisplay((prev) => !prev)}
                      >
                        Trader Account
                      </Link>
                    </>
                  )}
                </nav>
              </div>
            )}
          </div>

          {user?._id && (
            <Link to="/cart" className="text-2xl relative">
              <PiShoppingCartFill />
              <div className="bg-blue-400 text-black text-lg w-4 h-4 rounded-full p-1 flex items-center justify-center absolute -top-1 -right-2">
                <p className="text-sm">{context?.cartProductCount}</p>
              </div>
            </Link>
          )}
          {user?._id && (
            <Link to={"/rewardpage"} className="text-3xl relative">
              <PiGiftThin />
            </Link>
          )}

          <div>
            {user?._id ? (
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-full bg-blue-400 hover:bg-blue-500"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-3 py-1 rounded-full bg-blue-400 hover:bg-blue-500"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
