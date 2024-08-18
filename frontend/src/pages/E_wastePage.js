
// import React, { useState } from "react";
// import { Typography, Container, Grid, Box, Button } from "@mui/material";
// import { AiOutlineUpload, AiOutlineGift, AiOutlineLink } from "react-icons/ai";
// import UploadProductForHome from "../components/UploadProductForHome";

// const E_wastePage = () => {
//   const [showUploadModal, setShowUploadModal] = useState(false);

//   // Function to show the upload modal
//   const handleButtonClick = () => {
//     setShowUploadModal(true);
//   };

//   // Function to close the upload modal
//   const handleCloseModal = () => {
//     setShowUploadModal(false);
//   };

//   // Function to fetch data (if needed)
//   const fetchData = () => {
//     // Add your data fetching logic here if needed
//   };

//   // Styling for hero sections
//   const heroStyle = {
//     position: "relative",
//     background: 'url("https://www.skygreenwaste.com/images/COLLECTION.png")',
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     color: "white",
//     textAlign: "center",
//     padding: "220px 0",
//   };

//   const heroStyle1 = {
//     marginTop: "50px",
//     background:
//       'url("https://provana.com/wp-content/uploads/2022/06/shutterstock_2010519671-1110x550.jpg")',
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     color: "white",
//     textAlign: "center",
//     padding: "200px 0",
//     width: "100%",
//   };

//   const imageSectionStyle = {
//     background: "white",
//     padding: "50px",
//     borderRadius: "10px",
//     textAlign: "center",
//     color: "black",
//   };

//   const imageStyle = {
//     maxWidth: "40%",
//     borderRadius: "10px",
//   };

//   const boxStyle = {
//     background: "#D7DBDD",
//     padding: "45px",
//     borderRadius: "5px",
//     color: "black",
//     textAlign: "center",
//   };

//   return (
//     <>
//       <Box sx={heroStyle}>
//         <Button
//           sx={{
//             position: "absolute",
//             bottom: "20px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             backgroundColor: "#28a745",
//             color: "white",
//             padding: "10px 20px",
//             textTransform: "uppercase",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             transition: "background-color 0.3s ease",
//             "&:hover": {
//               backgroundColor: "#218838",
//             },
//           }}
//           variant="contained"
//           onClick={handleButtonClick}
//         >
//           Upload Product
//         </Button>
//       </Box>

//       {/* Render the UploadProductForHome component conditionally */}
//       {showUploadModal && (
//         <UploadProductForHome
//           onClose={handleCloseModal}
//           fetchData={fetchData}
//         />
//       )}

//       <Grid container spacing={4} sx={imageSectionStyle}>
//         <Grid item xs={12} md={6}>
//           <img
//             src="https://taulia.com/wp-content/uploads/2023/04/Mask-Group-21@2x-375x291.png"
//             alt="SmallImage"
//             style={imageStyle}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h3" color="#1A5276" gutterBottom>
//             Environmental Benefits
//           </Typography>
//           <Typography variant="body1" paragraph>
//             One of the best and easiest methods of reducing the electronic waste
//             footprint is to sell or donate your electronic gadgets to those in
//             need. If you are planning on selling, you should be able to easily
//             find a buyer as they will have the opportunity to purchase the same
//             product at a much lower price than if it were new.
//           </Typography>
//         </Grid>
//       </Grid>

//       <Container sx={{ marginTop: "50px" }}>
//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={4}>
//             <Box sx={boxStyle}>
//               <AiOutlineUpload size={40} color="#1A5276" />
//               <Typography variant="h5" color="#1A5276" component="div">
//                 Upload E-Waste
//               </Typography>
//               <Typography component="div">
//                 Capture the picture of your e-waste and upload it to our
//                 platform. Our system will detect and classify the e-waste for
//                 proper handling.
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Box sx={boxStyle}>
//               <AiOutlineGift size={40} color="#1A5276" />
//               <Typography variant="h5" color="#1A5276" component="div">
//                 Earn Rewards
//               </Typography>
//               <Typography component="div">
//                 Once your e-waste is verified, earn reward points that can be
//                 used as discounts on new electronics purchased from our
//                 platform.
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Box sx={boxStyle}>
//               <AiOutlineLink size={40} color="#1A5276" />
//               <Typography variant="h5" color="#1A5276" component="div">
//                 Connect with Traders
//               </Typography>
//               <Typography component="div">
//                 Easily connect with traders for proper disposal. Find the
//                 nearest collector through our platform and ensure your e-waste
//                 is recycled efficiently.
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//       <Box sx={heroStyle1}></Box>
//     </>
//   );
// };

