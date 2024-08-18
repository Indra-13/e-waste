
// import React, { useState, useEffect } from "react";
// import { CgClose } from "react-icons/cg";
// import SummaryApi from "../common"; // Ensure this points to your API definitions

// const AssignTaskForm = ({ onClose, trader }) => {
//   const [formData, setFormData] = useState({
//     username: "",
//     userEmail: "",
//     userMobile: "",
//     location: "",
//     dueDate: "",
//   });
//   const [userOptions, setUserOptions] = useState([]);
//   const [traderLocation, setTraderLocation] = useState("");

//   useEffect(() => {
//     if (trader) {
//       const { Location } = trader;
//       setTraderLocation(Location);
//       fetchUsers(Location);
//     } else {
//       console.error("No trader data provided");
//     }
//   }, [trader]);

//   const fetchUsers = async (location) => {
//     try {
//       const response = await fetch(SummaryApi.allEWaste.url, {
//         method: SummaryApi.allEWaste.method,
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();

//       if (data.success) {
//         const normalizedLocation = location.toLowerCase();
//         const users = data.data
//           .filter(
//             (product) => product.location.toLowerCase() === normalizedLocation
//           )
//           .map((product) => ({
//             username: product.userName,
//             email: product.userEmail,
//             mobile: product.mobileNumber,
//           }));
//         setUserOptions(users);
//       } else {
//         console.error("Failed to fetch users:", data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching users data:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));

//     if (name === "username") {
//       const selectedUser = userOptions.find(
//         (user) => user.username.toLowerCase() === value.toLowerCase()
//       );
//       if (selectedUser) {
//         setFormData((prevData) => ({
//           ...prevData,
//           userEmail: selectedUser.email,
//           userMobile: selectedUser.mobile,
//           location: traderLocation, // Automatically fill location
//         }));
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Assigned Task Data:", formData);
//     // Submit the formData as needed
//   };

//   return (
//     <div className="fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
//       <div className="bg-white p-4 rounded w-full max-w-2xl max-h-[80%] overflow-hidden">
//         <div className="flex justify-between items-center pb-3">
//           <h2 className="font-bold text-lg">Assign Task</h2>
//           <div
//             className="w-fit ml-auto text-2xl hover:text-blue-600 cursor-pointer"
//             onClick={onClose}
//           >
//             <CgClose />
//           </div>
//         </div>
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <label>
//             Username:
//             <select
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className="p-2 bg-slate-100 border rounded"
//               required
//             >
//               <option value="">Select a user</option>
//               {userOptions.map((user) => (
//                 <option key={user.username} value={user.username}>
//                   {user.username}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <label>
//             User Email:
//             <input
//               type="email"
//               name="userEmail"
//               value={formData.userEmail}
//               onChange={handleChange}
//               className="p-2 bg-slate-100 border rounded"
//               required
//               readOnly
//             />
//           </label>
//           <label>
//             Mobile Number:
//             <input
//               type="text"
//               name="userMobile"
//               value={formData.userMobile}
//               onChange={handleChange}
//               className="p-2 bg-slate-100 border rounded"
//               required
//               readOnly
//             />
//           </label>
//           <label>
//             Location:
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               className="p-2 bg-slate-100 border rounded"
//               required
//               readOnly
//             />
//           </label>
//           <label>
//             Due Date:
//             <input
//               type="date"
//               name="dueDate"
//               value={formData.dueDate}
//               onChange={handleChange}
//               className="p-2 bg-slate-100 border rounded"
//               required
//             />
//           </label>
//           <button
//             type="submit"
//             className="px-3 py-2 bg-blue-400 text-white mt-4 hover:bg-blue-600"
//           >
//             Assign Task
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AssignTaskForm;
// import React, { useState, useEffect } from "react";
// import { CgClose } from "react-icons/cg";
// import SummaryApi from "../common"; // Ensure this points to your API definitions

// const AssignTaskForm = ({ onClose, trader }) => {
//   const [formData, setFormData] = useState({
//     username: "",
//     userEmail: "",
//     userMobile: "",
//     location: "",
//     dueDate: "",
//   });
//   const [userOptions, setUserOptions] = useState([]);
//   const [traderLocation, setTraderLocation] = useState("");

