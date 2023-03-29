import React, {useState} from "react";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import UserCard from "../../../../components/UserCard/UserCard.js";
import CandidatePersonalInfo from "./CandidatePersonalInfo";
import {useTranslation} from "../../../../Utility/Translations/useTranslation";
import {selectCandidate, useAppSelector} from "../../../../redux";
import CandidateCertificateInfo from "./CandidateCertificateInfo";
import CandidateDesireList from "./CandidateDesiresList";
import CandidateAttachmentsList from "./CandidateAttachmentsList";
import TabsMenu from "../../../../components/TabsMenu/TabsMenu";
import {connect} from "react-redux";

interface ICandidateDetailsProps {candidate: any}

const CandidateDetails: React.FC<ICandidateDetailsProps> = (props) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const {translate} = useTranslation();
    const tabs = [
        {
            id: 'personal',
            name: translate('Personal Info')
        },
        {
            id: 'certificate',
            name: translate('Certificate Details')
        },
        {
            id: 'desires',
            name: translate('Desires')
        },
        {
            id: 'attachments',
            name: translate('Attachments')
        }
    ];

    const spacer = {
        marginBottom: "25px",
    };

    const candidate = props.candidate;

    return (
        <div>
            <div style={{position: 'fixed', width: 200}}>
                <UserCard
                    name={candidate ? `${candidate?.person.first_name} ${candidate?.person.last_name}` : null}
                    id={candidate?.certificates[0]?.subscription_number}
                    year={candidate?.certificates[0]?.year}
                />
                <div style={spacer}/>
                <TabsMenu tabs={tabs}/>
            </div>
            <div style={{marginRight: 220}} id={'personal'}>
                <CandidatePersonalInfo initValues={candidate || {}}/>
                <div id={'certificate'} style={spacer}/>
                {candidate?.certificates?.length > 0 &&
                  <CandidateCertificateInfo initValues={candidate?.certificates[0]}/>}
                <div id={'desires'} style={spacer}/>
                {candidate && <CandidateDesireList candidateId={candidate?.id}/>}
                <div id={'attachments'} style={spacer}/>
                <CandidateAttachmentsList attachments={candidate?.attachements} candidateId={candidate?.id} />
            </div>
        </div>
    );
};

(CandidateDetails as any).layout = Admin;
(CandidateDetails as any).auth = false;

const mapStateToProps = state => {
    console.log('state', state);
    return {
        candidate: state.baseReducer.candidate
    }
}

export default connect(mapStateToProps, null)(CandidateDetails);

