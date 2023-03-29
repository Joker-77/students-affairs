import React from "react";
import Search from "@material-ui/icons/Search";
import {primaryColor} from "assets/jss/nextjs-material-dashboard.js";
import {useTranslation} from "./Translations/useTranslation";
import {CircularProgress} from "@material-ui/core";

interface IPlaceholderProps {loading: false}
const Placeholder: React.FC<IPlaceholderProps> = ({loading}) => {

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
        {loading ? <CircularProgress /> :
            <React.Fragment><Search style={iconStyle} />
              <span>{translate('No data found')}
              </span></React.Fragment>}
      </div>
  );
};

export default Placeholder;
