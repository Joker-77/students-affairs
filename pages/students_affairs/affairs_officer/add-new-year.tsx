import React, { useState } from "react";
import { Grid, Tab, Tabs, AppBar, Button, Paper, Box } from "@material-ui/core";
import Admin from "../../../layouts/Admin";
import SwipeableViews from "react-swipeable-views";
import TabPanel from "../../../components/TabPanel/TabPanel";
import MTable from "../../../components/MaterialTable/MTable";
import CopyMaterials from "../../../components/CopyMaterials/CopyMaterials";
import styles from "../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
interface IAddNewYearProps {
  layout: any;
  auth: boolean;
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const AddNewYear: React.FC<IAddNewYearProps> = ({
  layout,
  auth,
  children,
  dir,
  index,
  value,
}) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [privatevalue, setValue] = React.useState(value);
  const [selectedYear, setYear] = React.useState("");
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const a11yProps = (index: number) => {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  };
  function createData(name: string, year: string) {
    return { name, year };
  }

  function createYear(id: number, value: string) {
    return { id, value };
  }

  const years = [
    createYear(1, "First Year"),
    createYear(2, "Second Year"),
    createYear(3, "Third Year"),
    createYear(4, "Fourth Year"),
    createYear(5, "Fifth Year"),
  ];

  const changeYear = (event) => {
    setYear(event.target.value as string);
  };
  const _rows = [
    createData("2018", "2018-2019"),
    createData("2019", "2019-2020"),
    createData("2020", "2020-2021"),
    createData("2021", "2021-2022"),
  ];

  const OpenYear = () => {
    let year = parseInt(rows[rows.length - 1].name) + 1;
    rows.push(
      createData(year.toString(), `${year.toString()}-${(year + 1).toString()}`)
    );
    setRows(rows);
    setLength(rows.length);
    console.log(rows);
  };
  const [rows, setRows] = React.useState(_rows);
  const [rowsLenght, setLength] = React.useState(_rows.length);
  const metData = ["Year", "University Year"];
  const metDataCount = metData.length;
  const dataEachProps =
    rows != null && rows.length > 0 ? Object.entries(rows[0]).length : 0;

  return (
    <GridContainer>
      <GridItem md={12}>
        <AppBar position="static">
          <Tabs
            value={privatevalue}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Open new year" {...a11yProps(0)} />
            <Tab label="Import students result" {...a11yProps(1)} />
            <Tab label="Copy materials" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={privatevalue}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={privatevalue} index={0} /* dir={theme.direction} */>
            <MTable
              key={rowsLenght.toString()}
              dataEachPropsCount={dataEachProps}
              data={rows}
              metaData={metData}
              metDataCount={metDataCount}
            ></MTable>
            <Button
              disabled={false}
              variant="contained"
              className={classes.submitBtn}
              fullWidth
              onClick={OpenYear}
            >
              {"Open New Year"}
            </Button>
          </TabPanel>
          <TabPanel value={privatevalue} index={1} /* dir={theme.direction} */>
            <CopyMaterials
              changeYear={changeYear}
              data={years}
              selectedId={selectedYear}
              name={"Import Student Results"}
              size={3}
            ></CopyMaterials>
          </TabPanel>
          <TabPanel value={privatevalue} index={2} /* dir={theme.direction} */>
            <CopyMaterials
              changeYear={changeYear}
              data={years}
              selectedId={selectedYear}
              name={"Copy Materials"}
              size={2}
            ></CopyMaterials>
          </TabPanel>
        </SwipeableViews>
      </GridItem>
    </GridContainer>
  );
};

(AddNewYear as any).layout = Admin;
(AddNewYear as any).auth = false;
export default AddNewYear;
