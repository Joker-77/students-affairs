import React, { ChangeEvent, Dispatch, useState } from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import { useTranslation } from "../../../Utility/Translations/useTranslation";
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, makeStyles } from "@material-ui/core";
import { FilterList } from "@material-ui/icons";
import { IEduYearModel } from "../../../Models/EduYear/EduYearModel";
import styles from "../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";

interface IYearAveragesFiltersProps {
    admissionYears: Array<IEduYearModel>;
    setAdmissionYear: Dispatch<React.SetStateAction<any>>;
    handleCalculateAverages: () => void;
}

const YearAveragesFilters: React.FC<IYearAveragesFiltersProps> = ({ admissionYears, setAdmissionYear, handleCalculateAverages }) => {
    const { translate } = useTranslation();
    const [selectedAdmissionYear, setSelectedAdmissionYear] = useState(null);
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    const handleAdmissionYearChange = (event) => {
        let yearId = event.target.value;
        setSelectedAdmissionYear(yearId);
        setAdmissionYear(yearId);
    }

    return (
        <GridContainer md={12} style={{ margin: "2em 0em" }}>
            <GridItem style={{ marginBottom: "1em", marginTop: "2em" }}>
                <FormControl
                    size="small"
                    variant="outlined"
                    style={{ minWidth: 150, margin: "0 0 0 1em" }}
                >
                    <InputLabel
                        style={{ display: "flex" }}
                        shrink
                        htmlFor="admission-year-filter"
                    >
                        <span>{translate("Filter")}</span>
                        <FilterList />
                    </InputLabel>
                    <Select
                        id="select-admission-year"
                        value={selectedAdmissionYear}
                        onChange={handleAdmissionYearChange}
                        input={
                            <OutlinedInput
                                notched
                                labelWidth={50}
                                name="filter"
                                id="admission-year-filter"
                            />
                        }
                    >
                        {admissionYears.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.year}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </GridItem>
            <GridItem style={{ marginBottom: "1em", marginTop: "2em" }}>
                <Button
                    variant="contained"
                    className={classes.submitBtn}
                    onClick={handleCalculateAverages}
                >
                    {translate("Calculate Average")}
                </Button>
            </GridItem>
        </GridContainer>
    );
}

export default YearAveragesFilters;