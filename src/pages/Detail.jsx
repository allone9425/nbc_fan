import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { data } from "shared/data";

function Detail() {
  const params = useParams();

  const foundData = data.find((item) => {
    return item.id === params.id;
  });
  //console.log("params", params);
  //console.log("found", foundData);
  return (
    <div>
      <h3>{foundData.id}</h3>
      <p>{foundData.nickname}</p>
      <p>{foundData.content}</p>
      <p>{foundData.writedTo}</p>
    </div>
  );
}

export default Detail;
