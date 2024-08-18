
// import React, { useState, useEffect } from "react";
// import SummaryApi from "../common"; // Ensure this points to your API definitions
// import { useSnackbar } from "notistack";

// const TraderAccount = () => {
//   const { enqueueSnackbar } = useSnackbar();
//   const [currentUser, setCurrentUser] = useState(null);
//   const [filteredTasks, setFilteredTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCurrentUser = async () => {
//       try {
//         const response = await fetch(SummaryApi.current_user.url, {
//           method: SummaryApi.current_user.method,
//           credentials: "include",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         const data = await response.json();

//         if (data.success) {
//           setCurrentUser(data.data);
//           if (data.data.email) {
//             fetchAssignedTasks(data.data.email);
//           }
//         } else {
//           console.error("Failed to fetch user details:", data.message);
//           enqueueSnackbar("Failed to fetch user details.", {
//             variant: "error",
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//         enqueueSnackbar("An error occurred while fetching user details.", {
//           variant: "error",
//         });
//       }
//     };

//     const fetchAssignedTasks = async (userEmail) => {
//       if (!SummaryApi.getTasks || !SummaryApi.getTasks.url) {
//         console.error("API configuration for getTasks is missing.");
//         return;
//       }

//       try {
//         const response = await fetch(
//           ${SummaryApi.getTasks.url}?email=${encodeURIComponent(userEmail)},
//           {
//             method: SummaryApi.getTasks.method,
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error(HTTP error! Status: ${response.status});
//         }

//         const data = await response.json();

//         if (data.success) {
//           const tasks = data.tasks || [];
//           const filtered = tasks.filter(
//             (task) => task.traderEmail === userEmail
//           );
//           setFilteredTasks(filtered);
//         } else {
//           console.error("Failed to fetch assigned tasks:", data.message);
//           enqueueSnackbar("Failed to fetch assigned tasks.", {
//             variant: "error",
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching assigned tasks:", error);
//         enqueueSnackbar("An error occurred while fetching assigned tasks.", {
//           variant: "error",
//         });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCurrentUser();
//   }, [enqueueSnackbar]);

//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     return date.toLocaleDateString();
//   };

//  const handleStatusChange = async (taskId) => {
//    try {
//      const response = await fetch(${SummaryApi.deleteTask.url}/${taskId}, {
//        method: SummaryApi.deleteTask.method,
//        headers: {
//          "Content-Type": "application/json",
//        },
//      });

//      if (!response.ok) {
//        throw new Error(HTTP error! Status: ${response.status});
//      }

//      setFilteredTasks((prevTasks) =>
//        prevTasks.filter((task) => task._id !== taskId)
//      );

//      enqueueSnackbar("Task deleted successfully.", {
//        variant: "success",
//      });
//    } catch (error) {
//      console.error("Error deleting task:", error);
//      enqueueSnackbar("An error occurred while deleting the task.", {
//        variant: "error",
//      });
//    }
//  };


//   if (loading) {
//     return <div className="p-6 text-center">Loading...</div>;
//   }

//   return (
//     <div className="p-6 max-w-3xl mx-auto mt-5 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4 text-gray-800">Trader Account</h1>
//       {currentUser && (
//         <div>
//           <h2 className="text-xl font-semibold mb-7 text-gray-700">
//             My Email: <span className="text-gray-500">{currentUser.email}</span>
//           </h2>
//           <h1 className="text-lg font-bold mb-6 text-gray-700">
//             Assigned Tasks:
//           </h1>
//           {filteredTasks.length > 0 ? (
//             <ul className="space-y-4">
//               {filteredTasks.map((task) => (
//                 <li
//                   key={task._id}
//                   className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
//                 >
//                   <p className="mb-2 text-gray-800">
//                     <strong>Username:</strong> {task.username}
//                   </p>
//                   <p className="mb-2 text-gray-800">
//                     <strong>User Email:</strong> {task.userEmail}
//                   </p>
//                   <p className="mb-2 text-gray-800">
//                     <strong>User Mobile:</strong> {task.userMobile}
//                   </p>
//                   <p className="mb-2 text-gray-800">
//                     <strong>Location:</strong> {task.location}
//                   </p>
//                   <p className="mb-2 text-gray-800">
//                     <strong>Due Date:</strong> {formatDate(task.dueDate)}
//                   </p>
//                   <button
//                     className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
//                     onClick={() => handleStatusChange(task._id)}
//                   >
//                     PENDING
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500">No tasks assigned.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TraderAccount;
// import React, { useState, useEffect } from "react";
// import SummaryApi from "../common"; // Ensure this points to your API definitions
// import { useSnackbar } from "notistack";