// export default E_wastePage;
// import React, { useState } from "react";
// import { Typography, Container, Grid, Box, Button } from "@mui/material";
// import { AiOutlineUpload, AiOutlineGift, AiOutlineLink } from "react-icons/ai";
// import { useSnackbar } from "notistack";
// import UploadProductForHome from "../components/UploadProductForHome";

// const E_wastePage = () => {
//   const { enqueueSnackbar } = useSnackbar();
//   const [showUploadModal, setShowUploadModal] = useState(false);

//   // Function to show the upload modal
//   const handleButtonClick = () => {
//     setShowUploadModal(true);
//   };

//   // Function to close the upload modal
//   const handleCloseModal = () => {
//     setShowUploadModal(false);
//   };

//   // Function to fetch data (if needed)
//   const fetchData = () => {
//     // Add your data fetching logic here if needed
//   };

//   const handleRewardPointsUpdate = (points) => {
//     enqueueSnackbar(`Reward points updated: ${points}`, {
//       variant: "success",
//     });
//   };

//   // Styling for hero sections
//   const heroStyle = {
//     position: "relative",
//     background: 'url("https://www.skygreenwaste.com/images/COLLECTION.png")',
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     color: "white",
//     textAlign: "center",
//     padding: "220px 0",
//   };

//   const heroStyle1 = {
//     marginTop: "50px",
//     background:
//       'url("https://provana.com/wp-content/uploads/2022/06/shutterstock_2010519671-1110x550.jpg")',
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     color: "white",
//     textAlign: "center",
//     padding: "200px 0",
//     width: "100%",
//   };

//   const imageSectionStyle = {
//     background: "white",
//     padding: "50px",
//     borderRadius: "10px",
//     textAlign: "center",
//     color: "black",
//   };

//   const imageStyle = {
//     maxWidth: "40%",
//     borderRadius: "10px",
//   };

//   const boxStyle = {
//     background: "#D7DBDD",
//     padding: "45px",
//     borderRadius: "5px",
//     color: "black",
//     textAlign: "center",
//   };

//   return (
//     <>
//       <Box sx={heroStyle}>
//         <Button
//           sx={{
//             position: "absolute",
//             bottom: "20px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             backgroundColor: "#28a745",
//             color: "white",
//             padding: "10px 20px",
//             textTransform: "uppercase",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             transition: "background-color 0.3s ease",
//             "&:hover": {
//               backgroundColor: "#218838",
//             },
//           }}
//           variant="contained"
//           onClick={handleButtonClick}
//         >
//           Upload Product
//         </Button>
//       </Box>

//       {/* Render the UploadProductForHome component conditionally */}
//       {showUploadModal && (
//         <UploadProductForHome
//           onClose={handleCloseModal}
//           fetchData={fetchData}
//           updateRewardPoints={handleRewardPointsUpdate}
//         />
//       )}

//       <Grid container spacing={4} sx={imageSectionStyle}>
//         <Grid item xs={12} md={6}>
//           <img
//             src="https://taulia.com/wp-content/uploads/2023/04/Mask-Group-21@2x-375x291.png"
//             alt="SmallImage"
//             style={imageStyle}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h3" color="#1A5276" gutterBottom>
//             Environmental Benefits
//           </Typography>
//           <Typography variant="body1" paragraph>
//             One of the best and easiest methods of reducing the electronic waste
//             footprint is to sell or donate your electronic gadgets to those in
//             need. If you are planning on selling, you should be able to easily
//             find a buyer as they will have the opportunity to purchase the same
//             product at a much lower price than if it were new.
//           </Typography>
//         </Grid>
//       </Grid>

