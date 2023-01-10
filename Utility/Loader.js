import React from "react";
import LoaderGif from "../../assets/images/workganizerloader.gif";
const loader = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={LoaderGif}
        className="loader"
      />
    </div>
  );
};

export default loader;
