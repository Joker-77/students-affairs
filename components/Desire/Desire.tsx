import { MenuItem, Select, Grid } from "@material-ui/core";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import RootRef from "@material-ui/core/RootRef";

interface IPermission {
  id: number;
  name: string;
}
interface IPrivilegeProps {
  index: number;
  id: number;
  name: string;
  permissions: IPermission[];
  selectedPermission: number;
  type: number;
  changePermissionType(id, val, type): void;
}
const Privilege: React.FC<IPrivilegeProps> = ({
  index,
  id,
  name,
  permissions,
  selectedPermission,
  type,
  changePermissionType,
}) => {
  const onChangeRole = (event) => {
    let _val = event.target.value as string;
    changePermissionType(id, _val, type);
  };
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
            {name}
          </Grid>
          <Grid xs={12} sm={12} md={4}>
            <Select value={selectedPermission} onChange={onChangeRole}>
              {permissions != null &&
                permissions.length > 0 &&
                permissions.map((item, ind) => {
                  return (
                    <MenuItem key={ind} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </Grid>
        </Grid>
      )}
    </Draggable>
  );
};

export default Privilege;
export type { IPermission, IPrivilegeProps };
