import React, { useEffect } from "react";
import {Button} from "@material-ui/core";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import {
    ICandidateModel,
} from "../../../../Models/ApiResponse/CandidateModel";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import CandidateService from "../../../../Services/CandidateService";
import SearchAddCandidateModal from "../../../../components/Modals/SearchAddCandidateModal";
import * as Yup from "yup";
import { useRouter } from 'next/router';
import {useTranslation} from "../../../../Utility/Translations/useTranslation";
import SuiButton from "../../../../components/SuiButton";
import {setCandidate, useAppDispatch} from "../../../../redux";
import AddTestResultsFileModal from "../../../../components/Modals/AddTestResultsFileModal";
import AddCandidateOutSideMinistryModal from "../../../../components/Modals/AddCandidateOutSideMinistryModal";

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
    const {translate} = useTranslation();
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
                setSearchResult({found: Boolean(res.result), result: res.result});
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
                const list = forRegistrations ? res.result?.filter(item => item.registerations?.length > 0) : res.result;
                setCandidates(list);
            })
            .catch((error) => {
                console.error("error", error);
            }).finally(() => {
            setLoading(false);
        });
    }, []);
    /************************** Finish Data ****************************/

    const [Candidates, setCandidates] = React.useState<ICandidateModel[]>(null);
    const renderCandidates = () => {
        if(loading) return <Placeholder loading />
        if (Candidates != null && Candidates.length > 0) {
            let columns = [
                {
                    title: translate("Id"),
                    field: "id",
                    hidden: true,
                },
                {
                    title: translate("Name"),
                    field: "full_name",
                },
                {
                    title: translate("Registeration number"),
                    field: "registeration_number",
                },
                {
                    title: translate("Subscription number"),
                    field: "certificates[0].subscription_number",
                },
                {
                    title: translate("City"),
                    field: "certificates[0].city",
                },
                {
                    title: translate("Round"),
                    field: "certificates[0].round",
                },
                // {
                //     title: translate("Result"),
                //     field: "certificates[0].result",
                // },
            ];
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
                filtering: false,
                paging: true,
                pageSize: 10,
                maxBodyHeight: "500px",
            };
            const btnLabel = !forRegistrations ? "Candidate Details" : "Edit Registration";
            const btnPage = !forRegistrations ? "candidate-details" : "edit-registration";
            let actions = [
                {
                    icon: () => <SuiButton style={{minWidth: 140}} color={'primary'}>{translate(btnLabel)}</SuiButton>,
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
                    Data={data.map(item => { return {...item, full_name: `${item.person?.first_name} ${item.father?.first_name} ${item.person?.last_name}`}})}
                    Options={options}
                    Actions={actions}
                />
            );
        } else return <Placeholder />;
    };
    return (
        <GridContainer>
            <GridItem md={12}>
                {!forRegistrations && (
                    <React.Fragment>
                        <Button style={{marginLeft: 10}}
                                disabled={false}
                                variant="contained"
                                className={classes.submitBtn}
                                onClick={handleOpen}
                        >
                            {translate("Add New Candidate")}
                        </Button>
                        <Button style={{marginLeft: 10}}
                                disabled={false}
                                variant="contained"
                                className={classes.submitBtn}
                                onClick={handleOpenOutsideCandidate}
                        >
                            {translate("Add Candidate")} {translate("out-side of ministry data")}
                        </Button>
                        <SuiButton style={{marginLeft: 10}}
                                   disabled={false}
                                   variant="gradient"
                                   onClick={handleOpenTestResults}
                                   color={'dark'}
                        >
                            {translate("Add acceptance test results")}
                        </SuiButton>
                    </React.Fragment>
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
                submitForm={() => handleCloseOutsideCandidate()}
            ></AddCandidateOutSideMinistryModal>
        </GridContainer>
    );
};
(CandidatesList as any).auth = true;
(CandidatesList as any).layout = Admin;
export default CandidatesList;
