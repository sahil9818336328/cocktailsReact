import React from "react";
import loading from "../loading.gif";

const Loading = () => {
  return (
    <div className="loader-container">
      <img src={loading} alt="loading" className="loader" />
    </div>
  );
};

export default Loading;
