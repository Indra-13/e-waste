import SummaryApi from "../common";
import { enqueueSnackbar } from "notistack";

const addToCart = async (e, id) => {
  e?.stopPropagation();
  e?.preventDefault();

  const response = await fetch(SummaryApi.addToCartProduct.url, {
    method: SummaryApi.addToCartProduct.method,
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ productId: id }),
  });

  const responseData = await response.json();

  if (responseData.success) {
    enqueueSnackbar(responseData.message, { variant: "success" });
  } else if (responseData.error) {
    enqueueSnackbar(responseData.message, { variant: "error" });
  }

  return responseData;
};

export default addToCart;
