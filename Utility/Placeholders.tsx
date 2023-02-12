import React from "react";
import Search from "@material-ui/icons/Search";
import {primaryColor} from "assets/jss/nextjs-material-dashboard.js";
import {useTranslation} from "./Translations/useTranslation";

interface IPlaceholderProps {}
const Placeholder: React.FC<IPlaceholderProps> = () => {

  const {translate} = useTranslation();
  let imgContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    fontSize: 20,
    color: 'gray'
  };
  let iconStyle = {
    color: primaryColor,
    marginHorizontal: 10,
  }
  return (
    <div className="img-container" style={imgContainerStyle}>
      <Search style={iconStyle} /> <span>{translate('No data found')}</span>
    </div>
  );
};

export default Placeholder;
