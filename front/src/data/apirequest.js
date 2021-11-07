import React from "react";

async function apirequest({ link, method, rawData, ...props }) {
  const APILINK = "http://127.0.0.1:8000/api/item";

  //New request
  var CustomHeader = new Headers();

  // If the RawData is not string we stingify if -> We must not apply stringify twice
  let data;
  if (typeof rawData === "string") {
    data = rawData;
  } else {
    data = JSON.stringify(rawData);
  }

  var requestOptions = {
    method: method,
    headers: CustomHeader,
    body: data,
  };

  let response = await fetch(APILINK + link, requestOptions);
  let result = response.json();
  return result;
}

export default apirequest;
