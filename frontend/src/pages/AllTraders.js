
// import React, { useEffect, useState } from "react";
// import SummaryApi from "../common";
// import { useSnackbar } from "notistack";
// import moment from "moment";
// import UploadTraders from "../components/UploadTraders";
// import AssignTaskForm from "../components/AssignTask";


// const AllTraders = () => {
//   const [allTraders, setAllTraders] = useState([]);
//   const [openUploadTraders, setOpenUploadTraders] = useState(false);
//   const [selectedTrader, setSelectedTrader] = useState(null); // State for selected trader
//   const [openAssignTaskForm, setOpenAssignTaskForm] = useState(false); // State to manage AssignTaskForm visibility
//   const { enqueueSnackbar } = useSnackbar();

//   const fetchAllTraders = async () => {
//     try {
//       const response = await fetch(SummaryApi.allTraders.url, {
//         method: SummaryApi.allTraders.method,
//         credentials: "include",
//       });

//       const dataResponse = await response.json();

//       if (dataResponse.success) {
//         setAllTraders(dataResponse.data); // Assuming dataResponse.data contains the array of traders
//         enqueueSnackbar(dataResponse.message, { variant: "success" });
//       } else if (dataResponse.error) {
//         enqueueSnackbar(dataResponse.message, { variant: "error" });
//       }
//     } catch (error) {
//       enqueueSnackbar("Failed to fetch traders", { variant: "error" });
//     }
//   };

//   useEffect(() => {
//     fetchAllTraders();
//   }, []);

//   const handleAssign = (trader) => {
//     setSelectedTrader(trader); // Set selected trader
//     setOpenAssignTaskForm(true); // Open AssignTaskForm
//   };

//   return (
//     <div>
//       {/* Assign Task Form */}
//       {openAssignTaskForm && (
//         <AssignTaskForm
//           onClose={() => setOpenAssignTaskForm(false)}
//           trader={selectedTrader} // Pass selected trader data
//         />
//       )}

//       <div className="bg-white py-2 px-4 flex justify-between items-center">
//         <h2 className="font-bold text-lg">All Traders</h2>
//         <button
//           className="border-2 border-blue-400 text-blue-600 hover:bg-blue-600 hover:text-white transition-all py-1 px-3 rounded-full"
//           onClick={() => setOpenUploadTraders(true)}
//         >
//           Upload Trader
//         </button>
//       </div>

//       <div className="bg-white p-4">
//         <table className="w-full">
//           <thead>
//             <tr className="bg-blue-400">
//               <th className="p-2">Sno</th>
//               <th className="p-2">Name</th>
//               <th className="p-2">Email</th>
//               <th className="p-2">Location</th>
//               <th className="p-2">Created Date</th>
//               <th className="p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {allTraders.map((trader, index) => (
//               <tr key={trader._id} className="border-b border-gray-200">
//                 <td className="p-2">{index + 1}</td>
//                 <td className="p-2">{trader.TraderName}</td>
//                 <td className="p-2">{trader.Email}</td>
//                 <td className="p-2">{trader.Location}</td>
//                 <td className="p-2">{moment(trader.createdAt).format("L")}</td>
//                 <td className="p-2">
//                   <button
//                     className="bg-blue-100 p-2 rounded cursor-pointer hover:bg-blue-200"
//                     onClick={() => handleAssign(trader)}
//                   >
//                     Assign
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {openUploadTraders && (
//         <UploadTraders
//           onClose={() => setOpenUploadTraders(false)}
//           fetchData={fetchAllTraders}
//         />
//       )}
//     </div>
//   );
// };

// export default AllTraders;
import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { useSnackbar } from "notistack";
import moment from "moment";
import UploadTraders from "../components/UploadTraders";
import AssignTaskForm from "../components/AssignTask";

const AllTraders = () => {
  const [allTraders, setAllTraders] = useState([]);
  const [openUploadTraders, setOpenUploadTraders] = useState(false);
  const [selectedTrader, setSelectedTrader] = useState(null); // State for selected trader
  const [openAssignTaskForm, setOpenAssignTaskForm] = useState(false); // State to manage AssignTaskForm visibility
  const { enqueueSnackbar } = useSnackbar();

  const fetchAllTraders = async () => {
    try {
      const response = await fetch(SummaryApi.allTraders.url, {
        method: SummaryApi.allTraders.method,
        credentials: "include",
      });

      const dataResponse = await response.json();

      if (dataResponse.success) {
        setAllTraders(dataResponse.data); // Assuming dataResponse.data contains the array of traders
        enqueueSnackbar(dataResponse.message, { variant: "success" });
      } else if (dataResponse.error) {
        enqueueSnackbar(dataResponse.message, { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Failed to fetch traders", { variant: "error" });
    }
  };

  useEffect(() => {
    fetchAllTraders();
  }, []);

  const handleAssign = (trader) => {
    setSelectedTrader(trader); // Set selected trader
    setOpenAssignTaskForm(true); // Open AssignTaskForm
  };



  return (
    <div>
      {/* Assign Task Form */}
      {openAssignTaskForm && (
        <AssignTaskForm
          onClose={() => setOpenAssignTaskForm(false)}
          trader={selectedTrader} // Pass selected trader data
        />
      )}

      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">All Traders</h2>
        <button
          className="border-2 border-blue-400 text-blue-600 hover:bg-blue-600 hover:text-white transition-all py-1 px-3 rounded-full"
          onClick={() => setOpenUploadTraders(true)}
        >
          Upload Trader
        </button>
      </div>

      <div className="bg-white p-4">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-400">
              <th className="p-2">Sno</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">MobileNumber</th>
              <th className="p-2">Location</th>
              <th className="p-2">Created Date</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {allTraders.map((trader, index) => (
              <tr key={trader._id} className="border-b border-gray-200">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{trader.TraderName}</td>
                <td className="p-2">{trader.Email}</td>
                <td className="p-2">{trader.TraderMobileNumber}</td>
                <td className="p-2">{trader.Location}</td>
                <td className="p-2">{moment(trader.createdAt).format("L")}</td>
                <td className="p-2">
                  <button
                    className="bg-blue-100 p-2 rounded cursor-pointer hover:bg-blue-200"
                    onClick={() => handleAssign(trader)}
                  >
                    Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openUploadTraders && (
        <UploadTraders
          onClose={() => setOpenUploadTraders(false)}
          fetchData={fetchAllTraders}
        />
      )}
    </div>
  );
};

export default AllTraders;
