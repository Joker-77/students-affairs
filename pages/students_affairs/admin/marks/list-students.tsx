import React, { Component, useRef, useState, useEffect } from 'react';
import GridContainer from '../../../../components/Grid/GridContainer';
import Placeholder from '../../../../Utility/Placeholders';
import { makeStyles, TextField, Button } from '@material-ui/core';
import { useTranslation } from '../../../../Utility/Translations/useTranslation';
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import ActionTable from '../../../../components/MaterialTable/ActionTable';
import GridItem from 'components/Grid/GridItem.js';

interface IStudentsProps {
    students: any;
    exam: number;
}
interface Marks {
    id: string;
    mark: number
}
export const ListStudents = ({ students, exam }: IStudentsProps) => {
    console.log(exam);
    const { translate } = useTranslation();
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [initUpdateMarks, setInitUpdateMarks] = React.useState<Marks[]>([]);
    const [updating, setUpdating] = React.useState(false);
    const [data, setData] = useState(null);
    const [selExam, setExam] = useState(exam);
    useEffect(() => {
        setData(students)
        setExam(exam)
    }, [students, exam]);
    const handleUpdateMark = (_id, _val) => {
        let marks = initUpdateMarks.slice();
        let el = marks.filter(e => parseInt(e.id) == _id)[0];
        if (!!el)
            el.mark = parseInt(_val);
        else
            marks.push({
                id: `${_id}`,
                mark: parseInt(_val)
            })
        console.log(marks, exam);
        setInitUpdateMarks(marks);
    };
    const tableRef = useRef();
    const renderStudents = () => {
        let columns = [
            {
                title: translate("Id"),
                field: "id",
                hidden: true,
            },
            {
                title: translate("ID Number"),
                field: "number",
            },
            {
                title: "اسم الطالب",
                field: 'name',
            },
            {
                title: "العلامة",
                field: "mark",
                render: (rowData) => (
                    <TextField
                        onChange={(event) => handleUpdateMark(rowData.id, event.target.value)}
                        disabled={updating}
                    />
                ),
            },
        ];
        if (data != null && data.length > 0) {
            // let data = courses;
            console.log("data", data, selExam);
            let options = {
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
            return (
                <div ref={tableRef}>
                    <ActionTable
                        Title={`${translate("قائمة الطلاب ")} (${data.length})`}
                        Columns={columns}
                        Data={data.map((item: any) => {
                            return {
                                ...item,
                                number: `${!!item.candidate.registeration_number ? item.candidate.registeration_number : ''}`,
                                name: `${item.candidate.person.first_name} ${item.candidate.person.last_name}`,
                            };
                        })}
                        Options={options}
                        Actions={null}
                    />
                </div>
            );
        } else return <Placeholder loading={false} />;
    };
    const addMarks = () => {
        console.clear();
        const payload =
        {
            exam_id: parseInt(exam),
            marks: initUpdateMarks
        }
        console.log(payload);
    }
    const lockExam = () => {
        console.log(parseInt(exam))
    }
    return <>
        <GridItem md={12} style={{ marginTop: "1em" }}>
            {renderStudents()}
        </GridItem>
        {
            data != null && data.length > 0 && <GridItem md={12} style={{ marginTop: "1em" }}>
                <Button
                    style={{ margin: "10px 5px" }}
                    variant="contained"
                    className={classes.submitBtn}
                    onClick={addMarks}
                >
                    حفظ العلامات
           </Button>
                <Button
                    style={{ margin: "10px 5px" }}
                    variant="contained"
                    className={classes.submitBtn}
                    onClick={lockExam}
                >
                    إقفال
           </Button>
            </GridItem>
        }
    </>

}