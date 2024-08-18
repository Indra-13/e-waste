import React, { useState } from "react";
import ROLE from "../common/role";
import { IoMdCloseCircle } from "react-icons/io";
import SummaryApi from "../common";
import { enqueueSnackbar } from "notistack";

const ChangeUserRole = ({
  name,
  email,
  role,
  userId,
  onClose,
  onRoleUpdate,
}) => {
  const [userRole, setUserRole] = useState(role);

  const handleOnChangeSelect = (e) => {
    setUserRole(e.target.value);
  };

  const updateUserRole = async () => {
    const fetchResponse = await fetch(SummaryApi.updateUser.url, {
      method: SummaryApi.updateUser.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        role: userRole,
      }),
    });
    const responseData = await fetchResponse.json();
    if (responseData.success) {
      enqueueSnackbar(responseData.message, { variant: "success" });
      onRoleUpdate({ _id: userId, role: userRole });
      onClose();
    } else if (responseData.error) {
      enqueueSnackbar(responseData.message, { variant: "error" });
    }
  };

  return (
    <div className="fixed absolute top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50 ">
      <div className="w-fit mx-auto bg-white shadow-md p-5 w-full max-w-sm">
        <div>
          <button className="block ml-auto text-xl " onClick={onClose}>
            <IoMdCloseCircle />
          </button>
        </div>
        <h1 className="pb-4 text-center text-lg font-medium">
          Change User Role
        </h1>
        <p className="font-medium">Name: {name}</p>
        <p className="font-medium pt-4">Email: {email}</p>
        <div className="flex justify-between items-center my-4">
          <p className="font-medium">Role: </p>
          <select
            className="border px-3 py-1 pb-1"
            value={userRole}
            onChange={handleOnChangeSelect}
          >
            {Object.values(ROLE).map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
        <button
          className="w-fit mx-auto block font-medium p-5 rounded-full py-1 px-3 bg-blue-400 hover:bg-blue-500"
          onClick={updateUserRole}
        >
          Change Role
        </button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
