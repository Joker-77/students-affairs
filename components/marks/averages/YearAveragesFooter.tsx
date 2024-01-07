import React from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import { useTranslation } from "../../../Utility/Translations/useTranslation";
import { Button, makeStyles } from "@material-ui/core";
import styles from "../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";

interface IYearAveragesFooterProps {
    handleSaveAverages: () => void;
    handleLock: () => void;
}

const YearAveragesFooter: React.FC<IYearAveragesFooterProps> = ({ handleSaveAverages, handleLock }) => {
    const { translate } = useTranslation();
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <GridContainer md={12} style={{ margin: "2em 0em" }}>
            <GridItem md={2} style={{ marginBottom: "1em", marginTop: "2em" }}>
                <Button
                    variant="contained"
                    className={classes.submitBtn}
                    onClick={handleSaveAverages}
                    size="large"
                >
                    {translate("Save")}
                </Button>
            </GridItem>
            <GridItem md={2} style={{ marginBottom: "1em", marginTop: "2em" }}>
                <Button
                    variant="contained"
                    className={classes.closeBtn}
                    onClick={handleLock}
                    size="large"
                >
                    {translate("Lock")}
                </Button>
            </GridItem>
        </GridContainer>
    );
}

export default YearAveragesFooter;