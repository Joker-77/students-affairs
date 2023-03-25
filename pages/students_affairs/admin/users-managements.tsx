import React, { useState } from "react";
import Admin from "../../../layouts/Admin";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { TextField, Button, Grid } from "@material-ui/core";
import Privilege from "../../../components/Privilege/Privilege";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";

function UsersManagement() {
  resetServerContext();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  let sysOpts = [
    {
      id: "1",
      name: "Accepted Students",
      permissions: [
        {
          id: 1,
          name: "Read Only",
        },
        {
          id: 2,
          name: "Write & Read",
        },
      ],
      selectedPermission: 1,
    },
    {
      id: "2",
      name: "Another One",
      permissions: [
        {
          id: 1,
          name: "Read Only",
        },
        {
          id: 2,
          name: "Write & Read",
        },
      ],
      selectedPermission: 1,
    },
    {
      id: "3",
      name: "Another One 1",
      permissions: [
        {
          id: 1,
          name: "Read Only",
        },
        {
          id: 2,
          name: "Write & Read",
        },
      ],
      selectedPermission: 1,
    },
  ];
  const privilegeStatus = {
    system: {
      type: 1,
      name: "System Permissions",
      items: sysOpts,
    },
    user: {
      type: 2,
      name: "User Permissions",
      items: [],
    },
  };
  const changePermissionType = (id, val, type) => {
    let _item = columns.system.items.find((e) => e.id == id.toString());
    if (!!_item) {
      let _sysOpts = columns.system;
      _item = _sysOpts.items.find((e) => e.id == id.toString());
      let itemIndex = _sysOpts.items.indexOf(_item);
      console.log(itemIndex, _item);
      _item.selectedPermission = parseInt(val);
      _sysOpts.items[itemIndex] = _item;
      console.log("result", {
        ["system"]: _sysOpts,
        ["user"]: columns.user,
      });
      setColumns({
        ["system"]: _sysOpts,
        ["user"]: columns.user,
      });
    } else {
      let item = columns.user.items.find((e) => e.id == id.toString());
      let _userPrivlgs = columns.user;
      let itemIndex = _userPrivlgs.items.indexOf(item);
      item.selectedPermission = parseInt(val);
      _userPrivlgs.items[itemIndex] = item;
      console.log("result", {
        ["system"]: columns.system,
        ["user"]: _userPrivlgs,
      });
      setColumns({
        ["system"]: columns.system,
        ["user"]: _userPrivlgs,
      });
    }
  };
  const onDragEnd = (result, columns, setColumns) => {
    console.log(result, columns);
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
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
    }
  };
  const [columns, setColumns] = useState(privilegeStatus);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Users Definitions</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  {/* <Box mb={1} ml={0.5}>
                  <Typography
                    className={classes.typography}
                    component="label"
                    variant="caption"
                  >
                    Username
                  </Typography>
                </Box> */}
                  <TextField
                    //onChange={handleChange}
                    required
                    label="Username"
                    variant="standard"
                    size="small"
                    type="email"
                    id="email"
                    name="email"
                    className={classes.textField}
                    //   value={values.email}
                    //   onBlur={handleBlur}
                    //   error={Boolean(touched.email && errors.email)}
                    //   helperText={touched.email && errors.email}
                    //   placeholder="example@hiast.edu.sy"
                    //   fullWidth
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  {/* <Box mb={1} ml={0.5}>
                  <Typography
                    className={classes.typography}
                    component="label"
                    variant="caption"
                  >
                    Password
                  </Typography>
                </Box> */}
                  <TextField
                    //onChange={handleChange}
                    required
                    label="Password"
                    variant="standard"
                    size="small"
                    type="password"
                    id="password"
                    name="password"
                    className={classes.textField}
                    //   value={values.email}
                    //   onBlur={handleBlur}
                    //   error={Boolean(touched.email && errors.email)}
                    //   helperText={touched.email && errors.email}
                    //   placeholder="example@hiast.edu.sy"
                    //   fullWidth
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  {/* <Box mb={1} ml={0.5}>
                  <Typography
                    className={classes.typography}
                    component="label"
                    variant="caption"
                  >
                    Confirm Password
                  </Typography>
                </Box> */}
                  <TextField
                    //onChange={handleChange}
                    required
                    label="Confirm Password"
                    variant="standard"
                    size="small"
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    className={classes.textField}
                    //   value={values.email}
                    //   onBlur={handleBlur}
                    //   error={Boolean(touched.email && errors.email)}
                    //   helperText={touched.email && errors.email}
                    //   placeholder="example@hiast.edu.sy"
                    //   fullWidth
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2} style={{ marginTop: ".5em" }}>
                  <Button
                    disabled={false}
                    variant="contained"
                    className={classes.submitBtn}
                    fullWidth
                  >
                    Submit
                  </Button>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <Grid container xs={12} md={12} sm={12}>
          {Object.entries(columns).map(([columnId, column], index) => {
            console.log("idddd", columnId);
            return (
              <Grid
                md={6}
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
                  <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>{column.name}</h4>
                  </CardHeader>
                  <CardBody>
                    <Grid container md={12}>
                      <Grid md={8}>System Options</Grid>
                      <Grid md={4}>Permission Type</Grid>
                    </Grid>
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
                              padding: 4,
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
                                          borderRadius: "12px",
                                          backgroundColor: snapshot.isDragging
                                            ? "#263B4A"
                                            : "#456C86",
                                          color: "white",
                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        <Privilege
                                          id={item.id}
                                          index={index}
                                          name={item.name}
                                          permissions={item.permissions}
                                          key={item.id}
                                          selectedPermission={
                                            item.selectedPermission
                                          }
                                          type={column.type}
                                          changePermissionType={
                                            changePermissionType
                                          }
                                        ></Privilege>
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
