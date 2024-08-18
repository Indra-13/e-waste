// import React, { useContext, useEffect, useState } from 'react'
// import SummaryApi from '../common'
// import Context from '../context'
// import displayINRCurrency from '../helpers/displayCurrency'
// import { MdDelete } from "react-icons/md";

// const Cart = () => {
//     const [data,setData] = useState([])
//     const [loading,setLoading] = useState(false)
//     const context = useContext(Context)
//     const loadingCart = new Array(4).fill(null)


//     const fetchData = async() =>{
        
//         const response = await fetch(SummaryApi.addToCartProductView.url,{
//             method : SummaryApi.addToCartProductView.method,
//             credentials : 'include',
//             headers : {
//                 "content-type" : 'application/json'
//             },
//         })
       

//         const responseData = await response.json()

//         if(responseData.success){
//             setData(responseData.data)
//         }


//     }

//     const handleLoading = async() =>{
//         await fetchData()
//     }

//     useEffect(()=>{
//         setLoading(true)
//         handleLoading()
//          setLoading(false)
//     },[])


//     const increaseQty = async(id,qty) =>{
//         const response = await fetch(SummaryApi.updateCartProduct.url,{
//             method : SummaryApi.updateCartProduct.method,
//             credentials : 'include',
//             headers : {
//                 "content-type" : 'application/json'
//             },
//             body : JSON.stringify(
//                 {   
//                     _id : id,
//                     quantity : qty + 1
//                 }
//             )
//         })

//         const responseData = await response.json()


//         if(responseData.success){
//             fetchData()
//         }
//     }


//     const decraseQty = async(id,qty) =>{
//        if(qty >= 2){
//             const response = await fetch(SummaryApi.updateCartProduct.url,{
//                 method : SummaryApi.updateCartProduct.method,
//                 credentials : 'include',
//                 headers : {
//                     "content-type" : 'application/json'
//                 },
//                 body : JSON.stringify(
//                     {   
//                         _id : id,
//                         quantity : qty - 1
//                     }
//                 )
//             })

//             const responseData = await response.json()


//             if(responseData.success){
//                 fetchData()
//             }
//         }
//     }

//     const deleteCartProduct = async(id)=>{
//         const response = await fetch(SummaryApi.deleteCartProduct.url,{
//             method : SummaryApi.deleteCartProduct.method,
//             credentials : 'include',
//             headers : {
//                 "content-type" : 'application/json'
//             },
//             body : JSON.stringify(
//                 {   
//                     _id : id,
//                 }
//             )
//         })

//         const responseData = await response.json()

//         if(responseData.success){
//             fetchData()
//             context.fetchUserAddToCart()
//         }
//     }

//     const totalQty = data.reduce((previousValue,currentValue)=> previousValue + currentValue.quantity,0)
//     const totalPrice = data.reduce((preve,curr)=> preve + (curr.quantity * curr?.productId?.sellingPrice) ,0)
//   return (
//     <div className="container mx-auto">
//       <div className="text-center text-lg my-3">
//         {data.length === 0 && !loading && (
//           <p className="bg-white py-5">No Data</p>
//         )}
//       </div>

//       <div className="flex flex-col lg:flex-row gap-10 lg:justify-between p-4">
//         {/***view product */}
//         <div className="w-full max-w-3xl">
//           {loading
//             ? loadingCart?.map((el, index) => {
//                 return (
//                   <div
//                     key={el + "Add To Cart Loading" + index}
//                     className="w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded"
//                   ></div>
//                 );
//               })
//             : data.map((product, index) => {
//                 return (
//                   <div
//                     key={product?._id + "Add To Cart Loading"}
//                     className="w-full bg-white h-32 my-2 border border-slate-300  rounded grid grid-cols-[128px,1fr]"
//                   >
//                     <div className="w-32 h-32 bg-slate-200">
//                       <img
//                         src={product?.productId?.productImage[0]}
//                         className="w-full h-full object-scale-down mix-blend-multiply"
//                       />
//                     </div>
//                     <div className="px-4 py-2 relative">
//                       {/**delete product */}
//                       <div
//                         className="absolute right-0 text-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white cursor-pointer"
//                         onClick={() => deleteCartProduct(product?._id)}
//                       >
//                         <MdDelete />
//                       </div>

