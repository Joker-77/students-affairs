import React, { useEffect, useRef, useState } from "react";
import {
    Button,
    Select,
    MenuItem,
    Box,
    FormControl,
    InputLabel,
    Input,
    TextField,
    InputAdornment,
    OutlinedInput,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Accordion,
    Typography,
    AccordionSummary,
    AccordionDetails,
} from "@material-ui/core";
import {
    FilterList,
    Sort,
    Search,
    Print,
    Add,
    FilterListSharp,
    AddComment,
    AddBox,
    Folder,
    PostAdd,
    Description,
    ExpandMore,
    FileCopy,
} from "@material-ui/icons";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import {
    IUserModel,
} from "../../../../Models/Users/UserModel";
// import Userservice from "../../../../Services/Userservice";
import SuiButton from "../../../../components/SuiButton";
import CandidateDetails from "../../affairs_officer/candidates/candidate-details";
// import UserDetails from "./User-details";
import { ExportToCsv } from "export-to-csv";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import _ from "lodash";
import UserService from "../../../../Services/UserService";
import UserDetails from "./user-details";

interface IUsersListProps { }
const UsersList: React.FC<IUsersListProps> = ({ }) => {
    const { translate } = useTranslation();
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const router = useRouter();
    const [showUserDetail, setshowUserDetail] = React.useState(false);
    const [User, setUser] = React.useState<IUserModel>();
    const [searchResult, setSearchResult] = React.useState(null);
    const [loading, setLoading] = React.useState<boolean>(true);
  
    const setShow = () => {
        setshowUserDetail(!showUserDetail);
    };
    const activateEdit = () => {
        setIsEditable(!isEditable);
    };

    const getUser = (data: any) => {
        setLoading(true)
        let _User = Users.find((item, index) => item.id === data ?.id);
        UserService.Get(data.id)
            .then((res) => {
                let _User = res.result as IUserModel;
                setUser(_User);
                console.log(_User);
                setIsCreate(false);
                setIsEditable(true);
                setshowUserDetail(true);
                setLoading(false)
            })
            .catch((error) => {
                console.error("error", error);
            });
    };

    const [isCreate, setIsCreate] = useState<boolean>(true);

    const handleCreate = () => {
        setUser(null);
        setIsCreate(true);
        setIsEditable(false);
        setshowUserDetail(true);
    };

    const handleClose = () => {
        setSearchResult(null);
        setshowUserDetail(false);
    };

    /********************** Filter && Sort *********/
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel ?.current ?.offsetWidth);
    }, []);

    const inputSortLabel = React.useRef(null);
    const [sortLabelWidth, setSortLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setSortLabelWidth(inputSortLabel ?.current ?.offsetWidth);
    }, []);


    const [Users, setUsers] = React.useState<IUserModel[]>(null);
    const [filteredUsers, setFilteredUsers] =
        React.useState<IUserModel[]>(null);
    const [filter, setFilter] = React.useState(0);
    const [search, setSearch] = React.useState("");

    const [sortBy, setSortBy] = React.useState(0);
    const handleSortBy = (_value) => {
        setSortBy(_value);
    };

    /************************** Data ****************************/
    const getUsers = () => {
        UserService.GetAll()
            .then((res) => {
                let Users = res.result.sort((a, b) => b.id - a.id);
                setFilteredUsers(Users as IUserModel[]);
                setUsers(Users as IUserModel[]);
                setLoading(false);
            })
            .catch((error) => {
                console.error("error", error);
            });
    }
    useEffect(() => {
        getUsers();
    }, []);
    /************************** Finish Data ****************************/
    /************************** Handle edit data ****************************/
    const [isEditable, setIsEditable] = React.useState(false);
    /************************** Finish Handle edit data ****************************/

    /**************************  Handle Export data ****************************/
    const [showExportColumns, setShowExportColumns] = React.useState(false);
    let columns = [
        {
            title: translate("Id"),
            field: "id",
            hidden: true,
        },
        {
            title: translate("الايميل"),
            field: "email",
        },
        {
            title: translate("الأدوار"),
            field: "roles",
        },
    ];

    /************************** Finish Handle Export Data ****************************/
    const [confirm, setConfirm] = React.useState(false);
    const [deleteUser, setDeleteUser] = React.useState(false);
    const handleConfirmOpen = (data) => {
        setDeleteUser(data.id);
        setConfirm(true);
    };

    const handleConfirmClose = () => {
        setConfirm(false);
    };
    const handleDeleteUser = () => {
    };

    const ConfirmDialog = () => (
        <div>
            <Dialog
                open={confirm}
                onClose={handleConfirmClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {translate("Delete a User")}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {translate("Are you sure you want to delete this User")}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteUser}>{translate("Yes")}</Button>
                    <Button onClick={handleConfirmClose} autoFocus>
                        {translate("No")}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

    /************************** Handle Delete User ****************************/
    const tableRef = useRef();
    const renderUsers = () => {
        if (filteredUsers != null && filteredUsers.length > 0) {
            let data = filteredUsers;
            let options = {
                // exportAllData: true,
                // exportButton: true,
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
                search: false,
                tableLayout: "auto",
            };
            let actions = [
                // {
                //     icon: () => (
                //         <SuiButton
                //             style={{
                //                 minWidth: 80,
                //                 color: "#dc3545",
                //                 backgroundColor: "transparent",
                //                 border: "1px solid #dc3545",
                //             }}
                //             color={"danger"}
                //         >
                //             {translate("Delete")}
                //         </SuiButton>
                //     ),
                //     onClick: (evt, data) => handleConfirmOpen(data),
                // },
                {
                    icon: () => (
                        <SuiButton style={{ minWidth: 140, width: 140 }} color={"primary"}>
                            {translate("تفاصيل")}
                            <FileCopy />
                        </SuiButton>
                    ),
                    onClick: (evt, data) => getUser(data),
                },
            ];
            if (!loading)
                return (
                    <div ref={tableRef}>
                        <ActionTable
                            Title={translate("جدول المستخدمين")}
                            Columns={columns}
                            Data={data.map(item => {
                                return {
                                    ...item,
                                    roles: item.roles.map(e => e.name).join(" , ")
                                }
                            })}
                            Options={options}
                            Actions={actions}
                        />
                    </div>
                );
            else
                return <Placeholder loading={loading} />;
        } else return <Placeholder loading={false} />;
    };

    const handleBack = () => {
        getUsers();
        setshowUserDetail(false)
    }
    return (
        <GridContainer>
            {!showUserDetail && (
                <>
                    <GridItem md={12}>
                        <GridItem container md={12} style={{ margin: "0px 0px 10px 0" }}>
                            <GridItem>
                                <Button
                                    style={{ margin: "0px 5px" }}
                                    disabled={false}
                                    variant="contained"
                                    className={classes.submitBtn}
                                    onClick={handleCreate}
                                >
                                    <span style={{ padding: "0px 0px 0px 10px" }}>
                                        {translate("إضافة مستخدم")}
                                    </span>
                                    <AddBox />
                                </Button>
                            </GridItem>
                        </GridItem>
                    </GridItem>
                    <GridItem md={12}>{renderUsers()}</GridItem>
                </>
            )}
            {showUserDetail && (
                <UserDetails
                    isEditable={isEditable}
                    isCreate={isCreate}
                    details={User}
                    activateEdit={activateEdit}
                    handleBack={handleBack}
                    show={showUserDetail}
                />
            )}
            <ConfirmDialog />
        </GridContainer>
    );
};
(UsersList as any).auth = true;
(UsersList as any).layout = Admin;
export default UsersList;
