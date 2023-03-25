import React, { useState } from "react";
import Admin from "../../../../layouts/Admin";
import Card from "../../../../components/Card/Card.js";
import CardHeader from "../../../../components/Card/CardHeader.js";
import CardBody from "../../../../components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { Grid } from "@material-ui/core";
import Desire from "../../../../components/Desire/Desire";

import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";
import {useTranslation} from "../../../../Utility/Translations/useTranslation";

function UsersManagement() {
  resetServerContext();
  const {translate} = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const specialities = [];

  const privilegeStatus = {
    system: {
      type: 1,
      name: translate('Desires'),
      items: specialities,
    },
  };

  const onDragEnd = (result, columns, setColumns) => {
    console.log(result, columns);
    if (!result.destination) return;
    const { source, destination } = result;

    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });

  };
  const [columns, setColumns] = useState(privilegeStatus);

  return (
      <div>
        <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          <Grid container xs={12} md={12} sm={12}>
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                  <Grid
                      md={8}
                      xs={12}
                      sm={12}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      key={columnId}
                  >
                    <Card>
                      <CardHeader>
                        <h4 style={{ fontWeight: "bold", color: "#01579b" }}>{column.name}</h4>
                      </CardHeader>
                      <CardBody>
                        <Droppable droppableId={columnId} key={columnId}>
                          {(provided, snapshot) => {
                            return (
                                <Grid
                                    md={12}
                                    container
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={{
                                      background: snapshot.isDraggingOver
                                          ? "lightblue"
                                          : "lightgrey",
                                      padding: 20,
                                      borderRadius: 10,
                                    }}
                                >
                                  {column.items.map((item, index) => {
                                    return (
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}
                                        >
                                          {(provided, snapshot) => {
                                            return (
                                                <Grid
                                                    md={12}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                      userSelect: "none",
                                                      margin: "3px 0 3px 0",
                                                      padding: "0 20px",
                                                      borderRadius: "12px",
                                                      backgroundColor: snapshot.isDragging
                                                          ? "#c2c2c2"
                                                          : "white",
                                                      color: "black",
                                                      ...provided.draggableProps.style,
                                                    }}
                                                >
                                                  <Desire
                                                      id={item.id}
                                                      index={index}
                                                      name={item.ar_name}
                                                      key={item.id}
                                                      type={column.type}
                                                  ></Desire>
                                                </Grid>
                                            );
                                          }}
                                        </Draggable>
                                    );
                                  })}
                                  {provided.placeholder}
                                </Grid>
                            );
                          }}
                        </Droppable>
                      </CardBody>
                    </Card>
                  </Grid>
              );
            })}
          </Grid>
        </DragDropContext>
      </div>
  );
}

(UsersManagement as any).layout = Admin;
(UsersManagement as any).auth = false;
export default UsersManagement;