//                       <h2 className="text-lg lg:text-xl text-ellipsis line-clamp-1">
//                         {product?.productId?.productName}
//                       </h2>
//                       <p className="capitalize text-slate-500">
//                         {product?.productId.category}
//                       </p>
//                       <div className="flex items-center justify-between">
//                         <p className="text-blue-600 font-medium text-lg">
//                           {displayINRCurrency(product?.productId?.sellingPrice)}
//                         </p>
//                         <p className="text-slate-600 font-semibold text-lg">
//                           {displayINRCurrency(
//                             product?.productId?.sellingPrice * product?.quantity
//                           )}
//                         </p>
//                       </div>
//                       <div className="flex items-center gap-3 mt-1">
//                         <button
//                           className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-6 h-6 flex justify-center items-center rounded "
//                           onClick={() =>
//                             decraseQty(product?._id, product?.quantity)
//                           }
//                         >
//                           -
//                         </button>
//                         <span>{product?.quantity}</span>
//                         <button
//                           className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-6 h-6 flex justify-center items-center rounded "
//                           onClick={() =>
//                             increaseQty(product?._id, product?.quantity)
//                           }
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//         </div>

//         {/***summary  */}
//         <div className="mt-5 lg:mt-0 w-full max-w-sm">
//           {loading ? (
//             <div className="h-36 bg-slate-200 border border-slate-300 animate-pulse"></div>
//           ) : (
//             <div className="h-36 bg-white">
//               <h2 className="text-white bg-blue-600 px-4 py-1">Summary</h2>
//               <div className="flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600">
//                 <p>Quantity</p>
//                 <p>{totalQty}</p>
//               </div>

//               <div className="flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600">
//                 <p>Total Price</p>
//                 <p>{displayINRCurrency(totalPrice)}</p>
//               </div>
//               <div>
//                 <button className="bg-blue-600  hover:bg-blue-500 p-2 text-white  mt-2 rounded-full">
//                   Apply Reward
//                 </button>
//               </div>

//               <button className="bg-blue-600 p-2 text-white w-full mt-2">
//                 Payment
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart

// import React, { useContext, useEffect, useState } from 'react';
// import SummaryApi from '../common';
// import Context from '../context';
// import displayINRCurrency from '../helpers/displayCurrency';
// import { MdDelete } from "react-icons/md";
// import { useSelector } from "react-redux";
// import { useSnackbar } from "notistack";

// const Cart = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [rewardPoints, setRewardPoints] = useState(0);
//     const [appliedRewardPoints, setAppliedRewardPoints] = useState(0);
//     const context = useContext(Context);
//     const loadingCart = new Array(4).fill(null);
//     const user = useSelector((state) => state?.user?.user);
//     const { enqueueSnackbar } = useSnackbar();

//     const fetchRewardPoints = async () => {
//         if (user) {
//             try {
//                 const response = await fetch(
//                     `${SummaryApi.getUserRewardPoints.url}?userEmail=${encodeURIComponent(user.email)}`,
//                     {
//                         method: "GET",
//                         headers: {
//                             "Content-Type": "application/json",
//                         },
//                     }
//                 );

//                 const data = await response.json();

//                 if (data.success) {
//                     setRewardPoints(data.data.points);
//                 } else {
//                     enqueueSnackbar(data.message, { variant: "error" });
//                 }
//             } catch (error) {
//                 enqueueSnackbar("An error occurred while fetching reward points.", {
//                     variant: "error",
//                 });
//             }
//         }
//     };

//     const fetchData = async () => {
//         const response = await fetch(SummaryApi.addToCartProductView.url, {
//             method: SummaryApi.addToCartProductView.method,
//             credentials: 'include',
//             headers: {
//                 "content-type": 'application/json'
//             },
//         });

//         const responseData = await response.json();

//         if (responseData.success) {
//             setData(responseData.data);
//         }
//     };

//     const handleLoading = async () => {
//         await fetchData();
//     };

//     useEffect(() => {
//         setLoading(true);
//         handleLoading();
//         fetchRewardPoints();
//         setLoading(false);
//     }, []);

//     const increaseQty = async (id, qty) => {
//         const response = await fetch(SummaryApi.updateCartProduct.url, {
//             method: SummaryApi.updateCartProduct.method,
//             credentials: 'include',
//             headers: {
//                 "content-type": 'application/json'
//             },
//             body: JSON.stringify(
//                 {
//                     _id: id,
//                     quantity: qty + 1
//                 }
//             )
//         });

//         const responseData = await response.json();

//         if (responseData.success) {
//             fetchData();
//         }
//     };

