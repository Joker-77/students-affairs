import React, { ReactNode, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Button,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { ITableAction } from "../../Models/Action";

interface ITableProps {
  metaData: string[];
  metDataCount: number;
  data: any[];
  dataEachPropsCount: number;
  hasActions: boolean;
  actions: ITableAction[];
}
const MTable: React.FC<ITableProps> = ({
  metaData,
  metDataCount,
  data,
  dataEachPropsCount,
  hasActions,
  actions,
}) => {
  const [_data, setData] = React.useState(data);
  const [_metaData, setMetaData] = React.useState(metaData);
  const [_dataEachPropsCount, setDataEachPropsCount] =
    React.useState(dataEachPropsCount);
  let calcWidth = 100 / _dataEachPropsCount;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    console.log(data);
    setData(data);
    setMetaData(metaData);
    setDataEachPropsCount(dataEachPropsCount);
  }, [data]);

  const dataRow = (row) => {
    return (
      <TableRow>
        {Object.entries(row).map(([rowId, rowData], index) => {
          return (
            <TableCell
              align="center"
              style={{ width: `${calcWidth}%` }}
              key={index}
            >
              {rowData as ReactNode}
            </TableCell>
          );
        })}
        {
          <TableCell
            align="center"
            style={{ width: `${calcWidth}%` }}
            key={
              actions != null && actions.length > 0
                ? actions.length.toString()
                : "0"
            }
          >
            {hasActions &&
              actions != null &&
              actions.length > 0 &&
              actions.map((action, index) => {
                return (
                  <Button
                    variant="contained"
                    startIcon={<Edit />}
                    onClick={action.onClick(row)}
                  >
                    Edit
                  </Button>
                );
              })}
          </TableCell>
        }
      </TableRow>
    );
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {_metaData.map((item, index) => {
                return <TableCell align="center">{item}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {_data != null &&
              _data.length > 0 &&
              _data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return dataRow(row);
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={_data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default MTable;