//   useEffect(() => {
//     if (trader) {
//       const { Location } = trader;
//       setTraderLocation(Location);
//       fetchUsers(Location);
//     } else {
//       console.error("No trader data provided");
//     }
//   }, [trader]);

//   const fetchUsers = async (location) => {
//     try {
//       const response = await fetch(SummaryApi.allEWaste.url, {
//         method: SummaryApi.allEWaste.method,
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();

//       if (data.success) {
//         const normalizedLocation = location.toLowerCase();
//         const users = data.data
//           .filter(
//             (product) => product.location.toLowerCase() === normalizedLocation
//           )
//           .map((product) => ({
//             username: product.userName,
//             email: product.userEmail,
//             mobile: product.mobileNumber,
//           }));
//         setUserOptions(users);
//       } else {
//         console.error("Failed to fetch users:", data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching users data:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));

//     if (name === "username") {
//       const selectedUser = userOptions.find(
//         (user) => user.username.toLowerCase() === value.toLowerCase()
//       );
//       if (selectedUser) {
//         setFormData((prevData) => ({
//           ...prevData,
//           userEmail: selectedUser.email,
//           userMobile: selectedUser.mobile,
//           location: traderLocation, // Automatically fill location
//         }));
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Assigned Task Data:", formData);
//     // Submit the formData as needed
//   };

//   return (
//     <div className="fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
//       <div className="bg-white p-4 mt-3 rounded w-full max-w-2xl h-auto">
//         <div className="flex justify-between items-center pb-3">
//           <h2 className="font-bold text-lg">Assign Task</h2>
//           <div
//             className="w-fit ml-auto text-2xl hover:text-blue-600 cursor-pointer"
//             onClick={onClose}
//           >
//             <CgClose />
//           </div>
//         </div>
//         <form className="grid p-4 gap-2" onSubmit={handleSubmit}>
//           <label htmlFor="username">Username :</label>
//           <select
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="p-2 bg-slate-100 border rounded"
//             required
//           >
//             <option value="">Select a user</option>
//             {userOptions.map((user) => (
//               <option key={user.username} value={user.username}>
//                 {user.username}
//               </option>
//             ))}
//           </select>

//           <label htmlFor="userEmail" className="mt-3">
//             User Email :
//           </label>
//           <input
//             type="email"
//             name="userEmail"
//             value={formData.userEmail}
//             onChange={handleChange}
//             className="p-2 bg-slate-100 border rounded"
//             required
//             readOnly
//           />

//           <label htmlFor="userMobile" className="mt-3">
//             Mobile Number :
//           </label>
//           <input
//             type="text"
//             name="userMobile"
//             value={formData.userMobile}
//             onChange={handleChange}
//             className="p-2 bg-slate-100 border rounded"
//             required
//             readOnly
//           />

//           <label htmlFor="location" className="mt-3">
//             Location :
//           </label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             className="p-2 bg-slate-100 border rounded"
//             required
//             readOnly
//           />

//           <label htmlFor="dueDate" className="mt-3">
//             Due Date :
//           </label>
//           <input
//             type="date"
//             name="dueDate"
//             value={formData.dueDate}
//             onChange={handleChange}
//             className="p-2 bg-slate-100 border rounded"
//             required
//           />

//           <button
//             type="submit"
//             className="px-3 py-2 bg-blue-400 text-white mt-4 mb-4 hover:bg-blue-600"
//           >
//             Assign Task
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AssignTaskForm;
// import React, { useState, useEffect } from "react";
// import { CgClose } from "react-icons/cg";
// import SummaryApi from "../common"; // Ensure this points to your API definitions
// import { useSnackbar } from "notistack"; // Import useSnackbar

// const AssignTaskForm = ({ onClose, trader }) => {
//   const { enqueueSnackbar } = useSnackbar(); // Use useSnackbar to get enqueueSnackbar

//   const [formData, setFormData] = useState({
//     username: "",
//     userEmail: "",
//     userMobile: "",
//     location: "",
//     dueDate: "",
//   });
//   const [userOptions, setUserOptions] = useState([]);
//   const [traderLocation, setTraderLocation] = useState("");

//   useEffect(() => {
//     if (trader && trader.Location) {
//       const { Location } = trader;
//       setTraderLocation(Location);
//       fetchUsers(Location);
//     } else {
//       console.error("No trader data provided or trader.Location is undefined");
//     }
//   }, [trader]);