//     const decreaseQty = async (id, qty) => {
//         if (qty >= 2) {
//             const response = await fetch(SummaryApi.updateCartProduct.url, {
//                 method: SummaryApi.updateCartProduct.method,
//                 credentials: 'include',
//                 headers: {
//                     "content-type": 'application/json'
//                 },
//                 body: JSON.stringify(
//                     {
//                         _id: id,
//                         quantity: qty - 1
//                     }
//                 )
//             });

//             const responseData = await response.json();

//             if (responseData.success) {
//                 fetchData();
//             }
//         }
//     };

//     const deleteCartProduct = async (id) => {
//         const response = await fetch(SummaryApi.deleteCartProduct.url, {
//             method: SummaryApi.deleteCartProduct.method,
//             credentials: 'include',
//             headers: {
//                 "content-type": 'application/json'
//             },
//             body: JSON.stringify(
//                 {
//                     _id: id,
//                 }
//             )
//         });

//         const responseData = await response.json();

//         if (responseData.success) {
//             fetchData();
//             context.fetchUserAddToCart();
//         }
//     };

//     const applyReward = () => {
//         if (rewardPoints > 0 && totalPrice > 0) {
//             if (rewardPoints <= totalPrice) {
//                 setAppliedRewardPoints(rewardPoints);
//             } else {
//                 setAppliedRewardPoints(totalPrice);
//             }
//             enqueueSnackbar("Reward points applied successfully!", { variant: "success" });
//         } else {
//             enqueueSnackbar("No reward points to apply.", { variant: "info" });
//         }
//     };
   


//     const proceedToPayment = () => {
//         // You can add your payment logic here, using the final price
//         const finalPrice = totalPrice - appliedRewardPoints;
//         enqueueSnackbar(`Proceeding to payment. Total Amount: ${displayINRCurrency(finalPrice)}`, { variant: "info" });
//         // Redirect to payment page or perform payment action here
//     };

//     const totalQty = data.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0);
//     const totalPrice = data.reduce((preve, curr) => preve + (curr.quantity * curr?.productId?.sellingPrice), 0);
//     const discountedPrice = totalPrice - appliedRewardPoints;

//     return (
//         <div className="container mx-auto">
//             <div className="text-center text-lg my-3">
//                 {data.length === 0 && !loading && (
//                     <p className="bg-white py-5">No Data</p>
//                 )}
//             </div>

//             <div className="flex flex-col lg:flex-row gap-10 lg:justify-between p-4">
//                 {/***view product */}
//                 <div className="w-full max-w-3xl">
//                     {loading
//                         ? loadingCart?.map((el, index) => {
//                             return (
//                                 <div
//                                     key={el + "Add To Cart Loading" + index}
//                                     className="w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded"
//                                 ></div>
//                             );
//                         })
//                         : data.map((product, index) => {
//                             return (
//                                 <div
//                                     key={product?._id + "Add To Cart Loading"}
//                                     className="w-full bg-white h-32 my-2 border border-slate-300  rounded grid grid-cols-[128px,1fr]"
//                                 >
//                                     <div className="w-32 h-32 bg-slate-200">
//                                         <img
//                                             src={product?.productId?.productImage[0]}
//                                             className="w-full h-full object-scale-down mix-blend-multiply"
//                                         />
//                                     </div>
//                                     <div className="px-4 py-2 relative">
//                                         {/**delete product */}
//                                         <div
//                                             className="absolute right-0 text-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white cursor-pointer"
//                                             onClick={() => deleteCartProduct(product?._id)}
//                                         >
//                                             <MdDelete />
//                                         </div>

//                                         <h2 className="text-lg lg:text-xl text-ellipsis line-clamp-1">
//                                             {product?.productId?.productName}
//                                         </h2>
//                                         <p className="capitalize text-slate-500">
//                                             {product?.productId.category}
//                                         </p>
//                                         <div className="flex items-center justify-between">
//                                             <p className="text-blue-600 font-medium text-lg">
//                                                 {displayINRCurrency(product?.productId?.sellingPrice)}
//                                             </p>
//                                             <p className="text-slate-600 font-semibold text-lg">
//                                                 {displayINRCurrency(
//                                                     product?.productId?.sellingPrice * product?.quantity
//                                                 )}
//                                             </p>
//                                         </div>
//                                         <div className="flex items-center gap-3 mt-1">
//                                             <button
//                                                 className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-6 h-6 flex justify-center items-center rounded "
//                                                 onClick={() =>
//                                                     decreaseQty(product?._id, product?.quantity)
//                                                 }
//                                             >
//                                                 -
//                                             </button>
//                                             <span>{product?.quantity}</span>
//                                             <button
//                                                 className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-6 h-6 flex justify-center items-center rounded "
//                                                 onClick={() =>
//                                                     increaseQty(product?._id, product?.quantity)
//                                                 }
//                                             >
//                                                 +
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                 </div>

