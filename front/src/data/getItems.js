import React from "react";
import apirequest from "./apirequest";
async function getItems() {
  const response = await apirequest({
    link: "/",
    method: "GET",
  });
  return response;
}

export default getItems;
