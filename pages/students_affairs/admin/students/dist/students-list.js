"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Admin_1 = require("./../../../../layouts/Admin");
var GridContainer_1 = require("./../../../../components/Grid/GridContainer");
var EduYearService_1 = require("../../../../Services/EduYearService");
var PlanService_1 = require("../../../../Services/PlanService");
var SpecYearsService_1 = require("../../../../Services/SpecYearsService");
var SpecialityService_1 = require("../../../../Services/SpecialityService");
var StudentsImportService_1 = require("../../../../Services/StudentsImportService");
var react_select_1 = require("react-select");
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var GridItem_1 = require("../../../../components/Grid/GridItem");
var export_to_csv_1 = require("export-to-csv");
var useTranslation_1 = require("../../../../Utility/Translations/useTranslation");
var ActionTable_1 = require("../../../../components/MaterialTable/ActionTable");
var Placeholders_1 = require("../../../../Utility/Placeholders");
var SuiButton_1 = require("../../../../components/SuiButton");
var candidates_print_js_1 = require("../../../../Helpers/candidates-print.js");
var StudentsList = function (_a) {
    // Programs
    var _b = react_1.useState([]), programs = _b[0], setPrograms = _b[1];
    var _c = react_1.useState(null), program = _c[0], setProgram = _c[1];
    // Edu Year
    var _d = react_1.useState([]), eduYears = _d[0], setEduYears = _d[1];
    var _e = react_1.useState(null), eduYear = _e[0], setEduYear = _e[1];
    var _f = react_1.useState(), years = _f[0], setYears = _f[1];
    var _g = react_1.useState(null), year = _g[0], setYear = _g[1];
    var _h = react_1.useState(1), speciality = _h[0], setSpeciality = _h[1];
    var _j = react_1.useState([]), specialities = _j[0], SetSpecialities = _j[1];
    // Years ( Speciality Year)
    var _k = react_1.useState([]), specYears = _k[0], setSpecYears = _k[1];
    var _l = react_1.useState(null), specYear = _l[0], setSpecYear = _l[1];
    var _m = react_1.useState(false), loadSpecYear = _m[0], setLoadSpecYear = _m[1];
    var _o = react_1.useState(null), spec = _o[0], setSpec = _o[1];
    var _p = react_1["default"].useState(false), loading = _p[0], setLoading = _p[1];
    var translate = useTranslation_1.useTranslation().translate;
    var _q = react_1["default"].useState(null), Candidates = _q[0], setCandidates = _q[1];
    react_1.useEffect(function () {
        PlanService_1["default"].GetAll()
            .then(function (programs) {
            EduYearService_1["default"].GetYears("")
                .then(function (eduYears) {
                setPrograms(programs.result);
                setEduYears(eduYears.result);
            })["catch"](function (err) {
                console.error("Error", err);
            });
        })["catch"](function (err) {
            console.error("Error", err);
        });
    }, []);
    react_1.useEffect(function () {
        EduYearService_1["default"].GetYears("" + new Date().getFullYear())
            .then(function (resp) {
            var _a;
            var result = resp.result;
            if (result.length > 0)
                setLatestYear(result[0]);
            console.log(result[0].year);
            EduYearService_1["default"].checkYear((_a = result[0]) === null || _a === void 0 ? void 0 : _a.year)
                .then(function (response) {
                console.log("response", response);
                if (response === null || response === void 0 ? void 0 : response.success) {
                    EduYearService_1["default"].InitYears({
                        year: latestYear.year,
                        type: value
                    })
                        .then(function (response) {
                        console.clear();
                        console.log(response);
                        var result = response === null || response === void 0 ? void 0 : response.result;
                    })["catch"](function (error) { });
                }
                else {
                    toast.success("السنة موجودة");
                }
            })["catch"](function (error) {
                console.log(error);
            });
        })["catch"](function (error) { });
        SpecialityService_1["default"].GetAll()
            .then(function (response) {
            if (response.result.length > 0) {
                console.log(response.result);
                SpecYearsService_1["default"].GetWhereSpeciality(response.result[0].id)
                    .then(function (res) {
                    console.log(res.result);
                    if (res.result.length > 0) {
                        var specs = response.result.map(function (data) {
                            return {
                                id: data.id,
                                en_name: data.en_name,
                                ar_name: data.ar_name,
                                code: data.code
                            };
                        });
                        var initYears = res.result.map(function (data) {
                            return {
                                id: data.id,
                                en_name: data.en_name,
                                ar_name: data.ar_name,
                                code: data.code
                            };
                        });
                        SetSpecialities(specs);
                    }
                })["catch"](function (error) { });
            }
        })["catch"](function (error) { });
    }, []);
    var changeProgram = function (val) {
        setProgram(val);
    };
    var changeEduYear = function (val) {
        setEduYear(val);
    };
    var changeSpec = function (e) {
        setLoadSpecYear(true);
        SpecYearsService_1["default"].GetWhereSpeciality(e)
            .then(function (response) {
            if (response.result && response.result.length > 0) {
                console.clear();
                console.log(response.result);
                var _data = response.result.map(function (e) {
                    return {
                        id: e.id,
                        en_name: e.en_name,
                        ar_name: e.ar_name,
                        speciality_id: e.speciality_id
                    };
                });
                setSpecYears(_data);
                setSpecYear(_data[0].id);
            }
            else {
                setSpecYears([]);
                setSpecYear(null);
            }
            setLoadSpecYear(false);
        })["catch"](function (err) {
            setSpecYears([]);
            setSpecYear(null);
            setLoadSpecYear(false);
        });
    };
    var showStudents = function (e) {
        setLoading(true);
        StudentsImportService_1["default"].getStudents(e, eduYear)
            .then(function (resp) {
            console.log(resp);
            setCandidates(resp.result.map(function (e) { return e.candidate; }));
            setLoading(false);
        })["catch"](function (e) {
            console.log(e);
            setLoading(false);
        });
    };
    // columns
    var columns = [
        {
            title: translate("Id"),
            field: "id",
            hidden: true,
            filtering: false
        },
        {
            title: translate("Name"),
            field: "full_name",
            filtering: false
        },
        {
            title: translate("Father"),
            field: "father.first_name",
            hidden: true,
            filtering: false
        },
        {
            title: translate("Mother"),
            field: "mother.first_name",
            hidden: true,
            filtering: false
        },
        {
            title: translate("Registeration number"),
            field: "registeration_number",
            filtering: false,
            type: "string"
        },
        {
            title: translate("Subscription number"),
            field: "certificates[0].subscription_number",
            filtering: false
        },
        {
            title: translate("City"),
            field: "certificates[0].city",
            filtering: false
        },
        {
            title: translate("Round"),
            field: "certificates[0].round",
            filtering: false
        },
        {
            title: translate("Ministry External"),
            field: "external_value",
            filtering: false
        },
        {
            title: translate("Registration Year"),
            field: "registeration_year_name",
            filtering: false
        },
    ];
    // Dynamic Export
    var _r = react_1["default"].useState(false), showExportColumns = _r[0], setShowExportColumns = _r[1];
    var _s = react_1["default"].useState([]), selectedColumns = _s[0], setSelectedColumns = _s[1];
    var _t = react_1["default"].useState([]), checked = _t[0], setChecked = _t[1];
    var handleExportData = function () {
        setShowExportColumns(!showExportColumns);
    };
    var csvOptions = {
        fieldSeparator: ";",
        quoteStrings: '"',
        decimalSeparator: ".",
        showLabels: true,
        useBom: true,
        useKeysAsHeaders: false,
        headers: selectedColumns.map(function (c) { return c.title; })
    };
    var csvExporter = new export_to_csv_1.ExportToCsv(csvOptions);
    var generateExcel = function () {
        csvExporter.generateCsv(Candidates.map(function (ct) {
            var object = {};
            selectedColumns.forEach(function (item, index) {
                var _a, _b, _c, _d;
                if (item.field == "full_name")
                    _.set(object, "col " + index, ((_a = ct.person) === null || _a === void 0 ? void 0 : _a.first_name) + " " + ((_b = ct.father) === null || _b === void 0 ? void 0 : _b.first_name) + " " + ((_c = ct.person) === null || _c === void 0 ? void 0 : _c.last_name));
                else
                    _.set(object, "col " + index, (_d = _.get(ct, item.field)) !== null && _d !== void 0 ? _d : "");
            });
            console.log(object);
            return object;
        }));
    };
    var print = function () {
        var printWindow = window.open("", "_blank");
        printWindow.document.write(candidates_print_js_1.getCandidatesToPrint(Candidates, eduYears.filter(function (e) { return e = eduYear; })[0].));
        setTimeout(function () { return printWindow.print(); }, 1000);
    };
    var renderCandidates = function () {
        if (loading)
            return react_1["default"].createElement(Placeholders_1["default"], { loading: true });
        if (Candidates != null && Candidates.length > 0) {
            var data = Candidates;
            var options = {
                exportAllData: true,
                exportButton: true,
                actionsColumnIndex: -1,
                headerStyle: {
                    backgroundColor: "#01579b",
                    color: "#FFF",
                    fontWeight: "bold"
                },
                filtering: true,
                paging: true,
                pageSize: 10,
                maxBodyHeight: "500px"
            };
            return (react_1["default"].createElement(ActionTable_1["default"], { Title: translate("Candidates List"), Columns: columns, Data: data.map(function (item) {
                    var _a, _b, _c;
                    return __assign(__assign({}, item), { registeration_year_name: item.registeration_year == new Date().getFullYear()
                            ? "الحالي"
                            : "السابق", external_value: item.external
                            ? translate("Yes")
                            : translate("No"), full_name: ((_a = item.person) === null || _a === void 0 ? void 0 : _a.first_name) + " " + ((_b = item.father) === null || _b === void 0 ? void 0 : _b.first_name) + " " + ((_c = item.person) === null || _c === void 0 ? void 0 : _c.last_name) });
                }), Options: options, Actions: null }));
        }
        else
            return react_1["default"].createElement(Placeholders_1["default"], null);
    };
    return (react_1["default"].createElement(GridContainer_1["default"], null,
        react_1["default"].createElement(core_1.Grid, { container: true, md: 12, style: { margin: "2em 0em" } },
            react_1["default"].createElement(GridItem_1["default"], { md: 2 },
                react_1["default"].createElement(core_1.InputLabel, { id: "demo-simple-select-label" }, "\u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C"),
                react_1["default"].createElement(core_1.FormControl, { fullWidth: true, variant: "filled", size: "small", size: "small" },
                    react_1["default"].createElement(react_select_1["default"], { defaultValue: program, placeholder: "اختيار البرنامج", isSearchable: true, options: programs, onChange: function (e) {
                            changeProgram(e.id);
                        }, getOptionLabel: function (option) { return option.name; }, getOptionValue: function (option) { return option.id; } }))),
            react_1["default"].createElement(GridItem_1["default"], { md: 2 },
                react_1["default"].createElement(core_1.InputLabel, { id: "demo-simple-select-label" }, "\u0627\u0644\u0633\u0646\u0629"),
                react_1["default"].createElement(core_1.FormControl, { fullWidth: true, variant: "filled", size: "small" },
                    react_1["default"].createElement(react_select_1["default"], { defaultValue: eduYear, placeholder: "اختيار السنة", isSearchable: true, options: eduYears, onChange: function (e) { return changeEduYear(e.id); }, getOptionLabel: function (option) { return option.year; }, getOptionValue: function (option) { return option.id; } }))),
            react_1["default"].createElement(GridItem_1["default"], { md: 2 },
                react_1["default"].createElement(core_1.InputLabel, { id: "demo-simple-select-label" }, "\u0627\u0644\u0627\u062E\u062A\u0635\u0627\u0635"),
                react_1["default"].createElement(core_1.FormControl, { fullWidth: true, variant: "filled" },
                    react_1["default"].createElement(react_select_1["default"], { defaultValue: speciality, placeholder: "اختيار الاختصاص", isSearchable: true, options: specialities, onChange: function (e) { return changeSpec(e.id); }, getOptionLabel: function (option) { return option.ar_name; }, getOptionValue: function (option) { return option.id; } }))),
            react_1["default"].createElement(GridItem_1["default"], { md: 2 },
                react_1["default"].createElement(core_1.InputLabel, { id: "demo-simple-select-label" }, "\u0627\u0644\u0633\u0646\u0629"),
                react_1["default"].createElement(core_1.FormControl, { fullWidth: true, variant: "filled", size: "small" },
                    react_1["default"].createElement(react_select_1["default"], { defaultValue: spec, label: "Single select", placeholder: "اختيار السنة", isSearchable: true, isDisabled: loadSpecYear, options: specYears, onChange: function (e) { return showStudents(e.id); }, getOptionLabel: function (option) { return option.ar_name; }, getOptionValue: function (option) { return option.id; } }))),
            react_1["default"].createElement(GridItem_1["default"], { md: 2 },
                react_1["default"].createElement(SuiButton_1["default"], { style: { minWidth: 140, marginTop: "1.5em" }, color: "primary", onClick: print }, "\u0637\u0628\u0627\u0639\u0629"))),
        react_1["default"].createElement(core_1.Grid, { container: true, style: { display: "flex", justifyContent: "center" }, md: 12 }, renderCandidates())));
};
StudentsList.auth = true;
StudentsList.layout = Admin_1["default"];
exports["default"] = StudentsList;