//                 {/***summary  */}
//                 <div className="mt-5 lg:mt-0 w-full max-w-sm">
//                     {loading ? (
//                         <div className="h-36 bg-slate-200 border border-slate-300 animate-pulse"></div>
//                     ) : (
//                         <div className="h-36 bg-white">
//                             <h2 className="text-white bg-blue-600 px-4 py-1">Summary</h2>
//                             <div className="flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600">
//                                 <p>Quantity</p>
//                                 <p>{totalQty}</p>
//                             </div>

//                             <div className="flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600">
//                                 <p>Total Price</p>
//                                 <p>{displayINRCurrency(totalPrice)}</p>
//                             </div>

//                             {appliedRewardPoints > 0 && (
//                                 <div className="flex items-center justify-between px-4 gap-2 font-semibold text-lg text-green-600">
//                                     <p>Reward Discount</p>
//                                     <p>-{displayINRCurrency(appliedRewardPoints)}</p>
//                                 </div>
//                             )}

//                             <div className="flex items-center justify-between px-4 gap-2 font-semibold text-lg text-blue-600">
//                                 <p>Final Price</p>
//                                 <p>{displayINRCurrency(discountedPrice)}</p>
//                             </div>

//                             <div className="flex flex-col px-4  mt-2">
//                                 <button
//                                     className="text-white bg-red-600 rounded py-1"
//                                     onClick={applyReward}
//                                 >
//                                     Apply Reward
//                                 </button>
//                             </div>

