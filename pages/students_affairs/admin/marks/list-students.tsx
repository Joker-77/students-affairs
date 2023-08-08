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
    type: number;
}
interface Marks {
    id: string;
    mark: number
}
export const ListStudents = ({ students, exam, type }: IStudentsProps) => {
    console.log(exam);
    const { translate } = useTranslation();
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [initUpdateMarks, setInitUpdateMarks] = React.useState<Marks[]>([]);
    const [updating, setUpdating] = React.useState(false);
    const [data, setData] = useState([]);
    const [selExam, setExam] = useState(exam);
    useEffect(() => {
        setData(students)
        setInitUpdateMarks([]);
    }, [students]);
    useEffect(() => {
        setExam(exam)
        setInitUpdateMarks([]);
    }, [exam])
    const handleUpdateMark = (_id, _val) => {
        if (type == 0) {
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
        }
        else {
            let _dt = data.slice();
            let el = _dt.filter(e => e.id == parseInt(_id))[0];
            if (el)
                el.mark = parseInt(_val);
            let index = _dt.indexOf(el);
            _dt.splice(index, 1, el)
            setData(_dt);
        }
    };
    const tableRef = useRef();
    const renderStudents = () => {
        let columns = [];
        if (type == 0)
            columns = [
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
                            value={initUpdateMarks.length > 0 ? initUpdateMarks.filter(e => e.id == rowData.id)[0] ?.mark : ''}
                            onChange={(event) => handleUpdateMark(rowData.id, event.target.value)}
                            disabled={updating}
                        />
                    ),
                },
            ];
        else
            columns = [
                {
                    title: translate("Id"),
                    field: "id",
                    hidden: true,
                },
                {
                    title: translate("ID Number"),
                    field: "personal_number",
                },
                {
                    title: "اسم الطالب",
                    field: 'name',
                },
                {
                    title: "السنة",
                    field: 'year',
                },
                {
                    title: "العلامة",
                    field: "mark",
                    render: (rowData) => (
                        <TextField
                            defaultValue={rowData.mark}
                            onChange={(event) => handleUpdateMark(rowData.id, event.target.value)}
                            disabled={updating}
                        />
                    ),
                },
            ];
        if (data != null && data.length > 0) {
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
            if (type == 0)
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
            else
                return (
                    <div ref={tableRef}>
                        <ActionTable
                            Title={`${translate("قائمة الطلاب ")} (${data.length})`}
                            Columns={columns}
                            Data={data}
                            Options={options}
                            Actions={null}
                        />
                    </div>
                );
        } else return <Placeholder loading={false} />;
    };
    const addMarks = () => {
        if (type == 0) {
            console.clear();
            const payload =
            {
                exam_id: parseInt(exam.toString()),
                marks: initUpdateMarks
            }
            console.log(payload);
        }
        else {
            const payload =
            {
                exam_id: parseInt(exam.toString()),
                marks: data.map(dt => {
                    return {
                        id: `${dt ?.id}`,
                        mark: dt ?.mark
                            };
                })
            }
            console.log(payload);
        }
    }
    const lockExam = () => {
        console.log(parseInt(exam.toString()))
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