//   const fetchUsers = async (location) => {
//     try {
//       const response = await fetch(SummaryApi.allEWaste.url, {
//         method: SummaryApi.allEWaste.method,
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();

//       if (data.success) {
//         const normalizedLocation = location.toLowerCase();
//         const users = data.data
//           .filter(
//             (product) => product.location.toLowerCase() === normalizedLocation
//           )
//           .map((product) => ({
//             username: product.userName,
//             email: product.userEmail,
//             mobile: product.mobileNumber,
//           }));
//         setUserOptions(users);
//       } else {
//         console.error("Failed to fetch users:", data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching users data:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));

//     if (name === "username") {
//       const selectedUser = userOptions.find(
//         (user) => user.username.toLowerCase() === value.toLowerCase()
//       );
//       if (selectedUser) {
//         setFormData((prevData) => ({
//           ...prevData,
//           userEmail: selectedUser.email,
//           userMobile: selectedUser.mobile,
//           location: traderLocation, // Automatically fill location
//         }));
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(SummaryApi.assignTask.url, {
//         method: SummaryApi.assignTask.method,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           traderId: trader._id, // Ensure trader._id is available
//           taskDetails: formData,
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         console.log("Task assigned successfully:", data.task);
//         enqueueSnackbar("Task assigned successfully!", { variant: "success" }); // Show success notification
//         onClose(); // Close the form after successful submission
//       } else {
//         console.error("Failed to assign task:", data.message);
//         enqueueSnackbar("Failed to assign task. Please try again.", {
//           variant: "error",
//         }); // Show error notification
//       }
//     } catch (error) {
//       console.error("Error assigning task:", error);
//       enqueueSnackbar("An error occurred while assigning the task.", {
//         variant: "error",
//       }); // Show error notification
//     }
//   };

//   return (
//     <div className="fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
//       <div className="bg-white p-4 mt-3 rounded w-full max-w-2xl h-auto">
//         <div className="flex justify-between items-center pb-3">
//           <h2 className="font-bold text-lg">Assign Task</h2>
//           <div
//             className="w-fit ml-auto text-2xl hover:text-blue-600 cursor-pointer"
//             onClick={onClose}
//           >
//             <CgClose />
//           </div>
//         </div>
//         <form className="grid p-4 gap-2" onSubmit={handleSubmit}>
//           <label htmlFor="traderEmail" className="text-sm">
//             Trader Email :
//           </label>
//           <input
//             type="email"
//             name="traderEmail"
//             value={formData.traderEmail}
//             onChange={handleChange} // Allow user to edit traderEmail if needed
//             className="p-2 bg-slate-100 border rounded text-sm"
//             required
//           />
//           <label htmlFor="username">Username :</label>
//           <select
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="p-2 bg-slate-100 border rounded"
//             required
//           >
//             <option value="">Select a user</option>
//             {userOptions.map((user) => (
//               <option key={user.username} value={user.username}>
//                 {user.username}
//               </option>
//             ))}
//           </select>

//           <label htmlFor="userEmail" className="mt-3">
//             User Email :
//           </label>
//           <input
//             type="email"
//             name="userEmail"
//             value={formData.userEmail}
//             onChange={handleChange}
//             className="p-2 bg-slate-100 border rounded"
//             required
//             readOnly
//           />

//           <label htmlFor="userMobile" className="mt-3">
//             Mobile Number :
//           </label>
//           <input
//             type="text"
//             name="userMobile"
//             value={formData.userMobile}
//             onChange={handleChange}
//             className="p-2 bg-slate-100 border rounded"
//             required
//             readOnly
//           />

//           <label htmlFor="location" className="mt-3">
//             Location :
//           </label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             className="p-2 bg-slate-100 border rounded"
//             required
//             readOnly
//           />

//           <label htmlFor="dueDate" className="mt-3">
//             Due Date :
//           </label>
//           <input
//             type="date"
//             name="dueDate"
//             value={formData.dueDate}
//             onChange={handleChange}
//             className="p-2 bg-slate-100 border rounded"
//             required
//           />

//           <button
//             type="submit"
//             className="px-3 py-2 bg-blue-400 text-white mt-4 mb-4 hover:bg-blue-600"
//           >
//             Assign Task
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AssignTaskForm;
import React, { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import SummaryApi from "../common";
import { useSnackbar } from "notistack";

const AssignTaskForm = ({ onClose, trader }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    username: "",
    userEmail: "",
    userMobile: "",
    location: "",
    dueDate: "",
  });
  const [userOptions, setUserOptions] = useState([]);
  const [traderLocation, setTraderLocation] = useState("");

  useEffect(() => {
    if (trader && trader.Location) {
      const { Location } = trader;
      setTraderLocation(Location);
      fetchUsers(Location);
    } else {
      console.error("No trader data provided or trader.Location is undefined");
    }
  }, [trader]);

  const fetchUsers = async (location) => {
    try {
      const response = await fetch(SummaryApi.allEWaste.url, {
        method: SummaryApi.allEWaste.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (data.success) {
        const normalizedLocation = location.toLowerCase();
        const users = data.data
          .filter(
            (product) => product.location.toLowerCase() === normalizedLocation
          )
          .map((product) => ({
            username: product.userName,
            email: product.userEmail,
            mobile: product.mobileNumber,
          }));
        setUserOptions(users);
      } else {
        console.error("Failed to fetch users:", data.message);
      }
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "username") {
      const selectedUser = userOptions.find(
        (user) => user.username.toLowerCase() === value.toLowerCase()
      );
      if (selectedUser) {
        setFormData((prevData) => ({
          ...prevData,
          userEmail: selectedUser.email,
          userMobile: selectedUser.mobile,
          location: traderLocation,
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(SummaryApi.assignTask.url, {
            method: SummaryApi.assignTask.method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                traderId: trader._id,
                taskDetails: formData,
            }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
            console.log("Task assigned successfully:", data.task);
            enqueueSnackbar("Task assigned successfully!", { variant: "success" });
            onClose();
        } else {
            console.error("Failed to assign task:", data.message || "Unknown error");
            enqueueSnackbar("Failed to assign task. Please try again.", {
                variant: "error",
            });
        }
    } catch (error) {
        console.error("Error assigning task:", error);
        enqueueSnackbar("An error occurred while assigning the task.", {
            variant: "error",
        });
    }
};


  return (
    <div className="fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-white p-3 mt-3 rounded w-full max-w-lg h-auto"> {/* Reduced padding and max-width */}
        <div className="flex justify-between items-center pb-2"> {/* Reduced padding-bottom */}
          <h2 className="font-bold text-lg mt-2">Assign Task</h2>
          <div
            className="w-fit ml-auto text-xl mt-2 hover:text-blue-600 cursor-pointer" 
            onClick={onClose}
          >
            <CgClose />
          </div>
        </div>
        <form className="grid p-2 gap-1" onSubmit={handleSubmit}> {/* Reduced padding and gap */}
          <label htmlFor="traderEmail" className="text-sm">
            Trader Email :
          </label>
          <input
            type="email"
            name="traderEmail"
            value={formData.traderEmail}
            onChange={handleChange}
            className="p-2 bg-slate-100 border rounded text-sm"
            required
          />
          <label htmlFor="username">Username :</label>
          <select
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="p-2 bg-slate-100 border rounded"
            required
          >
            <option value="">Select a user</option>
            {userOptions.map((user) => (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>

          <label htmlFor="userEmail" className="mt-2"> {/* Reduced margin-top */}
            User Email :
          </label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            className="p-2 bg-slate-100 border rounded"
            required
            readOnly
          />

          <label htmlFor="userMobile" className="mt-2">
            Mobile Number :
          </label>
          <input
            type="text"
            name="userMobile"
            value={formData.userMobile}
            onChange={handleChange}
            className="p-2 bg-slate-100 border rounded"
            required
            readOnly
          />

          <label htmlFor="location" className="mt-2">
            Location :
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="p-2 bg-slate-100 border rounded"
            required
            readOnly
          />

          <label htmlFor="dueDate" className="mt-2">
            Due Date :
          </label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />

          <button
            type="submit"
            className="px-3 py-2 bg-blue-400 text-white mt-3 mb-2 hover:bg-blue-600" 
          >
            Assign Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AssignTaskForm;
