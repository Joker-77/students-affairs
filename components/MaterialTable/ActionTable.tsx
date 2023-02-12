import MaterialTable from "material-table";
import React from "react";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import { Phone, AddIcCall, PhoneDisabled } from "@material-ui/icons";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { Info } from "@material-ui/icons";
import PublicIcon from "@material-ui/icons/Public";
import {string} from "prop-types";
import {useTranslation} from "../../Utility/Translations/useTranslation";
import {useRouter} from "next/router";

export default function ActionTable(props) {
  const {translate} = useTranslation();
  const {locale} = useRouter();

  const tableIcons = {
    Info: forwardRef((props, ref) => (
        <Info style={{ color: "blue" }} {...props} ref={ref} />
    )),
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    AddPhone: forwardRef((props, ref) => <AddIcCall {...props} ref={ref} />),
    PhoneDisabled: forwardRef((props, ref) => <PhoneDisabled {...props} ref={ref} />),
    Phone: forwardRef((props, ref) => <Phone {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),

    /* -------- With rtl -------*/
    FirstPage: forwardRef((props, ref) => locale === 'ar' ? <LastPage {...props} ref={ref} /> : <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => locale === 'ar' ? <FirstPage {...props} ref={ref} /> : <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => locale === 'ar' ? <ChevronLeft {...props} ref={ref} /> : <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (locale === 'ar' ? <ChevronRight {...props} ref={ref}/> : <ChevronLeft {...props} ref={ref} />)),
    /* --------------------------*/

    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    PublicIcon: forwardRef((props, ref) => <PublicIcon {...props} ref={ref} />),
  };

  return (
      <MaterialTable
          icons={tableIcons}
          title={props.Title}
          columns={props.Columns}
          data={props.Data}
          options={props.Options}
          //onSelectionChange={(rows) => props.ChangeSelected(rows)}
          actions={props.Actions}
          localization={{
            header: {
              actions: translate('Actions')
            },
            pagination: {
              firstTooltip: translate('First Page'),
              previousTooltip: translate('Previous Page'),
              nextTooltip: translate('Next Page'),
              labelDisplayedRows: '{from}-{to} ' + translate('of') + ' {count}',
              labelRowsPerPage: translate('Rows per page'),
              lastTooltip: translate('Last Page'),
              labelRowsSelect: translate('Rows'),
            }
          }}
          {...props}
      />
  );
}
