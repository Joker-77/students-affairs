import React, { useEffect } from "react";
import { Button, AccordionDetails, Accordion, Typography } from "@material-ui/core";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import { ExportToCsv } from "export-to-csv";
import {
    ICandidateModel,
} from "../../../../Models/ApiResponse/CandidateModel";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import CandidateService from "../../../../Services/CandidateService";
import SearchAddCandidateModal from "../../../../components/Modals/SearchAddCandidateModal";
import * as Yup from "yup";
import { useRouter } from 'next/router';
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import SuiButton from "../../../../components/SuiButton";
import { setCandidate, useAppDispatch } from "../../../../redux";
import AddTestResultsFileModal from "../../../../components/Modals/AddTestResultsFileModal";
import AddCandidateOutSideMinistryModal from "../../../../components/Modals/AddCandidateOutSideMinistryModal";
import _ from "lodash";
import { Description } from "@material-ui/icons";

interface ICandidatesListProps {
    forRegistrations: boolean;
    title: string;
    customColumns: any[];
}
const CandidatesList: React.FC<ICandidatesListProps> = ({
    forRegistrations = false,
    title,
    customColumns,
}) => {

    const router = useRouter();
    const { translate } = useTranslation();
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const dispatch = useAppDispatch();

    const [open, setOpen] = React.useState(false);
    const [searchResult, setSearchResult] = React.useState(null);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setSearchResult(null);
        setOpen(false);
    };
    const [initAddCandidate, setInitAddCandidate] = React.useState<object>({
        subscription_number: "",
        year: "",
        governorate: "",
        round: "",
    });

    const AddCandidateScheme = Yup.object().shape({
        subscription_number: Yup.string().required(translate("{0} is required", "Subscription number")),
        year: Yup.string().required(translate("{0} is required", "Year")),
        governorate: Yup.string().required(translate("{0} is required", "City")),
        round: Yup.string().required(translate("{0} is required", "Round")),
    });

    const [openTestResults, setOpenTestResults] = React.useState(false);

    const handleOpenTestResults = () => {
        setOpenTestResults(true);
    };
    const handleCloseTestResults = () => {
        setOpenTestResults(false);
    };

    const [openOutsideCandidate, setOpenOutsideCandidate] = React.useState(false);

    const handleOpenOutsideCandidate = () => {
        setOpenOutsideCandidate(true);
    };
    const handleCloseOutsideCandidate = () => {
        setOpenOutsideCandidate(false);
    };

    const submitSearchCandidate = async (values: any, setSubmitting) => {
        setSubmitting(true);
        CandidateService.Search(values)
            .then((res) => {
                setSearchResult({ found: Boolean(res.result), result: res.result });
                // setOpen(false);
            })
            .catch((error) => {
                console.error("error", error);
            })
            .finally(() => {
                setSubmitting(false);
            });
        ;
    };

    const submitAddCandidate = async (values: any, setSubmitting) => {
        setSubmitting(true);
        CandidateService.AddAfterSearch(values)
            .then((res) => {
                const candidatesCopy = [res.result, ...Candidates];
                setCandidates(candidatesCopy);
                handleClose();
                dispatch(setCandidate(res.result));
                router.push(`/${router.locale}/students_affairs/affairs_officer/candidates/candidate-details`)
            })
            .catch((error) => {
                console.error("error", error);
            })
            .finally(() => {
                setSubmitting(false);
            });
        ;
    };

    const [loading, setLoading] = React.useState(false);
    /************************** Data ****************************/
    useEffect(() => {
        setLoading(true);
        CandidateService.GetAll()
            .then((res) => {
                console.log("Candidates", res);
                var list = forRegistrations ? res.result ?.filter(item => item.registerations ?.length > 0) : res.result;
                // if(forRegistrations) {
                //     list = list.map(item => {
                //         return {
                //             ...item,
                //             class_id: registerations[0].status,//registerations[0].status
                //             status_id: registerations[0].status,
                //         }
                //     });
                // }
                setCandidates(list);
            })
            .catch((error) => {
                console.error("error", error);
            }).finally(() => {
                setLoading(false);
            });
    }, []);
    /************************** Finish Data ****************************/
    let columns = [
        {
            title: translate("Id"),
            field: "id",
            hidden: true,
            filtering: false,
        },
        {
            title: translate("Name"),
            field: "full_name",
            filtering: false,
        },
        {
            title: translate("Father"),
            field: "father.first_name",
            hidden: true,
            filtering: false,
        },
        {
            title: translate("Mother"),
            field: "mother.first_name",
            hidden: true,
            filtering: false,
        },
        {
            title: translate("Registeration number"),
            field: "registeration_number",
            filtering: false,
            type: "string",
        },
        {
            title: translate("Subscription number"),
            field: "certificates[0].subscription_number",
            filtering: false,
        },
        {
            title: translate("City"),
            field: "certificates[0].city",
            filtering: false,
        },
        {
            title: translate("Round"),
            field: "certificates[0].round",
            filtering: false,
        },

        {
            title: translate("Subscription number"),
            field: "certificates[0].subscription_number",
            hidden: true,
            filtering: false,
        }
        // {
        //     title: translate("Result"),
        //     field: "certificates[0].result",
        // },
    ];
    const [Candidates, setCandidates] = React.useState<ICandidateModel[]>(null);
    const renderCandidates = () => {
        if (loading) return <Placeholder loading />
        if (Candidates != null && Candidates.length > 0) {
            let data = Candidates;
            let options = {
                exportAllData: true,
                exportButton: true,
                actionsColumnIndex: -1,
                headerStyle: {
                    backgroundColor: "#01579b",
                    color: "#FFF",
                    fontWeight: "bold",
                },
                filtering: true,
                paging: true,
                pageSize: 10,
                maxBodyHeight: "500px",
            };
            const btnLabel = !forRegistrations ? "Candidate Details" : "Edit Registration";
            const btnPage = !forRegistrations ? "candidate-details" : "edit-registration";
            let actions = [
                {
                    icon: () => <SuiButton style={{ minWidth: 140 }} color={'primary'}>{translate(btnLabel)}</SuiButton>,
                    onClick: (evt, data) => {
                        dispatch(setCandidate(data));
                        router.push(`/${router.locale}/students_affairs/affairs_officer/candidates/${btnPage}`)
                    },
                },
            ];
            return (
                <ActionTable
                    Title={title || translate("Candidates List")}
                    Columns={customColumns || columns}
                    Data={data.map(item => { return { ...item, full_name: `${item.person ?.first_name} ${item.father ?.first_name} ${item.person ?.last_name}` } })}
                    Options={options}
                    Actions={actions}
                />
            );
        } else return <Placeholder />;
    };

    // Dynamic Export
    const [showExportColumns, setShowExportColumns] = React.useState(false);
    const [selectedColumns, setSelectedColumns] = React.useState([]);
    const [checked, setChecked] = React.useState([]);
    const handleExportData = () => {
        setShowExportColumns(!showExportColumns);
    };
    const csvOptions = {
        fieldSeparator: ",",
        quoteStrings: '"',
        decimalSeparator: ".",
        showLabels: true,
        useBom: true,
        useKeysAsHeaders: false,
        headers: selectedColumns.map((c) => c.title),
    };
    const csvExporter = new ExportToCsv(csvOptions);
    const generateExcel = () => {
        csvExporter.generateCsv(
            Candidates.map((ct) => {
                let object = {};
                selectedColumns.forEach((item, index) => {
                    if (item.field == "full_name")
                        _.set(object, `col ${index}`, `${ct.person ?.first_name} ${ct.father ?.first_name} ${ct.person ?.last_name}`);
                    else
                        _.set(object, `col ${index}`, _.get(ct, item.field) ?? "");
                });
                console.log(object);
                return object;
            })
        );
    };
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        setSelectedColumns(
            columns.filter((item) => {
                return updatedList.includes(item.field);
            })
        );
    };
    return (
        <GridContainer>
            <GridItem md={12}>
                {!forRegistrations && (
                    <React.Fragment>
                        <Button style={{ marginLeft: 10 }}
                            disabled={false}
                            variant="contained"
                            className={classes.submitBtn}
                            onClick={handleOpen}
                        >
                            {translate("Add New Candidate")}
                        </Button>
                        <Button style={{ marginLeft: 10 }}
                            disabled={false}
                            variant="contained"
                            className={classes.submitBtn}
                            onClick={handleOpenOutsideCandidate}
                        >
                            {translate("Add Candidate")} {translate("out-side of ministry data")}
                        </Button>
                        <SuiButton style={{ marginLeft: 10 }}
                            disabled={false}
                            variant="gradient"
                            onClick={handleOpenTestResults}
                            color={'dark'}
                        >
                            {translate("Add acceptance test results")}
                        </SuiButton>
                        <SuiButton style={{ marginLeft: 10 }}
                            disabled={false}
                            variant="gradient"
                            onClick={handleExportData}
                            color={'dark'}
                        >
                            {translate("Export")}
                        </SuiButton>
                    </React.Fragment>
                )}
                {showExportColumns && (
                    <GridItem>
                        <Accordion>
                            <AccordionDetails>
                                <GridItem container>
                                    <GridItem
                                        md={12}
                                        style={{ display: "flex", justifyContent: "center" }}
                                    >
                                        <Typography
                                            style={{
                                                backgroundColor: "lightgray",
                                                boxShadow:
                                                    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                                                padding: "0em 1.2em",
                                                margin: "0em 0em .5em 0em",
                                            }}
                                        >
                                            {translate("Select Columns")}
                                        </Typography>
                                    </GridItem>
                                    <GridItem md={12}>
                                        <GridItem
                                            className="list-container"
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            {columns
                                                // .filter((item) => !item.hidden)
                                                .map((item, index) => (
                                                    <GridItem key={index}>
                                                        <input
                                                            value={item.field}
                                                            type="checkbox"
                                                            onChange={handleCheck}
                                                        />
                                                        <span>{item.title}</span>
                                                    </GridItem>
                                                ))}
                                        </GridItem>
                                        <GridItem
                                            md={12}
                                            style={{ display: "flex", justifyContent: "center" }}
                                        >
                                            <Button
                                                style={{ margin: "0px 5px" }}
                                                disabled={false}
                                                variant="contained"
                                                className={classes.successText}
                                                onClick={generateExcel}
                                            >
                                                <span style={{ padding: "0px 0px 0px 10px" }}>
                                                    {translate("Export")}
                                                </span>
                                                <Description />
                                            </Button>
                                        </GridItem>
                                    </GridItem>
                                </GridItem>
                            </AccordionDetails>
                        </Accordion>
                    </GridItem>
                )}
                {renderCandidates()}
            </GridItem>
            <SearchAddCandidateModal
                searchResult={searchResult}
                onAddClick={submitAddCandidate}
                key={"addCandidate"}
                title={translate("Add Candidate")}
                open={open}
                formScheme={AddCandidateScheme}
                handleClose={handleClose}
                initValues={initAddCandidate}
                submitForm={submitSearchCandidate}
            ></SearchAddCandidateModal>
            <AddTestResultsFileModal
                key={"addAcceptanceTestResults"}
                title={translate("Add acceptance test results")}
                open={openTestResults}
                handleClose={handleCloseTestResults}
                submitForm={() => handleCloseTestResults()}
            ></AddTestResultsFileModal>
            <AddCandidateOutSideMinistryModal
                key={"addOutsideCandidate"}
                // title={translate("Add acceptance test results")}
                open={openOutsideCandidate}
                handleClose={handleCloseOutsideCandidate}
            ></AddCandidateOutSideMinistryModal>
        </GridContainer>
    );
};
(CandidatesList as any).auth = true;
(CandidatesList as any).layout = Admin;
export default CandidatesList;
