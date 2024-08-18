import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import SummaryApi from "../common";

const RewardSystem = () => {
  const user = useSelector((state) => state?.user?.user);
  const [rewardPoints, setRewardPoints] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchRewardPoints = async () => {
      try {
        const response = await fetch(
          `${SummaryApi.getUserRewardPoints.url}?userEmail=${encodeURIComponent(
            user.email
          )}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (data.success) {
          setRewardPoints(data.data.points);
        } else {
          enqueueSnackbar(data.message, { variant: "error" });
        }
      } catch (error) {
        enqueueSnackbar("An error occurred while fetching reward points.", {
          variant: "error",
        });
      }
    };

    if (user) {
      fetchRewardPoints();
    }
  }, [user, enqueueSnackbar]);

  return (
    <div className="p-6 max-w-3xl mx-auto mt-5 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        My Reward Points
      </h1>
      <p className="text-xl text-gray-700">
        You have <span className="font-semibold">{rewardPoints}</span> reward
        points.
      </p>
    </div>
  );
};

export default RewardSystem;
