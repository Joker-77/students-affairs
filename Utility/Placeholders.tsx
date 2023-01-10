import React from "react";
import placeholderImg from "../assets/img/no-result.gif";

interface IPlaceholderProps {}
const Placeholder: React.FC<IPlaceholderProps> = () => {
  let imgContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div className="img-container" style={imgContainerStyle}>
      <img src={placeholderImg} height={300} />
    </div>
  );
};

export default Placeholder;
