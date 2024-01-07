import React from "react"
import { useTranslation } from "../../../Utility/Translations/useTranslation";
import ActionTable from "../../MaterialTable/ActionTable";
import Placeholder from "../../../Utility/Placeholders";

interface IYearAveragesTableProps {
    specialty: string;
    year: string;
    data: Array<any>;
}

const YearAveragesTable: React.FC<IYearAveragesTableProps> = ({ specialty, year, data }) => {
    const { translate } = useTranslation();

    let columns = [
        {
            title: translate("Id"),
            field: 'id',
            hidden: true,
        },
        {
            title: translate("ID Number"),
            field: 'number',
        },
        {
            title: translate("Student Name"),
            field: 'full_name',
        },
        {
            title: translate("Admission Year"),
            field: 'admission_year',
        },
        {
            title: translate("Year Average"),
            field: 'year_average',
        },
        {
            title: translate("Activity Mark"),
            field: 'activity',
        },
        {
            title: translate("Final Average"),
            field: 'final_average',
        },
    ];

    const renderData = () => {
        if (data != null && data.length > 0) {
            let options = {
                headerStyle: {
                    backgroundColor: "#01579b",
                    color: "#FFF",
                    fontWeight: "bold",
                },
                filtering: true,
                paging: true,
                pageSize: 10,
                maxBodyHeight: "500px",
                search: false,
                tableLayout: "auto",
            };

            return (
                <ActionTable
                    Title={`${translate("Averages of ")} ${year} ${specialty}`}
                    Columns={columns}
                    Data={data}
                    Options={options}
                />
            );
        } else return <Placeholder loading={false} />;
    }

    return (
        <>
            {renderData()}
        </>
    );
}

export default YearAveragesTable;