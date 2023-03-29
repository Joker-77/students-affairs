import React, {useState} from "react";

// core components
import {Card} from "@material-ui/core";
import PropTypes from "prop-types";
import colors from "../../assets/theme/base/colors";

export default function TabsMenu({tabs}) {

  const [selectedTab, setSelectedTab] = useState(tabs && tabs.length > 0 ? tabs[0].id : null);

  const labelStyle = {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
  };
  const cardStyle = {
    position: 'relative',
    minHeight: 40,
    marginTop: 5,
    borderRadius: 0,
  };

  const selectedTabDiv = {
    height: '100%',
    position: 'absolute',
    width: 5,
    backgroundColor: colors.primary.main,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  };

  const onSelect = (id) => {
    setSelectedTab(id);
  }
  return (
    <div>
      {tabs.map(({id, name}) => (
        <a href={`#${id}`} onClick={() => onSelect(id)}>
          <Card style={cardStyle}>
            {id === selectedTab && <div style={selectedTabDiv}/>}
            <div style={labelStyle}>{name}</div>
          </Card>
        </a>
      ))}
    </div>
  );
}

TabsMenu.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  year: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
};