// const TraderAccount = () => {
//   const { enqueueSnackbar } = useSnackbar();
//   const [currentUser, setCurrentUser] = useState(null);
//   const [filteredTasks, setFilteredTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCurrentUser = async () => {
//       try {
//         const response = await fetch(SummaryApi.current_user.url, {
//           method: SummaryApi.current_user.method,
//           credentials: "include",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         const data = await response.json();

//         if (data.success) {
//           setCurrentUser(data.data);
//           if (data.data.email) {
//             fetchAssignedTasks(data.data.email);
//           }
//         } else {
//           console.error("Failed to fetch user details:", data.message);
//           enqueueSnackbar("Failed to fetch user details.", {
//             variant: "error",
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//         enqueueSnackbar("An error occurred while fetching user details.", {
//           variant: "error",
//         });
//       }
//     };

//     const fetchAssignedTasks = async (userEmail) => {
//       if (!SummaryApi.getTasks || !SummaryApi.getTasks.url) {
//         console.error("API configuration for getTasks is missing.");
//         return;
//       }

//       try {
//         const response = await fetch(
//           `${SummaryApi.getTasks.url}?email=${encodeURIComponent(userEmail)}`,
//           {
//             method: SummaryApi.getTasks.method,
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();

//         if (data.success) {
//           const tasks = data.tasks || [];
//           const filtered = tasks.filter(
//             (task) => task.traderEmail === userEmail
//           ); 
//           setFilteredTasks(filtered);
//         } else {
//           console.error("Failed to fetch assigned tasks:", data.message);
//           enqueueSnackbar("Failed to fetch assigned tasks.", {
//             variant: "error",
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching assigned tasks:", error);
//         enqueueSnackbar("An error occurred while fetching assigned tasks.", {
//           variant: "error",
//         });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCurrentUser();
//   }, [enqueueSnackbar]);

//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     return date.toLocaleDateString();
//   };
// const handleStatusChange = async (taskId, userEmail) => {
//   try {
//     const response = await fetch(
//       `${SummaryApi.deleteTaskAndProduct.url}/${taskId}/${encodeURIComponent(
//         userEmail
//       )}`,
//       {
//         method: SummaryApi.deleteTaskAndProduct.method,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     setFilteredTasks((prevTasks) =>
//       prevTasks.filter((task) => task._id !== taskId)
//     );

//     enqueueSnackbar("Task completed by Trader successfully.", {
//       variant: "success",
//     });
//   } catch (error) {
//     console.error("Error deleting task and product:", error);
//     enqueueSnackbar("An error occurred while deleting the task and product.", {
//       variant: "error",
//     });
//   }
// };


//   if (loading) {
//     return <div className="p-6 text-center">Loading...</div>;
//   }

//   return (
//     <div className="p-6 max-w-3xl mx-auto mt-5 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4 text-gray-800">Trader Account</h1>
//       {currentUser && (
//         <div>
//           <h2 className="text-xl font-semibold mb-7 text-gray-700">
//             My Email: <span className="text-gray-500">{currentUser.email}</span>
//           </h2>
//           <h1 className="text-lg font-bold mb-6 text-gray-700">
//             Assigned Tasks:
//           </h1>
//           {filteredTasks.length > 0 ? (
//             <ul className="space-y-4">
//               {filteredTasks.map((task) => (
//                 <li
//                   key={task._id}
//                   className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
//                 >
//                   <p className="mb-2 text-gray-800">
//                     <strong>Username:</strong> {task.username}
//                   </p>
//                   <p className="mb-2 text-gray-800">
//                     <strong>User Email:</strong> {task.userEmail}
//                   </p>
//                   <p className="mb-2 text-gray-800">
//                     <strong>User Mobile:</strong> {task.userMobile}
//                   </p>
//                   <p className="mb-2 text-gray-800">
//                     <strong>Location:</strong> {task.location}
//                   </p>
//                   <p className="mb-2 text-gray-800">
//                     <strong>Due Date:</strong> {formatDate(task.dueDate)}
//                   </p>
//                   <button
//                     className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
//                     onClick={() => handleStatusChange(task._id, task.userEmail)}
//                   >
//                     PENDING
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500">No tasks assigned.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TraderAccount;

