import React, { Dispatch, useEffect, useState } from "react"
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import { useTranslation } from "../../../Utility/Translations/useTranslation";
import SpecialityService from "../../../Services/SpecialityService";
import SpecYearsService from "../../../Services/SpecYearsService";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

interface IYearAveragesSelectorProps {
    setSpecialty: Dispatch<React.SetStateAction<any>>;
    setYear: Dispatch<React.SetStateAction<any>>;
 }

const YearAveragesSelector: React.FC<IYearAveragesSelectorProps> = ({ setSpecialty, setYear }) => {
    const { translate } = useTranslation();
    const [specialities, setSpecialities] = useState([]);
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const [specYears, setSpecYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);

    useEffect(() => {
        SpecialityService.GetAll()
            .then((res) => {
                setSpecialities(res.result);
            })
            .catch((error) => { });
    }, []);

    const onSpecialtyChange = (specId) => {
        setSelectedSpecialty(specId);
        setSpecialty(specId);
        SpecYearsService.GetWhereSpeciality(specId)
            .then((res) => {
                setSpecYears(res.result);
            })
            .catch((error) => {});
    }

    const onYearChange = (yearId) => {
        setSelectedYear(yearId);
        setYear(yearId);
    }

    return (
        <GridContainer md={12} style={{ margin: "2em 0em" }}>
            <GridItem md={3}>
                <FormControl fullWidth variant="filled" size="small">
                    <InputLabel id="spec-label">{translate("Specialty")}</InputLabel>
                    <Select
                        labelId="spec-label"
                        id="spec-select"
                        value={selectedSpecialty}
                        onChange={(e) => onSpecialtyChange(e.target.value)}
                    >
                        {specialities?.map((spec) => (
                            <MenuItem key={spec.id} value={spec.id}>
                                {spec.ar_name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </GridItem>
            <GridItem md={3}>
                <FormControl fullWidth variant="filled" size="small">
                    <InputLabel id="year-label">{translate("Year")}</InputLabel>
                    <Select
                        labelId="year-label"
                        id="year-select"
                        value={selectedYear}
                        onChange={(e) => onYearChange(e.target.value)}
                    >
                        {specYears?.map((year) => (
                            <MenuItem key={year.id} value={year.id}>
                                {year.ar_name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </GridItem>
        </GridContainer>
    );
}

export default YearAveragesSelector;