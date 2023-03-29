import { MenuItem, Select, Grid } from "@material-ui/core";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

interface IDesireProps {
  index: number;
  id: number;
  name: string;
  type: number;
}
const Desire: React.FC<IDesireProps> = ({
  index,
  id,
  name,
  type,
}) => {
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided, snapshot) => (
        <Grid
          container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            padding: "5px 5px",
            borderRadius: "10px",
            margin: "5px 0",
          }}
        >
          <Grid xs={12} sm={12} md={8} style={{ marginTop: ".5em" }}>
            <b>{index+1}.</b> {name}
          </Grid>
        </Grid>
      )}
    </Draggable>
  );
};

export default Desire;
