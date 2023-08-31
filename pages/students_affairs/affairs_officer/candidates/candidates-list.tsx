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
import DesireService from '../../../../Services/DesireService';

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
    const [Candidates, setCandidates] = React.useState<ICandidateModel[]>(null);
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [searchResult, setSearchResult] = React.useState(null);
    const [items, setItems] = React.useState([]);
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
        CandidateService.AddAfterSearch({ ...values, external: 0 })
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

    /************************** Data ****************************/
    const getCandidates = async () => {
        var result = await CandidateService.GetAll()
            .then((res) => {
                console.clear();
                console.log(res);
                return forRegistrations ? res.result ?.filter(item => item.registerations ?.length > 0) : res.result;
            })
            .catch((error) => {
                console.error("error", error);
            })
        return result;
    }
    useEffect(() => {
        setLoading(true);
        setItems([]);
        getCandidates().then(res => {
            setCandidates(res);
            setLoading(false);
        })
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
            title: translate("Ministry External"),
            field: "external_value",
            filtering: false,
        },
        {
            title: translate("Registration Year"),
            field: "registeration_year_name",
            filtering: false,
        }
        // {
        //     title: translate("Result"),
        //     field: "certificates[0].result",
        // },
    ];
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
                    Data={data.map(item => { return { ...item, registeration_year_name: item.registeration_year == new Date().getFullYear() ? 'الحالي' : 'السابق', external_value: item.external ? translate("Yes") : translate("No"), full_name: `${item.person ?.first_name} ${item.father ?.first_name} ${item.person ?.last_name}` } })}
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
        fieldSeparator: ";",
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
    const handleAllExportData = () => {
        let allColumns = [
            {
                title: "رقم التسجيل",
                field: "registeration_number",
                hidden: true,
                filtering: false,
            },
            {
                title: "الاسم الثلاثي",
                field: "full_name",
                filtering: false,
            },
            {
                title: "رقم الاكتتاب",
                field: "certificates[0].subscription_number",
                hidden: true,
                filtering: false,
            },
            {
                title: "المحافظة",
                field: "certificates[0].city",
                filtering: false,
                type: "string",
            },
            {
                title: "الدورة",
                field: "certificates[0].round",
                filtering: false,
            },
            {
                title: "2400",
                field: "certificates[0].result",
                filtering: false,
            },
            {
                title: "رياضيات",
                field: "certificates[0].details[4].value",
                filtering: false,
            },
            {
                title: "فيزياء",
                field: "certificates[0].details[5].value",
                filtering: false,
            },
            {
                title: "كيمياء",
                field: "certificates[0].details[6].value",
                filtering: false,
            },
            {
                title: "3600",
                field: "registerations[0].mark_3600",
                filtering: false,
            },
            {
                title: "الهاتف",
                field: "person.phones[0].phone",
                filtering: false,
            },
            {
                title: "مكان امتحان القبول",
                field: "exam_place",
                filtering: false,
            },
            {
                title: "امتحان قبول الرياضيات",
                field: "registerations[0].math",
                filtering: false,
            },
            {
                title: "امتحان قبول الفيزياء",
                field: "registerations[0].physics",
                filtering: false,
            },
            {
                title: "3400",
                field: "registerations[0].mark_3400",
                filtering: false,
            },
            {
                title: "حالة القبول",
                field: "registerations[0].status",
                filtering: false,
            },
            {
                title: translate("Ministry External"),
                field: "external",
                filtering: false,
            },
            {
                title: "أولى",
                field: "desires[0].speciality.ar_name",
                filtering: false,
            },
            {
                title: "ثانية",
                field: "desires[1].speciality.ar_name",
                filtering: false,
            },
            {
                title: "ثالثة",
                field: "desires[2].speciality.ar_name",
                filtering: false,
            },
            {
                title: "رابعة",
                field: "desires[3].speciality.ar_name",
                filtering: false,
            },
            {
                title: "خامسة",
                field: "desires[4].speciality.ar_name",
                filtering: false,
            },
            {
                title: "سادسة",
                field: "desires[5].speciality.ar_name",
                filtering: false,
            },
            {
                title: "مثبتة",
                field: "selected_desire?.speciality_name",
                filtering: false,
            },

            {
                title: translate("Registration Year"),
                field: "registeration_year",
                filtering: false,
            },
            {
                title: "فئة التسجيل",
                field: "registeration_class",
                filtering: false,
            },
            {
                title: "مكان الدراسة",
                field: "study_place",
                filtering: false,
            }
        ];
        let localCsvOptions = {
            fieldSeparator: ";",
            quoteStrings: '"',
            decimalSeparator: ".",
            showLabels: true,
            useBom: true,
            useKeysAsHeaders: false,
            headers: allColumns.map((c) => c.title),
        };
        let localCsvExporter = new ExportToCsv(localCsvOptions);
        setTimeout(() => {
            localCsvExporter.generateCsv(
                Candidates.map((ct) => {
                    let object = {};
                    allColumns.forEach((item, index) => {
                        if (item.field == "full_name")
                            _.set(object, `col ${index}`, `${ct.person ?.first_name} ${ct.father ?.first_name} ${ct.person ?.last_name}`);
                        else if (item.field == "registerations[0].mark_3600") {
                            let value = parseInt(ct ?.certificates[0] ?.result) + parseInt(ct.certificates[0] ?.details[4] ?.value) + parseInt(ct.certificates[0] ?.details[5] ?.value) + parseInt(ct.certificates[0] ?.details[6] ?.value);
                            _.set(object, `col ${index}`, `${value}`);
                        }
                        else if (item.field == "registerations[0].mark_3400") {
                            if (ct ?.registerations ?.length > 0) {
                                let value = parseInt(ct ?.certificates[0] ?.result) + parseInt(ct ?.registerations[0] ?.math) + parseInt(ct ?.registerations[0] ?.physics);
                                _.set(object, `col ${index}`, `${value}`);
                            }
                            else
                                _.set(object, `col ${index}`, "");
                        }
                        else if (item.field == "external") {
                            let value = ct.external == 0 ? "وزارة" : "خارج الوزارة";
                            _.set(object, `col ${index}`, `${value}`);
                        }
                        else
                            _.set(object, `col ${index}`, _.get(ct, item.field) ?? "");
                    });
                    return object;
                })
            );
        }, 2000);
    }
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
                <SuiButton style={{ marginLeft: 10 }}
                    disabled={false}
                    variant="gradient"
                    onClick={handleAllExportData}
                    color={'dark'}
                >
                    {translate("تصدير كامل المعلومات")}
                </SuiButton>
                {showExportColumns && (
                    <GridItem style={{ marginBottom: "1em" }}>
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