//                             <div className="flex flex-col px-4 mt-2">
//                                 <button
//                                     className="text-white bg-blue-600 rounded py-1"
//                                     onClick={proceedToPayment}
//                                 >
//                                     Proceed to Payment
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;
import React, { useContext, useEffect, useState } from "react";
import SummaryApi from "../common";
import Context from "../context";
import displayINRCurrency from "../helpers/displayCurrency";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rewardPoints, setRewardPoints] = useState(0);
  const [appliedRewardPoints, setAppliedRewardPoints] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0); // Add totalPrice state
  const context = useContext(Context);
  const loadingCart = new Array(4).fill(null);
  const user = useSelector((state) => state?.user?.user);
  const { enqueueSnackbar } = useSnackbar();

  const fetchRewardPoints = async () => {
    if (user) {
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
          console.log("Fetched Reward Points:", data.data.points);
        } else {
          enqueueSnackbar(data.message, { variant: "error" });
        }
      } catch (error) {
        enqueueSnackbar("An error occurred while fetching reward points.", {
          variant: "error",
        });
      }
    }
  };

  const fetchData = async () => {
    const response = await fetch(SummaryApi.addToCartProductView.url, {
      method: SummaryApi.addToCartProductView.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });

    const responseData = await response.json();

    if (responseData.success) {
      setData(responseData.data);
      // Calculate total price here
      const price = responseData.data.reduce(
        (total, product) =>
          total + product.quantity * product?.productId?.sellingPrice,
        0
      );
      setTotalPrice(price);
    }
  };

  const handleLoading = async () => {
    await fetchData();
  };

  useEffect(() => {
    setLoading(true);
    handleLoading();
    fetchRewardPoints();
    setLoading(false);
  }, []);

  const increaseQty = async (id, qty) => {
    const response = await fetch(SummaryApi.updateCartProduct.url, {
      method: SummaryApi.updateCartProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        quantity: qty + 1,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
    }
  };

  const decreaseQty = async (id, qty) => {
    if (qty >= 2) {
      const response = await fetch(SummaryApi.updateCartProduct.url, {
        method: SummaryApi.updateCartProduct.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          quantity: qty - 1,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        fetchData();
      }
    }
  };

  const deleteCartProduct = async (id) => {
    const response = await fetch(SummaryApi.deleteCartProduct.url, {
      method: SummaryApi.deleteCartProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
      context.fetchUserAddToCart();
    }
  };

  const applyReward = async () => {
    if (rewardPoints > 0 && totalPrice > 0) {
      const pointsToApply =
        rewardPoints <= totalPrice ? rewardPoints : totalPrice;
      console.log("Applying Reward Points:", pointsToApply);

      try {
        const response = await fetch(`${SummaryApi.reduceRewardPoints.url}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: user.email,
            pointsToReduce: pointsToApply,
          }),
        });

        const data = await response.json();

        if (data.success) {
          setAppliedRewardPoints(pointsToApply);
          setRewardPoints(rewardPoints - pointsToApply);
          console.log("Points Applied:", pointsToApply);
          enqueueSnackbar("Reward points applied successfully!", {
            variant: "success",
          });
        } else {
          enqueueSnackbar(data.message, { variant: "error" });
        }
      } catch (error) {
        enqueueSnackbar("An error occurred while applying reward points.", {
          variant: "error",
        });
      }
    } else {
      enqueueSnackbar("No reward points to apply.", { variant: "info" });
    }
  };

  const proceedToPayment = () => {
    // You can add your payment logic here, using the final price
    const finalPrice = totalPrice - appliedRewardPoints;
    enqueueSnackbar(
      `Proceeding to payment. Total Amount: ${displayINRCurrency(finalPrice)}`,
      { variant: "info" }
    );
    // Redirect to payment page or perform payment action here
  };

  const totalQty = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );

  const discountedPrice = totalPrice - appliedRewardPoints;

  return (
    <div className="container mx-auto">
      <div className="text-center text-lg my-3">
        {data.length === 0 && !loading && (
          <p className="bg-white py-5">No Data</p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:justify-between p-4">
        {/***view product */}
        <div className="w-full max-w-3xl">
          {loading
            ? loadingCart?.map((el, index) => {
                return (
                  <div
                    key={el + "Add To Cart Loading" + index}
                    className="w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded"
                  ></div>
                );
              })
            : data.map((product, index) => {
                return (
                  <div
                    key={product?._id + "Add To Cart Loading"}
                    className="w-full bg-white h-32 my-2 border border-slate-300  rounded grid grid-cols-[128px,1fr]"
                  >
                    <div className="w-32 h-32 bg-slate-200">
                      <img
                        src={product?.productId?.productImage[0]}
                        className="w-full h-full object-scale-down mix-blend-multiply"
                      />
                    </div>
                    <div className="px-4 py-2 relative">
                      {/**delete product */}
                      <div
                        className="absolute right-0 text-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white cursor-pointer"
                        onClick={() => deleteCartProduct(product?._id)}
                      >
                        <MdDelete />
                      </div>

                      <h2 className="text-lg lg:text-xl text-ellipsis line-clamp-1">
                        {product?.productId?.productName}
                      </h2>
                      <p className="capitalize text-slate-500">
                        {product?.productId.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-blue-600 font-medium text-lg">
                          {displayINRCurrency(product?.productId?.sellingPrice)}
                        </p>
                        <p className="text-slate-600 font-semibold text-lg">
                          {displayINRCurrency(
                            product?.productId?.sellingPrice * product?.quantity
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <button
                          className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-6 h-6 flex justify-center items-center rounded "
                          onClick={() =>
                            decreaseQty(product?._id, product?.quantity)
                          }
                        >
                          -
                        </button>
                        <p className="text-blue-600">{product?.quantity}</p>
                        <button
                          className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-6 h-6 flex justify-center items-center rounded "
                          onClick={() =>
                            increaseQty(product?._id, product?.quantity)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>

        <div className="w-full max-w-sm">
          <div className="p-4 bg-white border border-slate-300 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-8">Cart Summary</h2>
            <div className="flex justify-between py-1 border-b font-semibold border-slate-300">
              <p>Total Quantity:</p>
              <p>{totalQty}</p>
            </div>
            <div className="flex justify-between py-1 border-b font-semibold border-slate-300">
              <p>Total Price:</p>
              <p>{displayINRCurrency(totalPrice)}</p>
            </div>
            <div className="flex justify-between py-1 border-b font-semibold border-slate-300">
              <p>Reward Points Available:</p>
              <p>{rewardPoints}</p>
            </div>
            <div className="flex justify-between py-1 border-b font-semibold border-slate-300">
              <p>Applied Reward Points:</p>
              <p>{appliedRewardPoints}</p>
            </div>
            <div className="flex justify-between py-1 border-b font-semibold border-slate-300">
              <p>Discounted Price:</p>
              <p>{displayINRCurrency(discountedPrice)}</p>
            </div>
            <div className="flex flex-col gap-2 pt-10 py-2">
              <button
                className="bg-red-600 text-white py-2 rounded hover:bg-red-700"
                onClick={applyReward}
              >
                Apply Reward
              </button>
              <button
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                onClick={proceedToPayment}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
