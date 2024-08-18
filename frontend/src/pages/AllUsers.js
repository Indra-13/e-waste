import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { useSnackbar } from "notistack";
import moment from "moment";
import { FaEdit } from "react-icons/fa";
import ChangeUserRole from "../components/ChangeUserRole";

const AllUsers = () => {
  const [allUser, setAllUser] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    _id: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  const fetchAllUsers = async () => {
    try {
      const fetchData = await fetch(SummaryApi.allUser.url, {
        method: SummaryApi.allUser.method,
        credentials: "include",
      });

      const dataResponse = await fetchData.json();

      if (dataResponse.success) {
        setAllUser(dataResponse.data); // Assuming dataResponse.data contains the array of users
        enqueueSnackbar(dataResponse.message, { variant: "success" });
      } else if (dataResponse.error) {
        enqueueSnackbar(dataResponse.message, { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Failed to fetch users", { variant: "error" });
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleRoleUpdate = (updatedUser) => {
    setAllUser((prevUsers) =>
      prevUsers.map((user) =>
        user._id === updatedUser._id
          ? { ...user, role: updatedUser.role }
          : user
      )
    );
    setOpenUpdateRole(false);
  };

  return (
    <div className="bg-white p-4">
      <table className="w-full">
        <thead>
          <tr className="bg-blue-400">
            <th className="p-2">Sno</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Created Date</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((el, index) => (
            <tr key={el._id} className="border-b border-gray-200">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{el.name}</td>
              <td className="p-2">{el.email}</td>
              <td className="p-2">{el.role}</td>
              <td className="p-2">{moment(el.createdAt).format("L")}</td>
              <td className="p-2">
                <button
                  className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-200"
                  onClick={() => {
                    setUpdateUserDetails(el);
                    setOpenUpdateRole(true);
                  }}
                >
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openUpdateRole && (
        <ChangeUserRole
          onClose={() => setOpenUpdateRole(false)}
          name={updateUserDetails.name}
          email={updateUserDetails.email}
          role={updateUserDetails.role}
          userId={updateUserDetails._id}
          onRoleUpdate={handleRoleUpdate}
        />
      )}
    </div>
  );
};

export default AllUsers;