import React, { useState, useEffect } from "react";
import SummaryApi from "../common"; // Ensure this points to your API definitions
import { useSnackbar } from "notistack";

const TraderAccount = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [currentUser, setCurrentUser] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch(SummaryApi.current_user.url, {
          method: SummaryApi.current_user.method,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (data.success) {
          setCurrentUser(data.data);
          if (data.data.email) {
            fetchAssignedTasks(data.data.email);
          }
        } else {
          console.error("Failed to fetch user details:", data.message);
          enqueueSnackbar("Failed to fetch user details.", {
            variant: "error",
          });
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        enqueueSnackbar("An error occurred while fetching user details.", {
          variant: "error",
        });
      }
    };

    const fetchAssignedTasks = async (userEmail) => {
      if (!SummaryApi.getTasks || !SummaryApi.getTasks.url) {
        console.error("API configuration for getTasks is missing.");
        return;
      }

      try {
        const response = await fetch(
          `${SummaryApi.getTasks.url}?email=${encodeURIComponent(userEmail)}`,
          {
            method: SummaryApi.getTasks.method,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
          const tasks = data.tasks || [];
          const filtered = tasks.filter(
            (task) => task.traderEmail === userEmail
          );
          setFilteredTasks(filtered);
        } else {
          console.error("Failed to fetch assigned tasks:", data.message);
          enqueueSnackbar("Failed to fetch assigned tasks.", {
            variant: "error",
          });
        }
      } catch (error) {
        console.error("Error fetching assigned tasks:", error);
        enqueueSnackbar("An error occurred while fetching assigned tasks.", {
          variant: "error",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, [enqueueSnackbar]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const handleStatusChange = async (taskId, userEmail) => {
    try {
      const response = await fetch(
        `${SummaryApi.deleteTaskAndProduct.url}/${taskId}/${encodeURIComponent(
          userEmail
        )}`,
        {
          method: SummaryApi.deleteTaskAndProduct.method,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Update reward points here if applicable
      await fetch(SummaryApi.addRewardPoints.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: userEmail,
          points: 10, // Adjust points as needed
        }),
      });

      setFilteredTasks((prevTasks) =>
        prevTasks.filter((task) => task._id !== taskId)
      );

      enqueueSnackbar(
        "Task completed and reward points updated successfully.",
        {
          variant: "success",
        }
      );
    } catch (error) {
      console.error("Error completing task:", error);
      enqueueSnackbar("An error occurred while completing the task.", {
        variant: "error",
      });
    }
  };

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto mt-5 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Trader Account</h1>
      {currentUser && (
        <div>
          <h2 className="text-xl font-semibold mb-7 text-gray-700">
            My Email: <span className="text-gray-500">{currentUser.email}</span>
          </h2>
          <h1 className="text-lg font-bold mb-6 text-gray-700">
            Assigned Tasks:
          </h1>
          {filteredTasks.length > 0 ? (
            <ul className="space-y-4">
              {filteredTasks.map((task) => (
                <li
                  key={task._id}
                  className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
                >
                  <p className="mb-2 text-gray-800">
                    <strong>Username:</strong> {task.username}
                  </p>
                  <p className="mb-2 text-gray-800">
                    <strong>User Email:</strong> {task.userEmail}
                  </p>
                  <p className="mb-2 text-gray-800">
                    <strong>User Mobile:</strong> {task.userMobile}
                  </p>
                  <p className="mb-2 text-gray-800">
                    <strong>Location:</strong> {task.location}
                  </p>
                  <p className="mb-2 text-gray-800">
                    <strong>Due Date:</strong> {formatDate(task.dueDate)}
                  </p>
                  <button
                    className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
                    onClick={() => handleStatusChange(task._id, task.userEmail)}
                  >
                    Pending
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No tasks assigned.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TraderAccount;