//       <Container sx={{ marginTop: "50px" }}>
//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={4}>
//             <Box sx={boxStyle}>
//               <AiOutlineUpload size={40} color="#1A5276" />
//               <Typography variant="h5" color="#1A5276" component="div">
//                 Upload E-Waste
//               </Typography>
//               <Typography component="div">
//                 Capture the picture of your e-waste and upload it to our
//                 platform. Our system will detect and classify the e-waste for
//                 proper handling.
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Box sx={boxStyle}>
//               <AiOutlineGift size={40} color="#1A5276" />
//               <Typography variant="h5" color="#1A5276" component="div">
//                 Earn Rewards
//               </Typography>
//               <Typography component="div">
//                 Once your e-waste is verified, earn reward points that can be
//                 used as discounts on new electronics purchased from our
//                 platform.
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Box sx={boxStyle}>
//               <AiOutlineLink size={40} color="#1A5276" />
//               <Typography variant="h5" color="#1A5276" component="div">
//                 Connect with Traders
//               </Typography>
//               <Typography component="div">
//                 Easily connect with traders for proper disposal. Find the
//                 nearest collector through our platform and ensure your e-waste
//                 is recycled efficiently.
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//       <Box sx={heroStyle1}></Box>
//     </>
//   );
// };

// export default E_wastePage;
import React, { useState } from "react";
import { Typography, Container, Grid, Box, Button } from "@mui/material";
import { AiOutlineUpload, AiOutlineGift, AiOutlineLink } from "react-icons/ai";

import UploadProductForHome from "../components/UploadProductForHome";

const E_wastePage = () => {

  const [showUploadModal, setShowUploadModal] = useState(false);
 

  // Function to show the upload modal
  const handleButtonClick = () => {
    setShowUploadModal(true);
  };

  // Function to close the upload modal
  const handleCloseModal = () => {
    setShowUploadModal(false);
  };

 

  // Styling for hero sections
  const heroStyle = {
    position: "relative",
    background: 'url("https://www.skygreenwaste.com/images/COLLECTION.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    padding: "220px 0",
  };

  const heroStyle1 = {
    marginTop: "50px",
    background:
      'url("https://provana.com/wp-content/uploads/2022/06/shutterstock_2010519671-1110x550.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    textAlign: "center",
    padding: "200px 0",
    width: "100%",
  };

  const imageSectionStyle = {
    background: "white",
    padding: "50px",
    borderRadius: "10px",
    textAlign: "center",
    color: "black",
  };

  const imageStyle = {
    maxWidth: "40%",
    borderRadius: "10px",
  };

  const boxStyle = {
    background: "#D7DBDD",
    padding: "45px",
    borderRadius: "5px",
    color: "black",
    textAlign: "center",
  };

  return (
    <>
      <Box sx={heroStyle}>
        <Button
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px 20px",
            textTransform: "uppercase",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#218838",
            },
          }}
          variant="contained"
          onClick={handleButtonClick}
        >
          Upload Product
        </Button>
      </Box>

      {/* Render the UploadProductForHome component conditionally */}
      {showUploadModal && <UploadProductForHome onClose={handleCloseModal} />}

      <Grid container spacing={4} sx={imageSectionStyle}>
        <Grid item xs={12} md={6}>
          <img
            src="https://taulia.com/wp-content/uploads/2023/04/Mask-Group-21@2x-375x291.png"
            alt="SmallImage"
            style={imageStyle}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="#1A5276" gutterBottom>
            Environmental Benefits
          </Typography>
          <Typography variant="body1" paragraph>
            One of the best and easiest methods of reducing the electronic waste
            footprint is to sell or donate your electronic gadgets to those in
            need. If you are planning on selling, you should be able to easily
            find a buyer as they will have the opportunity to purchase the same
            product at a much lower price than if it were new.
          </Typography>
        </Grid>
      </Grid>

      <Container sx={{ marginTop: "50px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box sx={boxStyle}>
              <AiOutlineUpload size={40} color="#1A5276" />
              <Typography variant="h5" color="#1A5276" component="div">
                Upload E-Waste
              </Typography>
              <Typography component="div">
                Capture the picture of your e-waste and upload it to our
                platform. Our system will detect and classify the e-waste for
                proper handling.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={boxStyle}>
              <AiOutlineLink size={40} color="#1A5276" />
              <Typography variant="h5" color="#1A5276" component="div">
                Connect with Traders
              </Typography>
              <Typography component="div">
                Easily connect with traders for proper disposal. Find the
                nearest collector through our platform and ensure your e-waste
                is recycled efficiently.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={boxStyle}>
              <AiOutlineGift size={40} color="#1A5276" />
              <Typography variant="h5" color="#1A5276" component="div">
                Earn Rewards
              </Typography>
              <Typography component="div">
                Once your e-waste is verified, earn reward points that can be
                used as discounts on new electronics purchased from our
                platform.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={heroStyle1}></Box>
    </>
  );
};

export default E_wastePage;
