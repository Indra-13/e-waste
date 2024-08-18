import React, { useEffect, useState } from "react";

import SummaryApi from "../common";
import AdminEwasteCard from "../components/AdminEwasteCard";
import UploadProductForHome from "../components/UploadProductForHome";


const AllEWaste = () => {
  const [openUploadEwaste, setOpenUploadEwaste] = useState(false);
  const [allEwaste, setAllEwaste] = useState([]);

  const fetchAllEwaste = async () => {
    const response = await fetch(SummaryApi.allEWaste.url);
    const dataResponse = await response.json();

    console.log("e-waste data", dataResponse);

    setAllEwaste(dataResponse?.data || []);
  };

  useEffect(() => {
    fetchAllEwaste();
  }, []);

  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">ALL E-WASTE</h2>
       
      </div>

      {/**all e-waste */}
      <div className="flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll">
        {allEwaste.map((ewaste, index) => {
          return (
            <AdminEwasteCard
              data={ewaste}
              key={index + "allEwaste"}
              fetchData={fetchAllEwaste}
            />
          );
        })}
      </div>

      {/**upload e-waste component */}
      {openUploadEwaste && (
        <UploadProductForHome
          onClose={() => setOpenUploadEwaste(false)}
          fetchData={fetchAllEwaste}
        />
      )}
    </div>
  );
};

export default AllEWaste;
