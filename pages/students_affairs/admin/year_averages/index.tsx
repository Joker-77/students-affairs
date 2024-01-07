import React, { useEffect, useState } from "react"
import Admin from "../../../../layouts/Admin";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { Divider, Typography, makeStyles } from "@material-ui/core";
import YearAveragesSelector from "../../../../components/marks/averages/YearAveragesSelector";
import YearAveragesFilters from "../../../../components/marks/averages/YearAveragesFilters";
import YearAveragesTable from "../../../../components/marks/averages/YearAveragesTable";
import YearAveragesFooter from "../../../../components/marks/averages/YearAveragesFooter";

interface IYearAveragesProps { }

const YearAverages: React.FC<IYearAveragesProps> = ({ }) => {
    const { translate } = useTranslation();
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [specialty, setSpecialty] = useState(null);
    const [year, setYear] = useState(null);
    const [admissionYears, setAdmissionYears] = useState([]);
    const [admissionYear, setAdmissionYear] = useState(null);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (year) {
            //**TODO */
        }
    }, [specialty, year]);

    useEffect(() => {
        let _filteredData = data;
        if (admissionYear) {
            //**TODO */
        }
    }, [admissionYear]);

    useEffect(() => {
        //**TODO */
    }, [data]);

    const calculateAverage = () => {
        //**TODO */
    }

    const saveAverages = () => {
        //**TODO */
    }

    const lock = () => {
        //**TODO */
    }

    return (
        <GridContainer>
            <GridContainer md={12}>
                <GridItem
                    style={{ margin: "-1em 0 1em 0" }}
                    md={12}
                    className={classes.typography}
                >
                    <Typography variant="h5" component="div">
                        {translate("Calculate Students Averages in a Studying Year")}
                    </Typography>
                </GridItem>
            </GridContainer>
            <GridContainer md={12}>
                <GridItem md={12}>
                    <YearAveragesSelector
                        setSpecialty={setSpecialty}
                        setYear={setYear}
                    />
                </GridItem>
            </GridContainer>
            <GridContainer md={12}>
                <GridItem md={12}>
                    <YearAveragesFilters
                        admissionYears={admissionYears}
                        setAdmissionYear={setAdmissionYear}
                        handleCalculateAverages={calculateAverage}
                    />
                </GridItem>
            </GridContainer>
            <GridContainer md={12}>
                <GridItem md={12}>
                    <YearAveragesTable
                        specialty={specialty}
                        year={year}
                        data={filteredData}
                    />
                </GridItem>
            </GridContainer>
            <GridContainer md={12}>
                <Divider />
            </GridContainer>
            <GridContainer md={12}>
                <GridItem md={12}>
                    <YearAveragesFooter
                        handleSaveAverages={saveAverages}
                        handleLock={lock}
                    />
                </GridItem>
            </GridContainer>
        </GridContainer>
    );
}

(YearAverages as any).auth = true;
(YearAverages as any).layout = Admin;
export default YearAverages;