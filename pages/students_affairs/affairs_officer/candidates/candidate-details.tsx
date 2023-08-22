import React, {useEffect, useState} from "react";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import UserCard from "../../../../components/UserCard/UserCard.js";
import CandidatePersonalInfo from "./CandidatePersonalInfo";
import {useTranslation} from "../../../../Utility/Translations/useTranslation";
import {setCandidate, useAppDispatch, useAppSelector} from "../../../../redux";
import CandidateCertificateInfo from "./CandidateCertificateInfo";
import CandidateDesireList from "./CandidateDesiresList";
import CandidateAttachmentsList from "./CandidateAttachmentsList";
import TabsMenu from "../../../../components/TabsMenu/TabsMenu";
import {connect} from "react-redux";
import {yesNo} from "../../../../Static/resources";
import SuiButton from "../../../../components/SuiButton";
import {useRouter} from "next/router";

interface ICandidateDetailsProps {candidate: any}
import {getCandidateToPrint} from "../../../../Helpers/candidate-print.js";
import DesireService from "../../../../Services/DesireService";

const CandidateDetails: React.FC<ICandidateDetailsProps> = (props) => {
    const useStyles = makeStyles(styles);
    const dispatch = useAppDispatch();
    const router = useRouter();
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

    const [candidate, updateCandidate] = useState(props.candidate);

    const goToPrint = (docType) => {
        dispatch(setCandidate(candidate));
        const printWindow = window.open('', '_blank');
        // const styleElement = window.document.createElement('style');
        // styleElement.textContent = `@media print {
        //     header, footer {
        //         display: none;
        //     }
        // }`;
        // printWindow.document.head.appendChild(styleElement);
        printWindow.document .write(getCandidateToPrint(candidate, docType));
        setTimeout(() => printWindow.print(), 1000);
    };

    const getCandidateWithDesires = (desires) => {
        return {...candidate, desires: desires.map((item) => {return {...item.speciality, id: item.speciality_id.toString()}})}
    }
    /************************** Data ****************************/
    useEffect(() => {
        DesireService.GetAll(candidate.id)
            .then((res) => {
                console.log("Desire", res);
                updateCandidate(getCandidateWithDesires(res.result));
            })
            .catch((error) => {
                console.error("error", error);
            });
    }, []);
    /************************** Finish Data ****************************/


    return (
        <div>
            <div style={{position: 'fixed', width: 200}}>
                <UserCard
                    name={candidate ? `${candidate?.person?.first_name} ${candidate?.person?.last_name}` : null}
                    id={candidate?.certificates.length > 0 ? candidate?.certificates[0]?.subscription_number : ''}
                    year={candidate?.certificates.length > 0 ? candidate?.certificates[0]?.year : ''}
                />
                <div style={spacer}/>
                <TabsMenu tabs={tabs}/>
                <br/>
                <SuiButton
                    style={{ margin: 5 }}
                    onClick={() => goToPrint(1)} // remove a friend from the list
                >
                    طباعة استمارة التسجيل الأولي
                </SuiButton>
            </div>
            <div style={{marginRight: 220}} id={'personal'}>
                <CandidatePersonalInfo callback={(candidate) => updateCandidate(candidate)} initValues={candidate ? {...candidate, residance: candidate?.residance || yesNo(translate)[0].value} : {}}/>
                <div id={'certificate'} style={spacer}/>
                {candidate?.certificates?.length > 0 &&
                  <CandidateCertificateInfo initValues={candidate?.certificates[0]}/>}
                <div id={'desires'} style={spacer}/>
                {candidate && <CandidateDesireList callback={(desires) => updateCandidate(getCandidateWithDesires(desires))} candidateId={candidate?.id}/>}
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

