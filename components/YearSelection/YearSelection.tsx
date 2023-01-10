import { Box, MenuItem, Select } from "@material-ui/core";
import React from "react";

interface IYearSelectionProps {
  data: any[];
  selectedId: string;
  changeYear(event: any): void;
}
const YearSelection: React.FC<IYearSelectionProps> = ({
  data,
  selectedId,
  changeYear,
}) => {
  console.log("years", data);
  return (
    <Select onChange={changeYear} value={selectedId}>
      {data != null &&
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <MenuItem key={index} value={item.id}>
              {item.value}
            </MenuItem>
          );
        })}
    </Select>
  );
};

export default YearSelection;
