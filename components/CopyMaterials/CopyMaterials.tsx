import { Box, Button, Grid, MenuItem, Select } from "@material-ui/core";
import React from "react";
import YearSelection from "../YearSelection/YearSelection";
import styles from "../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";

interface ICopyMaterialsProps {
  data: any[];
  selectedId: string;
  changeYear(event: any): void;
  name: string;
  size: number;
}
const CopyMaterials: React.FC<ICopyMaterialsProps> = ({
  data,
  selectedId,
  changeYear,
  name,
  size,
}) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Box sx={{ bgcolor: "background.paper", width: 1200 }}>
      <Grid container spaceing={2}>
        <Grid md={4}>
          <YearSelection
            changeYear={changeYear}
            data={data}
            selectedId={selectedId}
          ></YearSelection>
        </Grid>
        <Grid md={size}>
          <Button
            disabled={false}
            variant="contained"
            className={classes.submitBtn}
            fullWidth
          >
            {name}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CopyMaterials;
