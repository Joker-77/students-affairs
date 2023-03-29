import React from "react";

// core components
import {Card} from "@material-ui/core";
import PropTypes from "prop-types";

export default function UserCard({name, image, id, year}) {

  const labelStyle = {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
  };
  const footerLabelStyle = {
    fontSize: 14,
    textAlign: 'center',
  };
  const imageStyle = {height: 50, alignSelf: 'center'};
  const cardStyle = {textAlign: 'center', position: 'relative', minHeight: 160, paddingTop: 20};
  const footerStyle = {display: 'flex', justifyContent: 'space-between', position: 'absolute', width: '100%', padding: 20};

  return (
    <Card style={cardStyle}>
      <svg style={{position: 'absolute', left: 0, top: 0}} width="73" height="116" viewBox="0 0 73 116" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="23" cy="39.5613" rx="50" ry="76.0796" fill="#FC7373" fill-opacity="0.04"/>
      </svg>
      <svg style={{position: 'absolute', left: 50, top: 50}} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.5" cy="7.5" r="7.5" fill="#FFF2F2"/>
      </svg>
      <svg style={{position: 'absolute', right: 0, bottom: 0}} width="70" height="55" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="76.2422" rx="50" ry="76.0796" fill="#FC7373" fill-opacity="0.04"/>
      </svg>

      <img style={imageStyle} src={image ? {uri: image} : require('../../assets/img/user.png')}/>
      <div style={labelStyle}>{name}</div>
      <div style={footerStyle}>
        <label style={footerLabelStyle}>{id}</label>
        <label style={footerLabelStyle}>{year}</label>
      </div>

    </Card>
  );
}

UserCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  year: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
};
