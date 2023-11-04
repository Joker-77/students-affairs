module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./Utility/Translations/ar.json":
/*!**************************************!*\
  !*** ./Utility/Translations/ar.json ***!
  \**************************************/
/*! exports provided: Hiast Students Affairs, Hello Admin!, Actions, First Page, Previous Page, Next Page, Rows, Rows per page, Last Page, of, Copyrights, No data found, Add New Candidate, Candidates List, Add New Certificate, Add New Speciality, Add Candidate, Update Candidate, Course, Add New Course, Courses List, Course Details, Course Name, French Name, Course Code, Total Hours, Credit Hours, Add Course Document, Export To Excel, Print, Theoretical Hours, Theoretical Classes, Practical Hours, Practical Classes, Mixed Hours, Mixed Classes, Evaluations Method, Add an evaluation method, Edit Course, Upload a file, Need at least one evaluation method, Need an attachement for this course, Edit description, Back to edit basic info, Delete a course, Are you sure you want to delete this course, Select Columns, Teachers List, ID Number, Add New Teacher, Teacher Details, Functional Body, Work Field, Activity, Office Phone, Father name, Name prefix, Primary number, Mobile 1, Degree, HIAST graduate, Status, Secondary number, Office number, Mobile 2, Teacher Name, Dr., Ma., Eng., Mr., HIAST, Center, Outsider, HIAST Secretariat, Directorate of Administrative and Financial Affairs, Directorate of Rehabilitation and Continuing Training, Environmental Studies Laboratory, Urban Services Department, Technical maintenance department, Student Affairs Directorate - Library Department, Student Affairs Directorate - Registration and Follow-up Department, HIAST Administration, Mathematics Department, Physics Department, Informatics department, Mecatronics Department, Management Engineering Department, Foreign Language Education Center, Directorate of Planning and Follow-up, Directorate of Professional Work Coordination, Student Affairs Directorate - Examinations Department, Restaurnt Department, Student Affairs Directorate - Division of Sports Activities, Student Affairs Directorate - City Residential Department, Student Affairs Directorate - Social Activities Department, Telecommunications department, Directorate of Scientific Cooperation, Media and Publishing, Department of Public Relations and Services Relations, Directorate of Student Affairs - Higher Education Department, Informatics Services and Software Development Directorate, Student Affairs Directorate, Institute 1000, Research and Development Branch, Electronic Industries Branch 410, Institute of Mechanics 2000, Mechanical Industries Branch, Institute of Chemistry 3000, Aviation Institute 4000, Branch 350, Project 99, Studies and Planning Department, Directorate of Information Resources, Coordination Directorate, National Standards and Calibration Laboratory, Branch 550, Sector 4, Administrative and financial affairs of the Centre, Institute 6000, Branch 650, Activity in HIAST, Activity in Center, Active, Delegate, Retired, Dead, Runaway, Edit Teacher, Teacher Edited Successfully, Teacher Added Successfully, Engineering, Bachelor's, Intermediate institute, Research, Technical, Lab, Workers, Excluded, Observers List, Add New Observer, Mobile, Observer Added Successfully, Observer Edited Successfully, Observer Name, Observer Details, Observing Assignments, Title, Building, Examination Halls on, Exam date, Hall, From, To, Exams details, Number of observers, Assign Observers, No exams on this date, Observer, Exam, from, to, in, on, Hall chef, Add observer, Educational year, Cancel, Observations Updated Successfully, Printing name, There's no chef in this hall. Do you want to continue?, Private, Family, Male, Female, {0} is required, Id, First name, Last name, Gender, Passport First Name, Passport Last Name, Passport Number, Phones, Phone, Add a phone, Nationality, National number, Full Name, Mother Name, Phd, Master, Registeration number, Birth date, Birth place, QAID place, QAID number, Military office, Father, Mother, Processing ..., Save, Certificates, Desires, Registration Desires, Candidate Details, Speciality List, Add Speciality, Update Speciality, Edit Speciality, Speciality Details, English Name, English Short Name, Arabic Name, Arabic Short Name, Code, Certificate List, Add Certificate, Update Certificate, Edit Certificate, Certificate Details, Type, Year, Result, City, Round, Subscription number, Candidate, Registration Year, Ministry External, Math, Physics, English, Arabic, Chemistry, Sum, Reif-Damascus, Damascus, Homs, Hama, Idleb, Aleppo, Latakia, Tartus, Dir Al-Zour, Al-Raqa, Al-Hasaqa, Al-Qonaitra, Al-Qamshli, Daraa, Al-Sweedaa, Marks, Mark, Add a mark, Weighted mark, Desire List, Add Desire, Add New Desire, Update Desire, Edit Desire, Desire Details, Desire, Speciality, Order, Registration Desire List, Add Registration Desire, Add New Registration Desire, Update Registration Desire, Edit Registration Desire, Registration Desire Details, Password is too short - should be {0} chars minimum, Enter your credentials to sign in, Welcome, Username, Password, Remember me, Signing in..., Sign in, Current Year, Last Year, First, Second, Search, Student is not exist, Add to candidates, This Candidate Already Exists, Personal Info, Personal, Science, French, Russian, Nationality Course, Upload Other Attachment, Upload personal image, Upload ID image, Attachements, ID image, Personal image, Name, Export to excel, Export, Add Attachment, Attachments, Candidate updated., Desires updated., out-side of ministry data, Add acceptance test results, Results File, Upload, Study Place, No problem, Registeration Class, Internal, Private Study, Employees Sons, Special, Registeration Method, Automatic, Electronic, Need Residance, Yes, No, Exam Place, Test results updated., Attendees List, Acceptance Test, Mark from 3400, Mark from 2400, Mark from 3600, Acceptance Place, Acceptance Speciality, Acceptance Class, Acceptance Status, Edit Registration, Accepted, Not Accepted, Canceled, Waiting, Waiting number, Registration updated., You're in the year, Open new educational year, do you want to, import educational plan from previous year, import educational plan and assign teachers, no import, Specify Courses, Assign Teachers, Assign Teacher, Teacher, You must select a teacher, Year Plan, Program, Semester, Students Imported Successfully, Course Added To Plan Successfully, Show Courses, Number of accredited hours, Teacher assigned successfully, Teacher disengage successfully, Course removed from plan successfully, Add, Confirm, Delete, Filter, All, None, Sort By, Number of all hours, Notes, Details, Back, Field is required, Field must be less than 100, Field must be greater than 0, Back To Previous Page, Percentage should be 100%, but you have:, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Hiast Students Affairs\":\"نظام معلومات الطالب\",\"Hello Admin!\":\"مرحباً!\",\"Actions\":\"الأزرار\",\"First Page\":\"الصفحة الأولى\",\"Previous Page\":\"الصفخة السابقة\",\"Next Page\":\"الصفحة التالي\",\"Rows\":\"أسطر\",\"Rows per page\":\"سطر بالصفحة\",\"Last Page\":\"الصفحة الأخيرة\",\"of\":\"من\",\"Copyrights\":\"حقوق النشر محفوظة\",\"No data found\":\"لا يوجد بيانات حتى الآن\",\"Add New Candidate\":\"إضافة مرشح جديد\",\"Candidates List\":\"قائمة المرشحين\",\"Add New Certificate\":\"إضافة شهادة جديدة\",\"Add New Speciality\":\"إضافة اختصاص جديد\",\"Add Candidate\":\"إضافة مرشح\",\"Update Candidate\":\"تعديل مرشح\",\"Course\":\"المقرر\",\"Add New Course\":\"إضافة مقرر جديد\",\"Courses List\":\"قائمة المقررات\",\"Course Details\":\"تفاصيل المقرر\",\"Course Name\":\"اسم المقرر\",\"French Name\":\"الاسم بالفرنسية\",\"Course Code\":\"رمز المقرر\",\"Total Hours\":\"عدد الساعات الكلية\",\"Credit Hours\":\"وحدات التعلّم\",\"Add Course Document\":\"إضافة استمارة مقرر\",\"Export To Excel\":\"تصدير إلى إكسل\",\"Print\":\"طباعة\",\"Theoretical Hours\":\"عدد ساعات النظري\",\"Theoretical Classes\":\"فئات النظري\",\"Practical Hours\":\"عدد ساعات العملي\",\"Practical Classes\":\"فئات العملي\",\"Mixed Hours\":\"عدد ساعات النظري/العملي\",\"Mixed Classes\":\"فئات النظري/العملي\",\"Evaluations Method\":\"طرائق تقييم\",\"Add an evaluation method\":\"إضافة طريقة تقييم\",\"Edit Course\":\"تعديل معلومات المقرّر\",\"Upload a file\":\"رفع مرفق\",\"Need at least one evaluation method\":\"يجب إضافة طريقة تقييم واحدة على الأقل\",\"Need an attachement for this course\":\"يجب رفع مرفق خاص بهذا المقرر\",\"Edit description\":\"تعديل معلومات الاستمارة\",\"Back to edit basic info\":\"عودة إلى معلومات المقرر الرئيسية\",\"Delete a course\":\"حذف مقرر\",\"Are you sure you want to delete this course\":\"هل أنت متأكد من حذف هذا المقرّر\",\"Select Columns\":\"اختيار الأعمدة\",\"Teachers List\":\"قائمة المدرسين\",\"ID Number\":\"الرقم الذاتي\",\"Add New Teacher\":\"إضافة مدرس جديد\",\"Teacher Details\":\"تفاصيل المدرس\",\"Functional Body\":\"الهيئة\",\"Work Field\":\"مكان العمل\",\"Activity\":\"الفعالية\",\"Office Phone\":\"الهاتف الداخلي\",\"Father name\":\"اسم الأب\",\"Name prefix\":\"سابقة الاسم\",\"Primary number\":\"رقم أساسي 1\",\"Mobile 1\":\"موبايل 1\",\"Degree\":\"شهادة المدرس\",\"HIAST graduate\":\"خريج معهد عالي\",\"Status\":\"الوضع الحالي\",\"Secondary number\":\"هاتف 2\",\"Office number\":\"هاتف المكتب\",\"Mobile 2\":\"موبايل 2\",\"Teacher Name\":\"اسم المدرس\",\"Dr.\":\"د.\",\"Ma.\":\"ما.\",\"Eng.\":\"م.\",\"Mr.\":\"أ.\",\"HIAST\":\"معهد عالي\",\"Center\":\"مركز\",\"Outsider\":\"خارج الملاك\",\"HIAST Secretariat\":\"أمانة المعهد\",\"Directorate of Administrative and Financial Affairs\":\"مديرية الشؤون الإدارية والمالية\",\"Directorate of Rehabilitation and Continuing Training\":\"مديرية التأهيل والتدريب المستمر\",\"Environmental Studies Laboratory\":\"مخبر الدراسات البيئية\",\"Urban Services Department\":\"دائرة الخدمات العمرانية\",\"Technical maintenance department\":\"دائرة الصيانة الفنية\",\"Student Affairs Directorate - Library Department\":\"مديرية شؤون الطلاب - دائرة المكتبة\",\"Student Affairs Directorate - Registration and Follow-up Department\":\"مديرية شؤون الطلاب - دائرة التسجيل والمتابعة\",\"HIAST Administration\":\"إدارة المعهد\",\"Mathematics Department\":\"قسم الرياضيات\",\"Physics Department\":\"قسم الفيزياء\",\"Informatics department\":\"قسم المعلوميات\",\"Mecatronics Department\":\"قسم النظم الإلكترونية والميكانيكية\",\"Management Engineering Department\":\"قسم هندسة الإدارة\",\"Foreign Language Education Center\":\"مركز تعليم اللغات الأجنبية\",\"Directorate of Planning and Follow-up\":\"مديرية التخطيط والمتابعة\",\"Directorate of Professional Work Coordination\":\"مديرية تنسيق العمل المهني\",\"Student Affairs Directorate - Examinations Department\":\"مديرية شؤون الطلاب - دائرة الامتحانات\",\"Restaurnt Department\":\"دائرة المطعم\",\"Student Affairs Directorate - Division of Sports Activities\":\"مديرية شؤون الطلاب - شعبة الأنشطة الرياضية\",\"Student Affairs Directorate - City Residential Department\":\"مديرية شؤون الطلاب - دائرة المدينة السكنية\",\"Student Affairs Directorate - Social Activities Department\":\"مديرية شؤون الطلاب - دائرة الأنشطة الاجتماعية\",\"Telecommunications department\":\"قسم الاتصالات\",\"Directorate of Scientific Cooperation, Media and Publishing\":\"مديرية التعاون العلمي والإعلام والنشر\",\"Department of Public Relations and Services Relations\":\"دائرة العلاقات العلاقات العامة والخدمات\",\"Directorate of Student Affairs - Higher Education Department\":\"مديرية شؤون الطلاب - دائرة الدراسات العليا\",\"Informatics Services and Software Development Directorate\":\"مديرية الخدمات المعلوماتية والتطوير البرمجي\",\"Student Affairs Directorate\":\"مديرية شؤون الطلاب\",\"Institute 1000\":\"معهد 1000\",\"Research and Development Branch\":\"فرع البحث والتطوير\",\"Electronic Industries Branch 410\":\"فرع الصناعات الإلكترونية 410\",\"Institute of Mechanics 2000\":\"معهد الميكانيك 2000\",\"Mechanical Industries Branch\":\"فرع الصناعات الميكانيكية\",\"Institute of Chemistry 3000\":\"معهد الكيمياء 3000\",\"Aviation Institute 4000\":\"معهد الطيران 4000\",\"Branch 350\":\"الفرع 350\",\"Project 99\":\"المشروع 99\",\"Studies and Planning Department\":\"إدارة الدراسات والتخطيط\",\"Directorate of Information Resources\":\"مديرية موارد المعلومات\",\"Coordination Directorate\":\"مديرية التنسيق\",\"National Standards and Calibration Laboratory\":\"المخبر الوطني للمعايير والمعايرة\",\"Branch 550\":\"الفرع 550\",\"Sector 4\":\"القطاع 4\",\"Administrative and financial affairs of the Centre\":\"الشؤون الادارية والمالية بالمركز\",\"Institute 6000\":\"معهد 6000\",\"Branch 650\":\"الفرع 650\",\"Activity in HIAST\":\"الفعالية ضمن المعهد\",\"Activity in Center\":\"الفعالية ضمن المركز\",\"Active\":\"على رأس عمله\",\"Delegate\":\"موفد\",\"Retired\":\"متقاعد\",\"Dead\":\"متوفى\",\"Runaway\":\"ناكل\",\"Edit Teacher\":\"تعديل\",\"Teacher Edited Successfully\":\"تم تعديل بيانات المدرس بنجاح\",\"Teacher Added Successfully\":\"تم إضافة مدرس جديد\",\"Engineering\":\"هندسة\",\"Bachelor's\":\"إجازة جامعية\",\"Intermediate institute\":\"معهد متوسط\",\"Research\":\"هيئة بحث\",\"Technical\":\"فنية\",\"Lab\":\"مخبرية\",\"Workers\":\"قانون عاملين\",\"Excluded\":\"مستثنى من المراقبة\",\"Observers List\":\"قائمة المراقبين\",\"Add New Observer\":\"إضافة مراقب جديد\",\"Mobile\":\"رقم الموبايل\",\"Observer Added Successfully\":\"تم إضافة مراقب جديد\",\"Observer Edited Successfully\":\"تم تعديل بيانات المراقب بنجاح\",\"Observer Name\":\"اسم المراقب\",\"Observer Details\":\"تفاصيل المراقب\",\"Observing Assignments\":\"تكليفات المراقبة\",\"Title\":\"اللقب\",\"Building\":\"المبنى\",\"Examination Halls on\":\"القاعات الامتحانية بتاريخ\",\"Exam date\":\"تاريخ الامتحان\",\"Hall\":\"القاعة\",\"From\":\"من\",\"To\":\"إلى\",\"Exams details\":\"تفاصيل الامتحانات\",\"Number of observers\":\"عدد المراقبين\",\"Assign Observers\":\"تعيين مراقبين\",\"No exams on this date\":\"لا توجد امتحانات في هذا اليوم\",\"Observer\":\"المراقب\",\"Exam\":\"امتحان\",\"from\":\"من\",\"to\":\"إلى\",\"in\":\"في\",\"on\":\"بتاريخ\",\"Hall chef\":\"رئيس قاعة\",\"Add observer\":\"إضافة مراقب\",\"Educational year\":\"العام الدراسي\",\"Cancel\":\"إلغاء\",\"Observations Updated Successfully\":\"تم تعديل المراقبين بنجاح\",\"Printing name\":\"الاسم المطبوع\",\"There's no chef in this hall. Do you want to continue?\":\"لم يتم اختيار رئيس للقاعة. هل تريد الاستمرار؟\",\"Private\":\"خاص\",\"Family\":\"عائلي\",\"Male\":\"ذكر\",\"Female\":\"أنثى\",\"{0} is required\":\"{0} مطلوب\",\"Id\":\"الرقم\",\"First name\":\"الاسم الأول\",\"Last name\":\"النسبة\",\"Gender\":\"الجنس\",\"Passport First Name\":\"الاسم الأول في جواز السفر\",\"Passport Last Name\":\"الكنية في جواز السفر\",\"Passport Number\":\"رقم جواز السفر\",\"Phones\":\"أرقام الهواتف\",\"Phone\":\"رقم الهاتف\",\"Add a phone\":\"أضف رقم هاتف\",\"Nationality\":\"الجنسية\",\"National number\":\"الرقم الوطني\",\"Full Name\":\"الاسم الثلاثي\",\"Mother Name\":\"اسم الأم\",\"Phd\":\"دكتوراه\",\"Master\":\"ماجستير\",\"Registeration number\":\"رقم التسجيل\",\"Birth date\":\"تاريخ الولادة\",\"Birth place\":\"مكان الولادة\",\"QAID place\":\"محل القيد\",\"QAID number\":\"رقم القيد\",\"Military office\":\"شعبة التجنيد\",\"Father\":\"الأب\",\"Mother\":\"الأم\",\"Processing ...\":\"قيد المعالجة ...\",\"Save\":\"حفظ\",\"Certificates\":\"الشهادات\",\"Desires\":\"الرغبات\",\"Registration Desires\":\"رغبات التسجيل\",\"Candidate Details\":\"تفاصيل المرشح\",\"Speciality List\":\"قائمة الاختصاصات\",\"Add Speciality\":\"إضافة اختصاص\",\"Update Speciality\":\"تعديل الاختصاص\",\"Edit Speciality\":\"تعديل الاختصاص\",\"Speciality Details\":\"تفاصيل الاختصاص\",\"English Name\":\"الاسم بالانكليزية\",\"English Short Name\":\"الاسم المختصر بالانكليزية\",\"Arabic Name\":\"الاسم بالعربية\",\"Arabic Short Name\":\"الاسم المختصر بالعربية\",\"Code\":\"الرمز\",\"Certificate List\":\"قائمة الشهادات\",\"Add Certificate\":\"إضافة شهادة\",\"Update Certificate\":\"تعديل الشهادة\",\"Edit Certificate\":\"تعديل الشهادة\",\"Certificate Details\":\"تفاصيل الشهادة\",\"Type\":\"النوع\",\"Year\":\"السنة\",\"Result\":\"النتيجة\",\"City\":\"المحافظة\",\"Round\":\"الدورة\",\"Subscription number\":\"رقم الاكتتاب\",\"Candidate\":\"المرشح\",\"Registration Year\":\"عام التسجيل\",\"Ministry External\":\"خارج الوزارة\",\"Math\":\"الرياضيات\",\"Physics\":\"الفيزياء\",\"English\":\"اللغة الانكليزية\",\"Arabic\":\"اللغة العربية\",\"Chemistry\":\"الكيمياء\",\"Sum\":\"المجموع المثقل\",\"Reif-Damascus\":\"ريف دمشق\",\"Damascus\":\"دمشق\",\"Homs\":\"حمص\",\"Hama\":\"حماه\",\"Idleb\":\"إدلب\",\"Aleppo\":\"حلب\",\"Latakia\":\"اللاذقيه\",\"Tartus\":\"طرطوس\",\"Dir Al-Zour\":\"دير الزور\",\"Al-Raqa\":\"الرقة\",\"Al-Hasaqa\":\"الحسكه\",\"Al-Qonaitra\":\"القنيطرة\",\"Al-Qamshli\":\"القامشلي\",\"Daraa\":\"درعا\",\"Al-Sweedaa\":\"السويداء\",\"Marks\":\"علامات المواد\",\"Mark\":\"العلامة\",\"Add a mark\":\"إضافة علامة\",\"Weighted mark\":\"المجموع المثقل\",\"Desire List\":\"قائمة الرغبات\",\"Add Desire\":\"إضافة رغبة\",\"Add New Desire\":\"إضافة رغبة جديدة\",\"Update Desire\":\"تعديل الرغبة\",\"Edit Desire\":\"تعديل الرغبة\",\"Desire Details\":\"تفاصيل الرغبة\",\"Desire\":\"الرغبة\",\"Speciality\":\"الاختصاص\",\"Order\":\"الترتيب\",\"Registration Desire List\":\"قائمة رغبات التسجيل\",\"Add Registration Desire\":\"إضافة رغبة تسجيل\",\"Add New Registration Desire\":\"إضافة رغبة تسجيل جديدة\",\"Update Registration Desire\":\"تعديل رغبة التسجيل\",\"Edit Registration Desire\":\"تعديل رغبة التسجيل\",\"Registration Desire Details\":\"تفاصيل رغبة التسجيل\",\"Password is too short - should be {0} chars minimum\":\"كلمة السر قصيرة جداً - يجب أن تكون على الأقل {0} أحرف\",\"Enter your credentials to sign in\":\"أدخل اسم المستخدم وكلمة المرور للدخول\",\"Welcome\":\"مرحباً\",\"Username\":\"اسم المستخدم\",\"Password\":\"كلمة المرور\",\"Remember me\":\"تذكرني\",\"Signing in...\":\"جاري تسجيل الدخول\",\"Sign in\":\"تسجيل الدخول\",\"Current Year\":\"العام الحالي\",\"Last Year\":\"العام السابق\",\"First\":\"الأولى\",\"Second\":\"الثانية\",\"Search\":\"بحث\",\"Student is not exist\":\"الطالب غير موجود\",\"Add to candidates\":\"إضافة إلى المرشحين\",\"This Candidate Already Exists\":\"المرشح مضاف مسبقاً\",\"Personal Info\":\"الذاتية\",\"Personal\":\"شخصي\",\"Science\":\"العلوم\",\"French\":\"اللغة الفرنسية\",\"Russian\":\"اللغة الروسية\",\"Nationality Course\":\"التربية الوطنية\",\"Upload Other Attachment\":\"تحميل مرفقات أخرى\",\"Upload personal image\":\"تحميل الصورة الشخصية\",\"Upload ID image\":\"تحميل صورة الهوية\",\"Attachements\":\"المرفقات\",\"ID image\":\"صورة الهوية\",\"Personal image\":\"الصورة الشخصية\",\"Name\":\"الاسم\",\"Export to excel\":\"تصدير إلى إكسل\",\"Export\":\"تصدير\",\"Add Attachment\":\"إضافة ملف مرفق\",\"Attachments\":\"المرفقات\",\"Candidate updated.\":\"تم تعديل معلومات المرشح\",\"Desires updated.\":\"تم تعديل رغبات المرشح\",\"out-side of ministry data\":\"من خارج بيانات الوزارة\",\"Add acceptance test results\":\"إدخال نتائج امتحان القبول\",\"Results File\":\"ملف النتائج\",\"Upload\":\"تحميل\",\"Study Place\":\"مكان الدراسة\",\"No problem\":\"لا مانع\",\"Registeration Class\":\"فئة التسجيل\",\"Internal\":\"مركز\",\"Private Study\":\"دراسة خاصة\",\"Employees Sons\":\"خ. أ. ع\",\"Special\":\"متميزين (وزارة)\",\"Registeration Method\":\"آلية التسجيل\",\"Automatic\":\"آلي\",\"Electronic\":\"الكتروني\",\"Need Residance\":\"سكن جامعي\",\"Yes\":\"نعم\",\"No\":\"لا\",\"Exam Place\":\"مكان تقديم امتحان القبول\",\"Test results updated.\":\"تم تعديل علامات امتحان القبول\",\"Attendees List\":\"قائمة المتقدمين للمفاضلة\",\"Acceptance Test\":\"امتحان قبول\",\"Mark from 3400\":\"العلامة من 3400\",\"Mark from 2400\":\"العلامة من 2400\",\"Mark from 3600\":\"العلامة من 3600\",\"Acceptance Place\":\"مكان القبول\",\"Acceptance Speciality\":\"اختصاص القبول\",\"Acceptance Class\":\"فئة القبول\",\"Acceptance Status\":\"حالة القبول\",\"Edit Registration\":\"إدخال نتائج المفاضلة\",\"Accepted\":\"مقبول\",\"Not Accepted\":\"غير مقبول\",\"Canceled\":\"مستنكف\",\"Waiting\":\"احتياط\",\"Waiting number\":\"رقم الاحتياط\",\"Registration updated.\":\"تم تحديث بيانات المفاضلة\",\"You're in the year\":\"أنت الآن في العام الدراسي\",\"Open new educational year\":\"فتح عام دراسي جديد\",\"do you want to\":\"هل تريد\",\"import educational plan from previous year\":\"استيراد الخطة الدرسية من العام السابق\",\"import educational plan and assign teachers\":\"استيراد الخطة الدرسية وتكليف المدرسين من العام السابق\",\"no import\":\"بدون استيراد\",\"Specify Courses\":\"تحديد المقرّرات\",\"Assign Teachers\":\"تكليف المدرّسين\",\"Assign Teacher\":\"تكليف\",\"Teacher\":\"المدرس\",\"You must select a teacher\":\"يجب اختيار مدرّس\",\"Year Plan\":\"الخطة الدرسية\",\"Program\":\"البرنامج\",\"Semester\":\"الفصل\",\"Students Imported Successfully\":\"تم استيراد الطلاب بنجاح\",\"Course Added To Plan Successfully\":\"تم إضافة مقرر إلى الخطة الدرسية بنجاح\",\"Show Courses\":\"عرض المقرّرات\",\"Number of accredited hours\":\"عدد الساعات المعتمدة\",\"Teacher assigned successfully\":\"تم تكليف المدرّس بنجاح\",\"Teacher disengage successfully\":\"تم إنهاء تكليف المدرّس بنجاح\",\"Course removed from plan successfully\":\"تم حذف المقرّر من الخطة الدرسية\",\"Add\":\"إضافة\",\"Confirm\":\"تأكيد\",\"Delete\":\"حذف\",\"Filter\":\"فلتر\",\"All\":\"الكل\",\"None\":\"بلا\",\"Sort By\":\"ترتيب حسب\",\"Number of all hours\":\"عدد الساعات الكلية\",\"Notes\":\"ملاحظات\",\"Details\":\"تفاصيل\",\"Back\":\"عودة\",\"Field is required\":\"هذا الحقل مطلوب\",\"Field must be less than 100\":\"هذا الحقل يجب أن يكون رقم أصغر من 100\",\"Field must be greater than 0\":\"هذا الحقل يجب أن يكون رقم أكبر من 0\",\"Back To Previous Page\":\"العودة للصفحة السابقة\",\"Percentage should be 100%, but you have:\":\"يجب أن يكون مجموع طرائق تقييم المقرّر هو 100 بينما المجموع الحالي هو:\"}");

/***/ }),

/***/ "./Utility/Translations/dictionary.js":
/*!********************************************!*\
  !*** ./Utility/Translations/dictionary.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ar = _interopRequireDefault(__webpack_require__(/*! ./ar.json */ "./Utility/Translations/ar.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  ar: _ar.default,
  en: {}
};

/***/ }),

/***/ "./Utility/Translations/useTranslation.js":
/*!************************************************!*\
  !*** ./Utility/Translations/useTranslation.js ***!
  \************************************************/
/*! exports provided: useTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTranslation", function() { return useTranslation; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary */ "./Utility/Translations/dictionary.js");
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dictionary__WEBPACK_IMPORTED_MODULE_1__);


const useTranslation = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const locales = (router === null || router === void 0 ? void 0 : router.locales) || [];
  const defaultLocale = (router === null || router === void 0 ? void 0 : router.defaultLocale) || 'ar';
  const nextRouter = router;
  const locale = locales.includes(nextRouter.locale || '') ? nextRouter.locale : defaultLocale;

  const translateOrTerm = term => {
    const translation = _dictionary__WEBPACK_IMPORTED_MODULE_1___default.a[locale][term];
    return Boolean(translation) ? translation : term;
  };

  return {
    translate: (term, param = null, translateParam = true) => {
      let toBeReturned = translateOrTerm(term);

      if (param) {
        let toBeReplaced = translateParam ? translateOrTerm(param) : param;
        toBeReturned = toBeReturned.replace('{0}', toBeReplaced);
      }

      return toBeReturned;
    }
  };
};

/***/ }),

/***/ "./assets/css/nextjs-material-dashboard.css?v=1.1.0":
/*!**********************************************************!*\
  !*** ./assets/css/nextjs-material-dashboard.css?v=1.1.0 ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard.js":
/*!*************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard.js ***!
  \*************************************************/
/*! exports provided: hexToRgb, drawerWidth, drawerToggleWidth, transition, container, boxShadow, card, defaultFont, primaryColor, warningColor, dangerColor, successColor, infoColor, roseColor, grayColor, blackColor, whiteColor, primaryBoxShadow, infoBoxShadow, successBoxShadow, warningBoxShadow, dangerBoxShadow, roseBoxShadow, darkBoxShadow, warningCardHeader, successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader, roseCardHeader, darkCardHeader, cardActions, cardHeader, defaultBoxShadow, title, cardTitle, cardSubtitle, cardLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerWidth", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerToggleWidth", function() { return drawerToggleWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFont", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningColor", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerColor", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successColor", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoColor", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseColor", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayColor", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackColor", function() { return blackColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whiteColor", function() { return whiteColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryBoxShadow", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBoxShadow", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successBoxShadow", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningBoxShadow", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerBoxShadow", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseBoxShadow", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkBoxShadow", function() { return darkBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningCardHeader", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successCardHeader", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerCardHeader", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoCardHeader", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryCardHeader", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseCardHeader", function() { return roseCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkCardHeader", function() { return darkCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardActions", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardHeader", function() { return cardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBoxShadow", function() { return defaultBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTitle", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSubtitle", function() { return cardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardLink", function() { return cardLink; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

 =========================================================
 * * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/nextjs-material-dashboard
 * Copyright 2021 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
  }

  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }

  input = input.toUpperCase();
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return parseInt(first, 16) + ", " + parseInt(second, 16) + ", " + parseInt(last, 16);
}; // ##############################
// // // Variables - Styles that are used on more than one component
// #############################


const drawerWidth = 260;
const drawerToggleWidth = 50;
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto"
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const primaryColor = ["#01579b", "#01579c", "#01579a", "#015799"];
const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a"];
const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e"];
const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860"];
const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee"];
const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#eb3573"];
const grayColor = ["#999", "#777", "#3C4858", "#AAAAAA", "#D2D2D2", "#DDD", "#b4b4b4", "#555555", "#333", "#a9afbb", "#eee", "#e7e7e7", "#212121", "#263238"];
const blackColor = "#000";
const whiteColor = "#FFF";
const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const primaryBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(primaryColor[0]) + ",.4)"
};
const infoBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(infoColor[0]) + ",.4)"
};
const successBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(successColor[0]) + ",.4)"
};
const warningBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(warningColor[0]) + ",.4)"
};
const dangerBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(dangerColor[0]) + ",.4)"
};
const roseBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ",.4)"
};
const darkBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(grayColor[12]) + ",.4)"
};

const warningCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);

const successCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);

const dangerCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);

const infoCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);

const primaryCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);

const roseCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);

const darkCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + grayColor[13] + ", " + grayColor[12] + ")"
}, darkBoxShadow);

const cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid " + grayColor[10],
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const title = {
  color: grayColor[2],
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    color: grayColor[1],
    fontWeight: "400",
    lineHeight: "1"
  }
};

const cardTitle = _objectSpread(_objectSpread({}, title), {}, {
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": _objectSpread(_objectSpread({}, title), {}, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
});

const cardSubtitle = {
  marginTop: "-.375rem"
};
const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};


/***/ }),

/***/ "./assets/theme/base/borders.js":
/*!**************************************!*\
  !*** ./assets/theme/base/borders.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
 * The base border styles for the Soft UI Dashboard React.
 * You can add new border width, border color or border radius using this file.
 * You can customized the borders value for the entire Soft UI Dashboard React using thie file.
 */
// Soft UI Dashboard React Base Styles
 // Soft UI Dashboard React Helper Functions


const {
  grey
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const borders = {
  borderColor: grey[300],
  borderWidth: {
    0: 0,
    1: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(1),
    2: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(2),
    3: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(3),
    4: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(4),
    5: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(5)
  },
  borderRadius: {
    xs: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(2),
    sm: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(4),
    md: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(8),
    lg: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(12),
    xl: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(16),
    xxl: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(24),
    section: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(160)
  }
};
/* harmony default export */ __webpack_exports__["default"] = (borders);

/***/ }),

/***/ "./assets/theme/base/boxShadows.js":
/*!*****************************************!*\
  !*** ./assets/theme/base/boxShadows.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/functions/boxShadow */ "./assets/theme/functions/boxShadow.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
 * The base box-shadow styles for the Soft UI Dashboard React.
 * You can add new box-shadow using this file.
 * You can customized the box-shadow for the entire Soft UI Dashboard React using thie file.
 */
// Soft UI Dashboard React Base Styles
 // Soft UI Dashboard React Helper Functions


const {
  black,
  white,
  info,
  inputColors,
  tabs
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const boxShadows = {
  xs: Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 2], [9, -5], black.main, 0.15),
  sm: Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 5], [10, 0], black.main, 0.12),
  md: `${Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 4], [6, -1], black.light, 0.12)}, ${Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 2], [4, -1], black.light, 0.07)}`,
  lg: `${Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 8], [26, -4], black.light, 0.15)}, ${Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 8], [9, -5], black.light, 0.06)}`,
  xl: Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 23], [45, -11], black.light, 0.25),
  xxl: Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 20], [27, 0], black.main, 0.05),
  inset: Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 1], [2, 0], black.main, 0.075, "inset"),
  navbarBoxShadow: `${Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 0], [1, 1], white.main, 0.9, "inset")}, ${Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 20], [27, 0], black.main, 0.05)}`,
  buttonBoxShadow: {
    main: `${Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 4], [7, -1], black.main, 0.11)}, ${Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 2], [4, -1], black.main, 0.07)}`,
    stateOf: `${Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 3], [5, -1], black.main, 0.09)}, ${Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 2], [5, -1], black.main, 0.07)}`,
    stateOfNotHover: Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 0], [0, 3.2], info.main, 0.5)
  },
  inputBoxShadow: {
    focus: Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 0], [0, 2], inputColors.boxShadow, 1),
    error: Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 0], [0, 2], inputColors.error, 0.6),
    success: Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 0], [0, 2], inputColors.success, 0.6)
  },
  sliderBoxShadow: {
    thumb: Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 1], [13, 0], black.main, 0.2)
  },
  tabsBoxShadow: {
    indicator: Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 1], [5, 1], tabs.indicator.boxShadow, 1)
  }
};
/* harmony default export */ __webpack_exports__["default"] = (boxShadows);

/***/ }),

/***/ "./assets/theme/base/breakpoints.js":
/*!******************************************!*\
  !*** ./assets/theme/base/breakpoints.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
 * The base breakpoints for the Soft UI Dashboard React.
 * You can add new breakpoints using this file.
 * You can customized the breakpoints for the entire Soft UI Dashboard React using thie file.
 */
const breakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  }
};
/* harmony default export */ __webpack_exports__["default"] = (breakpoints);

/***/ }),

/***/ "./assets/theme/base/colors.js":
/*!*************************************!*\
  !*** ./assets/theme/base/colors.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
 * The base colors for the Soft UI Dashboard React.
 * You can add new color using this file.
 * You can customized the colors for the entire Soft UI Dashboard React using thie file.
 */
const colors = {
  background: {
    default: "#f8f9fa"
  },
  text: {
    main: "#67748e",
    focus: "#67748e"
  },
  transparent: {
    main: "transparent"
  },
  white: {
    main: "#ffffff",
    focus: "#ffffff"
  },
  black: {
    light: "#141414",
    main: "#000000",
    focus: "#000000"
  },
  primary: {
    // main: "#01579b" /* "#cb0c9f", */,
    main: "#01579b",
    focus: "#344767"
  },
  secondary: {
    main: "#8392ab",
    focus: "#96a2b8"
  },
  info: {
    main: "#17c1e8",
    focus: "#3acaeb"
  },
  success: {
    main: "#82d616",
    focus: "#95dc39"
  },
  warning: {
    main: "#fbcf33",
    focus: "#fcd652"
  },
  error: {
    main: "#ea0606",
    focus: "#c70505"
  },
  light: {
    main: "#e9ecef",
    focus: "#e9ecef"
  },
  dark: {
    main: "#344767",
    focus: "#344767"
  },
  grey: {
    100: "#f8f9fa",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#6c757d",
    700: "#495057",
    800: "#343a40",
    900: "#212529"
  },
  gradients: {
    primary: {
      main: "#01579b"
      /* "#cb0c9f", */
      ,
      // main: "#7928ca",
      state: "#344767"
    },
    secondary: {
      main: "#01579b"
      /* "#cb0c9f", */
      ,
      // main: "#627594",
      state: "#a8b8d8"
    },
    info: {
      main: "#01579b"
      /* "#cb0c9f", */
      ,
      // main: "#2152ff",
      state: "#0077b5"
      /* "#21d4fd" */

    },
    success: {
      main: "#17ad37",
      state: "#98ec2d"
    },
    warning: {
      main: "#f53939",
      state: "#fbcf33"
    },
    error: {
      main: "#ea0606",
      state: "#ff667c"
    },
    light: {
      main: "#ced4da",
      state: "#ebeff4"
    },
    dark: {
      main: "#141727",
      state: "#3a416f"
    }
  },
  socialMediaColors: {
    facebook: {
      main: "#3b5998",
      dark: "#344e86"
    },
    twitter: {
      main: "#55acee",
      dark: "#3ea1ec"
    },
    instagram: {
      main: "#125688",
      dark: "#0e456d"
    },
    linkedin: {
      main: "#0077b5",
      dark: "#00669c"
    },
    pinterest: {
      main: "#cc2127",
      dark: "#b21d22"
    },
    youtube: {
      main: "#e52d27",
      dark: "#d41f1a"
    },
    vimeo: {
      main: "#1ab7ea",
      dark: "#13a3d2"
    },
    slack: {
      main: "#3aaf85",
      dark: "#329874"
    },
    dribbble: {
      main: "#344767",
      dark: "#344767"
    },
    github: {
      main: "#24292e",
      dark: "#171a1d"
    },
    reddit: {
      main: "#ff4500",
      dark: "#e03d00"
    },
    tumblr: {
      main: "#35465c",
      dark: "#2a3749"
    }
  },
  alertColors: {
    primary: {
      main: "#7928ca",
      state: "#d6006c",
      border: "#efb6e2"
    },
    secondary: {
      main: "#627594",
      state: "#8ca1cb",
      border: "#dadee6"
    },
    info: {
      main: "#2152ff",
      state: "#02c6f3",
      border: "#b9ecf8"
    },
    success: {
      main: "#17ad37",
      state: "#84dc14",
      border: "#daf3b9"
    },
    warning: {
      main: "#f53939",
      state: "#fac60b",
      border: "#fef1c2"
    },
    error: {
      main: "#ea0606",
      state: "#ff3d59",
      border: "#f9b4b4"
    },
    light: {
      main: "#ced4da",
      state: "#d1dae6",
      border: "#f8f9fa"
    },
    dark: {
      main: "#141727",
      state: "#2c3154",
      border: "#c2c8d1"
    }
  },
  badgeColors: {
    primary: {
      background: "#f883dd",
      text: "#a3017e"
    },
    secondary: {
      background: "#e4e8ed",
      text: "#5974a2"
    },
    info: {
      background: "#abe9f7",
      text: "#08a1c4"
    },
    success: {
      background: "#cdf59b",
      text: "#67b108"
    },
    warning: {
      background: "#fef5d3",
      text: "#fbc400"
    },
    error: {
      background: "#fc9797",
      text: "#bd0000"
    },
    light: {
      background: "#ffffff",
      text: "#c7d3de"
    },
    dark: {
      background: "#8097bf",
      text: "#1e2e4a"
    }
  },
  inputColors: {
    borderColor: {
      main: "#d2d6da",
      focus: "#35d1f5"
    },
    boxShadow: "#81e3f9",
    error: "#fd5c70",
    success: "#66d432"
  },
  sliderColors: {
    thumb: {
      borderColor: "#d9d9d9"
    }
  },
  circleSliderColors: {
    background: "#d3d3d3"
  },
  tabs: {
    indicator: {
      boxShadow: "#ddd"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./assets/theme/base/globals.js":
/*!**************************************!*\
  !*** ./assets/theme/base/globals.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React Base Styles

const {
  info,
  dark
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const globals = {
  html: {
    scrollBehavior: "smooth"
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important"
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${dark.main} !important`,
    transition: "color 150ms ease-in !important"
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${info.main} !important`
  }
};
/* harmony default export */ __webpack_exports__["default"] = (globals);

/***/ }),

/***/ "./assets/theme/base/typography.js":
/*!*****************************************!*\
  !*** ./assets/theme/base/typography.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
 * The base typography styles for the Soft UI Dashboard React.
 * You can add new typography style using this file.
 * You can customized the typography styles for the entire Soft UI Dashboard React using thie file.
 */
// Soft UI Dashboard React Base Styles
 // Soft UI Dashboard React Helper Functions


const {
  dark
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const baseProperties = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeXXS: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(10.4),
  fontSizeXS: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(12),
  fontSizeSM: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(14),
  fontSizeMD: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(16),
  fontSizeLG: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(18),
  fontSizeXL: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(20)
};
const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightMedium
};
const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2
};
const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,
  h1: _objectSpread({
    fontSize: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(48),
    lineHeight: 1.25
  }, baseHeadingProperties),
  h2: _objectSpread({
    fontSize: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(36),
    lineHeight: 1.3
  }, baseHeadingProperties),
  h3: _objectSpread({
    fontSize: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(30),
    lineHeight: 1.375
  }, baseHeadingProperties),
  h4: _objectSpread({
    fontSize: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(24),
    lineHeight: 1.375
  }, baseHeadingProperties),
  h5: _objectSpread({
    fontSize: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(20),
    lineHeight: 1.375
  }, baseHeadingProperties),
  h6: _objectSpread({
    fontSize: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(16),
    lineHeight: 1.625
  }, baseHeadingProperties),
  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625
  },
  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.6
  },
  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625
  },
  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.6
  },
  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightBold,
    lineHeight: 1.5,
    textTransform: "uppercase"
  },
  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.25
  },
  overline: {
    fontFamily: baseProperties.fontFamily
  },
  d1: _objectSpread({
    fontSize: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(80)
  }, baseDisplayProperties),
  d2: _objectSpread({
    fontSize: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(72)
  }, baseDisplayProperties),
  d3: _objectSpread({
    fontSize: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(64)
  }, baseDisplayProperties),
  d4: _objectSpread({
    fontSize: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(56)
  }, baseDisplayProperties),
  d5: _objectSpread({
    fontSize: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(48)
  }, baseDisplayProperties),
  d6: _objectSpread({
    fontSize: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(40)
  }, baseDisplayProperties),
  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL
  },
  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2
  }
};
/* harmony default export */ __webpack_exports__["default"] = (typography);

/***/ }),

/***/ "./assets/theme/components/appBar.js":
/*!*******************************************!*\
  !*** ./assets/theme/components/appBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
const appBar = {
  defaultProps: {
    color: "transparent"
  },
  styleOverrides: {
    root: {
      boxShadow: "none"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (appBar);

/***/ }),

/***/ "./assets/theme/components/avatar.js":
/*!*******************************************!*\
  !*** ./assets/theme/components/avatar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles

const {
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__["default"];
const avatar = {
  styleOverrides: {
    root: {
      transition: "all 200ms ease-in-out"
    },
    rounded: {
      borderRadius: borderRadius.lg
    },
    img: {
      height: "auto"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (avatar);

/***/ }),

/***/ "./assets/theme/components/breadcrumbs.js":
/*!************************************************!*\
  !*** ./assets/theme/components/breadcrumbs.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles


const {
  grey
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  size
} = assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__["default"];
const breadcrumbs = {
  styleOverrides: {
    li: {
      lineHeight: 0
    },
    separator: {
      fontSize: size.sm,
      color: grey[600]
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (breadcrumbs);

/***/ }),

/***/ "./assets/theme/components/button/contained.js":
/*!*****************************************************!*\
  !*** ./assets/theme/components/button/contained.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/* harmony import */ var assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/boxShadows */ "./assets/theme/base/boxShadows.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React Base Styles


 // Soft UI Dashboard React Helper Functions


const {
  white,
  text,
  info,
  secondary
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  size
} = assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  buttonBoxShadow
} = assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_2__["default"];
const contained = {
  base: {
    backgroundColor: white.main,
    minHeight: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(40),
    color: text.main,
    boxShadow: buttonBoxShadow.main,
    padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(12)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(24)}`,
    "&:hover": {
      backgroundColor: white.main,
      boxShadow: buttonBoxShadow.stateOf
    },
    "&:focus": {
      boxShadow: buttonBoxShadow.stateOf
    },
    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      boxShadow: buttonBoxShadow.stateOf
    },
    "&:disabled": {
      boxShadow: buttonBoxShadow.main
    },
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(16)} !important`
    }
  },
  small: {
    minHeight: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(32),
    padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(8)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(32)}`,
    fontSize: size.xs,
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(12)} !important`
    }
  },
  large: {
    minHeight: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(47),
    padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(14)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(64)}`,
    fontSize: size.sm,
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(22)} !important`
    }
  },
  primary: {
    backgroundColor: info.main,
    "&:hover": {
      backgroundColor: info.main
    },
    "&:focus:not(:hover)": {
      backgroundColor: info.focus,
      boxShadow: buttonBoxShadow.stateOfNotHover
    }
  },
  secondary: {
    backgroundColor: secondary.main,
    "&:hover": {
      backgroundColor: secondary.main
    },
    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
      boxShadow: buttonBoxShadow.stateOfNotHover
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (contained);

/***/ }),

/***/ "./assets/theme/components/button/index.js":
/*!*************************************************!*\
  !*** ./assets/theme/components/button/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_components_button_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/components/button/root */ "./assets/theme/components/button/root.js");
/* harmony import */ var assets_theme_components_button_contained__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/components/button/contained */ "./assets/theme/components/button/contained.js");
/* harmony import */ var assets_theme_components_button_outlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/components/button/outlined */ "./assets/theme/components/button/outlined.js");
/* harmony import */ var assets_theme_components_button_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/components/button/text */ "./assets/theme/components/button/text.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React Button Styles




const button = {
  defaultProps: {
    disableRipple: true
  },
  styleOverrides: {
    root: _objectSpread({}, assets_theme_components_button_root__WEBPACK_IMPORTED_MODULE_0__["default"]),
    contained: _objectSpread({}, assets_theme_components_button_contained__WEBPACK_IMPORTED_MODULE_1__["default"].base),
    containedSizeSmall: _objectSpread({}, assets_theme_components_button_contained__WEBPACK_IMPORTED_MODULE_1__["default"].small),
    containedSizeLarge: _objectSpread({}, assets_theme_components_button_contained__WEBPACK_IMPORTED_MODULE_1__["default"].large),
    containedPrimary: _objectSpread({}, assets_theme_components_button_contained__WEBPACK_IMPORTED_MODULE_1__["default"].primary),
    containedSecondary: _objectSpread({}, assets_theme_components_button_contained__WEBPACK_IMPORTED_MODULE_1__["default"].secondary),
    outlined: _objectSpread({}, assets_theme_components_button_outlined__WEBPACK_IMPORTED_MODULE_2__["default"].base),
    outlinedSizeSmall: _objectSpread({}, assets_theme_components_button_outlined__WEBPACK_IMPORTED_MODULE_2__["default"].small),
    outlinedSizeLarge: _objectSpread({}, assets_theme_components_button_outlined__WEBPACK_IMPORTED_MODULE_2__["default"].large),
    outlinedPrimary: _objectSpread({}, assets_theme_components_button_outlined__WEBPACK_IMPORTED_MODULE_2__["default"].primary),
    outlinedSecondary: _objectSpread({}, assets_theme_components_button_outlined__WEBPACK_IMPORTED_MODULE_2__["default"].secondary),
    text: _objectSpread({}, assets_theme_components_button_text__WEBPACK_IMPORTED_MODULE_3__["default"].base),
    textSizeSmall: _objectSpread({}, assets_theme_components_button_text__WEBPACK_IMPORTED_MODULE_3__["default"].small),
    textSizeLarge: _objectSpread({}, assets_theme_components_button_text__WEBPACK_IMPORTED_MODULE_3__["default"].large),
    textPrimary: _objectSpread({}, assets_theme_components_button_text__WEBPACK_IMPORTED_MODULE_3__["default"].primary),
    textSecondary: _objectSpread({}, assets_theme_components_button_text__WEBPACK_IMPORTED_MODULE_3__["default"].secondary)
  }
};
/* harmony default export */ __webpack_exports__["default"] = (button);

/***/ }),

/***/ "./assets/theme/components/button/outlined.js":
/*!****************************************************!*\
  !*** ./assets/theme/components/button/outlined.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/* harmony import */ var assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/boxShadows */ "./assets/theme/base/boxShadows.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React Base Styles


 // Soft UI Dashboard React Helper Functions


const {
  transparent,
  light,
  info,
  secondary
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  size
} = assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  buttonBoxShadow
} = assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_2__["default"];
const outlined = {
  base: {
    minHeight: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(42),
    color: light.main,
    borderColor: light.main,
    padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(12)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(24)}`,
    "&:hover": {
      opacity: 0.75,
      backgroundColor: transparent.main
    },
    "&:focus:not(:hover)": {
      boxShadow: buttonBoxShadow.stateOfNotHover
    },
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(16)} !important`
    }
  },
  small: {
    minHeight: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(34),
    padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(8)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(32)}`,
    fontSize: size.xs,
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(12)} !important`
    }
  },
  large: {
    minHeight: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(49),
    padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(14)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(64)}`,
    fontSize: size.sm,
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(22)} !important`
    }
  },
  primary: {
    backgroundColor: transparent.main,
    borderColor: info.main,
    "&:hover": {
      backgroundColor: transparent.main
    },
    "&:focus:not(:hover)": {
      boxShadow: buttonBoxShadow.stateOfNotHover
    }
  },
  secondary: {
    backgroundColor: transparent.main,
    borderColor: secondary.main,
    "&:hover": {
      backgroundColor: transparent.main
    },
    "&:focus:not(:hover)": {
      boxShadow: buttonBoxShadow.stateOfNotHover
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (outlined);

/***/ }),

/***/ "./assets/theme/components/button/root.js":
/*!************************************************!*\
  !*** ./assets/theme/components/button/root.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React Base Styles

 // Soft UI Dashboard React Helper Functions


const {
  fontWeightBold,
  size
} = assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__["default"];
const root = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: size.xs,
  fontWeight: fontWeightBold,
  borderRadius: borderRadius.md,
  padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(12)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(24)}`,
  lineHeight: 1.4,
  textAlign: "center",
  textTransform: "uppercase",
  userSelect: "none",
  backgroundSize: "150% !important",
  backgroundPositionX: "25% !important",
  transition: `all 150ms ease-in`,
  "&:hover": {
    transform: "scale(1.02)"
  },
  "&:disabled": {
    pointerEvent: "none",
    opacity: 0.65
  },
  "& .material-icons": {
    fontSize: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(15),
    marginTop: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(-2)
  }
};
/* harmony default export */ __webpack_exports__["default"] = (root);

/***/ }),

/***/ "./assets/theme/components/button/text.js":
/*!************************************************!*\
  !*** ./assets/theme/components/button/text.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React Base Styles

 // Soft UI Dashboard React Helper Functions


const {
  transparent,
  info,
  secondary,
  grey
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  size
} = assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__["default"];
const buttonText = {
  base: {
    backgroundColor: transparent.main,
    height: "max-content",
    color: info.main,
    boxShadow: "none",
    padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(6)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(12)}`,
    "&:hover": {
      backgroundColor: transparent.main,
      boxShadow: "none",
      color: info.focus
    },
    "&:focus": {
      boxShadow: "none",
      color: info.focus
    },
    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      boxShadow: "none"
    },
    "&:disabled": {
      color: grey[600],
      boxShadow: "none"
    },
    "& .material-icons, .material-icons-round, svg, span": {
      fontSize: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(16)} !important`
    }
  },
  small: {
    fontSize: size.xs,
    "& .material-icons, .material-icons-round, svg, span": {
      fontSize: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(12)} !important`
    }
  },
  large: {
    fontSize: size.sm,
    "& .material-icons, .material-icons-round, svg, span": {
      fontSize: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(22)} !important`
    }
  },
  primary: {
    color: info.main,
    backgroundColor: transparent.main,
    "&:hover": {
      color: info.focus,
      backgroundColor: transparent.main
    },
    "&:focus:not(:hover)": {
      color: info.focus,
      backgroundColor: transparent.focus,
      boxShadow: "none"
    }
  },
  secondary: {
    color: secondary.focus,
    backgroundColor: transparent.main,
    "&:hover": {
      color: secondary.focus,
      backgroundColor: transparent.main
    },
    "&:focus:not(:hover)": {
      color: secondary.focus,
      backgroundColor: transparent.focus,
      boxShadow: "none"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (buttonText);

/***/ }),

/***/ "./assets/theme/components/buttonBase.js":
/*!***********************************************!*\
  !*** ./assets/theme/components/buttonBase.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
const buttonBase = {
  defaultProps: {
    disableRipple: true
  }
};
/* harmony default export */ __webpack_exports__["default"] = (buttonBase);

/***/ }),

/***/ "./assets/theme/components/card/cardContent.js":
/*!*****************************************************!*\
  !*** ./assets/theme/components/card/cardContent.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React Helper Functions

const cardContent = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
      padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_0__["default"])(8)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_0__["default"])(24)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_0__["default"])(24)}`
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardContent);

/***/ }),

/***/ "./assets/theme/components/card/cardMedia.js":
/*!***************************************************!*\
  !*** ./assets/theme/components/card/cardMedia.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React Base Styles
 // Soft UI Dashboard React Helper Functions


const {
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__["default"];
const cardMedia = {
  styleOverrides: {
    root: {
      borderRadius: borderRadius.xl,
      margin: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(16)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(16)} 0`
    },
    media: {
      width: "auto"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardMedia);

/***/ }),

/***/ "./assets/theme/components/card/index.js":
/*!***********************************************!*\
  !*** ./assets/theme/components/card/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/boxShadows */ "./assets/theme/base/boxShadows.js");
/* harmony import */ var assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/functions/rgba */ "./assets/theme/functions/rgba.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React Base Styles


 // Soft UI Dashboard React Helper Function


const {
  black,
  white
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  borderWidth,
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  xxl
} = assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_2__["default"];
const card = {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundColor: white.main,
      backgroundClip: "border-box",
      border: `${borderWidth[0]} solid ${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_3__["default"])(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: xxl
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (card);

/***/ }),

/***/ "./assets/theme/components/container.js":
/*!**********************************************!*\
  !*** ./assets/theme/components/container.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/breakpoints */ "./assets/theme/base/breakpoints.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles
 // Soft UI Dashboard React helper functions


const {
  values: {
    sm,
    md,
    lg,
    xl,
    xxl
  }
} = assets_theme_base_breakpoints__WEBPACK_IMPORTED_MODULE_0__["default"];
const SM = `@media (min-width: ${sm}px)`;
const MD = `@media (min-width: ${md}px)`;
const LG = `@media (min-width: ${lg}px)`;
const XL = `@media (min-width: ${xl}px)`;
const XXL = `@media (min-width: ${xxl}px)`;
const sharedClasses = {
  paddingRight: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(24)} !important`,
  paddingLeft: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(24)} !important`,
  marginRight: "auto !important",
  marginLeft: "auto !important",
  width: "100% !important",
  position: "relative"
};
const container = {
  [SM]: {
    ".MuiContainer-root": _objectSpread(_objectSpread({}, sharedClasses), {}, {
      maxWidth: "540px !important"
    })
  },
  [MD]: {
    ".MuiContainer-root": _objectSpread(_objectSpread({}, sharedClasses), {}, {
      maxWidth: "720px !important"
    })
  },
  [LG]: {
    ".MuiContainer-root": _objectSpread(_objectSpread({}, sharedClasses), {}, {
      maxWidth: "960px !important"
    })
  },
  [XL]: {
    ".MuiContainer-root": _objectSpread(_objectSpread({}, sharedClasses), {}, {
      maxWidth: "1140px !important"
    })
  },
  [XXL]: {
    ".MuiContainer-root": _objectSpread(_objectSpread({}, sharedClasses), {}, {
      maxWidth: "1320px !important"
    })
  }
};
/* harmony default export */ __webpack_exports__["default"] = (container);

/***/ }),

/***/ "./assets/theme/components/divider.js":
/*!********************************************!*\
  !*** ./assets/theme/components/divider.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/functions/rgba */ "./assets/theme/functions/rgba.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles
 // Soft UI Dashboard React helper functions



const {
  dark,
  transparent,
  white
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const divider = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_1__["default"])(dark.main, 0)}, ${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_1__["default"])(dark.main, 0.5)}, ${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_1__["default"])(dark.main, 0)}) !important`,
      height: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(1),
      margin: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(16)} 0`,
      borderBottom: "none",
      opacity: 0.25
    },
    vertical: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to bottom, ${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_1__["default"])(dark.main, 0)}, ${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_1__["default"])(dark.main, 0.5)}, ${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_1__["default"])(dark.main, 0)}) !important`,
      width: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(1),
      height: "100%",
      margin: `0 ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(16)}`,
      borderRight: "none"
    },
    light: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_1__["default"])(white.main, 0)}, ${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_1__["default"])(white.main, 0.5)}, ${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_1__["default"])(white.main, 0)}) !important`,
      "&.MuiDivider-vertical": {
        backgroundImage: `linear-gradient(to bottom, ${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_1__["default"])(white.main, 0)}, ${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_1__["default"])(white.main, 0.5)}, ${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_1__["default"])(white.main, 0)}) !important`
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (divider);

/***/ }),

/***/ "./assets/theme/components/form/autocomplete.js":
/*!******************************************************!*\
  !*** ./assets/theme/components/form/autocomplete.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/boxShadows */ "./assets/theme/base/boxShadows.js");
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles



 // Soft UI Dashboard React helper functions


const {
  lg
} = assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  size
} = assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  text,
  white,
  transparent,
  light,
  dark,
  gradients
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_2__["default"];
const {
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_3__["default"];
const autocomplete = {
  styleOverrides: {
    popper: {
      boxShadow: lg,
      padding: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(8),
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: `${white.main} !important`,
      borderRadius: borderRadius.md
    },
    paper: {
      boxShadow: "none",
      backgroundColor: transparent.main
    },
    option: {
      padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(4.8)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      transition: "background-color 300ms ease, color 300ms ease",
      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: light.main,
        color: dark.main
      },
      '&[aria-selected="true"]': {
        backgroundColor: `${light.main} !important`,
        color: `${dark.main} !important`
      }
    },
    noOptions: {
      fontSize: size.sm,
      color: text.main
    },
    groupLabel: {
      color: dark.main
    },
    loading: {
      fontSize: size.sm,
      color: text.main
    },
    tag: {
      display: "flex",
      alignItems: "center",
      height: "auto",
      padding: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(4),
      backgroundColor: gradients.dark.state,
      color: white.main,
      "& .MuiChip-label": {
        lineHeight: 1.2,
        padding: `0 ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(10)} 0 ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(4)}`
      },
      "& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus": {
        color: white.main,
        marginRight: 0
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (autocomplete);

/***/ }),

/***/ "./assets/theme/components/form/checkbox.js":
/*!**************************************************!*\
  !*** ./assets/theme/components/form/checkbox.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/* harmony import */ var assets_theme_functions_linearGradient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/functions/linearGradient */ "./assets/theme/functions/linearGradient.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions



const {
  borderWidth,
  borderColor
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  transparent,
  gradients,
  info
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__["default"];
const checkbox = {
  styleOverrides: {
    root: {
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      height: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      marginRight: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(6),
      padding: 0,
      color: transparent.main,
      border: `${borderWidth[1]} solid ${borderColor}`,
      borderRadius: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(5.6),
      transition: "all 250ms ease",
      "&:hover": {
        backgroundColor: transparent.main
      },
      "& .MuiSvgIcon-root": {
        fill: transparent.main
      },
      "&.Mui-focusVisible": {
        border: `${borderWidth[2]} solid ${info.main} !important`
      }
    },
    colorPrimary: {
      backgroundColor: transparent.main,
      "&.Mui-checked": {
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${Object(assets_theme_functions_linearGradient__WEBPACK_IMPORTED_MODULE_3__["default"])(gradients.dark.main, gradients.dark.state)}`,
        borderColor: gradients.dark.main
      },
      "&:hover": {
        backgroundColor: transparent.main
      }
    },
    colorSecondary: {
      backgroundColor: transparent.main,
      "&.Mui-checked": {
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${Object(assets_theme_functions_linearGradient__WEBPACK_IMPORTED_MODULE_3__["default"])(gradients.dark.main, gradients.dark.state)}`,
        borderColor: gradients.dark.main
      },
      "&:hover": {
        backgroundColor: transparent.main
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (checkbox);

/***/ }),

/***/ "./assets/theme/components/form/formControlLabel.js":
/*!**********************************************************!*\
  !*** ./assets/theme/components/form/formControlLabel.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions


const {
  dark
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  size,
  fontWeightBold
} = assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__["default"];
const formControlLabel = {
  styleOverrides: {
    root: {
      display: "block",
      minHeight: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      marginBottom: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(2)
    },
    label: {
      display: "inline-block",
      fontSize: size.sm,
      fontWeight: fontWeightBold,
      color: dark.main,
      lineHeight: 1,
      transform: `translateY(${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(1)})`,
      marginLeft: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(4),
      "&.Mui-disabled": {
        color: dark.main
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (formControlLabel);

/***/ }),

/***/ "./assets/theme/components/form/formLabel.js":
/*!***************************************************!*\
  !*** ./assets/theme/components/form/formLabel.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles

const {
  dark
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const formLabel = {
  styleOverrides: {
    root: {
      color: dark.main
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (formLabel);

/***/ }),

/***/ "./assets/theme/components/form/input.js":
/*!***********************************************!*\
  !*** ./assets/theme/components/form/input.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React Base Styles

 // Soft UI Dashboard PRO helper functions


const {
  inputColors
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  borderWidth,
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__["default"];
const input = {
  styleOverrides: {
    root: {
      display: "flex !important",
      padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(8)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(28)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(8)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(12)} !important`,
      border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      borderRadius: `${borderRadius.md} !important`,
      "& fieldset": {
        border: "none"
      }
    },
    input: {
      height: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(22),
      width: "max-content !important"
    },
    inputSizeSmall: {
      height: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(14)
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (input);

/***/ }),

/***/ "./assets/theme/components/form/inputBase.js":
/*!***************************************************!*\
  !*** ./assets/theme/components/form/inputBase.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React Base Styles


 // Soft UI Dashboard PRO helper functions


const {
  dark,
  white,
  grey,
  inputColors
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  size,
  fontWeightRegular
} = assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  borderWidth,
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_2__["default"];
const inputBase = {
  styleOverrides: {
    root: {
      display: "grid !important",
      placeItems: "center !important",
      width: "100% !important",
      height: "auto !important",
      padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(8)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(12)}`,
      fontSize: `${size.sm} !important`,
      fontWeight: `${fontWeightRegular} !important`,
      lineHeight: "1.4 !important",
      color: `${grey[700]} !important`,
      backgroundColor: `${white.main} !important`,
      backgroundClip: "padding-box !important",
      border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      appearance: "none !important",
      borderRadius: borderRadius.md,
      transition: "box-shadow 150ms ease, border-color 150ms ease, padding 150ms ease !important"
    },
    input: {
      width: "100% !important",
      height: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(22)}`,
      padding: "0 !important",
      "&::-webkit-input-placeholder": {
        color: `${dark.main} !important`
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (inputBase);

/***/ }),

/***/ "./assets/theme/components/form/radio.js":
/*!***********************************************!*\
  !*** ./assets/theme/components/form/radio.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/* harmony import */ var assets_theme_functions_linearGradient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/functions/linearGradient */ "./assets/theme/functions/linearGradient.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions



const {
  borderWidth,
  borderColor
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  transparent,
  gradients,
  info
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__["default"];
const radio = {
  styleOverrides: {
    root: {
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      height: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      marginRight: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(6),
      padding: 0,
      color: transparent.main,
      border: `${borderWidth[1]} solid ${borderColor}`,
      borderRadius: "50%",
      transition: "all 250ms ease",
      "&:hover": {
        backgroundColor: transparent.main
      },
      "& .MuiSvgIcon-root": {
        fill: transparent.main
      },
      "&.Mui-focusVisible": {
        border: `${borderWidth[2]} solid ${info.main} !important`
      }
    },
    colorPrimary: {
      backgroundColor: transparent.main,
      "&.Mui-checked": {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='15px' width='15px'%3E%3Ccircle cx='50%' cy='50%' r='3' fill='%23fff' /%3E%3C/svg%3E"), ${Object(assets_theme_functions_linearGradient__WEBPACK_IMPORTED_MODULE_3__["default"])(gradients.dark.main, gradients.dark.state)}`,
        borderColor: gradients.dark.main
      },
      "&:hover": {
        backgroundColor: transparent.main
      }
    },
    colorSecondary: {
      backgroundColor: transparent.main,
      "&.Mui-checked": {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='15px' width='15px'%3E%3Ccircle cx='50%' cy='50%' r='3' fill='%23fff' /%3E%3C/svg%3E"), ${Object(assets_theme_functions_linearGradient__WEBPACK_IMPORTED_MODULE_3__["default"])(gradients.dark.main, gradients.dark.state)}`,
        borderColor: gradients.dark.main
      },
      "&:hover": {
        backgroundColor: transparent.main
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (radio);

/***/ }),

/***/ "./assets/theme/components/form/select.js":
/*!************************************************!*\
  !*** ./assets/theme/components/form/select.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles
 // Soft UI Dashboard React helper functions


const {
  transparent
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const select = {
  styleOverrides: {
    select: {
      display: "grid",
      alignItems: "center",
      padding: `0 ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(12)} !important`,
      "& .Mui-selected": {
        backgroundColor: transparent.main
      }
    },
    selectMenu: {
      background: "none",
      height: "none",
      minHeight: "none",
      overflow: "unset"
    },
    icon: {
      display: "none"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (select);

/***/ }),

/***/ "./assets/theme/components/form/switchButton.js":
/*!******************************************************!*\
  !*** ./assets/theme/components/form/switchButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/boxShadows */ "./assets/theme/base/boxShadows.js");
/* harmony import */ var assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/functions/rgba */ "./assets/theme/functions/rgba.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/* harmony import */ var assets_theme_functions_linearGradient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/theme/functions/linearGradient */ "./assets/theme/functions/linearGradient.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles


 // Soft UI Dashboard React helper functions




const {
  white,
  light,
  gradients
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  borderWidth
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  md
} = assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_2__["default"];
const switchButton = {
  defaultProps: {
    disableRipple: true
  },
  styleOverrides: {
    root: {
      width: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(40),
      height: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(20),
      margin: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(4)} 0`,
      padding: 0,
      borderRadius: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(160),
      transition: "transform 250ms ease-in"
    },
    switchBase: {
      padding: 0,
      top: "50%",
      transform: `translate(${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(2)}, -50%)`,
      transition: `transform 250ms ease-in-out`,
      "&.Mui-checked": {
        transform: `translate(${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(22)}, -50%)`,
        "& + .MuiSwitch-track": {
          backgroundColor: `${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_3__["default"])(gradients.dark.state, 0.95)} !important`,
          borderColor: `${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_3__["default"])(gradients.dark.state, 0.95)} !important`,
          opacity: 1
        }
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: "0.3 !important"
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        backgroundImage: Object(assets_theme_functions_linearGradient__WEBPACK_IMPORTED_MODULE_5__["default"])(gradients.info.main, gradients.info.state)
      }
    },
    thumb: {
      width: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(16),
      height: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(16),
      backgroundColor: white.main,
      boxShadow: md,
      top: "50%"
    },
    track: {
      backgroundColor: Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_3__["default"])(gradients.dark.state, 0.1),
      border: `${borderWidth[1]} solid ${light.main}`,
      borderRadius: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(160),
      opacity: 1,
      transition: `background-color 250ms ease, border-color 200ms ease`
    },
    checked: {}
  }
};
/* harmony default export */ __webpack_exports__["default"] = (switchButton);

/***/ }),

/***/ "./assets/theme/components/icon.js":
/*!*****************************************!*\
  !*** ./assets/theme/components/icon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React helper functions

const icon = {
  defaultProps: {
    baseClassName: "material-icons-round",
    fontSize: "inherit"
  },
  styleOverrides: {
    fontSizeInherit: {
      fontSize: "inherit !important"
    },
    fontSizeSmall: {
      fontSize: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_0__["default"])(20)} !important`
    },
    fontSizeLarge: {
      fontSize: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_0__["default"])(36)} !important`
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./assets/theme/components/iconButton.js":
/*!***********************************************!*\
  !*** ./assets/theme/components/iconButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React Base Styles

const {
  transparent
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const iconButton = {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: transparent.main
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (iconButton);

/***/ }),

/***/ "./assets/theme/components/linearProgress.js":
/*!***************************************************!*\
  !*** ./assets/theme/components/linearProgress.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions


const {
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  light
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__["default"];
const linearProgress = {
  styleOverrides: {
    root: {
      height: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(3),
      borderRadius: borderRadius.md,
      overflow: "visible",
      position: "relative"
    },
    colorPrimary: {
      backgroundColor: light.main
    },
    colorSecondary: {
      backgroundColor: light.main
    },
    bar: {
      height: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(6),
      borderRadius: borderRadius.sm,
      position: "absolute",
      transform: `translate(0, ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(-1.5)}) !important`,
      transition: "width 0.6s ease !important"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (linearProgress);

/***/ }),

/***/ "./assets/theme/components/link.js":
/*!*****************************************!*\
  !*** ./assets/theme/components/link.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
const link = {
  defaultProps: {
    underline: "none",
    color: "inherit"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (link);

/***/ }),

/***/ "./assets/theme/components/list/index.js":
/*!***********************************************!*\
  !*** ./assets/theme/components/list/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
const list = {
  styleOverrides: {
    padding: {
      paddingTop: 0,
      paddingBottom: 0
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (list);

/***/ }),

/***/ "./assets/theme/components/list/listItem.js":
/*!**************************************************!*\
  !*** ./assets/theme/components/list/listItem.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
const listItem = {
  defaultProps: {
    disableGutters: true
  },
  styleOverrides: {
    root: {
      paddingTop: 0,
      paddingBottom: 0
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (listItem);

/***/ }),

/***/ "./assets/theme/components/list/listItemText.js":
/*!******************************************************!*\
  !*** ./assets/theme/components/list/listItemText.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
const listItemText = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (listItemText);

/***/ }),

/***/ "./assets/theme/components/menu/index.js":
/*!***********************************************!*\
  !*** ./assets/theme/components/menu/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/boxShadows */ "./assets/theme/base/boxShadows.js");
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles



 // Soft UI Dashboard React helper functions


const {
  lg
} = assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  size
} = assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  text,
  white
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_2__["default"];
const {
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_3__["default"];
const menu = {
  defaultProps: {
    disableAutoFocusItem: true
  },
  styleOverrides: {
    paper: {
      minWidth: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(160),
      boxShadow: lg,
      padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(16)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: `${white.main} !important`,
      borderRadius: borderRadius.md
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./assets/theme/components/menu/menuItem.js":
/*!**************************************************!*\
  !*** ./assets/theme/components/menu/menuItem.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles


 // Soft UI Dashboard React helper functions


const {
  light,
  text,
  dark
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  size
} = assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_2__["default"];
const menuItem = {
  styleOverrides: {
    root: {
      minWidth: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(160),
      minHeight: "unset",
      padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(4.8)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      transition: "background-color 300ms ease, color 300ms ease",
      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: light.main,
        color: dark.main
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (menuItem);

/***/ }),

/***/ "./assets/theme/components/popover.js":
/*!********************************************!*\
  !*** ./assets/theme/components/popover.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/boxShadows */ "./assets/theme/base/boxShadows.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React helper functions
 // Soft UI Dashboard React base styles




const {
  transparent
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  lg
} = assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_2__["default"];
const {
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_3__["default"];
const popover = {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: lg,
      padding: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_0__["default"])(8),
      borderRadius: borderRadius.lg
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (popover);

/***/ }),

/***/ "./assets/theme/components/sidenav.js":
/*!********************************************!*\
  !*** ./assets/theme/components/sidenav.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/functions/rgba */ "./assets/theme/functions/rgba.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions



const {
  white
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__["default"];
const sidenav = {
  styleOverrides: {
    root: {
      width: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(250),
      whiteSpace: "nowrap",
      border: "none"
    },
    paper: {
      width: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(250),
      backgroundColor: Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_2__["default"])(white.main, 0.8),
      backdropFilter: `saturate(200%) blur(${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(30)})`,
      height: `calc(100vh - ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(32)})`,
      margin: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(16),
      borderRadius: borderRadius.xl,
      border: "none"
    },
    paperAnchorDockedLeft: {
      borderRight: "none"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (sidenav);

/***/ }),

/***/ "./assets/theme/components/slider.js":
/*!*******************************************!*\
  !*** ./assets/theme/components/slider.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/boxShadows */ "./assets/theme/base/boxShadows.js");
/* harmony import */ var assets_theme_functions_linearGradient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/functions/linearGradient */ "./assets/theme/functions/linearGradient.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles


 // Soft UI Dashboard React helper functions



const {
  light,
  white,
  sliderColors,
  black,
  gradients
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  borderRadius,
  borderWidth
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  sliderBoxShadow
} = assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_2__["default"];
const slider = {
  styleOverrides: {
    root: {
      width: "100%",
      "& .MuiSlider-active, & .Mui-focusVisible": {
        boxShadow: "none !important"
      },
      "& .MuiSlider-valueLabel": {
        color: black.main
      }
    },
    rail: {
      height: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(3),
      backgroundColor: light.main,
      borderRadius: borderRadius.sm
    },
    track: {
      backgroundImage: Object(assets_theme_functions_linearGradient__WEBPACK_IMPORTED_MODULE_3__["default"])(gradients.info.main, gradients.info.state),
      height: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(6),
      position: "relative",
      top: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(2),
      border: "none",
      borderRadius: borderRadius.lg,
      zIndex: 1
    },
    thumb: {
      width: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(15),
      height: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(15),
      backgroundColor: white.main,
      zIndex: 10,
      boxShadow: sliderBoxShadow.thumb,
      border: `${borderWidth[1]} solid ${sliderColors.thumb.borderColor}`,
      "&:hover": {
        boxShadow: "none"
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./assets/theme/components/stepper/index.js":
/*!**************************************************!*\
  !*** ./assets/theme/components/stepper/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles
 // Soft UI Dashboard React helper functions


const {
  transparent
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const stepper = {
  styleOverrides: {
    root: {
      margin: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(48)} 0`,
      padding: `0 ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(12)}`,
      "&.MuiPaper-root": {
        backgroundColor: transparent.main
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (stepper);

/***/ }),

/***/ "./assets/theme/components/stepper/step.js":
/*!*************************************************!*\
  !*** ./assets/theme/components/stepper/step.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React helper functions

const step = {
  styleOverrides: {
    root: {
      padding: `0 ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_0__["default"])(6)}`
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (step);

/***/ }),

/***/ "./assets/theme/components/stepper/stepConnector.js":
/*!**********************************************************!*\
  !*** ./assets/theme/components/stepper/stepConnector.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles


const {
  dark
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  borderWidth,
  borderColor
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__["default"];
const stepConnector = {
  styleOverrides: {
    root: {
      color: borderColor,
      transition: "all 200ms linear",
      "&.Mui-active": {
        color: dark.main
      },
      "&.Mui-completed": {
        color: dark.main
      }
    },
    alternativeLabel: {
      top: "14%",
      left: "-50%",
      right: "50%"
    },
    line: {
      borderWidth: `${borderWidth[2]} !important`,
      borderColor: "currentColor"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (stepConnector);

/***/ }),

/***/ "./assets/theme/components/stepper/stepIcon.js":
/*!*****************************************************!*\
  !*** ./assets/theme/components/stepper/stepIcon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/* harmony import */ var assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/functions/boxShadow */ "./assets/theme/functions/boxShadow.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions



const {
  dark,
  white
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  borderWidth,
  borderColor
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__["default"];
const stepIcon = {
  styleOverrides: {
    root: {
      background: white.main,
      fill: white.main,
      stroke: white.main,
      strokeWidth: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(10),
      width: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(13),
      height: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(13),
      border: `${borderWidth[2]} solid ${borderColor}`,
      borderRadius: "50%",
      zIndex: 99,
      transition: "all 200ms linear",
      "&.Mui-active": {
        background: dark.main,
        fill: dark.main,
        stroke: dark.main,
        borderColor: dark.main,
        boxShadow: Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_3__["default"])([0, 0], [0, 2], dark.main, 1)
      },
      "&.Mui-completed": {
        background: dark.main,
        fill: dark.main,
        stroke: dark.main,
        borderColor: dark.main,
        boxShadow: Object(assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_3__["default"])([0, 0], [0, 2], dark.main, 1)
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (stepIcon);

/***/ }),

/***/ "./assets/theme/components/stepper/stepLabel.js":
/*!******************************************************!*\
  !*** ./assets/theme/components/stepper/stepLabel.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions


const {
  size,
  fontWeightRegular
} = assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  grey,
  dark,
  secondary
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__["default"];
const stepLabel = {
  styleOverrides: {
    label: {
      marginTop: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.md,
      color: grey[300],
      "&.Mui-active": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${dark.main} !important`
      },
      "&.Mui-completed": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${secondary.main} !important`
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (stepLabel);

/***/ }),

/***/ "./assets/theme/components/svgIcon.js":
/*!********************************************!*\
  !*** ./assets/theme/components/svgIcon.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React helper functions

const svgIcon = {
  defaultProps: {
    fontSize: "inherit"
  },
  styleOverrides: {
    fontSizeInherit: {
      fontSize: "inherit !important"
    },
    fontSizeSmall: {
      fontSize: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_0__["default"])(20)} !important`
    },
    fontSizeLarge: {
      fontSize: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_0__["default"])(36)} !important`
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (svgIcon);

/***/ }),

/***/ "./assets/theme/components/table/tableCell.js":
/*!****************************************************!*\
  !*** ./assets/theme/components/table/tableCell.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions


const {
  borderWidth
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  light
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__["default"];
const tableCell = {
  styleOverrides: {
    root: {
      padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(12)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_2__["default"])(16)}`,
      borderBottom: `${borderWidth[1]} solid ${light.main}`
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tableCell);

/***/ }),

/***/ "./assets/theme/components/table/tableContainer.js":
/*!*********************************************************!*\
  !*** ./assets/theme/components/table/tableContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/boxShadows */ "./assets/theme/base/boxShadows.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles



const {
  white
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  xxl
} = assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_2__["default"];
const tableContainer = {
  styleOverrides: {
    root: {
      backgroundColor: white.main,
      boxShadow: xxl,
      borderRadius: borderRadius.xl
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tableContainer);

/***/ }),

/***/ "./assets/theme/components/table/tableHead.js":
/*!****************************************************!*\
  !*** ./assets/theme/components/table/tableHead.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles
 // Soft UI Dashboard React helper functions


const {
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_0__["default"];
const tableHead = {
  styleOverrides: {
    root: {
      display: "block",
      padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(16)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(16)} 0  ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(16)}`,
      borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tableHead);

/***/ }),

/***/ "./assets/theme/components/tabs/index.js":
/*!***********************************************!*\
  !*** ./assets/theme/components/tabs/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/boxShadows */ "./assets/theme/base/boxShadows.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles


 // Soft UI Dashboard React helper functions


const {
  grey,
  white
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  tabsBoxShadow
} = assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_2__["default"];
const tabs = {
  styleOverrides: {
    root: {
      position: "relative",
      backgroundColor: grey[100],
      borderRadius: borderRadius.lg,
      minHeight: "unset",
      padding: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(4)
    },
    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10
    },
    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important"
    },
    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%"
      }
    },
    indicator: {
      height: "100%",
      borderRadius: borderRadius.md,
      backgroundColor: white.main,
      boxShadow: tabsBoxShadow.indicator,
      transition: "all 500ms ease"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./assets/theme/components/tabs/tab.js":
/*!*********************************************!*\
  !*** ./assets/theme/components/tabs/tab.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React base styles


 // Soft UI Dashboard React helper functions


const {
  size,
  fontWeightRegular
} = assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  dark
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_2__["default"];
const tab = {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flex: "1 1 auto",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "unset !important",
      minHeight: "unset !important",
      fontSize: size.md,
      fontWeight: fontWeightRegular,
      textTransform: "none",
      lineHeight: "inherit",
      padding: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(4),
      borderRadius: borderRadius.md,
      color: `${dark.main} !important`,
      opacity: "1 !important",
      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(4)
      },
      "& svg": {
        marginBottom: "0 !important",
        marginRight: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(6)
      }
    },
    labelIcon: {
      paddingTop: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_3__["default"])(4)
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tab);

/***/ }),

/***/ "./assets/theme/components/tooltip.js":
/*!********************************************!*\
  !*** ./assets/theme/components/tooltip.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Fade */ "@material-ui/core/Fade");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// @mui material components
 // Soft UI Dashboard React base styles



 // Soft UI Dashboard React helper functions


const {
  black,
  light
} = assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__["default"];
const {
  size,
  fontWeightRegular
} = assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_2__["default"];
const {
  borderRadius
} = assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_3__["default"];
const tooltip = {
  defaultProps: {
    arrow: true,
    TransitionComponent: _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  styleOverrides: {
    tooltip: {
      maxWidth: Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(200),
      backgroundColor: black.main,
      color: light.main,
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      textAlign: "center",
      borderRadius: borderRadius.md,
      opacity: 0.7,
      padding: `${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(5)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(8)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_4__["default"])(4)}`
    },
    arrow: {
      color: black.main
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tooltip);

/***/ }),

/***/ "./assets/theme/functions/boxShadow.js":
/*!*********************************************!*\
  !*** ./assets/theme/functions/boxShadow.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/functions/rgba */ "./assets/theme/functions/rgba.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The boxShadow() function helps you to create a box shadow for an element
 */
// Soft UI Dashboard React helper functions



function boxShadow(offset = [], radius = [], color, opacity, inset = "") {
  const [x, y] = offset;
  const [blur, spread] = radius;
  return `${inset} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(x)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(y)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(blur)} ${Object(assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_1__["default"])(spread)} ${Object(assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_0__["default"])(color, opacity)}`;
}

/* harmony default export */ __webpack_exports__["default"] = (boxShadow);

/***/ }),

/***/ "./assets/theme/functions/hexToRgb.js":
/*!********************************************!*\
  !*** ./assets/theme/functions/hexToRgb.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "chroma-js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The hexToRgb() function helps you to change the hex color code to rgb
  using chroma-js library.
 */
// chroma-js is a library for all kinds of color conversions and color scales.


function hexToRgb(color) {
  return chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(color).rgb().join(", ");
}

/* harmony default export */ __webpack_exports__["default"] = (hexToRgb);

/***/ }),

/***/ "./assets/theme/functions/linearGradient.js":
/*!**************************************************!*\
  !*** ./assets/theme/functions/linearGradient.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The linearGradient() function helps you to create a linear gradient color background
 */
function linearGradient(color, colorState, angle = 310) {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}

/* harmony default export */ __webpack_exports__["default"] = (linearGradient);

/***/ }),

/***/ "./assets/theme/functions/pxToRem.js":
/*!*******************************************!*\
  !*** ./assets/theme/functions/pxToRem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The pxToRem() function helps you to convert a px unit into a rem unit, 
 */
function pxToRem(number, baseNumber = 16) {
  return `${number / baseNumber}rem`;
}

/* harmony default export */ __webpack_exports__["default"] = (pxToRem);

/***/ }),

/***/ "./assets/theme/functions/rgba.js":
/*!****************************************!*\
  !*** ./assets/theme/functions/rgba.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_theme_functions_hexToRgb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/theme/functions/hexToRgb */ "./assets/theme/functions/hexToRgb.js");
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The rgba() function helps you to create a rgba color code, it uses the hexToRgb() function
  to convert the hex code into rgb for using it inside the rgba color format.
 */
// Soft UI Dashboard React helper functions


function rgba(color, opacity) {
  return `rgba(${Object(assets_theme_functions_hexToRgb__WEBPACK_IMPORTED_MODULE_0__["default"])(color)}, ${opacity})`;
}

/* harmony default export */ __webpack_exports__["default"] = (rgba);

/***/ }),

/***/ "./assets/theme/index.js":
/*!*******************************!*\
  !*** ./assets/theme/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/breakpoints */ "./assets/theme/base/breakpoints.js");
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/* harmony import */ var assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/theme/base/boxShadows */ "./assets/theme/base/boxShadows.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_base_globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/theme/base/globals */ "./assets/theme/base/globals.js");
/* harmony import */ var assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/theme/functions/boxShadow */ "./assets/theme/functions/boxShadow.js");
/* harmony import */ var assets_theme_functions_hexToRgb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/theme/functions/hexToRgb */ "./assets/theme/functions/hexToRgb.js");
/* harmony import */ var assets_theme_functions_linearGradient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/theme/functions/linearGradient */ "./assets/theme/functions/linearGradient.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/* harmony import */ var assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/theme/functions/rgba */ "./assets/theme/functions/rgba.js");
/* harmony import */ var assets_theme_components_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/theme/components/sidenav */ "./assets/theme/components/sidenav.js");
/* harmony import */ var assets_theme_components_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/theme/components/list */ "./assets/theme/components/list/index.js");
/* harmony import */ var assets_theme_components_list_listItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/theme/components/list/listItem */ "./assets/theme/components/list/listItem.js");
/* harmony import */ var assets_theme_components_list_listItemText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/theme/components/list/listItemText */ "./assets/theme/components/list/listItemText.js");
/* harmony import */ var assets_theme_components_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/theme/components/card */ "./assets/theme/components/card/index.js");
/* harmony import */ var assets_theme_components_card_cardMedia__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/theme/components/card/cardMedia */ "./assets/theme/components/card/cardMedia.js");
/* harmony import */ var assets_theme_components_card_cardContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/theme/components/card/cardContent */ "./assets/theme/components/card/cardContent.js");
/* harmony import */ var assets_theme_components_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/theme/components/button */ "./assets/theme/components/button/index.js");
/* harmony import */ var assets_theme_components_iconButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! assets/theme/components/iconButton */ "./assets/theme/components/iconButton.js");
/* harmony import */ var assets_theme_components_form_inputBase__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/theme/components/form/inputBase */ "./assets/theme/components/form/inputBase.js");
/* harmony import */ var assets_theme_components_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/theme/components/menu */ "./assets/theme/components/menu/index.js");
/* harmony import */ var assets_theme_components_menu_menuItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/theme/components/menu/menuItem */ "./assets/theme/components/menu/menuItem.js");
/* harmony import */ var assets_theme_components_form_switchButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! assets/theme/components/form/switchButton */ "./assets/theme/components/form/switchButton.js");
/* harmony import */ var assets_theme_components_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! assets/theme/components/divider */ "./assets/theme/components/divider.js");
/* harmony import */ var assets_theme_components_table_tableContainer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! assets/theme/components/table/tableContainer */ "./assets/theme/components/table/tableContainer.js");
/* harmony import */ var assets_theme_components_table_tableHead__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! assets/theme/components/table/tableHead */ "./assets/theme/components/table/tableHead.js");
/* harmony import */ var assets_theme_components_table_tableCell__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! assets/theme/components/table/tableCell */ "./assets/theme/components/table/tableCell.js");
/* harmony import */ var assets_theme_components_linearProgress__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! assets/theme/components/linearProgress */ "./assets/theme/components/linearProgress.js");
/* harmony import */ var assets_theme_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! assets/theme/components/breadcrumbs */ "./assets/theme/components/breadcrumbs.js");
/* harmony import */ var assets_theme_components_slider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! assets/theme/components/slider */ "./assets/theme/components/slider.js");
/* harmony import */ var assets_theme_components_avatar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! assets/theme/components/avatar */ "./assets/theme/components/avatar.js");
/* harmony import */ var assets_theme_components_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! assets/theme/components/tooltip */ "./assets/theme/components/tooltip.js");
/* harmony import */ var assets_theme_components_appBar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! assets/theme/components/appBar */ "./assets/theme/components/appBar.js");
/* harmony import */ var assets_theme_components_tabs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! assets/theme/components/tabs */ "./assets/theme/components/tabs/index.js");
/* harmony import */ var assets_theme_components_tabs_tab__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! assets/theme/components/tabs/tab */ "./assets/theme/components/tabs/tab.js");
/* harmony import */ var assets_theme_components_stepper__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! assets/theme/components/stepper */ "./assets/theme/components/stepper/index.js");
/* harmony import */ var assets_theme_components_stepper_step__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! assets/theme/components/stepper/step */ "./assets/theme/components/stepper/step.js");
/* harmony import */ var assets_theme_components_stepper_stepConnector__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! assets/theme/components/stepper/stepConnector */ "./assets/theme/components/stepper/stepConnector.js");
/* harmony import */ var assets_theme_components_stepper_stepLabel__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! assets/theme/components/stepper/stepLabel */ "./assets/theme/components/stepper/stepLabel.js");
/* harmony import */ var assets_theme_components_stepper_stepIcon__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! assets/theme/components/stepper/stepIcon */ "./assets/theme/components/stepper/stepIcon.js");
/* harmony import */ var assets_theme_components_form_select__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! assets/theme/components/form/select */ "./assets/theme/components/form/select.js");
/* harmony import */ var assets_theme_components_form_formControlLabel__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! assets/theme/components/form/formControlLabel */ "./assets/theme/components/form/formControlLabel.js");
/* harmony import */ var assets_theme_components_form_formLabel__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! assets/theme/components/form/formLabel */ "./assets/theme/components/form/formLabel.js");
/* harmony import */ var assets_theme_components_form_checkbox__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! assets/theme/components/form/checkbox */ "./assets/theme/components/form/checkbox.js");
/* harmony import */ var assets_theme_components_form_radio__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! assets/theme/components/form/radio */ "./assets/theme/components/form/radio.js");
/* harmony import */ var assets_theme_components_form_autocomplete__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! assets/theme/components/form/autocomplete */ "./assets/theme/components/form/autocomplete.js");
/* harmony import */ var assets_theme_components_form_input__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! assets/theme/components/form/input */ "./assets/theme/components/form/input.js");
/* harmony import */ var assets_theme_components_container__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! assets/theme/components/container */ "./assets/theme/components/container.js");
/* harmony import */ var assets_theme_components_popover__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! assets/theme/components/popover */ "./assets/theme/components/popover.js");
/* harmony import */ var assets_theme_components_buttonBase__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! assets/theme/components/buttonBase */ "./assets/theme/components/buttonBase.js");
/* harmony import */ var assets_theme_components_icon__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! assets/theme/components/icon */ "./assets/theme/components/icon.js");
/* harmony import */ var assets_theme_components_svgIcon__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! assets/theme/components/svgIcon */ "./assets/theme/components/svgIcon.js");
/* harmony import */ var assets_theme_components_link__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! assets/theme/components/link */ "./assets/theme/components/link.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Soft UI Dashboard React base styles






 // Soft UI Dashboard React helper functions





 // Soft UI Dashboard React components base styles for @mui material components












































/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  breakpoints: _objectSpread({}, assets_theme_base_breakpoints__WEBPACK_IMPORTED_MODULE_2__["default"]),
  palette: _objectSpread({}, assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__["default"]),
  typography: _objectSpread({}, assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_3__["default"]),
  boxShadows: _objectSpread({}, assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_4__["default"]),
  borders: _objectSpread({}, assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_5__["default"]),
  functions: {
    boxShadow: assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_7__["default"],
    hexToRgb: assets_theme_functions_hexToRgb__WEBPACK_IMPORTED_MODULE_8__["default"],
    linearGradient: assets_theme_functions_linearGradient__WEBPACK_IMPORTED_MODULE_9__["default"],
    pxToRem: assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_10__["default"],
    rgba: assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: _objectSpread(_objectSpread({}, assets_theme_base_globals__WEBPACK_IMPORTED_MODULE_6__["default"]), assets_theme_components_container__WEBPACK_IMPORTED_MODULE_49__["default"])
    },
    MuiDrawer: _objectSpread({}, assets_theme_components_sidenav__WEBPACK_IMPORTED_MODULE_12__["default"]),
    MuiList: _objectSpread({}, assets_theme_components_list__WEBPACK_IMPORTED_MODULE_13__["default"]),
    MuiListItem: _objectSpread({}, assets_theme_components_list_listItem__WEBPACK_IMPORTED_MODULE_14__["default"]),
    MuiListItemText: _objectSpread({}, assets_theme_components_list_listItemText__WEBPACK_IMPORTED_MODULE_15__["default"]),
    MuiCard: _objectSpread({}, assets_theme_components_card__WEBPACK_IMPORTED_MODULE_16__["default"]),
    MuiCardMedia: _objectSpread({}, assets_theme_components_card_cardMedia__WEBPACK_IMPORTED_MODULE_17__["default"]),
    MuiCardContent: _objectSpread({}, assets_theme_components_card_cardContent__WEBPACK_IMPORTED_MODULE_18__["default"]),
    MuiButton: _objectSpread({}, assets_theme_components_button__WEBPACK_IMPORTED_MODULE_19__["default"]),
    MuiIconButton: _objectSpread({}, assets_theme_components_iconButton__WEBPACK_IMPORTED_MODULE_20__["default"]),
    MuiInputBase: _objectSpread({}, assets_theme_components_form_inputBase__WEBPACK_IMPORTED_MODULE_21__["default"]),
    MuiMenu: _objectSpread({}, assets_theme_components_menu__WEBPACK_IMPORTED_MODULE_22__["default"]),
    MuiMenuItem: _objectSpread({}, assets_theme_components_menu_menuItem__WEBPACK_IMPORTED_MODULE_23__["default"]),
    MuiSwitch: _objectSpread({}, assets_theme_components_form_switchButton__WEBPACK_IMPORTED_MODULE_24__["default"]),
    MuiDivider: _objectSpread({}, assets_theme_components_divider__WEBPACK_IMPORTED_MODULE_25__["default"]),
    MuiTableContainer: _objectSpread({}, assets_theme_components_table_tableContainer__WEBPACK_IMPORTED_MODULE_26__["default"]),
    MuiTableHead: _objectSpread({}, assets_theme_components_table_tableHead__WEBPACK_IMPORTED_MODULE_27__["default"]),
    MuiTableCell: _objectSpread({}, assets_theme_components_table_tableCell__WEBPACK_IMPORTED_MODULE_28__["default"]),
    MuiLinearProgress: _objectSpread({}, assets_theme_components_linearProgress__WEBPACK_IMPORTED_MODULE_29__["default"]),
    MuiBreadcrumbs: _objectSpread({}, assets_theme_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_30__["default"]),
    MuiSlider: _objectSpread({}, assets_theme_components_slider__WEBPACK_IMPORTED_MODULE_31__["default"]),
    MuiAvatar: _objectSpread({}, assets_theme_components_avatar__WEBPACK_IMPORTED_MODULE_32__["default"]),
    MuiTooltip: _objectSpread({}, assets_theme_components_tooltip__WEBPACK_IMPORTED_MODULE_33__["default"]),
    MuiAppBar: _objectSpread({}, assets_theme_components_appBar__WEBPACK_IMPORTED_MODULE_34__["default"]),
    MuiTabs: _objectSpread({}, assets_theme_components_tabs__WEBPACK_IMPORTED_MODULE_35__["default"]),
    MuiTab: _objectSpread({}, assets_theme_components_tabs_tab__WEBPACK_IMPORTED_MODULE_36__["default"]),
    MuiStepper: _objectSpread({}, assets_theme_components_stepper__WEBPACK_IMPORTED_MODULE_37__["default"]),
    MuiStep: _objectSpread({}, assets_theme_components_stepper_step__WEBPACK_IMPORTED_MODULE_38__["default"]),
    MuiStepConnector: _objectSpread({}, assets_theme_components_stepper_stepConnector__WEBPACK_IMPORTED_MODULE_39__["default"]),
    MuiStepLabel: _objectSpread({}, assets_theme_components_stepper_stepLabel__WEBPACK_IMPORTED_MODULE_40__["default"]),
    MuiStepIcon: _objectSpread({}, assets_theme_components_stepper_stepIcon__WEBPACK_IMPORTED_MODULE_41__["default"]),
    MuiSelect: _objectSpread({}, assets_theme_components_form_select__WEBPACK_IMPORTED_MODULE_42__["default"]),
    MuiFormControlLabel: _objectSpread({}, assets_theme_components_form_formControlLabel__WEBPACK_IMPORTED_MODULE_43__["default"]),
    MuiFormLabel: _objectSpread({}, assets_theme_components_form_formLabel__WEBPACK_IMPORTED_MODULE_44__["default"]),
    MuiCheckbox: _objectSpread({}, assets_theme_components_form_checkbox__WEBPACK_IMPORTED_MODULE_45__["default"]),
    MuiRadio: _objectSpread({}, assets_theme_components_form_radio__WEBPACK_IMPORTED_MODULE_46__["default"]),
    MuiAutocomplete: _objectSpread({}, assets_theme_components_form_autocomplete__WEBPACK_IMPORTED_MODULE_47__["default"]),
    MuiInput: _objectSpread({}, assets_theme_components_form_input__WEBPACK_IMPORTED_MODULE_48__["default"]),
    MuiOutlinedInput: _objectSpread({}, assets_theme_components_form_input__WEBPACK_IMPORTED_MODULE_48__["default"]),
    MuiFilledInput: _objectSpread({}, assets_theme_components_form_input__WEBPACK_IMPORTED_MODULE_48__["default"]),
    MuiPopover: _objectSpread({}, assets_theme_components_popover__WEBPACK_IMPORTED_MODULE_50__["default"]),
    MuiButtonBase: _objectSpread({}, assets_theme_components_buttonBase__WEBPACK_IMPORTED_MODULE_51__["default"]),
    MuiIcon: _objectSpread({}, assets_theme_components_icon__WEBPACK_IMPORTED_MODULE_52__["default"]),
    MuiSvgIcon: _objectSpread({}, assets_theme_components_svgIcon__WEBPACK_IMPORTED_MODULE_53__["default"]),
    MuiLink: _objectSpread({}, assets_theme_components_link__WEBPACK_IMPORTED_MODULE_54__["default"])
  }
}));

/***/ }),

/***/ "./assets/theme/theme-rtl.js":
/*!***********************************!*\
  !*** ./assets/theme/theme-rtl.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/theme/base/colors */ "./assets/theme/base/colors.js");
/* harmony import */ var assets_theme_base_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/theme/base/breakpoints */ "./assets/theme/base/breakpoints.js");
/* harmony import */ var assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme/base/typography */ "./assets/theme/base/typography.js");
/* harmony import */ var assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/theme/base/boxShadows */ "./assets/theme/base/boxShadows.js");
/* harmony import */ var assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/theme/base/borders */ "./assets/theme/base/borders.js");
/* harmony import */ var assets_theme_base_globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/theme/base/globals */ "./assets/theme/base/globals.js");
/* harmony import */ var assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/theme/functions/boxShadow */ "./assets/theme/functions/boxShadow.js");
/* harmony import */ var assets_theme_functions_hexToRgb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/theme/functions/hexToRgb */ "./assets/theme/functions/hexToRgb.js");
/* harmony import */ var assets_theme_functions_linearGradient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/theme/functions/linearGradient */ "./assets/theme/functions/linearGradient.js");
/* harmony import */ var assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/theme/functions/pxToRem */ "./assets/theme/functions/pxToRem.js");
/* harmony import */ var assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/theme/functions/rgba */ "./assets/theme/functions/rgba.js");
/* harmony import */ var assets_theme_components_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/theme/components/sidenav */ "./assets/theme/components/sidenav.js");
/* harmony import */ var assets_theme_components_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/theme/components/list */ "./assets/theme/components/list/index.js");
/* harmony import */ var assets_theme_components_list_listItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/theme/components/list/listItem */ "./assets/theme/components/list/listItem.js");
/* harmony import */ var assets_theme_components_list_listItemText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/theme/components/list/listItemText */ "./assets/theme/components/list/listItemText.js");
/* harmony import */ var assets_theme_components_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/theme/components/card */ "./assets/theme/components/card/index.js");
/* harmony import */ var assets_theme_components_card_cardMedia__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/theme/components/card/cardMedia */ "./assets/theme/components/card/cardMedia.js");
/* harmony import */ var assets_theme_components_card_cardContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/theme/components/card/cardContent */ "./assets/theme/components/card/cardContent.js");
/* harmony import */ var assets_theme_components_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/theme/components/button */ "./assets/theme/components/button/index.js");
/* harmony import */ var assets_theme_components_iconButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! assets/theme/components/iconButton */ "./assets/theme/components/iconButton.js");
/* harmony import */ var assets_theme_components_form_inputBase__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/theme/components/form/inputBase */ "./assets/theme/components/form/inputBase.js");
/* harmony import */ var assets_theme_components_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/theme/components/menu */ "./assets/theme/components/menu/index.js");
/* harmony import */ var assets_theme_components_menu_menuItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/theme/components/menu/menuItem */ "./assets/theme/components/menu/menuItem.js");
/* harmony import */ var assets_theme_components_form_switchButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! assets/theme/components/form/switchButton */ "./assets/theme/components/form/switchButton.js");
/* harmony import */ var assets_theme_components_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! assets/theme/components/divider */ "./assets/theme/components/divider.js");
/* harmony import */ var assets_theme_components_table_tableContainer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! assets/theme/components/table/tableContainer */ "./assets/theme/components/table/tableContainer.js");
/* harmony import */ var assets_theme_components_table_tableHead__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! assets/theme/components/table/tableHead */ "./assets/theme/components/table/tableHead.js");
/* harmony import */ var assets_theme_components_table_tableCell__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! assets/theme/components/table/tableCell */ "./assets/theme/components/table/tableCell.js");
/* harmony import */ var assets_theme_components_linearProgress__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! assets/theme/components/linearProgress */ "./assets/theme/components/linearProgress.js");
/* harmony import */ var assets_theme_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! assets/theme/components/breadcrumbs */ "./assets/theme/components/breadcrumbs.js");
/* harmony import */ var assets_theme_components_slider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! assets/theme/components/slider */ "./assets/theme/components/slider.js");
/* harmony import */ var assets_theme_components_avatar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! assets/theme/components/avatar */ "./assets/theme/components/avatar.js");
/* harmony import */ var assets_theme_components_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! assets/theme/components/tooltip */ "./assets/theme/components/tooltip.js");
/* harmony import */ var assets_theme_components_appBar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! assets/theme/components/appBar */ "./assets/theme/components/appBar.js");
/* harmony import */ var assets_theme_components_tabs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! assets/theme/components/tabs */ "./assets/theme/components/tabs/index.js");
/* harmony import */ var assets_theme_components_tabs_tab__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! assets/theme/components/tabs/tab */ "./assets/theme/components/tabs/tab.js");
/* harmony import */ var assets_theme_components_stepper__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! assets/theme/components/stepper */ "./assets/theme/components/stepper/index.js");
/* harmony import */ var assets_theme_components_stepper_step__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! assets/theme/components/stepper/step */ "./assets/theme/components/stepper/step.js");
/* harmony import */ var assets_theme_components_stepper_stepConnector__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! assets/theme/components/stepper/stepConnector */ "./assets/theme/components/stepper/stepConnector.js");
/* harmony import */ var assets_theme_components_stepper_stepLabel__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! assets/theme/components/stepper/stepLabel */ "./assets/theme/components/stepper/stepLabel.js");
/* harmony import */ var assets_theme_components_stepper_stepIcon__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! assets/theme/components/stepper/stepIcon */ "./assets/theme/components/stepper/stepIcon.js");
/* harmony import */ var assets_theme_components_form_select__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! assets/theme/components/form/select */ "./assets/theme/components/form/select.js");
/* harmony import */ var assets_theme_components_form_formControlLabel__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! assets/theme/components/form/formControlLabel */ "./assets/theme/components/form/formControlLabel.js");
/* harmony import */ var assets_theme_components_form_formLabel__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! assets/theme/components/form/formLabel */ "./assets/theme/components/form/formLabel.js");
/* harmony import */ var assets_theme_components_form_checkbox__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! assets/theme/components/form/checkbox */ "./assets/theme/components/form/checkbox.js");
/* harmony import */ var assets_theme_components_form_radio__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! assets/theme/components/form/radio */ "./assets/theme/components/form/radio.js");
/* harmony import */ var assets_theme_components_form_autocomplete__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! assets/theme/components/form/autocomplete */ "./assets/theme/components/form/autocomplete.js");
/* harmony import */ var assets_theme_components_form_input__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! assets/theme/components/form/input */ "./assets/theme/components/form/input.js");
/* harmony import */ var assets_theme_components_container__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! assets/theme/components/container */ "./assets/theme/components/container.js");
/* harmony import */ var assets_theme_components_popover__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! assets/theme/components/popover */ "./assets/theme/components/popover.js");
/* harmony import */ var assets_theme_components_buttonBase__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! assets/theme/components/buttonBase */ "./assets/theme/components/buttonBase.js");
/* harmony import */ var assets_theme_components_icon__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! assets/theme/components/icon */ "./assets/theme/components/icon.js");
/* harmony import */ var assets_theme_components_svgIcon__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! assets/theme/components/svgIcon */ "./assets/theme/components/svgIcon.js");
/* harmony import */ var assets_theme_components_link__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! assets/theme/components/link */ "./assets/theme/components/link.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Soft UI Dashboard React base styles






 // Soft UI Dashboard React helper functions





 // Soft UI Dashboard React components base styles for @mui material components












































/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  direction: "rtl",
  breakpoints: _objectSpread({}, assets_theme_base_breakpoints__WEBPACK_IMPORTED_MODULE_2__["default"]),
  palette: _objectSpread({}, assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__["default"]),
  typography: _objectSpread({}, assets_theme_base_typography__WEBPACK_IMPORTED_MODULE_3__["default"]),
  boxShadows: _objectSpread({}, assets_theme_base_boxShadows__WEBPACK_IMPORTED_MODULE_4__["default"]),
  borders: _objectSpread({}, assets_theme_base_borders__WEBPACK_IMPORTED_MODULE_5__["default"]),
  functions: {
    boxShadow: assets_theme_functions_boxShadow__WEBPACK_IMPORTED_MODULE_7__["default"],
    hexToRgb: assets_theme_functions_hexToRgb__WEBPACK_IMPORTED_MODULE_8__["default"],
    linearGradient: assets_theme_functions_linearGradient__WEBPACK_IMPORTED_MODULE_9__["default"],
    pxToRem: assets_theme_functions_pxToRem__WEBPACK_IMPORTED_MODULE_10__["default"],
    rgba: assets_theme_functions_rgba__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: _objectSpread(_objectSpread({}, assets_theme_base_globals__WEBPACK_IMPORTED_MODULE_6__["default"]), assets_theme_components_container__WEBPACK_IMPORTED_MODULE_49__["default"])
    },
    MuiDrawer: _objectSpread({}, assets_theme_components_sidenav__WEBPACK_IMPORTED_MODULE_12__["default"]),
    MuiList: _objectSpread({}, assets_theme_components_list__WEBPACK_IMPORTED_MODULE_13__["default"]),
    MuiListItem: _objectSpread({}, assets_theme_components_list_listItem__WEBPACK_IMPORTED_MODULE_14__["default"]),
    MuiListItemText: _objectSpread({}, assets_theme_components_list_listItemText__WEBPACK_IMPORTED_MODULE_15__["default"]),
    MuiCard: _objectSpread({}, assets_theme_components_card__WEBPACK_IMPORTED_MODULE_16__["default"]),
    MuiCardMedia: _objectSpread({}, assets_theme_components_card_cardMedia__WEBPACK_IMPORTED_MODULE_17__["default"]),
    MuiCardContent: _objectSpread({}, assets_theme_components_card_cardContent__WEBPACK_IMPORTED_MODULE_18__["default"]),
    MuiButton: _objectSpread({}, assets_theme_components_button__WEBPACK_IMPORTED_MODULE_19__["default"]),
    MuiIconButton: _objectSpread({}, assets_theme_components_iconButton__WEBPACK_IMPORTED_MODULE_20__["default"]),
    MuiInputBase: _objectSpread({}, assets_theme_components_form_inputBase__WEBPACK_IMPORTED_MODULE_21__["default"]),
    MuiMenu: _objectSpread({}, assets_theme_components_menu__WEBPACK_IMPORTED_MODULE_22__["default"]),
    MuiMenuItem: _objectSpread({}, assets_theme_components_menu_menuItem__WEBPACK_IMPORTED_MODULE_23__["default"]),
    MuiSwitch: _objectSpread({}, assets_theme_components_form_switchButton__WEBPACK_IMPORTED_MODULE_24__["default"]),
    MuiDivider: _objectSpread({}, assets_theme_components_divider__WEBPACK_IMPORTED_MODULE_25__["default"]),
    MuiTableContainer: _objectSpread({}, assets_theme_components_table_tableContainer__WEBPACK_IMPORTED_MODULE_26__["default"]),
    MuiTableHead: _objectSpread({}, assets_theme_components_table_tableHead__WEBPACK_IMPORTED_MODULE_27__["default"]),
    MuiTableCell: _objectSpread({}, assets_theme_components_table_tableCell__WEBPACK_IMPORTED_MODULE_28__["default"]),
    MuiLinearProgress: _objectSpread({}, assets_theme_components_linearProgress__WEBPACK_IMPORTED_MODULE_29__["default"]),
    MuiBreadcrumbs: _objectSpread({}, assets_theme_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_30__["default"]),
    MuiSlider: _objectSpread({}, assets_theme_components_slider__WEBPACK_IMPORTED_MODULE_31__["default"]),
    MuiAvatar: _objectSpread({}, assets_theme_components_avatar__WEBPACK_IMPORTED_MODULE_32__["default"]),
    MuiTooltip: _objectSpread({}, assets_theme_components_tooltip__WEBPACK_IMPORTED_MODULE_33__["default"]),
    MuiAppBar: _objectSpread({}, assets_theme_components_appBar__WEBPACK_IMPORTED_MODULE_34__["default"]),
    MuiTabs: _objectSpread({}, assets_theme_components_tabs__WEBPACK_IMPORTED_MODULE_35__["default"]),
    MuiTab: _objectSpread({}, assets_theme_components_tabs_tab__WEBPACK_IMPORTED_MODULE_36__["default"]),
    MuiStepper: _objectSpread({}, assets_theme_components_stepper__WEBPACK_IMPORTED_MODULE_37__["default"]),
    MuiStep: _objectSpread({}, assets_theme_components_stepper_step__WEBPACK_IMPORTED_MODULE_38__["default"]),
    MuiStepConnector: _objectSpread({}, assets_theme_components_stepper_stepConnector__WEBPACK_IMPORTED_MODULE_39__["default"]),
    MuiStepLabel: _objectSpread({}, assets_theme_components_stepper_stepLabel__WEBPACK_IMPORTED_MODULE_40__["default"]),
    MuiStepIcon: _objectSpread({}, assets_theme_components_stepper_stepIcon__WEBPACK_IMPORTED_MODULE_41__["default"]),
    MuiSelect: _objectSpread({}, assets_theme_components_form_select__WEBPACK_IMPORTED_MODULE_42__["default"]),
    MuiFormControlLabel: _objectSpread({}, assets_theme_components_form_formControlLabel__WEBPACK_IMPORTED_MODULE_43__["default"]),
    MuiFormLabel: _objectSpread({}, assets_theme_components_form_formLabel__WEBPACK_IMPORTED_MODULE_44__["default"]),
    MuiCheckbox: _objectSpread({}, assets_theme_components_form_checkbox__WEBPACK_IMPORTED_MODULE_45__["default"]),
    MuiRadio: _objectSpread({}, assets_theme_components_form_radio__WEBPACK_IMPORTED_MODULE_46__["default"]),
    MuiAutocomplete: _objectSpread({}, assets_theme_components_form_autocomplete__WEBPACK_IMPORTED_MODULE_47__["default"]),
    MuiInput: _objectSpread({}, assets_theme_components_form_input__WEBPACK_IMPORTED_MODULE_48__["default"]),
    MuiOutlinedInput: _objectSpread({}, assets_theme_components_form_input__WEBPACK_IMPORTED_MODULE_48__["default"]),
    MuiFilledInput: _objectSpread({}, assets_theme_components_form_input__WEBPACK_IMPORTED_MODULE_48__["default"]),
    MuiPopover: _objectSpread({}, assets_theme_components_popover__WEBPACK_IMPORTED_MODULE_50__["default"]),
    MuiButtonBase: _objectSpread({}, assets_theme_components_buttonBase__WEBPACK_IMPORTED_MODULE_51__["default"]),
    MuiIcon: _objectSpread({}, assets_theme_components_icon__WEBPACK_IMPORTED_MODULE_52__["default"]),
    MuiSvgIcon: _objectSpread({}, assets_theme_components_svgIcon__WEBPACK_IMPORTED_MODULE_53__["default"]),
    MuiLink: _objectSpread({}, assets_theme_components_link__WEBPACK_IMPORTED_MODULE_54__["default"])
  }
}));

/***/ }),

/***/ "./components/AuthProvider/AuthProvider.tsx":
/*!**************************************************!*\
  !*** ./components/AuthProvider/AuthProvider.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ "next-auth/react");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux */ "./redux/index.ts");

var _jsxFileName = "F:\\StudentAffairs\\students\\students\\components\\AuthProvider\\AuthProvider.tsx";




function AuthProvider({
  children
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    data: session,
    status
  } = Object(next_auth_react__WEBPACK_IMPORTED_MODULE_2__["useSession"])();
  const isUser = !!(session !== null && session !== void 0 && session.user);
  const dispatch = Object(_redux__WEBPACK_IMPORTED_MODULE_4__["useAppDispatch"])();
  const sessionKey = Object(_redux__WEBPACK_IMPORTED_MODULE_4__["useAppSelector"])(_redux__WEBPACK_IMPORTED_MODULE_4__["selectSessionKey"]);
  console.log("session", status, session);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    var _session$data, _session$data$user;

    if ((session === null || session === void 0 ? void 0 : session.status) === "unauthenticated") router.push("/authentication/sign-in");
    localStorage.setItem("sa_access_token", (_session$data = session.data) === null || _session$data === void 0 ? void 0 : (_session$data$user = _session$data.user) === null || _session$data$user === void 0 ? void 0 : _session$data$user.token);
  });
  if (isUser) return children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./components/PageChange/PageChange.js":
/*!*********************************************!*\
  !*** ./components/PageChange/PageChange.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageChange; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");

var _jsxFileName = "F:\\StudentAffairs\\students\\students\\components\\PageChange\\PageChange.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // @material-ui/core components


 // core components


const styles = {
  progress: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_4__["infoColor"],
    width: "6rem !important",
    height: "6rem !important"
  },
  wrapperDiv: {
    margin: "100px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "9999",
    top: "0"
  },
  iconWrapper: {
    display: "block"
  },
  title: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_4__["title"]), {}, {
    color: "#FFFFFF"
  })
};
function PageChange(props) {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.wrapperDiv,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.iconWrapper,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default.a, {
          className: classes.progress
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        className: classes.title,
        children: ["Loading page contents for: ", props.path]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../redux/store */ "./redux/store.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_PageChange_PageChange_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/PageChange/PageChange.js */ "./components/PageChange/PageChange.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/theme */ "./assets/theme/index.js");
/* harmony import */ var assets_theme_theme_rtl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/theme/theme-rtl */ "./assets/theme/theme-rtl.js");
/* harmony import */ var assets_css_nextjs_material_dashboard_css_v_1_1_0__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/css/nextjs-material-dashboard.css?v=1.1.0 */ "./assets/css/nextjs-material-dashboard.css?v=1.1.0");
/* harmony import */ var assets_css_nextjs_material_dashboard_css_v_1_1_0__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(assets_css_nextjs_material_dashboard_css_v_1_1_0__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-auth/react */ "next-auth/react");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_toast */ "./pages/_toast.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_AuthProvider_AuthProvider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/AuthProvider/AuthProvider */ "./components/AuthProvider/AuthProvider.tsx");


var _jsxFileName = "F:\\StudentAffairs\\students\\students\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  console.log(`Process: ${"http://teststudent.hiast.edu.sy/backend/public"}`);
  document.body.classList.add("body-page-transition"); // ReactDOM.render(
  //   <PageChange path={url} />,
  //   document.getElementById("page-transition")
  // );
});
next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on("routeChangeComplete", () => {
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on("routeChangeError", () => {
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_4___default.a {
  constructor(params) {
    super(params);
    this.state = {
      backToSignIn: false
    };
  }

  async componentDidMount() {
    let comment = document.createComment(`Component Did mount`);
    document.insertBefore(comment, document.documentElement);
  }

  static async getInitialProps({
    Component,
    router,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      let key = localStorage.getItem("sa_access_token");
      let profile = JSON.parse(localStorage.getItem("logged_in_profile"));
      pageProps = await Component.getInitialProps(ctx);
      pageProps.sessionKey = key;
      pageProps.profile = profile;
      console.clear();
      console.log(pageProps);
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;

    const Layout = Component.layout || (({
      children
    }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: children
    }, void 0, false));

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
      store: _redux_store__WEBPACK_IMPORTED_MODULE_7__["store"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_auth_react__WEBPACK_IMPORTED_MODULE_15__["SessionProvider"], {
        session: pageProps.session,
        children: Component.auth ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
              theme: assets_theme_theme_rtl__WEBPACK_IMPORTED_MODULE_12__["default"],
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["CssBaseline"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_toast__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
              theme: assets_theme__WEBPACK_IMPORTED_MODULE_11__["default"],
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["CssBaseline"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_toast__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "./pages/_toast.js":
/*!*************************!*\
  !*** ./pages/_toast.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomToastContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_Translations_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utility/Translations/useTranslation */ "./Utility/Translations/useTranslation.js");

var _jsxFileName = "F:\\StudentAffairs\\students\\students\\pages\\_toast.js";





function CustomToastContainer() {
  const {
    locale
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: locale === 'ar',
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./redux/actions/actions.ts":
/*!**********************************!*\
  !*** ./redux/actions/actions.ts ***!
  \**********************************/
/*! exports provided: collapseMenu, collapseToggle, navContentLeave, navCollapseLeave, setLayout, setDirection, setSessionKey, clearSessionKey, setMessage, updateProfile, lockScreen, setCandidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseMenu", function() { return collapseMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseToggle", function() { return collapseToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navContentLeave", function() { return navContentLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navCollapseLeave", function() { return navCollapseLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLayout", function() { return setLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDirection", function() { return setDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSessionKey", function() { return setSessionKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSessionKey", function() { return clearSessionKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMessage", function() { return setMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lockScreen", function() { return lockScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCandidate", function() { return setCandidate; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");


const collapseMenu = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["COLLAPSE_MENU"]);
const collapseToggle = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["COLLAPSE_TOGGLE"]);
const navContentLeave = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["NAV_CONTENT_LEAVE"]);
const navCollapseLeave = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["NAV_COLLAPSE_LEAVE"]);
const setLayout = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["SET_LAYOUT"]);
const setDirection = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["SET_DIRECTION"]);
const setSessionKey = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["SET_SESSION_KEY"]);
const clearSessionKey = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_SESSION_KEY"]);
const setMessage = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["SET_MESSAGE"]);
const updateProfile = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PROFILE"]);
const lockScreen = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["LOCK_SCREEN"]);
const setCandidate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["SELECT_CANDIDATE"]);

/***/ }),

/***/ "./redux/hooks.ts":
/*!************************!*\
  !*** ./redux/hooks.ts ***!
  \************************/
/*! exports provided: useAppDispatch, useAppSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppDispatch", function() { return useAppDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppSelector", function() { return useAppSelector; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"];

/***/ }),

/***/ "./redux/index.ts":
/*!************************!*\
  !*** ./redux/index.ts ***!
  \************************/
/*! exports provided: collapseMenu, collapseToggle, navContentLeave, navCollapseLeave, setLayout, setDirection, setSessionKey, clearSessionKey, setMessage, updateProfile, lockScreen, setCandidate, reducer, selectCollapseMenu, collapseMenuSelector, selectIsLocked, isLockedSelector, selectIsOpen, isOpenSelector, selectIsTrigger, isTriggerSelector, selectLayout, layoutSelector, selectDirection, directionSelector, selectMessage, messageSelector, selectRememberMe, remeberMeSelector, selectSessionKey, sessionKeySelector, selectUserProfile, userProfileSelector, selectCandidate, candidateSelector, useAppDispatch, useAppSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/actions */ "./redux/actions/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseMenu", function() { return _actions_actions__WEBPACK_IMPORTED_MODULE_0__["collapseMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseToggle", function() { return _actions_actions__WEBPACK_IMPORTED_MODULE_0__["collapseToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navContentLeave", function() { return _actions_actions__WEBPACK_IMPORTED_MODULE_0__["navContentLeave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navCollapseLeave", function() { return _actions_actions__WEBPACK_IMPORTED_MODULE_0__["navCollapseLeave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLayout", function() { return _actions_actions__WEBPACK_IMPORTED_MODULE_0__["setLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDirection", function() { return _actions_actions__WEBPACK_IMPORTED_MODULE_0__["setDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSessionKey", function() { return _actions_actions__WEBPACK_IMPORTED_MODULE_0__["setSessionKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearSessionKey", function() { return _actions_actions__WEBPACK_IMPORTED_MODULE_0__["clearSessionKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMessage", function() { return _actions_actions__WEBPACK_IMPORTED_MODULE_0__["setMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return _actions_actions__WEBPACK_IMPORTED_MODULE_0__["updateProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lockScreen", function() { return _actions_actions__WEBPACK_IMPORTED_MODULE_0__["lockScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCandidate", function() { return _actions_actions__WEBPACK_IMPORTED_MODULE_0__["setCandidate"]; });

/* harmony import */ var _reducers_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/reducer */ "./redux/reducers/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducers_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]; });

/* harmony import */ var _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors/selectors */ "./redux/selectors/selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCollapseMenu", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCollapseMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseMenuSelector", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["collapseMenuSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsLocked", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["selectIsLocked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLockedSelector", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["isLockedSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsOpen", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["selectIsOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOpenSelector", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["isOpenSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsTrigger", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["selectIsTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTriggerSelector", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["isTriggerSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectLayout", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["selectLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layoutSelector", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["layoutSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectDirection", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["selectDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directionSelector", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["directionSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectMessage", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["selectMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "messageSelector", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["messageSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRememberMe", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["selectRememberMe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remeberMeSelector", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["remeberMeSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSessionKey", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["selectSessionKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sessionKeySelector", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["sessionKeySelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserProfile", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["selectUserProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userProfileSelector", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["userProfileSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCandidate", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCandidate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "candidateSelector", function() { return _selectors_selectors__WEBPACK_IMPORTED_MODULE_2__["candidateSelector"]; });

/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ "./redux/hooks.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppDispatch", function() { return _hooks__WEBPACK_IMPORTED_MODULE_3__["useAppDispatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppSelector", function() { return _hooks__WEBPACK_IMPORTED_MODULE_3__["useAppSelector"]; });






/***/ }),

/***/ "./redux/reducers/reducer.ts":
/*!***********************************!*\
  !*** ./redux/reducers/reducer.ts ***!
  \***********************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actions */ "./redux/actions/actions.ts");


const initialState = {
  isOpen: [],
  //for active default menu
  isTrigger: [],
  //for active default menu, set blank for horizontal
  collapseMenu: false,
  isLocked: false,
  // Lock all screens for protection against abuse
  // ...config,
  rememberMe: false,
  //
  sessionKey: "",
  userProfile: null,
  layout: "page",
  direction: "ltr",
  message: {
    Content: "",
    Type: 0
  },
  // 0 is confirmation 1 is error 2 is warning
  candidate: null
};
const reducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, builder => {
  builder.addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__["setSessionKey"], (state, action) => {
    state.sessionKey = action.payload;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__["clearSessionKey"], state => {
    state.sessionKey = "", state.rememberMe = false;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__["setMessage"], (state, action) => {
    state.message = action.payload;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__["updateProfile"], (state, action) => {
    state.userProfile = action.payload;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__["collapseMenu"], (state, action) => {
    state.collapseMenu = !action.payload;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__["collapseToggle"], (state, action) => {
    let trigger = [];
    let open = [];

    if (action.payload.menu.type === "sub") {
      open = state.isOpen;
      trigger = state.isTrigger;
      const triggerIndex = trigger.indexOf(action.payload.menu.id);

      if (triggerIndex > -1) {
        open = open.filter(item => item !== action.payload.menu.id);
        trigger = trigger.filter(item => item !== action.payload.menu.id);
      }

      if (triggerIndex === -1) {
        open = [...open, action.payload.menu.id];
        trigger = [...trigger, action.payload.menu.id];
      }
    } else {
      open = state.isOpen;
      const triggerIndex = state.isTrigger.indexOf(action.payload.menu.id);
      trigger = triggerIndex === -1 ? [action.payload.menu.id] : [];
      open = triggerIndex === -1 ? [action.payload.menu.id] : [];
    }

    state.isOpen = open;
    state.isTrigger = trigger;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__["navContentLeave"], (state, action) => {
    let trigger = [];
    let open = [];
    state.isOpen = open;
    state.isTrigger = trigger;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__["navCollapseLeave"], (state, action) => {
    let trigger = [];
    let open = [];

    if (action.payload.menu.type === "sub") {
      open = state.isOpen;
      trigger = state.isTrigger;
      const triggerIndex = trigger.indexOf(action.payload.menu.id);

      if (triggerIndex > -1) {
        open = open.filter(item => item !== action.payload.menu.id);
        trigger = trigger.filter(item => item !== action.payload.menu.id);
      }

      state.isOpen = open;
      state.isTrigger = trigger;
    }
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__["setLayout"], (state, action) => {
    state.layout = action.payload;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__["lockScreen"], (state, action) => {
    state.isLocked = action.payload && !action.payload;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__["setDirection"], (state, action) => {
    state.direction = action.payload;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__["setCandidate"], (state, action) => {
    state.candidate = action.payload;
  });
});

/***/ }),

/***/ "./redux/selectors/selectors.ts":
/*!**************************************!*\
  !*** ./redux/selectors/selectors.ts ***!
  \**************************************/
/*! exports provided: selectCollapseMenu, collapseMenuSelector, selectIsLocked, isLockedSelector, selectIsOpen, isOpenSelector, selectIsTrigger, isTriggerSelector, selectLayout, layoutSelector, selectDirection, directionSelector, selectMessage, messageSelector, selectRememberMe, remeberMeSelector, selectSessionKey, sessionKeySelector, selectUserProfile, userProfileSelector, selectCandidate, candidateSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCollapseMenu", function() { return selectCollapseMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseMenuSelector", function() { return collapseMenuSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsLocked", function() { return selectIsLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLockedSelector", function() { return isLockedSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsOpen", function() { return selectIsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOpenSelector", function() { return isOpenSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsTrigger", function() { return selectIsTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTriggerSelector", function() { return isTriggerSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLayout", function() { return selectLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutSelector", function() { return layoutSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDirection", function() { return selectDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionSelector", function() { return directionSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMessage", function() { return selectMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageSelector", function() { return messageSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRememberMe", function() { return selectRememberMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remeberMeSelector", function() { return remeberMeSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSessionKey", function() { return selectSessionKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionKeySelector", function() { return sessionKeySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserProfile", function() { return selectUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userProfileSelector", function() { return userProfileSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCandidate", function() { return selectCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "candidateSelector", function() { return candidateSelector; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// CollapseMenu selector
const selectCollapseMenu = state => state.baseReducer.collapseMenu;
const collapseMenuSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCollapseMenu, state => state); // LockedScreen selector

const selectIsLocked = state => state.baseReducer.isLocked;
const isLockedSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIsLocked, state => state); // IsOpen Selector

const selectIsOpen = state => state.baseReducer.isOpen;
const isOpenSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIsOpen, state => state); // IsTrigger Selector

const selectIsTrigger = state => state.baseReducer.isTrigger;
const isTriggerSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIsTrigger, state => state); // Layout Selector

const selectLayout = state => state.baseReducer.layout;
const layoutSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLayout, state => state); // Direction Selector

const selectDirection = state => state.baseReducer.direction;
const directionSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectDirection, state => state); // Message Selector

const selectMessage = state => state.baseReducer.message;
const messageSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMessage, state => state); // RememberMe Selector

const selectRememberMe = state => state.baseReducer.rememberMe;
const remeberMeSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRememberMe, state => state); // SessionKey Selector

const selectSessionKey = state => state.baseReducer.sessionKey;
const sessionKeySelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSessionKey, state => state); // UserProfile Selector

const selectUserProfile = state => state.baseReducer.userProfile;
const userProfileSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserProfile, state => state); // Candidate Selector

const selectCandidate = state => state.baseReducer.candidate;
const candidateSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCandidate, state => state);

/***/ }),

/***/ "./redux/store.tsx":
/*!*************************!*\
  !*** ./redux/store.tsx ***!
  \*************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/reducer */ "./redux/reducers/reducer.ts");


const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: {
    baseReducer: _reducers_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
  }
});

/***/ }),

/***/ "./redux/types.js":
/*!************************!*\
  !*** ./redux/types.js ***!
  \************************/
/*! exports provided: SET_USER_NAME, SET_SESSION_KEY, SET_LAYOUT, SET_DIRECTION, CLEAR_SESSION_KEY, REFRESH_TOKEN, UPDATE_PROFILE, COLLAPSE_MENU, COLLAPSE_TOGGLE, NAV_CONTENT_LEAVE, NAV_COLLAPSE_LEAVE, SET_MESSAGE, LOCK_SCREEN, SELECT_CANDIDATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_NAME", function() { return SET_USER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SESSION_KEY", function() { return SET_SESSION_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LAYOUT", function() { return SET_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DIRECTION", function() { return SET_DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_SESSION_KEY", function() { return CLEAR_SESSION_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_TOKEN", function() { return REFRESH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE", function() { return UPDATE_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLAPSE_MENU", function() { return COLLAPSE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLAPSE_TOGGLE", function() { return COLLAPSE_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_CONTENT_LEAVE", function() { return NAV_CONTENT_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_COLLAPSE_LEAVE", function() { return NAV_COLLAPSE_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MESSAGE", function() { return SET_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCK_SCREEN", function() { return LOCK_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_CANDIDATE", function() { return SELECT_CANDIDATE; });
const SET_USER_NAME = "SET_USER_NAME";
const SET_SESSION_KEY = "SET_SESSION_KEY";
const SET_LAYOUT = "SET_LAYOUT";
const SET_DIRECTION = "SET_DIRECTION";
const CLEAR_SESSION_KEY = "CLEAR_SESSION_KEY";
const REFRESH_TOKEN = "REFRESH_TOKEN";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const COLLAPSE_MENU = "COLLAPSE_MENU";
const COLLAPSE_TOGGLE = "COLLAPSE_TOGGLE";
const NAV_CONTENT_LEAVE = "NAV_CONTENT_LEAVE";
const NAV_COLLAPSE_LEAVE = "NAV_COLLAPSE_LEAVE";
const SET_MESSAGE = "SET_MESSAGE";
const LOCK_SCREEN = "LOCK_SCREEN";
const SELECT_CANDIDATE = "SELECT_CANDIDATE";

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Fade":
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "chroma-js":
/*!****************************!*\
  !*** external "chroma-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chroma-js");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL1V0aWxpdHkvVHJhbnNsYXRpb25zL2RpY3Rpb25hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vVXRpbGl0eS9UcmFuc2xhdGlvbnMvdXNlVHJhbnNsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9iYXNlL2JvcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2Jhc2UvYm94U2hhZG93cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvYmFzZS9icmVha3BvaW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvYmFzZS9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2Jhc2UvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvYmFzZS90eXBvZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9jb21wb25lbnRzL2FwcEJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvY29tcG9uZW50cy9hdmF0YXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvYnV0dG9uL2NvbnRhaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvYnV0dG9uL291dGxpbmVkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9jb21wb25lbnRzL2J1dHRvbi9yb290LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9jb21wb25lbnRzL2J1dHRvbi90ZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9jb21wb25lbnRzL2J1dHRvbkJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvY2FyZC9jYXJkQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvY29tcG9uZW50cy9jYXJkL2NhcmRNZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvY29tcG9uZW50cy9jYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvY29tcG9uZW50cy9kaXZpZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9jb21wb25lbnRzL2Zvcm0vYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9jb21wb25lbnRzL2Zvcm0vY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvZm9ybS9mb3JtQ29udHJvbExhYmVsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9jb21wb25lbnRzL2Zvcm0vZm9ybUxhYmVsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9jb21wb25lbnRzL2Zvcm0vaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvZm9ybS9pbnB1dEJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvZm9ybS9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvY29tcG9uZW50cy9mb3JtL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvY29tcG9uZW50cy9mb3JtL3N3aXRjaEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvY29tcG9uZW50cy9pY29uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9jb21wb25lbnRzL2ljb25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvbGluZWFyUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvY29tcG9uZW50cy9saXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9jb21wb25lbnRzL2xpc3QvbGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvbGlzdC9saXN0SXRlbVRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvY29tcG9uZW50cy9tZW51L21lbnVJdGVtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9jb21wb25lbnRzL3BvcG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvc2lkZW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvc3RlcHBlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvY29tcG9uZW50cy9zdGVwcGVyL3N0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwQ29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcEljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwTGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvc3ZnSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvY29tcG9uZW50cy90YWJsZS90YWJsZUNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvdGFibGUvdGFibGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvdGFibGUvdGFibGVIZWFkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9jb21wb25lbnRzL3RhYnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvdGFicy90YWIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvZnVuY3Rpb25zL2JveFNoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvZnVuY3Rpb25zL2hleFRvUmdiLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9mdW5jdGlvbnMvbGluZWFyR3JhZGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9weFRvUmVtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90aGVtZS9mdW5jdGlvbnMvcmdiYS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lL3RoZW1lLXJ0bC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGhQcm92aWRlci9BdXRoUHJvdmlkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnZUNoYW5nZS9QYWdlQ2hhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX3RvYXN0LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9ob29rcy50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUudHN4Iiwid2VicGFjazovLy8uL3JlZHV4L3R5cGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hyb21hLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hdXRoL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImFyIiwiZW4iLCJ1c2VUcmFuc2xhdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwibmV4dFJvdXRlciIsImxvY2FsZSIsImluY2x1ZGVzIiwidHJhbnNsYXRlT3JUZXJtIiwidGVybSIsInRyYW5zbGF0aW9uIiwiZGljdGlvbmFyeSIsIkJvb2xlYW4iLCJ0cmFuc2xhdGUiLCJwYXJhbSIsInRyYW5zbGF0ZVBhcmFtIiwidG9CZVJldHVybmVkIiwidG9CZVJlcGxhY2VkIiwicmVwbGFjZSIsImhleFRvUmdiIiwiaW5wdXQiLCJoZXhSZWdleCIsInRlc3QiLCJsZW5ndGgiLCJFcnJvciIsImZpcnN0Iiwic2Vjb25kIiwibGFzdCIsInRvVXBwZXJDYXNlIiwicGFyc2VJbnQiLCJkcmF3ZXJXaWR0aCIsImRyYXdlclRvZ2dsZVdpZHRoIiwidHJhbnNpdGlvbiIsImNvbnRhaW5lciIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiZGVmYXVsdEZvbnQiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJwcmltYXJ5Q29sb3IiLCJ3YXJuaW5nQ29sb3IiLCJkYW5nZXJDb2xvciIsInN1Y2Nlc3NDb2xvciIsImluZm9Db2xvciIsInJvc2VDb2xvciIsImdyYXlDb2xvciIsImJsYWNrQ29sb3IiLCJ3aGl0ZUNvbG9yIiwiYm94U2hhZG93IiwicHJpbWFyeUJveFNoYWRvdyIsImluZm9Cb3hTaGFkb3ciLCJzdWNjZXNzQm94U2hhZG93Iiwid2FybmluZ0JveFNoYWRvdyIsImRhbmdlckJveFNoYWRvdyIsInJvc2VCb3hTaGFkb3ciLCJkYXJrQm94U2hhZG93Iiwid2FybmluZ0NhcmRIZWFkZXIiLCJiYWNrZ3JvdW5kIiwic3VjY2Vzc0NhcmRIZWFkZXIiLCJkYW5nZXJDYXJkSGVhZGVyIiwiaW5mb0NhcmRIZWFkZXIiLCJwcmltYXJ5Q2FyZEhlYWRlciIsInJvc2VDYXJkSGVhZGVyIiwiZGFya0NhcmRIZWFkZXIiLCJjYXJkQWN0aW9ucyIsIm1hcmdpbiIsInBhZGRpbmdUb3AiLCJib3JkZXJUb3AiLCJoZWlnaHQiLCJjYXJkSGVhZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImNhcmQiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ3aWR0aCIsImNvbG9yIiwiZGVmYXVsdEJveFNoYWRvdyIsImJvcmRlciIsInRpdGxlIiwidGV4dERlY29yYXRpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJtaW5IZWlnaHQiLCJjYXJkVGl0bGUiLCJjYXJkU3VidGl0bGUiLCJjYXJkTGluayIsImdyZXkiLCJjb2xvcnMiLCJib3JkZXJzIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsInB4VG9SZW0iLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwic2VjdGlvbiIsImJsYWNrIiwid2hpdGUiLCJpbmZvIiwiaW5wdXRDb2xvcnMiLCJ0YWJzIiwiYm94U2hhZG93cyIsIm1haW4iLCJsaWdodCIsImluc2V0IiwibmF2YmFyQm94U2hhZG93IiwiYnV0dG9uQm94U2hhZG93Iiwic3RhdGVPZiIsInN0YXRlT2ZOb3RIb3ZlciIsImlucHV0Qm94U2hhZG93IiwiZm9jdXMiLCJlcnJvciIsInN1Y2Nlc3MiLCJzbGlkZXJCb3hTaGFkb3ciLCJ0aHVtYiIsInRhYnNCb3hTaGFkb3ciLCJpbmRpY2F0b3IiLCJicmVha3BvaW50cyIsInZhbHVlcyIsImRlZmF1bHQiLCJ0ZXh0IiwidHJhbnNwYXJlbnQiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwid2FybmluZyIsImRhcmsiLCJncmFkaWVudHMiLCJzdGF0ZSIsInNvY2lhbE1lZGlhQ29sb3JzIiwiZmFjZWJvb2siLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwibGlua2VkaW4iLCJwaW50ZXJlc3QiLCJ5b3V0dWJlIiwidmltZW8iLCJzbGFjayIsImRyaWJiYmxlIiwiZ2l0aHViIiwicmVkZGl0IiwidHVtYmxyIiwiYWxlcnRDb2xvcnMiLCJiYWRnZUNvbG9ycyIsInNsaWRlckNvbG9ycyIsImNpcmNsZVNsaWRlckNvbG9ycyIsImdsb2JhbHMiLCJodG1sIiwic2Nyb2xsQmVoYXZpb3IiLCJiYXNlUHJvcGVydGllcyIsImZvbnRXZWlnaHRMaWdodCIsImZvbnRXZWlnaHRSZWd1bGFyIiwiZm9udFdlaWdodE1lZGl1bSIsImZvbnRXZWlnaHRCb2xkIiwiZm9udFNpemVYWFMiLCJmb250U2l6ZVhTIiwiZm9udFNpemVTTSIsImZvbnRTaXplTUQiLCJmb250U2l6ZUxHIiwiZm9udFNpemVYTCIsImJhc2VIZWFkaW5nUHJvcGVydGllcyIsImJhc2VEaXNwbGF5UHJvcGVydGllcyIsInR5cG9ncmFwaHkiLCJoMSIsImZvbnRTaXplIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsInN1YnRpdGxlMSIsInN1YnRpdGxlMiIsImJvZHkxIiwiYm9keTIiLCJidXR0b24iLCJ0ZXh0VHJhbnNmb3JtIiwiY2FwdGlvbiIsIm92ZXJsaW5lIiwiZDEiLCJkMiIsImQzIiwiZDQiLCJkNSIsImQ2Iiwic2l6ZSIsInh4cyIsImFwcEJhciIsImRlZmF1bHRQcm9wcyIsInN0eWxlT3ZlcnJpZGVzIiwicm9vdCIsImF2YXRhciIsInJvdW5kZWQiLCJpbWciLCJicmVhZGNydW1icyIsImxpIiwic2VwYXJhdG9yIiwiY29udGFpbmVkIiwiYmFzZSIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJzbWFsbCIsImxhcmdlIiwiZGlzYWJsZVJpcHBsZSIsImNvbnRhaW5lZFNpemVTbWFsbCIsImNvbnRhaW5lZFNpemVMYXJnZSIsImNvbnRhaW5lZFByaW1hcnkiLCJjb250YWluZWRTZWNvbmRhcnkiLCJvdXRsaW5lZCIsIm91dGxpbmVkU2l6ZVNtYWxsIiwib3V0bGluZWRTaXplTGFyZ2UiLCJvdXRsaW5lZFByaW1hcnkiLCJvdXRsaW5lZFNlY29uZGFyeSIsImJ1dHRvblRleHQiLCJ0ZXh0U2l6ZVNtYWxsIiwidGV4dFNpemVMYXJnZSIsInRleHRQcmltYXJ5IiwidGV4dFNlY29uZGFyeSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsInVzZXJTZWxlY3QiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvblgiLCJ0cmFuc2Zvcm0iLCJwb2ludGVyRXZlbnQiLCJidXR0b25CYXNlIiwiY2FyZENvbnRlbnQiLCJjYXJkTWVkaWEiLCJtZWRpYSIsImZsZXhEaXJlY3Rpb24iLCJtaW5XaWR0aCIsIndvcmRXcmFwIiwiYmFja2dyb3VuZENsaXAiLCJyZ2JhIiwiU00iLCJNRCIsIkxHIiwiWEwiLCJYWEwiLCJzaGFyZWRDbGFzc2VzIiwibWF4V2lkdGgiLCJkaXZpZGVyIiwiYmFja2dyb3VuZEltYWdlIiwiYm9yZGVyQm90dG9tIiwidmVydGljYWwiLCJib3JkZXJSaWdodCIsImF1dG9jb21wbGV0ZSIsInBvcHBlciIsInBhcGVyIiwib3B0aW9uIiwibm9PcHRpb25zIiwiZ3JvdXBMYWJlbCIsImxvYWRpbmciLCJ0YWciLCJjaGVja2JveCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJmaWxsIiwiY29sb3JQcmltYXJ5IiwibGluZWFyR3JhZGllbnQiLCJjb2xvclNlY29uZGFyeSIsImZvcm1Db250cm9sTGFiZWwiLCJsYWJlbCIsImZvcm1MYWJlbCIsImlucHV0U2l6ZVNtYWxsIiwiaW5wdXRCYXNlIiwicGxhY2VJdGVtcyIsImFwcGVhcmFuY2UiLCJyYWRpbyIsInNlbGVjdCIsInNlbGVjdE1lbnUiLCJvdmVyZmxvdyIsImljb24iLCJzd2l0Y2hCdXR0b24iLCJzd2l0Y2hCYXNlIiwidG9wIiwidHJhY2siLCJjaGVja2VkIiwiYmFzZUNsYXNzTmFtZSIsImZvbnRTaXplSW5oZXJpdCIsImZvbnRTaXplU21hbGwiLCJmb250U2l6ZUxhcmdlIiwiaWNvbkJ1dHRvbiIsImxpbmVhclByb2dyZXNzIiwiYmFyIiwibGluayIsInVuZGVybGluZSIsImxpc3QiLCJwYWRkaW5nQm90dG9tIiwibGlzdEl0ZW0iLCJkaXNhYmxlR3V0dGVycyIsImxpc3RJdGVtVGV4dCIsIm1lbnUiLCJkaXNhYmxlQXV0b0ZvY3VzSXRlbSIsIm1lbnVJdGVtIiwicG9wb3ZlciIsInNpZGVuYXYiLCJ3aGl0ZVNwYWNlIiwiYmFja2Ryb3BGaWx0ZXIiLCJwYXBlckFuY2hvckRvY2tlZExlZnQiLCJzbGlkZXIiLCJyYWlsIiwiekluZGV4Iiwic3RlcHBlciIsInN0ZXAiLCJzdGVwQ29ubmVjdG9yIiwiYWx0ZXJuYXRpdmVMYWJlbCIsImxlZnQiLCJyaWdodCIsImxpbmUiLCJzdGVwSWNvbiIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3RlcExhYmVsIiwic3ZnSWNvbiIsInRhYmxlQ2VsbCIsInRhYmxlQ29udGFpbmVyIiwidGFibGVIZWFkIiwiZmxleENvbnRhaW5lciIsImZpeGVkIiwib3ZlcmZsb3dYIiwidGFiIiwiZmxleCIsImxhYmVsSWNvbiIsInRvb2x0aXAiLCJhcnJvdyIsIlRyYW5zaXRpb25Db21wb25lbnQiLCJGYWRlIiwib2Zmc2V0IiwicmFkaXVzIiwieCIsInkiLCJibHVyIiwic3ByZWFkIiwiY2hyb21hIiwicmdiIiwiam9pbiIsImNvbG9yU3RhdGUiLCJhbmdsZSIsIm51bWJlciIsImJhc2VOdW1iZXIiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJmdW5jdGlvbnMiLCJjb21wb25lbnRzIiwiTXVpQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJNdWlMaXN0IiwiTXVpTGlzdEl0ZW0iLCJNdWlMaXN0SXRlbVRleHQiLCJNdWlDYXJkIiwiTXVpQ2FyZE1lZGlhIiwiTXVpQ2FyZENvbnRlbnQiLCJNdWlCdXR0b24iLCJNdWlJY29uQnV0dG9uIiwiTXVpSW5wdXRCYXNlIiwiTXVpTWVudSIsIk11aU1lbnVJdGVtIiwiTXVpU3dpdGNoIiwiTXVpRGl2aWRlciIsIk11aVRhYmxlQ29udGFpbmVyIiwiTXVpVGFibGVIZWFkIiwiTXVpVGFibGVDZWxsIiwiTXVpTGluZWFyUHJvZ3Jlc3MiLCJNdWlCcmVhZGNydW1icyIsIk11aVNsaWRlciIsIk11aUF2YXRhciIsIk11aVRvb2x0aXAiLCJNdWlBcHBCYXIiLCJNdWlUYWJzIiwiTXVpVGFiIiwiTXVpU3RlcHBlciIsIk11aVN0ZXAiLCJNdWlTdGVwQ29ubmVjdG9yIiwiTXVpU3RlcExhYmVsIiwiTXVpU3RlcEljb24iLCJNdWlTZWxlY3QiLCJNdWlGb3JtQ29udHJvbExhYmVsIiwiTXVpRm9ybUxhYmVsIiwiTXVpQ2hlY2tib3giLCJNdWlSYWRpbyIsIk11aUF1dG9jb21wbGV0ZSIsIk11aUlucHV0IiwiTXVpT3V0bGluZWRJbnB1dCIsIk11aUZpbGxlZElucHV0IiwiTXVpUG9wb3ZlciIsIk11aUJ1dHRvbkJhc2UiLCJNdWlJY29uIiwiTXVpU3ZnSWNvbiIsIk11aUxpbmsiLCJkaXJlY3Rpb24iLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwidXNlU2Vzc2lvbiIsImlzVXNlciIsInVzZXIiLCJkaXNwYXRjaCIsInVzZUFwcERpc3BhdGNoIiwic2Vzc2lvbktleSIsInVzZUFwcFNlbGVjdG9yIiwic2VsZWN0U2Vzc2lvbktleSIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsInVzZUVmZmVjdCIsInB1c2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJzdHlsZXMiLCJwcm9ncmVzcyIsIndyYXBwZXJEaXYiLCJpY29uV3JhcHBlciIsIlBhZ2VDaGFuZ2UiLCJwcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjbGFzc2VzIiwicGF0aCIsInBhZ2VQcm9wcyIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsInAiLCJiYWNrIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwicHJvY2VzcyIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsIlJlYWN0RE9NIiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwiTXlBcHAiLCJjb25zdHJ1Y3RvciIsInBhcmFtcyIsImJhY2tUb1NpZ25JbiIsImNvbXBvbmVudERpZE1vdW50IiwiY29tbWVudCIsImNyZWF0ZUNvbW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJkb2N1bWVudEVsZW1lbnQiLCJjdHgiLCJrZXkiLCJnZXRJdGVtIiwicHJvZmlsZSIsIkpTT04iLCJwYXJzZSIsImNsZWFyIiwiTGF5b3V0IiwibGF5b3V0Iiwic3RvcmUiLCJhdXRoIiwidGhlbWVSVEwiLCJ0aGVtZSIsIkN1c3RvbVRvYXN0Q29udGFpbmVyIiwiY29sbGFwc2VNZW51IiwiY3JlYXRlQWN0aW9uIiwiYWN0aW9uVHlwZXMiLCJjb2xsYXBzZVRvZ2dsZSIsIm5hdkNvbnRlbnRMZWF2ZSIsIm5hdkNvbGxhcHNlTGVhdmUiLCJzZXRMYXlvdXQiLCJzZXREaXJlY3Rpb24iLCJzZXRTZXNzaW9uS2V5IiwiY2xlYXJTZXNzaW9uS2V5Iiwic2V0TWVzc2FnZSIsInVwZGF0ZVByb2ZpbGUiLCJsb2NrU2NyZWVuIiwic2V0Q2FuZGlkYXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImluaXRpYWxTdGF0ZSIsImlzT3BlbiIsImlzVHJpZ2dlciIsImlzTG9ja2VkIiwicmVtZW1iZXJNZSIsInVzZXJQcm9maWxlIiwibWVzc2FnZSIsIkNvbnRlbnQiLCJUeXBlIiwiY2FuZGlkYXRlIiwicmVkdWNlciIsImNyZWF0ZVJlZHVjZXIiLCJidWlsZGVyIiwiYWRkQ2FzZSIsImFjdGlvbiIsInBheWxvYWQiLCJ0cmlnZ2VyIiwib3BlbiIsInR5cGUiLCJ0cmlnZ2VySW5kZXgiLCJpbmRleE9mIiwiaWQiLCJmaWx0ZXIiLCJpdGVtIiwic2VsZWN0Q29sbGFwc2VNZW51IiwiYmFzZVJlZHVjZXIiLCJjb2xsYXBzZU1lbnVTZWxlY3RvciIsImNyZWF0ZVNlbGVjdG9yIiwic2VsZWN0SXNMb2NrZWQiLCJpc0xvY2tlZFNlbGVjdG9yIiwic2VsZWN0SXNPcGVuIiwiaXNPcGVuU2VsZWN0b3IiLCJzZWxlY3RJc1RyaWdnZXIiLCJpc1RyaWdnZXJTZWxlY3RvciIsInNlbGVjdExheW91dCIsImxheW91dFNlbGVjdG9yIiwic2VsZWN0RGlyZWN0aW9uIiwiZGlyZWN0aW9uU2VsZWN0b3IiLCJzZWxlY3RNZXNzYWdlIiwibWVzc2FnZVNlbGVjdG9yIiwic2VsZWN0UmVtZW1iZXJNZSIsInJlbWViZXJNZVNlbGVjdG9yIiwic2Vzc2lvbktleVNlbGVjdG9yIiwic2VsZWN0VXNlclByb2ZpbGUiLCJ1c2VyUHJvZmlsZVNlbGVjdG9yIiwic2VsZWN0Q2FuZGlkYXRlIiwiY2FuZGlkYXRlU2VsZWN0b3IiLCJjb25maWd1cmVTdG9yZSIsIlNFVF9VU0VSX05BTUUiLCJTRVRfU0VTU0lPTl9LRVkiLCJTRVRfTEFZT1VUIiwiU0VUX0RJUkVDVElPTiIsIkNMRUFSX1NFU1NJT05fS0VZIiwiUkVGUkVTSF9UT0tFTiIsIlVQREFURV9QUk9GSUxFIiwiQ09MTEFQU0VfTUVOVSIsIkNPTExBUFNFX1RPR0dMRSIsIk5BVl9DT05URU5UX0xFQVZFIiwiTkFWX0NPTExBUFNFX0xF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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgYXIgZnJvbSAnLi9hci5qc29uJ1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgYXI6IGFyLFxyXG4gIGVuOiB7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgZGljdGlvbmFyeSBmcm9tICcuL2RpY3Rpb25hcnknXHJcblxyXG5leHBvcnQgY29uc3QgdXNlVHJhbnNsYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbG9jYWxlcyA9IHJvdXRlcj8ubG9jYWxlcyB8fCBbXTtcclxuICBjb25zdCBkZWZhdWx0TG9jYWxlID0gcm91dGVyPy5kZWZhdWx0TG9jYWxlIHx8ICdhcic7XHJcbiAgY29uc3QgbmV4dFJvdXRlciA9IHJvdXRlcjtcclxuICBjb25zdCBsb2NhbGUgPSBsb2NhbGVzLmluY2x1ZGVzKG5leHRSb3V0ZXIubG9jYWxlIHx8ICcnKVxyXG4gICAgPyBuZXh0Um91dGVyLmxvY2FsZVxyXG4gICAgOiBkZWZhdWx0TG9jYWxlO1xyXG5cclxuICBjb25zdCB0cmFuc2xhdGVPclRlcm0gPSAodGVybSkgPT4ge1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBkaWN0aW9uYXJ5W2xvY2FsZV1bdGVybV07XHJcbiAgICByZXR1cm4gQm9vbGVhbih0cmFuc2xhdGlvbikgPyB0cmFuc2xhdGlvbiA6IHRlcm07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdHJhbnNsYXRlOiAodGVybSwgcGFyYW0gPSBudWxsLCB0cmFuc2xhdGVQYXJhbSA9IHRydWUpID0+IHtcclxuICAgICAgbGV0IHRvQmVSZXR1cm5lZCA9IHRyYW5zbGF0ZU9yVGVybSh0ZXJtKTtcclxuICAgICAgaWYocGFyYW0pIHtcclxuICAgICAgICBsZXQgdG9CZVJlcGxhY2VkID0gdHJhbnNsYXRlUGFyYW0gPyB0cmFuc2xhdGVPclRlcm0ocGFyYW0pIDogcGFyYW07XHJcbiAgICAgICAgdG9CZVJldHVybmVkID0gdG9CZVJldHVybmVkLnJlcGxhY2UoJ3swfScsIHRvQmVSZXBsYWNlZCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRvQmVSZXR1cm5lZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyohXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqICogTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCB2MS4xLjAgYmFzZWQgb24gTWF0ZXJpYWwgRGFzaGJvYXJkIFJlYWN0IHYxLjkuMFxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gKiBQcm9kdWN0IFBhZ2U6IGh0dHA6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmRcclxuICogQ29weXJpZ2h0IDIwMjEgQ3JlYXRpdmUgVGltIChodHRwOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL2NyZWF0aXZldGltb2ZmaWNpYWwvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9ibG9iL21hc3Rlci9MSUNFTlNFLm1kKVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4gKi9cclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAvLyAvLyBGdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGZyb20gaGV4IGNvbG9yIHRvIHJnYiBjb2xvclxyXG4vLyAvLyAvLyBFeGFtcGxlOiBpbnB1dCA9ICM5YzI3YjAgPT4gb3V0cHV0ID0gMTU2LCAzOSwgMTc2XHJcbi8vIC8vIC8vIEV4YW1wbGU6IGlucHV0ID0gOWMyN2IwID0+IG91dHB1dCA9IDE1NiwgMzksIDE3NlxyXG4vLyAvLyAvLyBFeGFtcGxlOiBpbnB1dCA9ICM5OTkgPT4gb3V0cHV0ID0gMTUzLCAxNTMsIDE1M1xyXG4vLyAvLyAvLyBFeGFtcGxlOiBpbnB1dCA9IDk5OSA9PiBvdXRwdXQgPSAxNTMsIDE1MywgMTUzXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbmNvbnN0IGhleFRvUmdiID0gKGlucHV0KSA9PiB7XHJcbiAgaW5wdXQgPSBpbnB1dCArIFwiXCI7XHJcbiAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuICBsZXQgaGV4UmVnZXggPSAvWzAtOUEtRmEtZl0vZztcclxuICBpZiAoIWhleFJlZ2V4LnRlc3QoaW5wdXQpIHx8IChpbnB1dC5sZW5ndGggIT09IDMgJiYgaW5wdXQubGVuZ3RoICE9PSA2KSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiaW5wdXQgaXMgbm90IGEgdmFsaWQgaGV4IGNvbG9yLlwiKTtcclxuICB9XHJcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMykge1xyXG4gICAgbGV0IGZpcnN0ID0gaW5wdXRbMF07XHJcbiAgICBsZXQgc2Vjb25kID0gaW5wdXRbMV07XHJcbiAgICBsZXQgbGFzdCA9IGlucHV0WzJdO1xyXG4gICAgaW5wdXQgPSBmaXJzdCArIGZpcnN0ICsgc2Vjb25kICsgc2Vjb25kICsgbGFzdCArIGxhc3Q7XHJcbiAgfVxyXG4gIGlucHV0ID0gaW5wdXQudG9VcHBlckNhc2UoKTtcclxuICBsZXQgZmlyc3QgPSBpbnB1dFswXSArIGlucHV0WzFdO1xyXG4gIGxldCBzZWNvbmQgPSBpbnB1dFsyXSArIGlucHV0WzNdO1xyXG4gIGxldCBsYXN0ID0gaW5wdXRbNF0gKyBpbnB1dFs1XTtcclxuICByZXR1cm4gKFxyXG4gICAgcGFyc2VJbnQoZmlyc3QsIDE2KSArXHJcbiAgICBcIiwgXCIgK1xyXG4gICAgcGFyc2VJbnQoc2Vjb25kLCAxNikgK1xyXG4gICAgXCIsIFwiICtcclxuICAgIHBhcnNlSW50KGxhc3QsIDE2KVxyXG4gICk7XHJcbn07XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gLy8gLy8gVmFyaWFibGVzIC0gU3R5bGVzIHRoYXQgYXJlIHVzZWQgb24gbW9yZSB0aGFuIG9uZSBjb21wb25lbnRcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjYwO1xyXG5jb25zdCBkcmF3ZXJUb2dnbGVXaWR0aCA9IDUwO1xyXG5jb25zdCB0cmFuc2l0aW9uID0ge1xyXG4gIHRyYW5zaXRpb246IFwiYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSlcIixcclxufTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IHtcclxuICBwYWRkaW5nUmlnaHQ6IFwiMTVweFwiLFxyXG4gIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcclxuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXHJcbiAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbn07XHJcblxyXG5jb25zdCBkZWZhdWx0Rm9udCA9IHtcclxuICBmb250RmFtaWx5OiAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJyxcclxuICBmb250V2VpZ2h0OiBcIjMwMFwiLFxyXG4gIGxpbmVIZWlnaHQ6IFwiMS41ZW1cIixcclxufTtcclxuXHJcbmNvbnN0IHByaW1hcnlDb2xvciA9IFtcIiMwMTU3OWJcIiwgXCIjMDE1NzljXCIsIFwiIzAxNTc5YVwiLCBcIiMwMTU3OTlcIl07XHJcbmNvbnN0IHdhcm5pbmdDb2xvciA9IFtcIiNmZjk4MDBcIiwgXCIjZmZhNzI2XCIsIFwiI2ZiOGMwMFwiLCBcIiNmZmEyMWFcIl07XHJcbmNvbnN0IGRhbmdlckNvbG9yID0gW1wiI2Y0NDMzNlwiLCBcIiNlZjUzNTBcIiwgXCIjZTUzOTM1XCIsIFwiI2Y1NWE0ZVwiXTtcclxuY29uc3Qgc3VjY2Vzc0NvbG9yID0gW1wiIzRjYWY1MFwiLCBcIiM2NmJiNmFcIiwgXCIjNDNhMDQ3XCIsIFwiIzVjYjg2MFwiXTtcclxuY29uc3QgaW5mb0NvbG9yID0gW1wiIzAwYWNjMVwiLCBcIiMyNmM2ZGFcIiwgXCIjMDBhY2MxXCIsIFwiIzAwZDNlZVwiXTtcclxuY29uc3Qgcm9zZUNvbG9yID0gW1wiI2U5MWU2M1wiLCBcIiNlYzQwN2FcIiwgXCIjZDgxYjYwXCIsIFwiI2ViMzU3M1wiXTtcclxuY29uc3QgZ3JheUNvbG9yID0gW1xyXG4gIFwiIzk5OVwiLFxyXG4gIFwiIzc3N1wiLFxyXG4gIFwiIzNDNDg1OFwiLFxyXG4gIFwiI0FBQUFBQVwiLFxyXG4gIFwiI0QyRDJEMlwiLFxyXG4gIFwiI0RERFwiLFxyXG4gIFwiI2I0YjRiNFwiLFxyXG4gIFwiIzU1NTU1NVwiLFxyXG4gIFwiIzMzM1wiLFxyXG4gIFwiI2E5YWZiYlwiLFxyXG4gIFwiI2VlZVwiLFxyXG4gIFwiI2U3ZTdlN1wiLFxyXG4gIFwiIzIxMjEyMVwiLFxyXG4gIFwiIzI2MzIzOFwiLFxyXG5dO1xyXG5jb25zdCBibGFja0NvbG9yID0gXCIjMDAwXCI7XHJcbmNvbnN0IHdoaXRlQ29sb3IgPSBcIiNGRkZcIjtcclxuXHJcbmNvbnN0IGJveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgMTBweCAzMHB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuNDIpLCAwIDRweCAyNXB4IDBweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMilcIixcclxufTtcclxuXHJcbmNvbnN0IHByaW1hcnlCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5jb25zdCBpbmZvQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIixcclxufTtcclxuY29uc3Qgc3VjY2Vzc0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCIsXHJcbn07XHJcbmNvbnN0IHdhcm5pbmdCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5jb25zdCBkYW5nZXJCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCIsXHJcbn07XHJcbmNvbnN0IHJvc2VCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5cclxuY29uc3QgZGFya0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGdyYXlDb2xvclsxMl0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5cclxuY29uc3Qgd2FybmluZ0NhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHdhcm5pbmdDb2xvclsxXSArIFwiLCBcIiArIHdhcm5pbmdDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLndhcm5pbmdCb3hTaGFkb3csXHJcbn07XHJcbmNvbnN0IHN1Y2Nlc3NDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBzdWNjZXNzQ29sb3JbMV0gKyBcIiwgXCIgKyBzdWNjZXNzQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi5zdWNjZXNzQm94U2hhZG93LFxyXG59O1xyXG5jb25zdCBkYW5nZXJDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBkYW5nZXJDb2xvclsxXSArIFwiLCBcIiArIGRhbmdlckNvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4uZGFuZ2VyQm94U2hhZG93LFxyXG59O1xyXG5jb25zdCBpbmZvQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgaW5mb0NvbG9yWzFdICsgXCIsIFwiICsgaW5mb0NvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4uaW5mb0JveFNoYWRvdyxcclxufTtcclxuY29uc3QgcHJpbWFyeUNhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHByaW1hcnlDb2xvclsxXSArIFwiLCBcIiArIHByaW1hcnlDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLnByaW1hcnlCb3hTaGFkb3csXHJcbn07XHJcbmNvbnN0IHJvc2VDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyByb3NlQ29sb3JbMV0gKyBcIiwgXCIgKyByb3NlQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi5yb3NlQm94U2hhZG93LFxyXG59O1xyXG5jb25zdCBkYXJrQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgZ3JheUNvbG9yWzEzXSArIFwiLCBcIiArIGdyYXlDb2xvclsxMl0gKyBcIilcIixcclxuICAuLi5kYXJrQm94U2hhZG93LFxyXG59O1xyXG5cclxuY29uc3QgY2FyZEFjdGlvbnMgPSB7XHJcbiAgbWFyZ2luOiBcIjAgMjBweCAxMHB4XCIsXHJcbiAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXHJcbiAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCBcIiArIGdyYXlDb2xvclsxMF0sXHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAuLi5kZWZhdWx0Rm9udCxcclxufTtcclxuXHJcbmNvbnN0IGNhcmRIZWFkZXIgPSB7XHJcbiAgbWFyZ2luOiBcIi0yMHB4IDE1cHggMFwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICBwYWRkaW5nOiBcIjE1cHhcIixcclxufTtcclxuXHJcbmNvbnN0IGNhcmQgPSB7XHJcbiAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBtYXJnaW46IFwiMjVweCAwXCIsXHJcbiAgYm94U2hhZG93OiBcIjAgMXB4IDRweCAwIHJnYmEoXCIgKyBoZXhUb1JnYihibGFja0NvbG9yKSArIFwiLCAwLjE0KVwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICBjb2xvcjogXCJyZ2JhKFwiICsgaGV4VG9SZ2IoYmxhY2tDb2xvcikgKyBcIiwgMC44NylcIixcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZUNvbG9yLFxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdEJveFNoYWRvdyA9IHtcclxuICBib3JkZXI6IFwiMFwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgMTBweCAyMHB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuNDIpLCAwIDNweCAyMHB4IDBweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMilcIixcclxuICBwYWRkaW5nOiBcIjEwcHggMFwiLFxyXG4gIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGVhc2UgMHNcIixcclxufTtcclxuXHJcbmNvbnN0IHRpdGxlID0ge1xyXG4gIGNvbG9yOiBncmF5Q29sb3JbMl0sXHJcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXHJcbiAgbWFyZ2luVG9wOiBcIjMwcHhcIixcclxuICBtYXJnaW5Cb3R0b206IFwiMjVweFwiLFxyXG4gIG1pbkhlaWdodDogXCIzMnB4XCIsXHJcbiAgZm9udEZhbWlseTogXCInUm9ib3RvJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWZcIixcclxuICBcIiYgc21hbGxcIjoge1xyXG4gICAgY29sb3I6IGdyYXlDb2xvclsxXSxcclxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjFcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgY2FyZFRpdGxlID0ge1xyXG4gIC4uLnRpdGxlLFxyXG4gIG1hcmdpblRvcDogXCIwXCIsXHJcbiAgbWFyZ2luQm90dG9tOiBcIjNweFwiLFxyXG4gIG1pbkhlaWdodDogXCJhdXRvXCIsXHJcbiAgXCImIGFcIjoge1xyXG4gICAgLi4udGl0bGUsXHJcbiAgICBtYXJnaW5Ub3A6IFwiLjYyNXJlbVwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjAuNzVyZW1cIixcclxuICAgIG1pbkhlaWdodDogXCJhdXRvXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNhcmRTdWJ0aXRsZSA9IHtcclxuICBtYXJnaW5Ub3A6IFwiLS4zNzVyZW1cIixcclxufTtcclxuXHJcbmNvbnN0IGNhcmRMaW5rID0ge1xyXG4gIFwiJiArICRjYXJkTGlua1wiOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcIjEuMjVyZW1cIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBoZXhUb1JnYixcclxuICAvL3ZhcmlhYmxlc1xyXG4gIGRyYXdlcldpZHRoLFxyXG4gIGRyYXdlclRvZ2dsZVdpZHRoLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgY29udGFpbmVyLFxyXG4gIGJveFNoYWRvdyxcclxuICBjYXJkLFxyXG4gIGRlZmF1bHRGb250LFxyXG4gIHByaW1hcnlDb2xvcixcclxuICB3YXJuaW5nQ29sb3IsXHJcbiAgZGFuZ2VyQ29sb3IsXHJcbiAgc3VjY2Vzc0NvbG9yLFxyXG4gIGluZm9Db2xvcixcclxuICByb3NlQ29sb3IsXHJcbiAgZ3JheUNvbG9yLFxyXG4gIGJsYWNrQ29sb3IsXHJcbiAgd2hpdGVDb2xvcixcclxuICBwcmltYXJ5Qm94U2hhZG93LFxyXG4gIGluZm9Cb3hTaGFkb3csXHJcbiAgc3VjY2Vzc0JveFNoYWRvdyxcclxuICB3YXJuaW5nQm94U2hhZG93LFxyXG4gIGRhbmdlckJveFNoYWRvdyxcclxuICByb3NlQm94U2hhZG93LFxyXG4gIGRhcmtCb3hTaGFkb3csXHJcbiAgd2FybmluZ0NhcmRIZWFkZXIsXHJcbiAgc3VjY2Vzc0NhcmRIZWFkZXIsXHJcbiAgZGFuZ2VyQ2FyZEhlYWRlcixcclxuICBpbmZvQ2FyZEhlYWRlcixcclxuICBwcmltYXJ5Q2FyZEhlYWRlcixcclxuICByb3NlQ2FyZEhlYWRlcixcclxuICBkYXJrQ2FyZEhlYWRlcixcclxuICBjYXJkQWN0aW9ucyxcclxuICBjYXJkSGVhZGVyLFxyXG4gIGRlZmF1bHRCb3hTaGFkb3csXHJcbiAgdGl0bGUsXHJcbiAgY2FyZFRpdGxlLFxyXG4gIGNhcmRTdWJ0aXRsZSxcclxuICBjYXJkTGluayxcclxufTtcclxuIiwiLyoqXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IC0gdjMuMS4wXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9zb2Z0LXVpLWRhc2hib2FyZC1wcm8tcmVhY3RcclxuKiBDb3B5cmlnaHQgMjAyMiBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcblxyXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKi9cclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBib3JkZXIgc3R5bGVzIGZvciB0aGUgU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QuXHJcbiAqIFlvdSBjYW4gYWRkIG5ldyBib3JkZXIgd2lkdGgsIGJvcmRlciBjb2xvciBvciBib3JkZXIgcmFkaXVzIHVzaW5nIHRoaXMgZmlsZS5cclxuICogWW91IGNhbiBjdXN0b21pemVkIHRoZSBib3JkZXJzIHZhbHVlIGZvciB0aGUgZW50aXJlIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IHVzaW5nIHRoaWUgZmlsZS5cclxuICovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBCYXNlIFN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IEhlbHBlciBGdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3QgeyBncmV5IH0gPSBjb2xvcnM7XHJcblxyXG5jb25zdCBib3JkZXJzID0ge1xyXG4gIGJvcmRlckNvbG9yOiBncmV5WzMwMF0sXHJcblxyXG4gIGJvcmRlcldpZHRoOiB7XHJcbiAgICAwOiAwLFxyXG4gICAgMTogcHhUb1JlbSgxKSxcclxuICAgIDI6IHB4VG9SZW0oMiksXHJcbiAgICAzOiBweFRvUmVtKDMpLFxyXG4gICAgNDogcHhUb1JlbSg0KSxcclxuICAgIDU6IHB4VG9SZW0oNSksXHJcbiAgfSxcclxuXHJcbiAgYm9yZGVyUmFkaXVzOiB7XHJcbiAgICB4czogcHhUb1JlbSgyKSxcclxuICAgIHNtOiBweFRvUmVtKDQpLFxyXG4gICAgbWQ6IHB4VG9SZW0oOCksXHJcbiAgICBsZzogcHhUb1JlbSgxMiksXHJcbiAgICB4bDogcHhUb1JlbSgxNiksXHJcbiAgICB4eGw6IHB4VG9SZW0oMjQpLFxyXG4gICAgc2VjdGlvbjogcHhUb1JlbSgxNjApLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBib3JkZXJzO1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBiYXNlIGJveC1zaGFkb3cgc3R5bGVzIGZvciB0aGUgU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QuXHJcbiAqIFlvdSBjYW4gYWRkIG5ldyBib3gtc2hhZG93IHVzaW5nIHRoaXMgZmlsZS5cclxuICogWW91IGNhbiBjdXN0b21pemVkIHRoZSBib3gtc2hhZG93IGZvciB0aGUgZW50aXJlIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IHVzaW5nIHRoaWUgZmlsZS5cclxuICovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBCYXNlIFN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IEhlbHBlciBGdW5jdGlvbnNcclxuaW1wb3J0IGJveFNoYWRvdyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9ib3hTaGFkb3dcIjtcclxuXHJcbmNvbnN0IHsgYmxhY2ssIHdoaXRlLCBpbmZvLCBpbnB1dENvbG9ycywgdGFicyB9ID0gY29sb3JzO1xyXG5cclxuY29uc3QgYm94U2hhZG93cyA9IHtcclxuICB4czogYm94U2hhZG93KFswLCAyXSwgWzksIC01XSwgYmxhY2subWFpbiwgMC4xNSksXHJcbiAgc206IGJveFNoYWRvdyhbMCwgNV0sIFsxMCwgMF0sIGJsYWNrLm1haW4sIDAuMTIpLFxyXG4gIG1kOiBgJHtib3hTaGFkb3coWzAsIDRdLCBbNiwgLTFdLCBibGFjay5saWdodCwgMC4xMil9LCAke2JveFNoYWRvdyhcclxuICAgIFswLCAyXSxcclxuICAgIFs0LCAtMV0sXHJcbiAgICBibGFjay5saWdodCxcclxuICAgIDAuMDdcclxuICApfWAsXHJcbiAgbGc6IGAke2JveFNoYWRvdyhbMCwgOF0sIFsyNiwgLTRdLCBibGFjay5saWdodCwgMC4xNSl9LCAke2JveFNoYWRvdyhcclxuICAgIFswLCA4XSxcclxuICAgIFs5LCAtNV0sXHJcbiAgICBibGFjay5saWdodCxcclxuICAgIDAuMDZcclxuICApfWAsXHJcbiAgeGw6IGJveFNoYWRvdyhbMCwgMjNdLCBbNDUsIC0xMV0sIGJsYWNrLmxpZ2h0LCAwLjI1KSxcclxuICB4eGw6IGJveFNoYWRvdyhbMCwgMjBdLCBbMjcsIDBdLCBibGFjay5tYWluLCAwLjA1KSxcclxuICBpbnNldDogYm94U2hhZG93KFswLCAxXSwgWzIsIDBdLCBibGFjay5tYWluLCAwLjA3NSwgXCJpbnNldFwiKSxcclxuICBuYXZiYXJCb3hTaGFkb3c6IGAke2JveFNoYWRvdyhbMCwgMF0sIFsxLCAxXSwgd2hpdGUubWFpbiwgMC45LCBcImluc2V0XCIpfSwgJHtib3hTaGFkb3coXHJcbiAgICBbMCwgMjBdLFxyXG4gICAgWzI3LCAwXSxcclxuICAgIGJsYWNrLm1haW4sXHJcbiAgICAwLjA1XHJcbiAgKX1gLFxyXG4gIGJ1dHRvbkJveFNoYWRvdzoge1xyXG4gICAgbWFpbjogYCR7Ym94U2hhZG93KFswLCA0XSwgWzcsIC0xXSwgYmxhY2subWFpbiwgMC4xMSl9LCAke2JveFNoYWRvdyhcclxuICAgICAgWzAsIDJdLFxyXG4gICAgICBbNCwgLTFdLFxyXG4gICAgICBibGFjay5tYWluLFxyXG4gICAgICAwLjA3XHJcbiAgICApfWAsXHJcbiAgICBzdGF0ZU9mOiBgJHtib3hTaGFkb3coWzAsIDNdLCBbNSwgLTFdLCBibGFjay5tYWluLCAwLjA5KX0sICR7Ym94U2hhZG93KFxyXG4gICAgICBbMCwgMl0sXHJcbiAgICAgIFs1LCAtMV0sXHJcbiAgICAgIGJsYWNrLm1haW4sXHJcbiAgICAgIDAuMDdcclxuICAgICl9YCxcclxuICAgIHN0YXRlT2ZOb3RIb3ZlcjogYm94U2hhZG93KFswLCAwXSwgWzAsIDMuMl0sIGluZm8ubWFpbiwgMC41KSxcclxuICB9LFxyXG4gIGlucHV0Qm94U2hhZG93OiB7XHJcbiAgICBmb2N1czogYm94U2hhZG93KFswLCAwXSwgWzAsIDJdLCBpbnB1dENvbG9ycy5ib3hTaGFkb3csIDEpLFxyXG4gICAgZXJyb3I6IGJveFNoYWRvdyhbMCwgMF0sIFswLCAyXSwgaW5wdXRDb2xvcnMuZXJyb3IsIDAuNiksXHJcbiAgICBzdWNjZXNzOiBib3hTaGFkb3coWzAsIDBdLCBbMCwgMl0sIGlucHV0Q29sb3JzLnN1Y2Nlc3MsIDAuNiksXHJcbiAgfSxcclxuICBzbGlkZXJCb3hTaGFkb3c6IHtcclxuICAgIHRodW1iOiBib3hTaGFkb3coWzAsIDFdLCBbMTMsIDBdLCBibGFjay5tYWluLCAwLjIpLFxyXG4gIH0sXHJcbiAgdGFic0JveFNoYWRvdzoge1xyXG4gICAgaW5kaWNhdG9yOiBib3hTaGFkb3coWzAsIDFdLCBbNSwgMV0sIHRhYnMuaW5kaWNhdG9yLmJveFNoYWRvdywgMSksXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJveFNoYWRvd3M7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vKipcclxuICogVGhlIGJhc2UgYnJlYWtwb2ludHMgZm9yIHRoZSBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdC5cclxuICogWW91IGNhbiBhZGQgbmV3IGJyZWFrcG9pbnRzIHVzaW5nIHRoaXMgZmlsZS5cclxuICogWW91IGNhbiBjdXN0b21pemVkIHRoZSBicmVha3BvaW50cyBmb3IgdGhlIGVudGlyZSBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCB1c2luZyB0aGllIGZpbGUuXHJcbiAqL1xyXG5cclxuY29uc3QgYnJlYWtwb2ludHMgPSB7XHJcbiAgdmFsdWVzOiB7XHJcbiAgICB4czogMCxcclxuICAgIHNtOiA1NzYsXHJcbiAgICBtZDogNzY4LFxyXG4gICAgbGc6IDk5MixcclxuICAgIHhsOiAxMjAwLFxyXG4gICAgeHhsOiAxNDAwLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBicmVha3BvaW50cztcclxuIiwiLyoqXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IC0gdjMuMS4wXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9zb2Z0LXVpLWRhc2hib2FyZC1wcm8tcmVhY3RcclxuKiBDb3B5cmlnaHQgMjAyMiBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcblxyXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKi9cclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBjb2xvcnMgZm9yIHRoZSBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdC5cclxuICogWW91IGNhbiBhZGQgbmV3IGNvbG9yIHVzaW5nIHRoaXMgZmlsZS5cclxuICogWW91IGNhbiBjdXN0b21pemVkIHRoZSBjb2xvcnMgZm9yIHRoZSBlbnRpcmUgU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgdXNpbmcgdGhpZSBmaWxlLlxyXG4gKi9cclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICBiYWNrZ3JvdW5kOiB7XHJcbiAgICBkZWZhdWx0OiBcIiNmOGY5ZmFcIixcclxuICB9LFxyXG5cclxuICB0ZXh0OiB7XHJcbiAgICBtYWluOiBcIiM2Nzc0OGVcIixcclxuICAgIGZvY3VzOiBcIiM2Nzc0OGVcIixcclxuICB9LFxyXG5cclxuICB0cmFuc3BhcmVudDoge1xyXG4gICAgbWFpbjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gIH0sXHJcblxyXG4gIHdoaXRlOiB7XHJcbiAgICBtYWluOiBcIiNmZmZmZmZcIixcclxuICAgIGZvY3VzOiBcIiNmZmZmZmZcIixcclxuICB9LFxyXG5cclxuICBibGFjazoge1xyXG4gICAgbGlnaHQ6IFwiIzE0MTQxNFwiLFxyXG4gICAgbWFpbjogXCIjMDAwMDAwXCIsXHJcbiAgICBmb2N1czogXCIjMDAwMDAwXCIsXHJcbiAgfSxcclxuXHJcbiAgcHJpbWFyeToge1xyXG4gICAgLy8gbWFpbjogXCIjMDE1NzliXCIgLyogXCIjY2IwYzlmXCIsICovLFxyXG4gICAgbWFpbjogXCIjMDE1NzliXCIsXHJcbiAgICBmb2N1czogXCIjMzQ0NzY3XCIsXHJcbiAgfSxcclxuXHJcbiAgc2Vjb25kYXJ5OiB7XHJcbiAgICBtYWluOiBcIiM4MzkyYWJcIixcclxuICAgIGZvY3VzOiBcIiM5NmEyYjhcIixcclxuICB9LFxyXG5cclxuICBpbmZvOiB7XHJcbiAgICBtYWluOiBcIiMxN2MxZThcIixcclxuICAgIGZvY3VzOiBcIiMzYWNhZWJcIixcclxuICB9LFxyXG5cclxuICBzdWNjZXNzOiB7XHJcbiAgICBtYWluOiBcIiM4MmQ2MTZcIixcclxuICAgIGZvY3VzOiBcIiM5NWRjMzlcIixcclxuICB9LFxyXG5cclxuICB3YXJuaW5nOiB7XHJcbiAgICBtYWluOiBcIiNmYmNmMzNcIixcclxuICAgIGZvY3VzOiBcIiNmY2Q2NTJcIixcclxuICB9LFxyXG5cclxuICBlcnJvcjoge1xyXG4gICAgbWFpbjogXCIjZWEwNjA2XCIsXHJcbiAgICBmb2N1czogXCIjYzcwNTA1XCIsXHJcbiAgfSxcclxuXHJcbiAgbGlnaHQ6IHtcclxuICAgIG1haW46IFwiI2U5ZWNlZlwiLFxyXG4gICAgZm9jdXM6IFwiI2U5ZWNlZlwiLFxyXG4gIH0sXHJcblxyXG4gIGRhcms6IHtcclxuICAgIG1haW46IFwiIzM0NDc2N1wiLFxyXG4gICAgZm9jdXM6IFwiIzM0NDc2N1wiLFxyXG4gIH0sXHJcblxyXG4gIGdyZXk6IHtcclxuICAgIDEwMDogXCIjZjhmOWZhXCIsXHJcbiAgICAyMDA6IFwiI2U5ZWNlZlwiLFxyXG4gICAgMzAwOiBcIiNkZWUyZTZcIixcclxuICAgIDQwMDogXCIjY2VkNGRhXCIsXHJcbiAgICA1MDA6IFwiI2FkYjViZFwiLFxyXG4gICAgNjAwOiBcIiM2Yzc1N2RcIixcclxuICAgIDcwMDogXCIjNDk1MDU3XCIsXHJcbiAgICA4MDA6IFwiIzM0M2E0MFwiLFxyXG4gICAgOTAwOiBcIiMyMTI1MjlcIixcclxuICB9LFxyXG5cclxuICBncmFkaWVudHM6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogXCIjMDE1NzliXCIgLyogXCIjY2IwYzlmXCIsICovLFxyXG4gICAgICAvLyBtYWluOiBcIiM3OTI4Y2FcIixcclxuICAgICAgc3RhdGU6IFwiIzM0NDc2N1wiLFxyXG4gICAgfSxcclxuXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogXCIjMDE1NzliXCIgLyogXCIjY2IwYzlmXCIsICovLFxyXG4gICAgICAvLyBtYWluOiBcIiM2Mjc1OTRcIixcclxuICAgICAgc3RhdGU6IFwiI2E4YjhkOFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIG1haW46IFwiIzAxNTc5YlwiIC8qIFwiI2NiMGM5ZlwiLCAqLyxcclxuICAgICAgLy8gbWFpbjogXCIjMjE1MmZmXCIsXHJcbiAgICAgIHN0YXRlOiBcIiMwMDc3YjVcIiAvKiBcIiMyMWQ0ZmRcIiAqLyxcclxuICAgIH0sXHJcblxyXG4gICAgc3VjY2Vzczoge1xyXG4gICAgICBtYWluOiBcIiMxN2FkMzdcIixcclxuICAgICAgc3RhdGU6IFwiIzk4ZWMyZFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICB3YXJuaW5nOiB7XHJcbiAgICAgIG1haW46IFwiI2Y1MzkzOVwiLFxyXG4gICAgICBzdGF0ZTogXCIjZmJjZjMzXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46IFwiI2VhMDYwNlwiLFxyXG4gICAgICBzdGF0ZTogXCIjZmY2NjdjXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGxpZ2h0OiB7XHJcbiAgICAgIG1haW46IFwiI2NlZDRkYVwiLFxyXG4gICAgICBzdGF0ZTogXCIjZWJlZmY0XCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGRhcms6IHtcclxuICAgICAgbWFpbjogXCIjMTQxNzI3XCIsXHJcbiAgICAgIHN0YXRlOiBcIiMzYTQxNmZcIixcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc29jaWFsTWVkaWFDb2xvcnM6IHtcclxuICAgIGZhY2Vib29rOiB7XHJcbiAgICAgIG1haW46IFwiIzNiNTk5OFwiLFxyXG4gICAgICBkYXJrOiBcIiMzNDRlODZcIixcclxuICAgIH0sXHJcblxyXG4gICAgdHdpdHRlcjoge1xyXG4gICAgICBtYWluOiBcIiM1NWFjZWVcIixcclxuICAgICAgZGFyazogXCIjM2VhMWVjXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGluc3RhZ3JhbToge1xyXG4gICAgICBtYWluOiBcIiMxMjU2ODhcIixcclxuICAgICAgZGFyazogXCIjMGU0NTZkXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGxpbmtlZGluOiB7XHJcbiAgICAgIG1haW46IFwiIzAwNzdiNVwiLFxyXG4gICAgICBkYXJrOiBcIiMwMDY2OWNcIixcclxuICAgIH0sXHJcblxyXG4gICAgcGludGVyZXN0OiB7XHJcbiAgICAgIG1haW46IFwiI2NjMjEyN1wiLFxyXG4gICAgICBkYXJrOiBcIiNiMjFkMjJcIixcclxuICAgIH0sXHJcblxyXG4gICAgeW91dHViZToge1xyXG4gICAgICBtYWluOiBcIiNlNTJkMjdcIixcclxuICAgICAgZGFyazogXCIjZDQxZjFhXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHZpbWVvOiB7XHJcbiAgICAgIG1haW46IFwiIzFhYjdlYVwiLFxyXG4gICAgICBkYXJrOiBcIiMxM2EzZDJcIixcclxuICAgIH0sXHJcblxyXG4gICAgc2xhY2s6IHtcclxuICAgICAgbWFpbjogXCIjM2FhZjg1XCIsXHJcbiAgICAgIGRhcms6IFwiIzMyOTg3NFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBkcmliYmJsZToge1xyXG4gICAgICBtYWluOiBcIiMzNDQ3NjdcIixcclxuICAgICAgZGFyazogXCIjMzQ0NzY3XCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGdpdGh1Yjoge1xyXG4gICAgICBtYWluOiBcIiMyNDI5MmVcIixcclxuICAgICAgZGFyazogXCIjMTcxYTFkXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHJlZGRpdDoge1xyXG4gICAgICBtYWluOiBcIiNmZjQ1MDBcIixcclxuICAgICAgZGFyazogXCIjZTAzZDAwXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHR1bWJscjoge1xyXG4gICAgICBtYWluOiBcIiMzNTQ2NWNcIixcclxuICAgICAgZGFyazogXCIjMmEzNzQ5XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGFsZXJ0Q29sb3JzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46IFwiIzc5MjhjYVwiLFxyXG4gICAgICBzdGF0ZTogXCIjZDYwMDZjXCIsXHJcbiAgICAgIGJvcmRlcjogXCIjZWZiNmUyXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiBcIiM2Mjc1OTRcIixcclxuICAgICAgc3RhdGU6IFwiIzhjYTFjYlwiLFxyXG4gICAgICBib3JkZXI6IFwiI2RhZGVlNlwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIG1haW46IFwiIzIxNTJmZlwiLFxyXG4gICAgICBzdGF0ZTogXCIjMDJjNmYzXCIsXHJcbiAgICAgIGJvcmRlcjogXCIjYjllY2Y4XCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgbWFpbjogXCIjMTdhZDM3XCIsXHJcbiAgICAgIHN0YXRlOiBcIiM4NGRjMTRcIixcclxuICAgICAgYm9yZGVyOiBcIiNkYWYzYjlcIixcclxuICAgIH0sXHJcblxyXG4gICAgd2FybmluZzoge1xyXG4gICAgICBtYWluOiBcIiNmNTM5MzlcIixcclxuICAgICAgc3RhdGU6IFwiI2ZhYzYwYlwiLFxyXG4gICAgICBib3JkZXI6IFwiI2ZlZjFjMlwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBlcnJvcjoge1xyXG4gICAgICBtYWluOiBcIiNlYTA2MDZcIixcclxuICAgICAgc3RhdGU6IFwiI2ZmM2Q1OVwiLFxyXG4gICAgICBib3JkZXI6IFwiI2Y5YjRiNFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBsaWdodDoge1xyXG4gICAgICBtYWluOiBcIiNjZWQ0ZGFcIixcclxuICAgICAgc3RhdGU6IFwiI2QxZGFlNlwiLFxyXG4gICAgICBib3JkZXI6IFwiI2Y4ZjlmYVwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBkYXJrOiB7XHJcbiAgICAgIG1haW46IFwiIzE0MTcyN1wiLFxyXG4gICAgICBzdGF0ZTogXCIjMmMzMTU0XCIsXHJcbiAgICAgIGJvcmRlcjogXCIjYzJjOGQxXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGJhZGdlQ29sb3JzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwiI2Y4ODNkZFwiLFxyXG4gICAgICB0ZXh0OiBcIiNhMzAxN2VcIixcclxuICAgIH0sXHJcblxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwiI2U0ZThlZFwiLFxyXG4gICAgICB0ZXh0OiBcIiM1OTc0YTJcIixcclxuICAgIH0sXHJcblxyXG4gICAgaW5mbzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiNhYmU5ZjdcIixcclxuICAgICAgdGV4dDogXCIjMDhhMWM0XCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCIjY2RmNTliXCIsXHJcbiAgICAgIHRleHQ6IFwiIzY3YjEwOFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICB3YXJuaW5nOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwiI2ZlZjVkM1wiLFxyXG4gICAgICB0ZXh0OiBcIiNmYmM0MDBcIixcclxuICAgIH0sXHJcblxyXG4gICAgZXJyb3I6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCIjZmM5Nzk3XCIsXHJcbiAgICAgIHRleHQ6IFwiI2JkMDAwMFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBsaWdodDoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIixcclxuICAgICAgdGV4dDogXCIjYzdkM2RlXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGRhcms6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCIjODA5N2JmXCIsXHJcbiAgICAgIHRleHQ6IFwiIzFlMmU0YVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBpbnB1dENvbG9yczoge1xyXG4gICAgYm9yZGVyQ29sb3I6IHsgbWFpbjogXCIjZDJkNmRhXCIsIGZvY3VzOiBcIiMzNWQxZjVcIiB9LFxyXG4gICAgYm94U2hhZG93OiBcIiM4MWUzZjlcIixcclxuICAgIGVycm9yOiBcIiNmZDVjNzBcIixcclxuICAgIHN1Y2Nlc3M6IFwiIzY2ZDQzMlwiLFxyXG4gIH0sXHJcblxyXG4gIHNsaWRlckNvbG9yczoge1xyXG4gICAgdGh1bWI6IHsgYm9yZGVyQ29sb3I6IFwiI2Q5ZDlkOVwiIH0sXHJcbiAgfSxcclxuXHJcbiAgY2lyY2xlU2xpZGVyQ29sb3JzOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIixcclxuICB9LFxyXG5cclxuICB0YWJzOiB7XHJcbiAgICBpbmRpY2F0b3I6IHsgYm94U2hhZG93OiBcIiNkZGRcIiB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xvcnM7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBCYXNlIFN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuXHJcbmNvbnN0IHsgaW5mbywgZGFyayB9ID0gY29sb3JzO1xyXG5cclxuY29uc3QgZ2xvYmFscyA9IHtcclxuICBodG1sOiB7XHJcbiAgICBzY3JvbGxCZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICB9LFxyXG4gIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlclwiOiB7XHJcbiAgICBtYXJnaW46IDAsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gIH0sXHJcbiAgXCJhLCBhOmxpbmssIGE6dmlzaXRlZFwiOiB7XHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG4gIFwiYS5saW5rLCAubGluaywgYS5saW5rOmxpbmssIC5saW5rOmxpbmssIGEubGluazp2aXNpdGVkLCAubGluazp2aXNpdGVkXCI6IHtcclxuICAgIGNvbG9yOiBgJHtkYXJrLm1haW59ICFpbXBvcnRhbnRgLFxyXG4gICAgdHJhbnNpdGlvbjogXCJjb2xvciAxNTBtcyBlYXNlLWluICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG4gIFwiYS5saW5rOmhvdmVyLCAubGluazpob3ZlciwgYS5saW5rOmZvY3VzLCAubGluazpmb2N1c1wiOiB7XHJcbiAgICBjb2xvcjogYCR7aW5mby5tYWlufSAhaW1wb3J0YW50YCxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFscztcclxuIiwiLyoqXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IC0gdjMuMS4wXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9zb2Z0LXVpLWRhc2hib2FyZC1wcm8tcmVhY3RcclxuKiBDb3B5cmlnaHQgMjAyMiBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcblxyXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKi9cclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSB0eXBvZ3JhcGh5IHN0eWxlcyBmb3IgdGhlIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0LlxyXG4gKiBZb3UgY2FuIGFkZCBuZXcgdHlwb2dyYXBoeSBzdHlsZSB1c2luZyB0aGlzIGZpbGUuXHJcbiAqIFlvdSBjYW4gY3VzdG9taXplZCB0aGUgdHlwb2dyYXBoeSBzdHlsZXMgZm9yIHRoZSBlbnRpcmUgU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgdXNpbmcgdGhpZSBmaWxlLlxyXG4gKi9cclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IEJhc2UgU3R5bGVzXHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2NvbG9yc1wiO1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgSGVscGVyIEZ1bmN0aW9uc1xyXG5pbXBvcnQgcHhUb1JlbSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9weFRvUmVtXCI7XHJcblxyXG5jb25zdCB7IGRhcmsgfSA9IGNvbG9ycztcclxuXHJcbmNvbnN0IGJhc2VQcm9wZXJ0aWVzID0ge1xyXG4gIGZvbnRGYW1pbHk6ICdcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnLFxyXG4gIGZvbnRXZWlnaHRMaWdodDogMzAwLFxyXG4gIGZvbnRXZWlnaHRSZWd1bGFyOiA0MDAsXHJcbiAgZm9udFdlaWdodE1lZGl1bTogNTAwLFxyXG4gIGZvbnRXZWlnaHRCb2xkOiA3MDAsXHJcbiAgZm9udFNpemVYWFM6IHB4VG9SZW0oMTAuNCksXHJcbiAgZm9udFNpemVYUzogcHhUb1JlbSgxMiksXHJcbiAgZm9udFNpemVTTTogcHhUb1JlbSgxNCksXHJcbiAgZm9udFNpemVNRDogcHhUb1JlbSgxNiksXHJcbiAgZm9udFNpemVMRzogcHhUb1JlbSgxOCksXHJcbiAgZm9udFNpemVYTDogcHhUb1JlbSgyMCksXHJcbn07XHJcblxyXG5jb25zdCBiYXNlSGVhZGluZ1Byb3BlcnRpZXMgPSB7XHJcbiAgZm9udEZhbWlseTogYmFzZVByb3BlcnRpZXMuZm9udEZhbWlseSxcclxuICBjb2xvcjogZGFyay5tYWluLFxyXG4gIGZvbnRXZWlnaHQ6IGJhc2VQcm9wZXJ0aWVzLmZvbnRXZWlnaHRNZWRpdW0sXHJcbn07XHJcblxyXG5jb25zdCBiYXNlRGlzcGxheVByb3BlcnRpZXMgPSB7XHJcbiAgZm9udEZhbWlseTogYmFzZVByb3BlcnRpZXMuZm9udEZhbWlseSxcclxuICBjb2xvcjogZGFyay5tYWluLFxyXG4gIGZvbnRXZWlnaHQ6IGJhc2VQcm9wZXJ0aWVzLmZvbnRXZWlnaHRMaWdodCxcclxuICBsaW5lSGVpZ2h0OiAxLjIsXHJcbn07XHJcblxyXG5jb25zdCB0eXBvZ3JhcGh5ID0ge1xyXG4gIGZvbnRGYW1pbHk6IGJhc2VQcm9wZXJ0aWVzLmZvbnRGYW1pbHksXHJcbiAgZm9udFdlaWdodExpZ2h0OiBiYXNlUHJvcGVydGllcy5mb250V2VpZ2h0TGlnaHQsXHJcbiAgZm9udFdlaWdodFJlZ3VsYXI6IGJhc2VQcm9wZXJ0aWVzLmZvbnRXZWlnaHRSZWd1bGFyLFxyXG4gIGZvbnRXZWlnaHRNZWRpdW06IGJhc2VQcm9wZXJ0aWVzLmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgZm9udFdlaWdodEJvbGQ6IGJhc2VQcm9wZXJ0aWVzLmZvbnRXZWlnaHRCb2xkLFxyXG5cclxuICBoMToge1xyXG4gICAgZm9udFNpemU6IHB4VG9SZW0oNDgpLFxyXG4gICAgbGluZUhlaWdodDogMS4yNSxcclxuICAgIC4uLmJhc2VIZWFkaW5nUHJvcGVydGllcyxcclxuICB9LFxyXG5cclxuICBoMjoge1xyXG4gICAgZm9udFNpemU6IHB4VG9SZW0oMzYpLFxyXG4gICAgbGluZUhlaWdodDogMS4zLFxyXG4gICAgLi4uYmFzZUhlYWRpbmdQcm9wZXJ0aWVzLFxyXG4gIH0sXHJcblxyXG4gIGgzOiB7XHJcbiAgICBmb250U2l6ZTogcHhUb1JlbSgzMCksXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjM3NSxcclxuICAgIC4uLmJhc2VIZWFkaW5nUHJvcGVydGllcyxcclxuICB9LFxyXG5cclxuICBoNDoge1xyXG4gICAgZm9udFNpemU6IHB4VG9SZW0oMjQpLFxyXG4gICAgbGluZUhlaWdodDogMS4zNzUsXHJcbiAgICAuLi5iYXNlSGVhZGluZ1Byb3BlcnRpZXMsXHJcbiAgfSxcclxuXHJcbiAgaDU6IHtcclxuICAgIGZvbnRTaXplOiBweFRvUmVtKDIwKSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMzc1LFxyXG4gICAgLi4uYmFzZUhlYWRpbmdQcm9wZXJ0aWVzLFxyXG4gIH0sXHJcblxyXG4gIGg2OiB7XHJcbiAgICBmb250U2l6ZTogcHhUb1JlbSgxNiksXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjYyNSxcclxuICAgIC4uLmJhc2VIZWFkaW5nUHJvcGVydGllcyxcclxuICB9LFxyXG5cclxuICBzdWJ0aXRsZTE6IHtcclxuICAgIGZvbnRGYW1pbHk6IGJhc2VQcm9wZXJ0aWVzLmZvbnRGYW1pbHksXHJcbiAgICBmb250U2l6ZTogYmFzZVByb3BlcnRpZXMuZm9udFNpemVYTCxcclxuICAgIGZvbnRXZWlnaHQ6IGJhc2VQcm9wZXJ0aWVzLmZvbnRXZWlnaHRSZWd1bGFyLFxyXG4gICAgbGluZUhlaWdodDogMS42MjUsXHJcbiAgfSxcclxuXHJcbiAgc3VidGl0bGUyOiB7XHJcbiAgICBmb250RmFtaWx5OiBiYXNlUHJvcGVydGllcy5mb250RmFtaWx5LFxyXG4gICAgZm9udFNpemU6IGJhc2VQcm9wZXJ0aWVzLmZvbnRTaXplTUQsXHJcbiAgICBmb250V2VpZ2h0OiBiYXNlUHJvcGVydGllcy5mb250V2VpZ2h0TWVkaXVtLFxyXG4gICAgbGluZUhlaWdodDogMS42LFxyXG4gIH0sXHJcblxyXG4gIGJvZHkxOiB7XHJcbiAgICBmb250RmFtaWx5OiBiYXNlUHJvcGVydGllcy5mb250RmFtaWx5LFxyXG4gICAgZm9udFNpemU6IGJhc2VQcm9wZXJ0aWVzLmZvbnRTaXplWEwsXHJcbiAgICBmb250V2VpZ2h0OiBiYXNlUHJvcGVydGllcy5mb250V2VpZ2h0UmVndWxhcixcclxuICAgIGxpbmVIZWlnaHQ6IDEuNjI1LFxyXG4gIH0sXHJcblxyXG4gIGJvZHkyOiB7XHJcbiAgICBmb250RmFtaWx5OiBiYXNlUHJvcGVydGllcy5mb250RmFtaWx5LFxyXG4gICAgZm9udFNpemU6IGJhc2VQcm9wZXJ0aWVzLmZvbnRTaXplTUQsXHJcbiAgICBmb250V2VpZ2h0OiBiYXNlUHJvcGVydGllcy5mb250V2VpZ2h0UmVndWxhcixcclxuICAgIGxpbmVIZWlnaHQ6IDEuNixcclxuICB9LFxyXG5cclxuICBidXR0b246IHtcclxuICAgIGZvbnRGYW1pbHk6IGJhc2VQcm9wZXJ0aWVzLmZvbnRGYW1pbHksXHJcbiAgICBmb250U2l6ZTogYmFzZVByb3BlcnRpZXMuZm9udFNpemVTTSxcclxuICAgIGZvbnRXZWlnaHQ6IGJhc2VQcm9wZXJ0aWVzLmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICB9LFxyXG5cclxuICBjYXB0aW9uOiB7XHJcbiAgICBmb250RmFtaWx5OiBiYXNlUHJvcGVydGllcy5mb250RmFtaWx5LFxyXG4gICAgZm9udFNpemU6IGJhc2VQcm9wZXJ0aWVzLmZvbnRTaXplWFMsXHJcbiAgICBmb250V2VpZ2h0OiBiYXNlUHJvcGVydGllcy5mb250V2VpZ2h0UmVndWxhcixcclxuICAgIGxpbmVIZWlnaHQ6IDEuMjUsXHJcbiAgfSxcclxuXHJcbiAgb3ZlcmxpbmU6IHtcclxuICAgIGZvbnRGYW1pbHk6IGJhc2VQcm9wZXJ0aWVzLmZvbnRGYW1pbHksXHJcbiAgfSxcclxuXHJcbiAgZDE6IHtcclxuICAgIGZvbnRTaXplOiBweFRvUmVtKDgwKSxcclxuICAgIC4uLmJhc2VEaXNwbGF5UHJvcGVydGllcyxcclxuICB9LFxyXG5cclxuICBkMjoge1xyXG4gICAgZm9udFNpemU6IHB4VG9SZW0oNzIpLFxyXG4gICAgLi4uYmFzZURpc3BsYXlQcm9wZXJ0aWVzLFxyXG4gIH0sXHJcblxyXG4gIGQzOiB7XHJcbiAgICBmb250U2l6ZTogcHhUb1JlbSg2NCksXHJcbiAgICAuLi5iYXNlRGlzcGxheVByb3BlcnRpZXMsXHJcbiAgfSxcclxuXHJcbiAgZDQ6IHtcclxuICAgIGZvbnRTaXplOiBweFRvUmVtKDU2KSxcclxuICAgIC4uLmJhc2VEaXNwbGF5UHJvcGVydGllcyxcclxuICB9LFxyXG5cclxuICBkNToge1xyXG4gICAgZm9udFNpemU6IHB4VG9SZW0oNDgpLFxyXG4gICAgLi4uYmFzZURpc3BsYXlQcm9wZXJ0aWVzLFxyXG4gIH0sXHJcblxyXG4gIGQ2OiB7XHJcbiAgICBmb250U2l6ZTogcHhUb1JlbSg0MCksXHJcbiAgICAuLi5iYXNlRGlzcGxheVByb3BlcnRpZXMsXHJcbiAgfSxcclxuXHJcbiAgc2l6ZToge1xyXG4gICAgeHhzOiBiYXNlUHJvcGVydGllcy5mb250U2l6ZVhYUyxcclxuICAgIHhzOiBiYXNlUHJvcGVydGllcy5mb250U2l6ZVhTLFxyXG4gICAgc206IGJhc2VQcm9wZXJ0aWVzLmZvbnRTaXplU00sXHJcbiAgICBtZDogYmFzZVByb3BlcnRpZXMuZm9udFNpemVNRCxcclxuICAgIGxnOiBiYXNlUHJvcGVydGllcy5mb250U2l6ZUxHLFxyXG4gICAgeGw6IGJhc2VQcm9wZXJ0aWVzLmZvbnRTaXplWEwsXHJcbiAgfSxcclxuXHJcbiAgbGluZUhlaWdodDoge1xyXG4gICAgc206IDEuMjUsXHJcbiAgICBtZDogMS41LFxyXG4gICAgbGc6IDIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHR5cG9ncmFwaHk7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG5jb25zdCBhcHBCYXIgPSB7XHJcbiAgZGVmYXVsdFByb3BzOiB7XHJcbiAgICBjb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gIH0sXHJcblxyXG4gIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBCYXI7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgYm9yZGVycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvYm9yZGVyc1wiO1xyXG5cclxuY29uc3QgeyBib3JkZXJSYWRpdXMgfSA9IGJvcmRlcnM7XHJcblxyXG5jb25zdCBhdmF0YXIgPSB7XHJcbiAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMjAwbXMgZWFzZS1pbi1vdXRcIixcclxuICAgIH0sXHJcblxyXG4gICAgcm91bmRlZDoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cy5sZyxcclxuICAgIH0sXHJcblxyXG4gICAgaW1nOiB7XHJcbiAgICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdmF0YXI7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL3R5cG9ncmFwaHlcIjtcclxuXHJcbmNvbnN0IHsgZ3JleSB9ID0gY29sb3JzO1xyXG5jb25zdCB7IHNpemUgfSA9IHR5cG9ncmFwaHk7XHJcblxyXG5jb25zdCBicmVhZGNydW1icyA9IHtcclxuICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgbGk6IHtcclxuICAgICAgbGluZUhlaWdodDogMCxcclxuICAgIH0sXHJcblxyXG4gICAgc2VwYXJhdG9yOiB7XHJcbiAgICAgIGZvbnRTaXplOiBzaXplLnNtLFxyXG4gICAgICBjb2xvcjogZ3JleVs2MDBdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnJlYWRjcnVtYnM7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBCYXNlIFN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL3R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IGJveFNoYWRvd3MgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JveFNoYWRvd3NcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IEhlbHBlciBGdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3QgeyB3aGl0ZSwgdGV4dCwgaW5mbywgc2Vjb25kYXJ5IH0gPSBjb2xvcnM7XHJcbmNvbnN0IHsgc2l6ZSB9ID0gdHlwb2dyYXBoeTtcclxuY29uc3QgeyBidXR0b25Cb3hTaGFkb3cgfSA9IGJveFNoYWRvd3M7XHJcblxyXG5jb25zdCBjb250YWluZWQgPSB7XHJcbiAgYmFzZToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB3aGl0ZS5tYWluLFxyXG4gICAgbWluSGVpZ2h0OiBweFRvUmVtKDQwKSxcclxuICAgIGNvbG9yOiB0ZXh0Lm1haW4sXHJcbiAgICBib3hTaGFkb3c6IGJ1dHRvbkJveFNoYWRvdy5tYWluLFxyXG4gICAgcGFkZGluZzogYCR7cHhUb1JlbSgxMil9ICR7cHhUb1JlbSgyNCl9YCxcclxuXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdoaXRlLm1haW4sXHJcbiAgICAgIGJveFNoYWRvdzogYnV0dG9uQm94U2hhZG93LnN0YXRlT2YsXHJcbiAgICB9LFxyXG5cclxuICAgIFwiJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJveFNoYWRvdzogYnV0dG9uQm94U2hhZG93LnN0YXRlT2YsXHJcbiAgICB9LFxyXG5cclxuICAgIFwiJjphY3RpdmUsICY6YWN0aXZlOmZvY3VzLCAmOmFjdGl2ZTpob3ZlclwiOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuODUsXHJcbiAgICAgIGJveFNoYWRvdzogYnV0dG9uQm94U2hhZG93LnN0YXRlT2YsXHJcbiAgICB9LFxyXG5cclxuICAgIFwiJjpkaXNhYmxlZFwiOiB7XHJcbiAgICAgIGJveFNoYWRvdzogYnV0dG9uQm94U2hhZG93Lm1haW4sXHJcbiAgICB9LFxyXG5cclxuICAgIFwiJiAubWF0ZXJpYWwtaWNvbiwgLm1hdGVyaWFsLWljb25zLXJvdW5kLCBzdmdcIjoge1xyXG4gICAgICBmb250U2l6ZTogYCR7cHhUb1JlbSgxNil9ICFpbXBvcnRhbnRgLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzbWFsbDoge1xyXG4gICAgbWluSGVpZ2h0OiBweFRvUmVtKDMyKSxcclxuICAgIHBhZGRpbmc6IGAke3B4VG9SZW0oOCl9ICR7cHhUb1JlbSgzMil9YCxcclxuICAgIGZvbnRTaXplOiBzaXplLnhzLFxyXG5cclxuICAgIFwiJiAubWF0ZXJpYWwtaWNvbiwgLm1hdGVyaWFsLWljb25zLXJvdW5kLCBzdmdcIjoge1xyXG4gICAgICBmb250U2l6ZTogYCR7cHhUb1JlbSgxMil9ICFpbXBvcnRhbnRgLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBsYXJnZToge1xyXG4gICAgbWluSGVpZ2h0OiBweFRvUmVtKDQ3KSxcclxuICAgIHBhZGRpbmc6IGAke3B4VG9SZW0oMTQpfSAke3B4VG9SZW0oNjQpfWAsXHJcbiAgICBmb250U2l6ZTogc2l6ZS5zbSxcclxuXHJcbiAgICBcIiYgLm1hdGVyaWFsLWljb24sIC5tYXRlcmlhbC1pY29ucy1yb3VuZCwgc3ZnXCI6IHtcclxuICAgICAgZm9udFNpemU6IGAke3B4VG9SZW0oMjIpfSAhaW1wb3J0YW50YCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgcHJpbWFyeToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBpbmZvLm1haW4sXHJcblxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBpbmZvLm1haW4sXHJcbiAgICB9LFxyXG5cclxuICAgIFwiJjpmb2N1czpub3QoOmhvdmVyKVwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaW5mby5mb2N1cyxcclxuICAgICAgYm94U2hhZG93OiBidXR0b25Cb3hTaGFkb3cuc3RhdGVPZk5vdEhvdmVyLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzZWNvbmRhcnk6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc2Vjb25kYXJ5Lm1haW4sXHJcblxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWNvbmRhcnkubWFpbixcclxuICAgIH0sXHJcblxyXG4gICAgXCImOmZvY3VzOm5vdCg6aG92ZXIpXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWNvbmRhcnkuZm9jdXMsXHJcbiAgICAgIGJveFNoYWRvdzogYnV0dG9uQm94U2hhZG93LnN0YXRlT2ZOb3RIb3ZlcixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhaW5lZDtcclxuIiwiLyoqXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IC0gdjMuMS4wXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9zb2Z0LXVpLWRhc2hib2FyZC1wcm8tcmVhY3RcclxuKiBDb3B5cmlnaHQgMjAyMiBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcblxyXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKi9cclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IEJ1dHRvbiBTdHlsZXNcclxuaW1wb3J0IHJvb3QgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2J1dHRvbi9yb290XCI7XHJcbmltcG9ydCBjb250YWluZWQgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2J1dHRvbi9jb250YWluZWRcIjtcclxuaW1wb3J0IG91dGxpbmVkIGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9idXR0b24vb3V0bGluZWRcIjtcclxuaW1wb3J0IGJ1dHRvblRleHQgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2J1dHRvbi90ZXh0XCI7XHJcblxyXG5jb25zdCBidXR0b24gPSB7XHJcbiAgZGVmYXVsdFByb3BzOiB7XHJcbiAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxyXG4gIH0sXHJcbiAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgIHJvb3Q6IHsgLi4ucm9vdCB9LFxyXG4gICAgY29udGFpbmVkOiB7IC4uLmNvbnRhaW5lZC5iYXNlIH0sXHJcbiAgICBjb250YWluZWRTaXplU21hbGw6IHsgLi4uY29udGFpbmVkLnNtYWxsIH0sXHJcbiAgICBjb250YWluZWRTaXplTGFyZ2U6IHsgLi4uY29udGFpbmVkLmxhcmdlIH0sXHJcbiAgICBjb250YWluZWRQcmltYXJ5OiB7IC4uLmNvbnRhaW5lZC5wcmltYXJ5IH0sXHJcbiAgICBjb250YWluZWRTZWNvbmRhcnk6IHsgLi4uY29udGFpbmVkLnNlY29uZGFyeSB9LFxyXG4gICAgb3V0bGluZWQ6IHsgLi4ub3V0bGluZWQuYmFzZSB9LFxyXG4gICAgb3V0bGluZWRTaXplU21hbGw6IHsgLi4ub3V0bGluZWQuc21hbGwgfSxcclxuICAgIG91dGxpbmVkU2l6ZUxhcmdlOiB7IC4uLm91dGxpbmVkLmxhcmdlIH0sXHJcbiAgICBvdXRsaW5lZFByaW1hcnk6IHsgLi4ub3V0bGluZWQucHJpbWFyeSB9LFxyXG4gICAgb3V0bGluZWRTZWNvbmRhcnk6IHsgLi4ub3V0bGluZWQuc2Vjb25kYXJ5IH0sXHJcbiAgICB0ZXh0OiB7IC4uLmJ1dHRvblRleHQuYmFzZSB9LFxyXG4gICAgdGV4dFNpemVTbWFsbDogeyAuLi5idXR0b25UZXh0LnNtYWxsIH0sXHJcbiAgICB0ZXh0U2l6ZUxhcmdlOiB7IC4uLmJ1dHRvblRleHQubGFyZ2UgfSxcclxuICAgIHRleHRQcmltYXJ5OiB7IC4uLmJ1dHRvblRleHQucHJpbWFyeSB9LFxyXG4gICAgdGV4dFNlY29uZGFyeTogeyAuLi5idXR0b25UZXh0LnNlY29uZGFyeSB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXR0b247XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBCYXNlIFN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL3R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IGJveFNoYWRvd3MgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JveFNoYWRvd3NcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IEhlbHBlciBGdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3QgeyB0cmFuc3BhcmVudCwgbGlnaHQsIGluZm8sIHNlY29uZGFyeSB9ID0gY29sb3JzO1xyXG5jb25zdCB7IHNpemUgfSA9IHR5cG9ncmFwaHk7XHJcbmNvbnN0IHsgYnV0dG9uQm94U2hhZG93IH0gPSBib3hTaGFkb3dzO1xyXG5cclxuY29uc3Qgb3V0bGluZWQgPSB7XHJcbiAgYmFzZToge1xyXG4gICAgbWluSGVpZ2h0OiBweFRvUmVtKDQyKSxcclxuICAgIGNvbG9yOiBsaWdodC5tYWluLFxyXG4gICAgYm9yZGVyQ29sb3I6IGxpZ2h0Lm1haW4sXHJcbiAgICBwYWRkaW5nOiBgJHtweFRvUmVtKDEyKX0gJHtweFRvUmVtKDI0KX1gLFxyXG5cclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNzUsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQubWFpbixcclxuICAgIH0sXHJcblxyXG4gICAgXCImOmZvY3VzOm5vdCg6aG92ZXIpXCI6IHtcclxuICAgICAgYm94U2hhZG93OiBidXR0b25Cb3hTaGFkb3cuc3RhdGVPZk5vdEhvdmVyLFxyXG4gICAgfSxcclxuXHJcbiAgICBcIiYgLm1hdGVyaWFsLWljb24sIC5tYXRlcmlhbC1pY29ucy1yb3VuZCwgc3ZnXCI6IHtcclxuICAgICAgZm9udFNpemU6IGAke3B4VG9SZW0oMTYpfSAhaW1wb3J0YW50YCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc21hbGw6IHtcclxuICAgIG1pbkhlaWdodDogcHhUb1JlbSgzNCksXHJcbiAgICBwYWRkaW5nOiBgJHtweFRvUmVtKDgpfSAke3B4VG9SZW0oMzIpfWAsXHJcbiAgICBmb250U2l6ZTogc2l6ZS54cyxcclxuXHJcbiAgICBcIiYgLm1hdGVyaWFsLWljb24sIC5tYXRlcmlhbC1pY29ucy1yb3VuZCwgc3ZnXCI6IHtcclxuICAgICAgZm9udFNpemU6IGAke3B4VG9SZW0oMTIpfSAhaW1wb3J0YW50YCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbGFyZ2U6IHtcclxuICAgIG1pbkhlaWdodDogcHhUb1JlbSg0OSksXHJcbiAgICBwYWRkaW5nOiBgJHtweFRvUmVtKDE0KX0gJHtweFRvUmVtKDY0KX1gLFxyXG4gICAgZm9udFNpemU6IHNpemUuc20sXHJcblxyXG4gICAgXCImIC5tYXRlcmlhbC1pY29uLCAubWF0ZXJpYWwtaWNvbnMtcm91bmQsIHN2Z1wiOiB7XHJcbiAgICAgIGZvbnRTaXplOiBgJHtweFRvUmVtKDIyKX0gIWltcG9ydGFudGAsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHByaW1hcnk6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQubWFpbixcclxuICAgIGJvcmRlckNvbG9yOiBpbmZvLm1haW4sXHJcblxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5tYWluLFxyXG4gICAgfSxcclxuXHJcbiAgICBcIiY6Zm9jdXM6bm90KDpob3ZlcilcIjoge1xyXG4gICAgICBib3hTaGFkb3c6IGJ1dHRvbkJveFNoYWRvdy5zdGF0ZU9mTm90SG92ZXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHNlY29uZGFyeToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5tYWluLFxyXG4gICAgYm9yZGVyQ29sb3I6IHNlY29uZGFyeS5tYWluLFxyXG5cclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQubWFpbixcclxuICAgIH0sXHJcblxyXG4gICAgXCImOmZvY3VzOm5vdCg6aG92ZXIpXCI6IHtcclxuICAgICAgYm94U2hhZG93OiBidXR0b25Cb3hTaGFkb3cuc3RhdGVPZk5vdEhvdmVyLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3V0bGluZWQ7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBCYXNlIFN0eWxlc1xyXG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvdHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgYm9yZGVycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvYm9yZGVyc1wiO1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgSGVscGVyIEZ1bmN0aW9uc1xyXG5pbXBvcnQgcHhUb1JlbSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9weFRvUmVtXCI7XHJcblxyXG5jb25zdCB7IGZvbnRXZWlnaHRCb2xkLCBzaXplIH0gPSB0eXBvZ3JhcGh5O1xyXG5jb25zdCB7IGJvcmRlclJhZGl1cyB9ID0gYm9yZGVycztcclxuXHJcbmNvbnN0IHJvb3QgPSB7XHJcbiAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgZm9udFNpemU6IHNpemUueHMsXHJcbiAgZm9udFdlaWdodDogZm9udFdlaWdodEJvbGQsXHJcbiAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMubWQsXHJcbiAgcGFkZGluZzogYCR7cHhUb1JlbSgxMil9ICR7cHhUb1JlbSgyNCl9YCxcclxuICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgdXNlclNlbGVjdDogXCJub25lXCIsXHJcbiAgYmFja2dyb3VuZFNpemU6IFwiMTUwJSAhaW1wb3J0YW50XCIsXHJcbiAgYmFja2dyb3VuZFBvc2l0aW9uWDogXCIyNSUgIWltcG9ydGFudFwiLFxyXG4gIHRyYW5zaXRpb246IGBhbGwgMTUwbXMgZWFzZS1pbmAsXHJcblxyXG4gIFwiJjpob3ZlclwiOiB7XHJcbiAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS4wMilcIixcclxuICB9LFxyXG5cclxuICBcIiY6ZGlzYWJsZWRcIjoge1xyXG4gICAgcG9pbnRlckV2ZW50OiBcIm5vbmVcIixcclxuICAgIG9wYWNpdHk6IDAuNjUsXHJcbiAgfSxcclxuXHJcbiAgXCImIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICBmb250U2l6ZTogcHhUb1JlbSgxNSksXHJcbiAgICBtYXJnaW5Ub3A6IHB4VG9SZW0oLTIpLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290O1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgQmFzZSBTdHlsZXNcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvY29sb3JzXCI7XHJcbmltcG9ydCB0eXBvZ3JhcGh5IGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS90eXBvZ3JhcGh5XCI7XHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBIZWxwZXIgRnVuY3Rpb25zXHJcbmltcG9ydCBweFRvUmVtIGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL3B4VG9SZW1cIjtcclxuXHJcbmNvbnN0IHsgdHJhbnNwYXJlbnQsIGluZm8sIHNlY29uZGFyeSwgZ3JleSB9ID0gY29sb3JzO1xyXG5jb25zdCB7IHNpemUgfSA9IHR5cG9ncmFwaHk7XHJcblxyXG5jb25zdCBidXR0b25UZXh0ID0ge1xyXG4gIGJhc2U6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQubWFpbixcclxuICAgIGhlaWdodDogXCJtYXgtY29udGVudFwiLFxyXG4gICAgY29sb3I6IGluZm8ubWFpbixcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICBwYWRkaW5nOiBgJHtweFRvUmVtKDYpfSAke3B4VG9SZW0oMTIpfWAsXHJcblxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5tYWluLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBjb2xvcjogaW5mby5mb2N1cyxcclxuICAgIH0sXHJcblxyXG4gICAgXCImOmZvY3VzXCI6IHtcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgY29sb3I6IGluZm8uZm9jdXMsXHJcbiAgICB9LFxyXG5cclxuICAgIFwiJjphY3RpdmUsICY6YWN0aXZlOmZvY3VzLCAmOmFjdGl2ZTpob3ZlclwiOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuODUsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIFwiJjpkaXNhYmxlZFwiOiB7XHJcbiAgICAgIGNvbG9yOiBncmV5WzYwMF0sXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIFwiJiAubWF0ZXJpYWwtaWNvbnMsIC5tYXRlcmlhbC1pY29ucy1yb3VuZCwgc3ZnLCBzcGFuXCI6IHtcclxuICAgICAgZm9udFNpemU6IGAke3B4VG9SZW0oMTYpfSAhaW1wb3J0YW50YCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc21hbGw6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLnhzLFxyXG5cclxuICAgIFwiJiAubWF0ZXJpYWwtaWNvbnMsIC5tYXRlcmlhbC1pY29ucy1yb3VuZCwgc3ZnLCBzcGFuXCI6IHtcclxuICAgICAgZm9udFNpemU6IGAke3B4VG9SZW0oMTIpfSAhaW1wb3J0YW50YCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbGFyZ2U6IHtcclxuICAgIGZvbnRTaXplOiBzaXplLnNtLFxyXG5cclxuICAgIFwiJiAubWF0ZXJpYWwtaWNvbnMsIC5tYXRlcmlhbC1pY29ucy1yb3VuZCwgc3ZnLCBzcGFuXCI6IHtcclxuICAgICAgZm9udFNpemU6IGAke3B4VG9SZW0oMjIpfSAhaW1wb3J0YW50YCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgcHJpbWFyeToge1xyXG4gICAgY29sb3I6IGluZm8ubWFpbixcclxuICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQubWFpbixcclxuXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBjb2xvcjogaW5mby5mb2N1cyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5tYWluLFxyXG4gICAgfSxcclxuXHJcbiAgICBcIiY6Zm9jdXM6bm90KDpob3ZlcilcIjoge1xyXG4gICAgICBjb2xvcjogaW5mby5mb2N1cyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5mb2N1cyxcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc2Vjb25kYXJ5OiB7XHJcbiAgICBjb2xvcjogc2Vjb25kYXJ5LmZvY3VzLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5tYWluLFxyXG5cclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGNvbG9yOiBzZWNvbmRhcnkuZm9jdXMsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQubWFpbixcclxuICAgIH0sXHJcblxyXG4gICAgXCImOmZvY3VzOm5vdCg6aG92ZXIpXCI6IHtcclxuICAgICAgY29sb3I6IHNlY29uZGFyeS5mb2N1cyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5mb2N1cyxcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvblRleHQ7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG5jb25zdCBidXR0b25CYXNlID0ge1xyXG4gIGRlZmF1bHRQcm9wczoge1xyXG4gICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uQmFzZTtcclxuIiwiLyoqXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IC0gdjMuMS4wXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9zb2Z0LXVpLWRhc2hib2FyZC1wcm8tcmVhY3RcclxuKiBDb3B5cmlnaHQgMjAyMiBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcblxyXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKi9cclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IEhlbHBlciBGdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3QgY2FyZENvbnRlbnQgPSB7XHJcbiAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgbWFyZ2luVG9wOiAwLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgIHBhZGRpbmc6IGAke3B4VG9SZW0oOCl9ICR7cHhUb1JlbSgyNCl9ICR7cHhUb1JlbSgyNCl9YCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcmRDb250ZW50O1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgQmFzZSBTdHlsZXNcclxuaW1wb3J0IGJvcmRlcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JvcmRlcnNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IEhlbHBlciBGdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3QgeyBib3JkZXJSYWRpdXMgfSA9IGJvcmRlcnM7XHJcblxyXG5jb25zdCBjYXJkTWVkaWEgPSB7XHJcbiAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMueGwsXHJcbiAgICAgIG1hcmdpbjogYCR7cHhUb1JlbSgxNil9ICR7cHhUb1JlbSgxNil9IDBgLFxyXG4gICAgfSxcclxuXHJcbiAgICBtZWRpYToge1xyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJkTWVkaWE7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBCYXNlIFN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuaW1wb3J0IGJvcmRlcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JvcmRlcnNcIjtcclxuaW1wb3J0IGJveFNoYWRvd3MgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JveFNoYWRvd3NcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IEhlbHBlciBGdW5jdGlvblxyXG5pbXBvcnQgcmdiYSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9yZ2JhXCI7XHJcblxyXG5jb25zdCB7IGJsYWNrLCB3aGl0ZSB9ID0gY29sb3JzO1xyXG5jb25zdCB7IGJvcmRlcldpZHRoLCBib3JkZXJSYWRpdXMgfSA9IGJvcmRlcnM7XHJcbmNvbnN0IHsgeHhsIH0gPSBib3hTaGFkb3dzO1xyXG5cclxuY29uc3QgY2FyZCA9IHtcclxuICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgbWluV2lkdGg6IDAsXHJcbiAgICAgIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB3aGl0ZS5tYWluLFxyXG4gICAgICBiYWNrZ3JvdW5kQ2xpcDogXCJib3JkZXItYm94XCIsXHJcbiAgICAgIGJvcmRlcjogYCR7Ym9yZGVyV2lkdGhbMF19IHNvbGlkICR7cmdiYShibGFjay5tYWluLCAwLjEyNSl9YCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMueGwsXHJcbiAgICAgIGJveFNoYWRvdzogeHhsLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZDtcclxuIiwiLyoqXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IC0gdjMuMS4wXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9zb2Z0LXVpLWRhc2hib2FyZC1wcm8tcmVhY3RcclxuKiBDb3B5cmlnaHQgMjAyMiBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcblxyXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKi9cclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGJhc2Ugc3R5bGVzXHJcbmltcG9ydCBicmVha3BvaW50cyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvYnJlYWtwb2ludHNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGhlbHBlciBmdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3Qge1xyXG4gIHZhbHVlczogeyBzbSwgbWQsIGxnLCB4bCwgeHhsIH0sXHJcbn0gPSBicmVha3BvaW50cztcclxuXHJcbmNvbnN0IFNNID0gYEBtZWRpYSAobWluLXdpZHRoOiAke3NtfXB4KWA7XHJcbmNvbnN0IE1EID0gYEBtZWRpYSAobWluLXdpZHRoOiAke21kfXB4KWA7XHJcbmNvbnN0IExHID0gYEBtZWRpYSAobWluLXdpZHRoOiAke2xnfXB4KWA7XHJcbmNvbnN0IFhMID0gYEBtZWRpYSAobWluLXdpZHRoOiAke3hsfXB4KWA7XHJcbmNvbnN0IFhYTCA9IGBAbWVkaWEgKG1pbi13aWR0aDogJHt4eGx9cHgpYDtcclxuXHJcbmNvbnN0IHNoYXJlZENsYXNzZXMgPSB7XHJcbiAgcGFkZGluZ1JpZ2h0OiBgJHtweFRvUmVtKDI0KX0gIWltcG9ydGFudGAsXHJcbiAgcGFkZGluZ0xlZnQ6IGAke3B4VG9SZW0oMjQpfSAhaW1wb3J0YW50YCxcclxuICBtYXJnaW5SaWdodDogXCJhdXRvICFpbXBvcnRhbnRcIixcclxuICBtYXJnaW5MZWZ0OiBcImF1dG8gIWltcG9ydGFudFwiLFxyXG4gIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb250YWluZXIgPSB7XHJcbiAgW1NNXToge1xyXG4gICAgXCIuTXVpQ29udGFpbmVyLXJvb3RcIjoge1xyXG4gICAgICAuLi5zaGFyZWRDbGFzc2VzLFxyXG4gICAgICBtYXhXaWR0aDogXCI1NDBweCAhaW1wb3J0YW50XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgW01EXToge1xyXG4gICAgXCIuTXVpQ29udGFpbmVyLXJvb3RcIjoge1xyXG4gICAgICAuLi5zaGFyZWRDbGFzc2VzLFxyXG4gICAgICBtYXhXaWR0aDogXCI3MjBweCAhaW1wb3J0YW50XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgW0xHXToge1xyXG4gICAgXCIuTXVpQ29udGFpbmVyLXJvb3RcIjoge1xyXG4gICAgICAuLi5zaGFyZWRDbGFzc2VzLFxyXG4gICAgICBtYXhXaWR0aDogXCI5NjBweCAhaW1wb3J0YW50XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgW1hMXToge1xyXG4gICAgXCIuTXVpQ29udGFpbmVyLXJvb3RcIjoge1xyXG4gICAgICAuLi5zaGFyZWRDbGFzc2VzLFxyXG4gICAgICBtYXhXaWR0aDogXCIxMTQwcHggIWltcG9ydGFudFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIFtYWExdOiB7XHJcbiAgICBcIi5NdWlDb250YWluZXItcm9vdFwiOiB7XHJcbiAgICAgIC4uLnNoYXJlZENsYXNzZXMsXHJcbiAgICAgIG1heFdpZHRoOiBcIjEzMjBweCAhaW1wb3J0YW50XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWluZXI7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGhlbHBlciBmdW5jdGlvbnNcclxuaW1wb3J0IHJnYmEgZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcmdiYVwiO1xyXG5pbXBvcnQgcHhUb1JlbSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9weFRvUmVtXCI7XHJcblxyXG5jb25zdCB7IGRhcmssIHRyYW5zcGFyZW50LCB3aGl0ZSB9ID0gY29sb3JzO1xyXG5cclxuY29uc3QgZGl2aWRlciA9IHtcclxuICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zcGFyZW50Lm1haW4sXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtyZ2JhKGRhcmsubWFpbiwgMCl9LCAke3JnYmEoXHJcbiAgICAgICAgZGFyay5tYWluLFxyXG4gICAgICAgIDAuNVxyXG4gICAgICApfSwgJHtyZ2JhKGRhcmsubWFpbiwgMCl9KSAhaW1wb3J0YW50YCxcclxuICAgICAgaGVpZ2h0OiBweFRvUmVtKDEpLFxyXG4gICAgICBtYXJnaW46IGAke3B4VG9SZW0oMTYpfSAwYCxcclxuICAgICAgYm9yZGVyQm90dG9tOiBcIm5vbmVcIixcclxuICAgICAgb3BhY2l0eTogMC4yNSxcclxuICAgIH0sXHJcblxyXG4gICAgdmVydGljYWw6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5tYWluLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke3JnYmEoZGFyay5tYWluLCAwKX0sICR7cmdiYShcclxuICAgICAgICBkYXJrLm1haW4sXHJcbiAgICAgICAgMC41XHJcbiAgICAgICl9LCAke3JnYmEoZGFyay5tYWluLCAwKX0pICFpbXBvcnRhbnRgLFxyXG4gICAgICB3aWR0aDogcHhUb1JlbSgxKSxcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgbWFyZ2luOiBgMCAke3B4VG9SZW0oMTYpfWAsXHJcbiAgICAgIGJvcmRlclJpZ2h0OiBcIm5vbmVcIixcclxuICAgIH0sXHJcblxyXG4gICAgbGlnaHQ6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5tYWluLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7cmdiYSh3aGl0ZS5tYWluLCAwKX0sICR7cmdiYShcclxuICAgICAgICB3aGl0ZS5tYWluLFxyXG4gICAgICAgIDAuNVxyXG4gICAgICApfSwgJHtyZ2JhKHdoaXRlLm1haW4sIDApfSkgIWltcG9ydGFudGAsXHJcblxyXG4gICAgICBcIiYuTXVpRGl2aWRlci12ZXJ0aWNhbFwiOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHtyZ2JhKHdoaXRlLm1haW4sIDApfSwgJHtyZ2JhKFxyXG4gICAgICAgICAgd2hpdGUubWFpbixcclxuICAgICAgICAgIDAuNVxyXG4gICAgICAgICl9LCAke3JnYmEod2hpdGUubWFpbiwgMCl9KSAhaW1wb3J0YW50YCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpdmlkZXI7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgYm94U2hhZG93cyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvYm94U2hhZG93c1wiO1xyXG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvdHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuaW1wb3J0IGJvcmRlcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JvcmRlcnNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGhlbHBlciBmdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3QgeyBsZyB9ID0gYm94U2hhZG93cztcclxuY29uc3QgeyBzaXplIH0gPSB0eXBvZ3JhcGh5O1xyXG5jb25zdCB7IHRleHQsIHdoaXRlLCB0cmFuc3BhcmVudCwgbGlnaHQsIGRhcmssIGdyYWRpZW50cyB9ID0gY29sb3JzO1xyXG5jb25zdCB7IGJvcmRlclJhZGl1cyB9ID0gYm9yZGVycztcclxuXHJcbmNvbnN0IGF1dG9jb21wbGV0ZSA9IHtcclxuICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgcG9wcGVyOiB7XHJcbiAgICAgIGJveFNoYWRvdzogbGcsXHJcbiAgICAgIHBhZGRpbmc6IHB4VG9SZW0oOCksXHJcbiAgICAgIGZvbnRTaXplOiBzaXplLnNtLFxyXG4gICAgICBjb2xvcjogdGV4dC5tYWluLFxyXG4gICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3doaXRlLm1haW59ICFpbXBvcnRhbnRgLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cy5tZCxcclxuICAgIH0sXHJcblxyXG4gICAgcGFwZXI6IHtcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5tYWluLFxyXG4gICAgfSxcclxuXHJcbiAgICBvcHRpb246IHtcclxuICAgICAgcGFkZGluZzogYCR7cHhUb1JlbSg0LjgpfSAke3B4VG9SZW0oMTYpfWAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLm1kLFxyXG4gICAgICBmb250U2l6ZTogc2l6ZS5zbSxcclxuICAgICAgY29sb3I6IHRleHQubWFpbixcclxuICAgICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2UsIGNvbG9yIDMwMG1zIGVhc2VcIixcclxuXHJcbiAgICAgIFwiJjpob3ZlciwgJjpmb2N1cywgJi5NdWktc2VsZWN0ZWQsICYuTXVpLXNlbGVjdGVkOmhvdmVyLCAmLk11aS1zZWxlY3RlZDpmb2N1c1wiOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBsaWdodC5tYWluLFxyXG4gICAgICAgIGNvbG9yOiBkYXJrLm1haW4sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAnJlthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSc6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke2xpZ2h0Lm1haW59ICFpbXBvcnRhbnRgLFxyXG4gICAgICAgIGNvbG9yOiBgJHtkYXJrLm1haW59ICFpbXBvcnRhbnRgLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBub09wdGlvbnM6IHtcclxuICAgICAgZm9udFNpemU6IHNpemUuc20sXHJcbiAgICAgIGNvbG9yOiB0ZXh0Lm1haW4sXHJcbiAgICB9LFxyXG5cclxuICAgIGdyb3VwTGFiZWw6IHtcclxuICAgICAgY29sb3I6IGRhcmsubWFpbixcclxuICAgIH0sXHJcblxyXG4gICAgbG9hZGluZzoge1xyXG4gICAgICBmb250U2l6ZTogc2l6ZS5zbSxcclxuICAgICAgY29sb3I6IHRleHQubWFpbixcclxuICAgIH0sXHJcblxyXG4gICAgdGFnOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICBwYWRkaW5nOiBweFRvUmVtKDQpLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYWRpZW50cy5kYXJrLnN0YXRlLFxyXG4gICAgICBjb2xvcjogd2hpdGUubWFpbixcclxuXHJcbiAgICAgIFwiJiAuTXVpQ2hpcC1sYWJlbFwiOiB7XHJcbiAgICAgICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgICAgIHBhZGRpbmc6IGAwICR7cHhUb1JlbSgxMCl9IDAgJHtweFRvUmVtKDQpfWAsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLk11aVN2Z0ljb24tcm9vdCwgJiAuTXVpU3ZnSWNvbi1yb290OmhvdmVyLCAmIC5NdWlTdmdJY29uLXJvb3Q6Zm9jdXNcIjoge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZS5tYWluLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0b2NvbXBsZXRlO1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgYmFzZSBzdHlsZXNcclxuaW1wb3J0IGJvcmRlcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JvcmRlcnNcIjtcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvY29sb3JzXCI7XHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBoZWxwZXIgZnVuY3Rpb25zXHJcbmltcG9ydCBweFRvUmVtIGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL3B4VG9SZW1cIjtcclxuaW1wb3J0IGxpbmVhckdyYWRpZW50IGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL2xpbmVhckdyYWRpZW50XCI7XHJcblxyXG5jb25zdCB7IGJvcmRlcldpZHRoLCBib3JkZXJDb2xvciB9ID0gYm9yZGVycztcclxuY29uc3QgeyB0cmFuc3BhcmVudCwgZ3JhZGllbnRzLCBpbmZvIH0gPSBjb2xvcnM7XHJcblxyXG5jb25zdCBjaGVja2JveCA9IHtcclxuICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvbnRhaW5cIixcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgd2lkdGg6IHB4VG9SZW0oMjApLFxyXG4gICAgICBoZWlnaHQ6IHB4VG9SZW0oMjApLFxyXG4gICAgICBtYXJnaW5SaWdodDogcHhUb1JlbSg2KSxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgY29sb3I6IHRyYW5zcGFyZW50Lm1haW4sXHJcbiAgICAgIGJvcmRlcjogYCR7Ym9yZGVyV2lkdGhbMV19IHNvbGlkICR7Ym9yZGVyQ29sb3J9YCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiBweFRvUmVtKDUuNiksXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDI1MG1zIGVhc2VcIixcclxuXHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5tYWluLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5NdWlTdmdJY29uLXJvb3RcIjoge1xyXG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50Lm1haW4sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYuTXVpLWZvY3VzVmlzaWJsZVwiOiB7XHJcbiAgICAgICAgYm9yZGVyOiBgJHtib3JkZXJXaWR0aFsyXX0gc29saWQgJHtpbmZvLm1haW59ICFpbXBvcnRhbnRgLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBjb2xvclByaW1hcnk6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5tYWluLFxyXG5cclxuICAgICAgXCImLk11aS1jaGVja2VkXCI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAtMSAyMiAyMiclM2UlM2NwYXRoIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmZmJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMi41JyBkPSdNNiAxMGwzIDNsNi02Jy8lM2UlM2Mvc3ZnJTNlXCIpLCAke2xpbmVhckdyYWRpZW50KFxyXG4gICAgICAgICAgZ3JhZGllbnRzLmRhcmsubWFpbixcclxuICAgICAgICAgIGdyYWRpZW50cy5kYXJrLnN0YXRlXHJcbiAgICAgICAgKX1gLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBncmFkaWVudHMuZGFyay5tYWluLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zcGFyZW50Lm1haW4sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQubWFpbixcclxuXHJcbiAgICAgIFwiJi5NdWktY2hlY2tlZFwiOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgLTEgMjIgMjInJTNlJTNjcGF0aCBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzIuNScgZD0nTTYgMTBsMyAzbDYtNicvJTNlJTNjL3N2ZyUzZVwiKSwgJHtsaW5lYXJHcmFkaWVudChcclxuICAgICAgICAgIGdyYWRpZW50cy5kYXJrLm1haW4sXHJcbiAgICAgICAgICBncmFkaWVudHMuZGFyay5zdGF0ZVxyXG4gICAgICAgICl9YCxcclxuICAgICAgICBib3JkZXJDb2xvcjogZ3JhZGllbnRzLmRhcmsubWFpbixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5tYWluLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tib3g7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL3R5cG9ncmFwaHlcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGhlbHBlciBmdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3QgeyBkYXJrIH0gPSBjb2xvcnM7XHJcbmNvbnN0IHsgc2l6ZSwgZm9udFdlaWdodEJvbGQgfSA9IHR5cG9ncmFwaHk7XHJcblxyXG5jb25zdCBmb3JtQ29udHJvbExhYmVsID0ge1xyXG4gIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgbWluSGVpZ2h0OiBweFRvUmVtKDI0KSxcclxuICAgICAgbWFyZ2luQm90dG9tOiBweFRvUmVtKDIpLFxyXG4gICAgfSxcclxuXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICBmb250U2l6ZTogc2l6ZS5zbSxcclxuICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodEJvbGQsXHJcbiAgICAgIGNvbG9yOiBkYXJrLm1haW4sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHtweFRvUmVtKDEpfSlgLFxyXG4gICAgICBtYXJnaW5MZWZ0OiBweFRvUmVtKDQpLFxyXG5cclxuICAgICAgXCImLk11aS1kaXNhYmxlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IGRhcmsubWFpbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1Db250cm9sTGFiZWw7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuXHJcbmNvbnN0IHsgZGFyayB9ID0gY29sb3JzO1xyXG5cclxuY29uc3QgZm9ybUxhYmVsID0ge1xyXG4gIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGNvbG9yOiBkYXJrLm1haW4sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtTGFiZWw7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBCYXNlIFN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuaW1wb3J0IGJvcmRlcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JvcmRlcnNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFBSTyBoZWxwZXIgZnVuY3Rpb25zXHJcbmltcG9ydCBweFRvUmVtIGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL3B4VG9SZW1cIjtcclxuXHJcbmNvbnN0IHsgaW5wdXRDb2xvcnMgfSA9IGNvbG9ycztcclxuY29uc3QgeyBib3JkZXJXaWR0aCwgYm9yZGVyUmFkaXVzIH0gPSBib3JkZXJzO1xyXG5cclxuY29uc3QgaW5wdXQgPSB7XHJcbiAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4ICFpbXBvcnRhbnRcIixcclxuICAgICAgcGFkZGluZzogYCR7cHhUb1JlbSg4KX0gJHtweFRvUmVtKDI4KX0gJHtweFRvUmVtKDgpfSAke3B4VG9SZW0oMTIpfSAhaW1wb3J0YW50YCxcclxuICAgICAgYm9yZGVyOiBgJHtib3JkZXJXaWR0aFsxXX0gc29saWQgJHtpbnB1dENvbG9ycy5ib3JkZXJDb2xvci5tYWlufWAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogYCR7Ym9yZGVyUmFkaXVzLm1kfSAhaW1wb3J0YW50YCxcclxuXHJcbiAgICAgIFwiJiBmaWVsZHNldFwiOiB7XHJcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgaGVpZ2h0OiBweFRvUmVtKDIyKSxcclxuICAgICAgd2lkdGg6IFwibWF4LWNvbnRlbnQgIWltcG9ydGFudFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbnB1dFNpemVTbWFsbDoge1xyXG4gICAgICBoZWlnaHQ6IHB4VG9SZW0oMTQpLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5wdXQ7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBCYXNlIFN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL3R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IGJvcmRlcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JvcmRlcnNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFBSTyBoZWxwZXIgZnVuY3Rpb25zXHJcbmltcG9ydCBweFRvUmVtIGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL3B4VG9SZW1cIjtcclxuXHJcbmNvbnN0IHsgZGFyaywgd2hpdGUsIGdyZXksIGlucHV0Q29sb3JzIH0gPSBjb2xvcnM7XHJcbmNvbnN0IHsgc2l6ZSwgZm9udFdlaWdodFJlZ3VsYXIgfSA9IHR5cG9ncmFwaHk7XHJcbmNvbnN0IHsgYm9yZGVyV2lkdGgsIGJvcmRlclJhZGl1cyB9ID0gYm9yZGVycztcclxuXHJcbmNvbnN0IGlucHV0QmFzZSA9IHtcclxuICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiBcImdyaWQgIWltcG9ydGFudFwiLFxyXG4gICAgICBwbGFjZUl0ZW1zOiBcImNlbnRlciAhaW1wb3J0YW50XCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiYXV0byAhaW1wb3J0YW50XCIsXHJcbiAgICAgIHBhZGRpbmc6IGAke3B4VG9SZW0oOCl9ICR7cHhUb1JlbSgxMil9YCxcclxuICAgICAgZm9udFNpemU6IGAke3NpemUuc219ICFpbXBvcnRhbnRgLFxyXG4gICAgICBmb250V2VpZ2h0OiBgJHtmb250V2VpZ2h0UmVndWxhcn0gIWltcG9ydGFudGAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS40ICFpbXBvcnRhbnRcIixcclxuICAgICAgY29sb3I6IGAke2dyZXlbNzAwXX0gIWltcG9ydGFudGAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7d2hpdGUubWFpbn0gIWltcG9ydGFudGAsXHJcbiAgICAgIGJhY2tncm91bmRDbGlwOiBcInBhZGRpbmctYm94ICFpbXBvcnRhbnRcIixcclxuICAgICAgYm9yZGVyOiBgJHtib3JkZXJXaWR0aFsxXX0gc29saWQgJHtpbnB1dENvbG9ycy5ib3JkZXJDb2xvci5tYWlufWAsXHJcbiAgICAgIGFwcGVhcmFuY2U6IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLm1kLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImJveC1zaGFkb3cgMTUwbXMgZWFzZSwgYm9yZGVyLWNvbG9yIDE1MG1zIGVhc2UsIHBhZGRpbmcgMTUwbXMgZWFzZSAhaW1wb3J0YW50XCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGlucHV0OiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICBoZWlnaHQ6IGAke3B4VG9SZW0oMjIpfWAsXHJcbiAgICAgIHBhZGRpbmc6IFwiMCAhaW1wb3J0YW50XCIsXHJcblxyXG4gICAgICBcIiY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJcIjoge1xyXG4gICAgICAgIGNvbG9yOiBgJHtkYXJrLm1haW59ICFpbXBvcnRhbnRgLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5wdXRCYXNlO1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgYmFzZSBzdHlsZXNcclxuaW1wb3J0IGJvcmRlcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JvcmRlcnNcIjtcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvY29sb3JzXCI7XHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBoZWxwZXIgZnVuY3Rpb25zXHJcbmltcG9ydCBweFRvUmVtIGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL3B4VG9SZW1cIjtcclxuaW1wb3J0IGxpbmVhckdyYWRpZW50IGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL2xpbmVhckdyYWRpZW50XCI7XHJcblxyXG5jb25zdCB7IGJvcmRlcldpZHRoLCBib3JkZXJDb2xvciB9ID0gYm9yZGVycztcclxuY29uc3QgeyB0cmFuc3BhcmVudCwgZ3JhZGllbnRzLCBpbmZvIH0gPSBjb2xvcnM7XHJcblxyXG5jb25zdCByYWRpbyA9IHtcclxuICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvbnRhaW5cIixcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgd2lkdGg6IHB4VG9SZW0oMjApLFxyXG4gICAgICBoZWlnaHQ6IHB4VG9SZW0oMjApLFxyXG4gICAgICBtYXJnaW5SaWdodDogcHhUb1JlbSg2KSxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgY29sb3I6IHRyYW5zcGFyZW50Lm1haW4sXHJcbiAgICAgIGJvcmRlcjogYCR7Ym9yZGVyV2lkdGhbMV19IHNvbGlkICR7Ym9yZGVyQ29sb3J9YCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAyNTBtcyBlYXNlXCIsXHJcblxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQubWFpbixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAuTXVpU3ZnSWNvbi1yb290XCI6IHtcclxuICAgICAgICBmaWxsOiB0cmFuc3BhcmVudC5tYWluLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImLk11aS1mb2N1c1Zpc2libGVcIjoge1xyXG4gICAgICAgIGJvcmRlcjogYCR7Ym9yZGVyV2lkdGhbMl19IHNvbGlkICR7aW5mby5tYWlufSAhaW1wb3J0YW50YCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgY29sb3JQcmltYXJ5OiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQubWFpbixcclxuXHJcbiAgICAgIFwiJi5NdWktY2hlY2tlZFwiOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGhlaWdodD0nMTVweCcgd2lkdGg9JzE1cHgnJTNFJTNDY2lyY2xlIGN4PSc1MCUnIGN5PSc1MCUnIHI9JzMnIGZpbGw9JyUyM2ZmZicgLyUzRSUzQy9zdmclM0VcIiksICR7bGluZWFyR3JhZGllbnQoXHJcbiAgICAgICAgICBncmFkaWVudHMuZGFyay5tYWluLFxyXG4gICAgICAgICAgZ3JhZGllbnRzLmRhcmsuc3RhdGVcclxuICAgICAgICApfWAsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IGdyYWRpZW50cy5kYXJrLm1haW4sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQubWFpbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5tYWluLFxyXG5cclxuICAgICAgXCImLk11aS1jaGVja2VkXCI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgaGVpZ2h0PScxNXB4JyB3aWR0aD0nMTVweCclM0UlM0NjaXJjbGUgY3g9JzUwJScgY3k9JzUwJScgcj0nMycgZmlsbD0nJTIzZmZmJyAvJTNFJTNDL3N2ZyUzRVwiKSwgJHtsaW5lYXJHcmFkaWVudChcclxuICAgICAgICAgIGdyYWRpZW50cy5kYXJrLm1haW4sXHJcbiAgICAgICAgICBncmFkaWVudHMuZGFyay5zdGF0ZVxyXG4gICAgICAgICl9YCxcclxuICAgICAgICBib3JkZXJDb2xvcjogZ3JhZGllbnRzLmRhcmsubWFpbixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5tYWluLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmFkaW87XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGhlbHBlciBmdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3QgeyB0cmFuc3BhcmVudCB9ID0gY29sb3JzO1xyXG5cclxuY29uc3Qgc2VsZWN0ID0ge1xyXG4gIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICBzZWxlY3Q6IHtcclxuICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmc6IGAwICR7cHhUb1JlbSgxMil9ICFpbXBvcnRhbnRgLFxyXG5cclxuICAgICAgXCImIC5NdWktc2VsZWN0ZWRcIjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQubWFpbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc2VsZWN0TWVudToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcIm5vbmVcIixcclxuICAgICAgaGVpZ2h0OiBcIm5vbmVcIixcclxuICAgICAgbWluSGVpZ2h0OiBcIm5vbmVcIixcclxuICAgICAgb3ZlcmZsb3c6IFwidW5zZXRcIixcclxuICAgIH0sXHJcblxyXG4gICAgaWNvbjoge1xyXG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlbGVjdDtcclxuIiwiLyoqXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IC0gdjMuMS4wXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9zb2Z0LXVpLWRhc2hib2FyZC1wcm8tcmVhY3RcclxuKiBDb3B5cmlnaHQgMjAyMiBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcblxyXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKi9cclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGJhc2Ugc3R5bGVzXHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2NvbG9yc1wiO1xyXG5pbXBvcnQgYm9yZGVycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvYm9yZGVyc1wiO1xyXG5pbXBvcnQgYm94U2hhZG93cyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvYm94U2hhZG93c1wiO1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgaGVscGVyIGZ1bmN0aW9uc1xyXG5pbXBvcnQgcmdiYSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9yZ2JhXCI7XHJcbmltcG9ydCBweFRvUmVtIGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL3B4VG9SZW1cIjtcclxuaW1wb3J0IGxpbmVhckdyYWRpZW50IGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL2xpbmVhckdyYWRpZW50XCI7XHJcblxyXG5jb25zdCB7IHdoaXRlLCBsaWdodCwgZ3JhZGllbnRzIH0gPSBjb2xvcnM7XHJcbmNvbnN0IHsgYm9yZGVyV2lkdGggfSA9IGJvcmRlcnM7XHJcbmNvbnN0IHsgbWQgfSA9IGJveFNoYWRvd3M7XHJcblxyXG5jb25zdCBzd2l0Y2hCdXR0b24gPSB7XHJcbiAgZGVmYXVsdFByb3BzOiB7XHJcbiAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxyXG4gIH0sXHJcblxyXG4gIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICByb290OiB7XHJcbiAgICAgIHdpZHRoOiBweFRvUmVtKDQwKSxcclxuICAgICAgaGVpZ2h0OiBweFRvUmVtKDIwKSxcclxuICAgICAgbWFyZ2luOiBgJHtweFRvUmVtKDQpfSAwYCxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiBweFRvUmVtKDE2MCksXHJcbiAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDI1MG1zIGVhc2UtaW5cIixcclxuICAgIH0sXHJcblxyXG4gICAgc3dpdGNoQmFzZToge1xyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3B4VG9SZW0oMil9LCAtNTAlKWAsXHJcbiAgICAgIHRyYW5zaXRpb246IGB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXRgLFxyXG5cclxuICAgICAgXCImLk11aS1jaGVja2VkXCI6IHtcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtweFRvUmVtKDIyKX0sIC01MCUpYCxcclxuXHJcbiAgICAgICAgXCImICsgLk11aVN3aXRjaC10cmFja1wiOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3JnYmEoZ3JhZGllbnRzLmRhcmsuc3RhdGUsIDAuOTUpfSAhaW1wb3J0YW50YCxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBgJHtyZ2JhKGdyYWRpZW50cy5kYXJrLnN0YXRlLCAwLjk1KX0gIWltcG9ydGFudGAsXHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYuTXVpLWRpc2FibGVkICsgLk11aVN3aXRjaC10cmFja1wiOiB7XHJcbiAgICAgICAgb3BhY2l0eTogXCIwLjMgIWltcG9ydGFudFwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImLk11aS1mb2N1c1Zpc2libGUgLk11aVN3aXRjaC10aHVtYlwiOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBsaW5lYXJHcmFkaWVudChncmFkaWVudHMuaW5mby5tYWluLCBncmFkaWVudHMuaW5mby5zdGF0ZSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHRodW1iOiB7XHJcbiAgICAgIHdpZHRoOiBweFRvUmVtKDE2KSxcclxuICAgICAgaGVpZ2h0OiBweFRvUmVtKDE2KSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB3aGl0ZS5tYWluLFxyXG4gICAgICBib3hTaGFkb3c6IG1kLFxyXG4gICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHRyYWNrOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcmdiYShncmFkaWVudHMuZGFyay5zdGF0ZSwgMC4xKSxcclxuICAgICAgYm9yZGVyOiBgJHtib3JkZXJXaWR0aFsxXX0gc29saWQgJHtsaWdodC5tYWlufWAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogcHhUb1JlbSgxNjApLFxyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB0cmFuc2l0aW9uOiBgYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlLCBib3JkZXItY29sb3IgMjAwbXMgZWFzZWAsXHJcbiAgICB9LFxyXG5cclxuICAgIGNoZWNrZWQ6IHt9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzd2l0Y2hCdXR0b247XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBoZWxwZXIgZnVuY3Rpb25zXHJcbmltcG9ydCBweFRvUmVtIGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL3B4VG9SZW1cIjtcclxuXHJcbmNvbnN0IGljb24gPSB7XHJcbiAgZGVmYXVsdFByb3BzOiB7XHJcbiAgICBiYXNlQ2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zLXJvdW5kXCIsXHJcbiAgICBmb250U2l6ZTogXCJpbmhlcml0XCIsXHJcbiAgfSxcclxuXHJcbiAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgIGZvbnRTaXplSW5oZXJpdDoge1xyXG4gICAgICBmb250U2l6ZTogXCJpbmhlcml0ICFpbXBvcnRhbnRcIixcclxuICAgIH0sXHJcblxyXG4gICAgZm9udFNpemVTbWFsbDoge1xyXG4gICAgICBmb250U2l6ZTogYCR7cHhUb1JlbSgyMCl9ICFpbXBvcnRhbnRgLFxyXG4gICAgfSxcclxuXHJcbiAgICBmb250U2l6ZUxhcmdlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBgJHtweFRvUmVtKDM2KX0gIWltcG9ydGFudGAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpY29uO1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgQmFzZSBTdHlsZXNcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvY29sb3JzXCI7XHJcblxyXG5jb25zdCB7IHRyYW5zcGFyZW50IH0gPSBjb2xvcnM7XHJcblxyXG5jb25zdCBpY29uQnV0dG9uID0ge1xyXG4gIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICByb290OiB7XHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudC5tYWluLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaWNvbkJ1dHRvbjtcclxuIiwiLyoqXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IC0gdjMuMS4wXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9zb2Z0LXVpLWRhc2hib2FyZC1wcm8tcmVhY3RcclxuKiBDb3B5cmlnaHQgMjAyMiBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcblxyXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKi9cclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGJhc2Ugc3R5bGVzXHJcbmltcG9ydCBib3JkZXJzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9ib3JkZXJzXCI7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2NvbG9yc1wiO1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgaGVscGVyIGZ1bmN0aW9uc1xyXG5pbXBvcnQgcHhUb1JlbSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9weFRvUmVtXCI7XHJcblxyXG5jb25zdCB7IGJvcmRlclJhZGl1cyB9ID0gYm9yZGVycztcclxuY29uc3QgeyBsaWdodCB9ID0gY29sb3JzO1xyXG5cclxuY29uc3QgbGluZWFyUHJvZ3Jlc3MgPSB7XHJcbiAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgaGVpZ2h0OiBweFRvUmVtKDMpLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cy5tZCxcclxuICAgICAgb3ZlcmZsb3c6IFwidmlzaWJsZVwiLFxyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBjb2xvclByaW1hcnk6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBsaWdodC5tYWluLFxyXG4gICAgfSxcclxuXHJcbiAgICBjb2xvclNlY29uZGFyeToge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0Lm1haW4sXHJcbiAgICB9LFxyXG5cclxuICAgIGJhcjoge1xyXG4gICAgICBoZWlnaHQ6IHB4VG9SZW0oNiksXHJcbiAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLnNtLFxyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoMCwgJHtweFRvUmVtKC0xLjUpfSkgIWltcG9ydGFudGAsXHJcbiAgICAgIHRyYW5zaXRpb246IFwid2lkdGggMC42cyBlYXNlICFpbXBvcnRhbnRcIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpbmVhclByb2dyZXNzO1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuY29uc3QgbGluayA9IHtcclxuICBkZWZhdWx0UHJvcHM6IHtcclxuICAgIHVuZGVybGluZTogXCJub25lXCIsXHJcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpbms7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG5jb25zdCBsaXN0ID0ge1xyXG4gIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICBwYWRkaW5nOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IDAsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaXN0O1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuY29uc3QgbGlzdEl0ZW0gPSB7XHJcbiAgZGVmYXVsdFByb3BzOiB7XHJcbiAgICBkaXNhYmxlR3V0dGVyczogdHJ1ZSxcclxuICB9LFxyXG5cclxuICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAwLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlzdEl0ZW07XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG5jb25zdCBsaXN0SXRlbVRleHQgPSB7XHJcbiAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgbWFyZ2luVG9wOiAwLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaXN0SXRlbVRleHQ7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgYm94U2hhZG93cyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvYm94U2hhZG93c1wiO1xyXG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvdHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuaW1wb3J0IGJvcmRlcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JvcmRlcnNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGhlbHBlciBmdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3QgeyBsZyB9ID0gYm94U2hhZG93cztcclxuY29uc3QgeyBzaXplIH0gPSB0eXBvZ3JhcGh5O1xyXG5jb25zdCB7IHRleHQsIHdoaXRlIH0gPSBjb2xvcnM7XHJcbmNvbnN0IHsgYm9yZGVyUmFkaXVzIH0gPSBib3JkZXJzO1xyXG5cclxuY29uc3QgbWVudSA9IHtcclxuICBkZWZhdWx0UHJvcHM6IHtcclxuICAgIGRpc2FibGVBdXRvRm9jdXNJdGVtOiB0cnVlLFxyXG4gIH0sXHJcblxyXG4gIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICBwYXBlcjoge1xyXG4gICAgICBtaW5XaWR0aDogcHhUb1JlbSgxNjApLFxyXG4gICAgICBib3hTaGFkb3c6IGxnLFxyXG4gICAgICBwYWRkaW5nOiBgJHtweFRvUmVtKDE2KX0gJHtweFRvUmVtKDgpfWAsXHJcbiAgICAgIGZvbnRTaXplOiBzaXplLnNtLFxyXG4gICAgICBjb2xvcjogdGV4dC5tYWluLFxyXG4gICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3doaXRlLm1haW59ICFpbXBvcnRhbnRgLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cy5tZCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuaW1wb3J0IGJvcmRlcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JvcmRlcnNcIjtcclxuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL3R5cG9ncmFwaHlcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGhlbHBlciBmdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3QgeyBsaWdodCwgdGV4dCwgZGFyayB9ID0gY29sb3JzO1xyXG5jb25zdCB7IGJvcmRlclJhZGl1cyB9ID0gYm9yZGVycztcclxuY29uc3QgeyBzaXplIH0gPSB0eXBvZ3JhcGh5O1xyXG5cclxuY29uc3QgbWVudUl0ZW0gPSB7XHJcbiAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgbWluV2lkdGg6IHB4VG9SZW0oMTYwKSxcclxuICAgICAgbWluSGVpZ2h0OiBcInVuc2V0XCIsXHJcbiAgICAgIHBhZGRpbmc6IGAke3B4VG9SZW0oNC44KX0gJHtweFRvUmVtKDE2KX1gLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cy5tZCxcclxuICAgICAgZm9udFNpemU6IHNpemUuc20sXHJcbiAgICAgIGNvbG9yOiB0ZXh0Lm1haW4sXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlLCBjb2xvciAzMDBtcyBlYXNlXCIsXHJcblxyXG4gICAgICBcIiY6aG92ZXIsICY6Zm9jdXMsICYuTXVpLXNlbGVjdGVkLCAmLk11aS1zZWxlY3RlZDpob3ZlciwgJi5NdWktc2VsZWN0ZWQ6Zm9jdXNcIjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbGlnaHQubWFpbixcclxuICAgICAgICBjb2xvcjogZGFyay5tYWluLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudUl0ZW07XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBoZWxwZXIgZnVuY3Rpb25zXHJcbmltcG9ydCBweFRvUmVtIGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL3B4VG9SZW1cIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGJhc2Ugc3R5bGVzXHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2NvbG9yc1wiO1xyXG5pbXBvcnQgYm94U2hhZG93cyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvYm94U2hhZG93c1wiO1xyXG5pbXBvcnQgYm9yZGVycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvYm9yZGVyc1wiO1xyXG5cclxuY29uc3QgeyB0cmFuc3BhcmVudCB9ID0gY29sb3JzO1xyXG5jb25zdCB7IGxnIH0gPSBib3hTaGFkb3dzO1xyXG5jb25zdCB7IGJvcmRlclJhZGl1cyB9ID0gYm9yZGVycztcclxuXHJcbmNvbnN0IHBvcG92ZXIgPSB7XHJcbiAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQubWFpbixcclxuICAgICAgYm94U2hhZG93OiBsZyxcclxuICAgICAgcGFkZGluZzogcHhUb1JlbSg4KSxcclxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMubGcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3BvdmVyO1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgYmFzZSBzdHlsZXNcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvY29sb3JzXCI7XHJcbmltcG9ydCBib3JkZXJzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9ib3JkZXJzXCI7XHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBoZWxwZXIgZnVuY3Rpb25zXHJcbmltcG9ydCByZ2JhIGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL3JnYmFcIjtcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3QgeyB3aGl0ZSB9ID0gY29sb3JzO1xyXG5jb25zdCB7IGJvcmRlclJhZGl1cyB9ID0gYm9yZGVycztcclxuXHJcbmNvbnN0IHNpZGVuYXYgPSB7XHJcbiAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgd2lkdGg6IHB4VG9SZW0oMjUwKSxcclxuICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgIH0sXHJcblxyXG4gICAgcGFwZXI6IHtcclxuICAgICAgd2lkdGg6IHB4VG9SZW0oMjUwKSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiByZ2JhKHdoaXRlLm1haW4sIDAuOCksXHJcbiAgICAgIGJhY2tkcm9wRmlsdGVyOiBgc2F0dXJhdGUoMjAwJSkgYmx1cigke3B4VG9SZW0oMzApfSlgLFxyXG4gICAgICBoZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHtweFRvUmVtKDMyKX0pYCxcclxuICAgICAgbWFyZ2luOiBweFRvUmVtKDE2KSxcclxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMueGwsXHJcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHBhcGVyQW5jaG9yRG9ja2VkTGVmdDoge1xyXG4gICAgICBib3JkZXJSaWdodDogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWRlbmF2O1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgYmFzZSBzdHlsZXNcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvY29sb3JzXCI7XHJcbmltcG9ydCBib3JkZXJzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9ib3JkZXJzXCI7XHJcbmltcG9ydCBib3hTaGFkb3dzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9ib3hTaGFkb3dzXCI7XHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBoZWxwZXIgZnVuY3Rpb25zXHJcbmltcG9ydCBsaW5lYXJHcmFkaWVudCBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9saW5lYXJHcmFkaWVudFwiO1xyXG5pbXBvcnQgcHhUb1JlbSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9weFRvUmVtXCI7XHJcblxyXG5jb25zdCB7IGxpZ2h0LCB3aGl0ZSwgc2xpZGVyQ29sb3JzLCBibGFjaywgZ3JhZGllbnRzIH0gPSBjb2xvcnM7XHJcbmNvbnN0IHsgYm9yZGVyUmFkaXVzLCBib3JkZXJXaWR0aCB9ID0gYm9yZGVycztcclxuY29uc3QgeyBzbGlkZXJCb3hTaGFkb3cgfSA9IGJveFNoYWRvd3M7XHJcblxyXG5jb25zdCBzbGlkZXIgPSB7XHJcbiAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG5cclxuICAgICAgXCImIC5NdWlTbGlkZXItYWN0aXZlLCAmIC5NdWktZm9jdXNWaXNpYmxlXCI6IHtcclxuICAgICAgICBib3hTaGFkb3c6IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLk11aVNsaWRlci12YWx1ZUxhYmVsXCI6IHtcclxuICAgICAgICBjb2xvcjogYmxhY2subWFpbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgcmFpbDoge1xyXG4gICAgICBoZWlnaHQ6IHB4VG9SZW0oMyksXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogbGlnaHQubWFpbixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMuc20sXHJcbiAgICB9LFxyXG5cclxuICAgIHRyYWNrOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogbGluZWFyR3JhZGllbnQoZ3JhZGllbnRzLmluZm8ubWFpbiwgZ3JhZGllbnRzLmluZm8uc3RhdGUpLFxyXG4gICAgICBoZWlnaHQ6IHB4VG9SZW0oNiksXHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIHRvcDogcHhUb1JlbSgyKSxcclxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMubGcsXHJcbiAgICAgIHpJbmRleDogMSxcclxuICAgIH0sXHJcblxyXG4gICAgdGh1bWI6IHtcclxuICAgICAgd2lkdGg6IHB4VG9SZW0oMTUpLFxyXG4gICAgICBoZWlnaHQ6IHB4VG9SZW0oMTUpLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdoaXRlLm1haW4sXHJcbiAgICAgIHpJbmRleDogMTAsXHJcbiAgICAgIGJveFNoYWRvdzogc2xpZGVyQm94U2hhZG93LnRodW1iLFxyXG4gICAgICBib3JkZXI6IGAke2JvcmRlcldpZHRoWzFdfSBzb2xpZCAke3NsaWRlckNvbG9ycy50aHVtYi5ib3JkZXJDb2xvcn1gLFxyXG5cclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyO1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgYmFzZSBzdHlsZXNcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvY29sb3JzXCI7XHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBoZWxwZXIgZnVuY3Rpb25zXHJcbmltcG9ydCBweFRvUmVtIGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL3B4VG9SZW1cIjtcclxuXHJcbmNvbnN0IHsgdHJhbnNwYXJlbnQgfSA9IGNvbG9ycztcclxuXHJcbmNvbnN0IHN0ZXBwZXIgPSB7XHJcbiAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgbWFyZ2luOiBgJHtweFRvUmVtKDQ4KX0gMGAsXHJcbiAgICAgIHBhZGRpbmc6IGAwICR7cHhUb1JlbSgxMil9YCxcclxuXHJcbiAgICAgIFwiJi5NdWlQYXBlci1yb290XCI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zcGFyZW50Lm1haW4sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdGVwcGVyO1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgaGVscGVyIGZ1bmN0aW9uc1xyXG5pbXBvcnQgcHhUb1JlbSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9weFRvUmVtXCI7XHJcblxyXG5jb25zdCBzdGVwID0ge1xyXG4gIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICByb290OiB7XHJcbiAgICAgIHBhZGRpbmc6IGAwICR7cHhUb1JlbSg2KX1gLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RlcDtcclxuIiwiLyoqXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IC0gdjMuMS4wXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9zb2Z0LXVpLWRhc2hib2FyZC1wcm8tcmVhY3RcclxuKiBDb3B5cmlnaHQgMjAyMiBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcblxyXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKi9cclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGJhc2Ugc3R5bGVzXHJcbmltcG9ydCBib3JkZXJzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9ib3JkZXJzXCI7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2NvbG9yc1wiO1xyXG5cclxuY29uc3QgeyBkYXJrIH0gPSBjb2xvcnM7XHJcbmNvbnN0IHsgYm9yZGVyV2lkdGgsIGJvcmRlckNvbG9yIH0gPSBib3JkZXJzO1xyXG5cclxuY29uc3Qgc3RlcENvbm5lY3RvciA9IHtcclxuICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBjb2xvcjogYm9yZGVyQ29sb3IsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDIwMG1zIGxpbmVhclwiLFxyXG5cclxuICAgICAgXCImLk11aS1hY3RpdmVcIjoge1xyXG4gICAgICAgIGNvbG9yOiBkYXJrLm1haW4sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYuTXVpLWNvbXBsZXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IGRhcmsubWFpbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgYWx0ZXJuYXRpdmVMYWJlbDoge1xyXG4gICAgICB0b3A6IFwiMTQlXCIsXHJcbiAgICAgIGxlZnQ6IFwiLTUwJVwiLFxyXG4gICAgICByaWdodDogXCI1MCVcIixcclxuICAgIH0sXHJcblxyXG4gICAgbGluZToge1xyXG4gICAgICBib3JkZXJXaWR0aDogYCR7Ym9yZGVyV2lkdGhbMl19ICFpbXBvcnRhbnRgLFxyXG4gICAgICBib3JkZXJDb2xvcjogXCJjdXJyZW50Q29sb3JcIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0ZXBDb25uZWN0b3I7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuaW1wb3J0IGJvcmRlcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JvcmRlcnNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGhlbHBlciBmdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5pbXBvcnQgYm94U2hhZG93IGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL2JveFNoYWRvd1wiO1xyXG5cclxuY29uc3QgeyBkYXJrLCB3aGl0ZSB9ID0gY29sb3JzO1xyXG5jb25zdCB7IGJvcmRlcldpZHRoLCBib3JkZXJDb2xvciB9ID0gYm9yZGVycztcclxuXHJcbmNvbnN0IHN0ZXBJY29uID0ge1xyXG4gIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlLm1haW4sXHJcbiAgICAgIGZpbGw6IHdoaXRlLm1haW4sXHJcbiAgICAgIHN0cm9rZTogd2hpdGUubWFpbixcclxuICAgICAgc3Ryb2tlV2lkdGg6IHB4VG9SZW0oMTApLFxyXG4gICAgICB3aWR0aDogcHhUb1JlbSgxMyksXHJcbiAgICAgIGhlaWdodDogcHhUb1JlbSgxMyksXHJcbiAgICAgIGJvcmRlcjogYCR7Ym9yZGVyV2lkdGhbMl19IHNvbGlkICR7Ym9yZGVyQ29sb3J9YCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICB6SW5kZXg6IDk5LFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAyMDBtcyBsaW5lYXJcIixcclxuXHJcbiAgICAgIFwiJi5NdWktYWN0aXZlXCI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrLm1haW4sXHJcbiAgICAgICAgZmlsbDogZGFyay5tYWluLFxyXG4gICAgICAgIHN0cm9rZTogZGFyay5tYWluLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBkYXJrLm1haW4sXHJcbiAgICAgICAgYm94U2hhZG93OiBib3hTaGFkb3coWzAsIDBdLCBbMCwgMl0sIGRhcmsubWFpbiwgMSksXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYuTXVpLWNvbXBsZXRlZFwiOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZGFyay5tYWluLFxyXG4gICAgICAgIGZpbGw6IGRhcmsubWFpbixcclxuICAgICAgICBzdHJva2U6IGRhcmsubWFpbixcclxuICAgICAgICBib3JkZXJDb2xvcjogZGFyay5tYWluLFxyXG4gICAgICAgIGJveFNoYWRvdzogYm94U2hhZG93KFswLCAwXSwgWzAsIDJdLCBkYXJrLm1haW4sIDEpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RlcEljb247XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvdHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGhlbHBlciBmdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3QgeyBzaXplLCBmb250V2VpZ2h0UmVndWxhciB9ID0gdHlwb2dyYXBoeTtcclxuY29uc3QgeyBncmV5LCBkYXJrLCBzZWNvbmRhcnkgfSA9IGNvbG9ycztcclxuXHJcbmNvbnN0IHN0ZXBMYWJlbCA9IHtcclxuICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgbGFiZWw6IHtcclxuICAgICAgbWFyZ2luVG9wOiBgJHtweFRvUmVtKDgpfSAhaW1wb3J0YW50YCxcclxuICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodFJlZ3VsYXIsXHJcbiAgICAgIGZvbnRTaXplOiBzaXplLm1kLFxyXG4gICAgICBjb2xvcjogZ3JleVszMDBdLFxyXG5cclxuICAgICAgXCImLk11aS1hY3RpdmVcIjoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6IGAke2ZvbnRXZWlnaHRSZWd1bGFyfSAhaW1wb3J0YW50YCxcclxuICAgICAgICBjb2xvcjogYCR7ZGFyay5tYWlufSAhaW1wb3J0YW50YCxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJi5NdWktY29tcGxldGVkXCI6IHtcclxuICAgICAgICBmb250V2VpZ2h0OiBgJHtmb250V2VpZ2h0UmVndWxhcn0gIWltcG9ydGFudGAsXHJcbiAgICAgICAgY29sb3I6IGAke3NlY29uZGFyeS5tYWlufSAhaW1wb3J0YW50YCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0ZXBMYWJlbDtcclxuIiwiLyoqXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IC0gdjMuMS4wXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9zb2Z0LXVpLWRhc2hib2FyZC1wcm8tcmVhY3RcclxuKiBDb3B5cmlnaHQgMjAyMiBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcblxyXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKi9cclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGhlbHBlciBmdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3Qgc3ZnSWNvbiA9IHtcclxuICBkZWZhdWx0UHJvcHM6IHtcclxuICAgIGZvbnRTaXplOiBcImluaGVyaXRcIixcclxuICB9LFxyXG5cclxuICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgZm9udFNpemVJbmhlcml0OiB7XHJcbiAgICAgIGZvbnRTaXplOiBcImluaGVyaXQgIWltcG9ydGFudFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBmb250U2l6ZVNtYWxsOiB7XHJcbiAgICAgIGZvbnRTaXplOiBgJHtweFRvUmVtKDIwKX0gIWltcG9ydGFudGAsXHJcbiAgICB9LFxyXG5cclxuICAgIGZvbnRTaXplTGFyZ2U6IHtcclxuICAgICAgZm9udFNpemU6IGAke3B4VG9SZW0oMzYpfSAhaW1wb3J0YW50YCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN2Z0ljb247XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgYm9yZGVycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvYm9yZGVyc1wiO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGhlbHBlciBmdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3QgeyBib3JkZXJXaWR0aCB9ID0gYm9yZGVycztcclxuY29uc3QgeyBsaWdodCB9ID0gY29sb3JzO1xyXG5cclxuY29uc3QgdGFibGVDZWxsID0ge1xyXG4gIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICByb290OiB7XHJcbiAgICAgIHBhZGRpbmc6IGAke3B4VG9SZW0oMTIpfSAke3B4VG9SZW0oMTYpfWAsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogYCR7Ym9yZGVyV2lkdGhbMV19IHNvbGlkICR7bGlnaHQubWFpbn1gLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFibGVDZWxsO1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgYmFzZSBzdHlsZXNcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvY29sb3JzXCI7XHJcbmltcG9ydCBib3hTaGFkb3dzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9ib3hTaGFkb3dzXCI7XHJcbmltcG9ydCBib3JkZXJzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9ib3JkZXJzXCI7XHJcblxyXG5jb25zdCB7IHdoaXRlIH0gPSBjb2xvcnM7XHJcbmNvbnN0IHsgeHhsIH0gPSBib3hTaGFkb3dzO1xyXG5jb25zdCB7IGJvcmRlclJhZGl1cyB9ID0gYm9yZGVycztcclxuXHJcbmNvbnN0IHRhYmxlQ29udGFpbmVyID0ge1xyXG4gIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogd2hpdGUubWFpbixcclxuICAgICAgYm94U2hhZG93OiB4eGwsXHJcbiAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLnhsLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFibGVDb250YWluZXI7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcHJvLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgYm9yZGVycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvYm9yZGVyc1wiO1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgaGVscGVyIGZ1bmN0aW9uc1xyXG5pbXBvcnQgcHhUb1JlbSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9weFRvUmVtXCI7XHJcblxyXG5jb25zdCB7IGJvcmRlclJhZGl1cyB9ID0gYm9yZGVycztcclxuXHJcbmNvbnN0IHRhYmxlSGVhZCA9IHtcclxuICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgIHBhZGRpbmc6IGAke3B4VG9SZW0oMTYpfSAke3B4VG9SZW0oMTYpfSAwICAke3B4VG9SZW0oMTYpfWAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogYCR7Ym9yZGVyUmFkaXVzLnhsfSAke2JvcmRlclJhZGl1cy54bH0gMCAwYCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhYmxlSGVhZDtcclxuIiwiLyoqXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IC0gdjMuMS4wXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9zb2Z0LXVpLWRhc2hib2FyZC1wcm8tcmVhY3RcclxuKiBDb3B5cmlnaHQgMjAyMiBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcblxyXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKi9cclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGJhc2Ugc3R5bGVzXHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2NvbG9yc1wiO1xyXG5pbXBvcnQgYm9yZGVycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvYm9yZGVyc1wiO1xyXG5pbXBvcnQgYm94U2hhZG93cyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvYm94U2hhZG93c1wiO1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgaGVscGVyIGZ1bmN0aW9uc1xyXG5pbXBvcnQgcHhUb1JlbSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9weFRvUmVtXCI7XHJcblxyXG5jb25zdCB7IGdyZXksIHdoaXRlIH0gPSBjb2xvcnM7XHJcbmNvbnN0IHsgYm9yZGVyUmFkaXVzIH0gPSBib3JkZXJzO1xyXG5jb25zdCB7IHRhYnNCb3hTaGFkb3cgfSA9IGJveFNoYWRvd3M7XHJcblxyXG5jb25zdCB0YWJzID0ge1xyXG4gIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICByb290OiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JleVsxMDBdLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cy5sZyxcclxuICAgICAgbWluSGVpZ2h0OiBcInVuc2V0XCIsXHJcbiAgICAgIHBhZGRpbmc6IHB4VG9SZW0oNCksXHJcbiAgICB9LFxyXG5cclxuICAgIGZsZXhDb250YWluZXI6IHtcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgekluZGV4OiAxMCxcclxuICAgIH0sXHJcblxyXG4gICAgZml4ZWQ6IHtcclxuICAgICAgb3ZlcmZsb3c6IFwidW5zZXQgIWltcG9ydGFudFwiLFxyXG4gICAgICBvdmVyZmxvd1g6IFwidW5zZXQgIWltcG9ydGFudFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICBcIiYgLk11aVRhYnMtaW5kaWNhdG9yXCI6IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGluZGljYXRvcjoge1xyXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cy5tZCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB3aGl0ZS5tYWluLFxyXG4gICAgICBib3hTaGFkb3c6IHRhYnNCb3hTaGFkb3cuaW5kaWNhdG9yLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCA1MDBtcyBlYXNlXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWJzO1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuLy8gU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgYmFzZSBzdHlsZXNcclxuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL3R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IGJvcmRlcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JvcmRlcnNcIjtcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiYXNzZXRzL3RoZW1lL2Jhc2UvY29sb3JzXCI7XHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBoZWxwZXIgZnVuY3Rpb25zXHJcbmltcG9ydCBweFRvUmVtIGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL3B4VG9SZW1cIjtcclxuXHJcbmNvbnN0IHsgc2l6ZSwgZm9udFdlaWdodFJlZ3VsYXIgfSA9IHR5cG9ncmFwaHk7XHJcbmNvbnN0IHsgYm9yZGVyUmFkaXVzIH0gPSBib3JkZXJzO1xyXG5jb25zdCB7IGRhcmsgfSA9IGNvbG9ycztcclxuXHJcbmNvbnN0IHRhYiA9IHtcclxuICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgZmxleDogXCIxIDEgYXV0b1wiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIG1heFdpZHRoOiBcInVuc2V0ICFpbXBvcnRhbnRcIixcclxuICAgICAgbWluV2lkdGg6IFwidW5zZXQgIWltcG9ydGFudFwiLFxyXG4gICAgICBtaW5IZWlnaHQ6IFwidW5zZXQgIWltcG9ydGFudFwiLFxyXG4gICAgICBmb250U2l6ZTogc2l6ZS5tZCxcclxuICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodFJlZ3VsYXIsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcImluaGVyaXRcIixcclxuICAgICAgcGFkZGluZzogcHhUb1JlbSg0KSxcclxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMubWQsXHJcbiAgICAgIGNvbG9yOiBgJHtkYXJrLm1haW59ICFpbXBvcnRhbnRgLFxyXG4gICAgICBvcGFjaXR5OiBcIjEgIWltcG9ydGFudFwiLFxyXG5cclxuICAgICAgXCImIC5tYXRlcmlhbC1pY29ucywgLm1hdGVyaWFsLWljb25zLXJvdW5kXCI6IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMCAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHB4VG9SZW0oNCksXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgc3ZnXCI6IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMCAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHB4VG9SZW0oNiksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGxhYmVsSWNvbjoge1xyXG4gICAgICBwYWRkaW5nVG9wOiBweFRvUmVtKDQpLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFiO1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXByby1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuLy8gQG11aSBtYXRlcmlhbCBjb21wb25lbnRzXHJcbmltcG9ydCBGYWRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWRlXCI7XHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9jb2xvcnNcIjtcclxuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL3R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IGJvcmRlcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JvcmRlcnNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGhlbHBlciBmdW5jdGlvbnNcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5cclxuY29uc3QgeyBibGFjaywgbGlnaHQgfSA9IGNvbG9ycztcclxuY29uc3QgeyBzaXplLCBmb250V2VpZ2h0UmVndWxhciB9ID0gdHlwb2dyYXBoeTtcclxuY29uc3QgeyBib3JkZXJSYWRpdXMgfSA9IGJvcmRlcnM7XHJcblxyXG5jb25zdCB0b29sdGlwID0ge1xyXG4gIGRlZmF1bHRQcm9wczoge1xyXG4gICAgYXJyb3c6IHRydWUsXHJcbiAgICBUcmFuc2l0aW9uQ29tcG9uZW50OiBGYWRlLFxyXG4gIH0sXHJcblxyXG4gIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIG1heFdpZHRoOiBweFRvUmVtKDIwMCksXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmxhY2subWFpbixcclxuICAgICAgY29sb3I6IGxpZ2h0Lm1haW4sXHJcbiAgICAgIGZvbnRTaXplOiBzaXplLnNtLFxyXG4gICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0UmVndWxhcixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cy5tZCxcclxuICAgICAgb3BhY2l0eTogMC43LFxyXG4gICAgICBwYWRkaW5nOiBgJHtweFRvUmVtKDUpfSAke3B4VG9SZW0oOCl9ICR7cHhUb1JlbSg0KX1gLFxyXG4gICAgfSxcclxuXHJcbiAgICBhcnJvdzoge1xyXG4gICAgICBjb2xvcjogYmxhY2subWFpbixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvb2x0aXA7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcmVhY3RcclxuKiBDb3B5cmlnaHQgMjAyMiBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcblxyXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKi9cclxuXHJcbi8qKlxyXG4gIFRoZSBib3hTaGFkb3coKSBmdW5jdGlvbiBoZWxwcyB5b3UgdG8gY3JlYXRlIGEgYm94IHNoYWRvdyBmb3IgYW4gZWxlbWVudFxyXG4gKi9cclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGhlbHBlciBmdW5jdGlvbnNcclxuaW1wb3J0IHJnYmEgZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcmdiYVwiO1xyXG5pbXBvcnQgcHhUb1JlbSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9weFRvUmVtXCI7XHJcblxyXG5mdW5jdGlvbiBib3hTaGFkb3cob2Zmc2V0ID0gW10sIHJhZGl1cyA9IFtdLCBjb2xvciwgb3BhY2l0eSwgaW5zZXQgPSBcIlwiKSB7XHJcbiAgY29uc3QgW3gsIHldID0gb2Zmc2V0O1xyXG4gIGNvbnN0IFtibHVyLCBzcHJlYWRdID0gcmFkaXVzO1xyXG5cclxuICByZXR1cm4gYCR7aW5zZXR9ICR7cHhUb1JlbSh4KX0gJHtweFRvUmVtKHkpfSAke3B4VG9SZW0oYmx1cil9ICR7cHhUb1JlbShzcHJlYWQpfSAke3JnYmEoXHJcbiAgICBjb2xvcixcclxuICAgIG9wYWNpdHlcclxuICApfWA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJveFNoYWRvdztcclxuIiwiLyoqXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IC0gdjMuMS4wXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9zb2Z0LXVpLWRhc2hib2FyZC1yZWFjdFxyXG4qIENvcHlyaWdodCAyMDIyIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbkNvZGVkIGJ5IHd3dy5jcmVhdGl2ZS10aW0uY29tXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qL1xyXG5cclxuLyoqXHJcbiAgVGhlIGhleFRvUmdiKCkgZnVuY3Rpb24gaGVscHMgeW91IHRvIGNoYW5nZSB0aGUgaGV4IGNvbG9yIGNvZGUgdG8gcmdiXHJcbiAgdXNpbmcgY2hyb21hLWpzIGxpYnJhcnkuXHJcbiAqL1xyXG5cclxuLy8gY2hyb21hLWpzIGlzIGEgbGlicmFyeSBmb3IgYWxsIGtpbmRzIG9mIGNvbG9yIGNvbnZlcnNpb25zIGFuZCBjb2xvciBzY2FsZXMuXHJcbmltcG9ydCBjaHJvbWEgZnJvbSBcImNocm9tYS1qc1wiO1xyXG5cclxuZnVuY3Rpb24gaGV4VG9SZ2IoY29sb3IpIHtcclxuICByZXR1cm4gY2hyb21hKGNvbG9yKS5yZ2IoKS5qb2luKFwiLCBcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhleFRvUmdiO1xyXG4iLCIvKipcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogU29mdCBVSSBEYXNoYm9hcmQgUmVhY3QgLSB2My4xLjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L3NvZnQtdWktZGFzaGJvYXJkLXJlYWN0XHJcbiogQ29weXJpZ2h0IDIwMjIgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG5cclxuQ29kZWQgYnkgd3d3LmNyZWF0aXZlLXRpbS5jb21cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiovXHJcblxyXG4vKipcclxuICBUaGUgbGluZWFyR3JhZGllbnQoKSBmdW5jdGlvbiBoZWxwcyB5b3UgdG8gY3JlYXRlIGEgbGluZWFyIGdyYWRpZW50IGNvbG9yIGJhY2tncm91bmRcclxuICovXHJcblxyXG5mdW5jdGlvbiBsaW5lYXJHcmFkaWVudChjb2xvciwgY29sb3JTdGF0ZSwgYW5nbGUgPSAzMTApIHtcclxuICByZXR1cm4gYGxpbmVhci1ncmFkaWVudCgke2FuZ2xlfWRlZywgJHtjb2xvcn0sICR7Y29sb3JTdGF0ZX0pYDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGluZWFyR3JhZGllbnQ7XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcmVhY3RcclxuKiBDb3B5cmlnaHQgMjAyMiBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcblxyXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKi9cclxuXHJcbi8qKlxyXG4gIFRoZSBweFRvUmVtKCkgZnVuY3Rpb24gaGVscHMgeW91IHRvIGNvbnZlcnQgYSBweCB1bml0IGludG8gYSByZW0gdW5pdCwgXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gcHhUb1JlbShudW1iZXIsIGJhc2VOdW1iZXIgPSAxNikge1xyXG4gIHJldHVybiBgJHtudW1iZXIgLyBiYXNlTnVtYmVyfXJlbWA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHB4VG9SZW07XHJcbiIsIi8qKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCAtIHYzLjEuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3Qvc29mdC11aS1kYXNoYm9hcmQtcmVhY3RcclxuKiBDb3B5cmlnaHQgMjAyMiBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcblxyXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKi9cclxuXHJcbi8qKlxyXG4gIFRoZSByZ2JhKCkgZnVuY3Rpb24gaGVscHMgeW91IHRvIGNyZWF0ZSBhIHJnYmEgY29sb3IgY29kZSwgaXQgdXNlcyB0aGUgaGV4VG9SZ2IoKSBmdW5jdGlvblxyXG4gIHRvIGNvbnZlcnQgdGhlIGhleCBjb2RlIGludG8gcmdiIGZvciB1c2luZyBpdCBpbnNpZGUgdGhlIHJnYmEgY29sb3IgZm9ybWF0LlxyXG4gKi9cclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGhlbHBlciBmdW5jdGlvbnNcclxuaW1wb3J0IGhleFRvUmdiIGZyb20gXCJhc3NldHMvdGhlbWUvZnVuY3Rpb25zL2hleFRvUmdiXCI7XHJcblxyXG5mdW5jdGlvbiByZ2JhKGNvbG9yLCBvcGFjaXR5KSB7XHJcbiAgcmV0dXJuIGByZ2JhKCR7aGV4VG9SZ2IoY29sb3IpfSwgJHtvcGFjaXR5fSlgO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZ2JhO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGJhc2Ugc3R5bGVzXHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2NvbG9yc1wiO1xyXG5pbXBvcnQgYnJlYWtwb2ludHMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JyZWFrcG9pbnRzXCI7XHJcbmltcG9ydCB0eXBvZ3JhcGh5IGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS90eXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBib3hTaGFkb3dzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9ib3hTaGFkb3dzXCI7XHJcbmltcG9ydCBib3JkZXJzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9ib3JkZXJzXCI7XHJcbmltcG9ydCBnbG9iYWxzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9nbG9iYWxzXCI7XHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBoZWxwZXIgZnVuY3Rpb25zXHJcbmltcG9ydCBib3hTaGFkb3cgZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvYm94U2hhZG93XCI7XHJcbmltcG9ydCBoZXhUb1JnYiBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9oZXhUb1JnYlwiO1xyXG5pbXBvcnQgbGluZWFyR3JhZGllbnQgZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvbGluZWFyR3JhZGllbnRcIjtcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5pbXBvcnQgcmdiYSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9yZ2JhXCI7XHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBjb21wb25lbnRzIGJhc2Ugc3R5bGVzIGZvciBAbXVpIG1hdGVyaWFsIGNvbXBvbmVudHNcclxuaW1wb3J0IHNpZGVuYXYgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL3NpZGVuYXZcIjtcclxuaW1wb3J0IGxpc3QgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2xpc3RcIjtcclxuaW1wb3J0IGxpc3RJdGVtIGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9saXN0L2xpc3RJdGVtXCI7XHJcbmltcG9ydCBsaXN0SXRlbVRleHQgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2xpc3QvbGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBjYXJkIGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9jYXJkXCI7XHJcbmltcG9ydCBjYXJkTWVkaWEgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2NhcmQvY2FyZE1lZGlhXCI7XHJcbmltcG9ydCBjYXJkQ29udGVudCBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvY2FyZC9jYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgYnV0dG9uIGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IGljb25CdXR0b24gZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2ljb25CdXR0b25cIjtcclxuaW1wb3J0IGlucHV0QmFzZSBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvZm9ybS9pbnB1dEJhc2VcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL21lbnVcIjtcclxuaW1wb3J0IG1lbnVJdGVtIGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9tZW51L21lbnVJdGVtXCI7XHJcbmltcG9ydCBzd2l0Y2hCdXR0b24gZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2Zvcm0vc3dpdGNoQnV0dG9uXCI7XHJcbmltcG9ydCBkaXZpZGVyIGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9kaXZpZGVyXCI7XHJcbmltcG9ydCB0YWJsZUNvbnRhaW5lciBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvdGFibGUvdGFibGVDb250YWluZXJcIjtcclxuaW1wb3J0IHRhYmxlSGVhZCBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvdGFibGUvdGFibGVIZWFkXCI7XHJcbmltcG9ydCB0YWJsZUNlbGwgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL3RhYmxlL3RhYmxlQ2VsbFwiO1xyXG5pbXBvcnQgbGluZWFyUHJvZ3Jlc3MgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2xpbmVhclByb2dyZXNzXCI7XHJcbmltcG9ydCBicmVhZGNydW1icyBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvYnJlYWRjcnVtYnNcIjtcclxuaW1wb3J0IHNsaWRlciBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvc2xpZGVyXCI7XHJcbmltcG9ydCBhdmF0YXIgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2F2YXRhclwiO1xyXG5pbXBvcnQgdG9vbHRpcCBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvdG9vbHRpcFwiO1xyXG5pbXBvcnQgYXBwQmFyIGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9hcHBCYXJcIjtcclxuaW1wb3J0IHRhYnMgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL3RhYnNcIjtcclxuaW1wb3J0IHRhYiBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvdGFicy90YWJcIjtcclxuaW1wb3J0IHN0ZXBwZXIgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL3N0ZXBwZXJcIjtcclxuaW1wb3J0IHN0ZXAgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcFwiO1xyXG5pbXBvcnQgc3RlcENvbm5lY3RvciBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwQ29ubmVjdG9yXCI7XHJcbmltcG9ydCBzdGVwTGFiZWwgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcExhYmVsXCI7XHJcbmltcG9ydCBzdGVwSWNvbiBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwSWNvblwiO1xyXG5pbXBvcnQgc2VsZWN0IGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9mb3JtL3NlbGVjdFwiO1xyXG5pbXBvcnQgZm9ybUNvbnRyb2xMYWJlbCBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvZm9ybS9mb3JtQ29udHJvbExhYmVsXCI7XHJcbmltcG9ydCBmb3JtTGFiZWwgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2Zvcm0vZm9ybUxhYmVsXCI7XHJcbmltcG9ydCBjaGVja2JveCBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvZm9ybS9jaGVja2JveFwiO1xyXG5pbXBvcnQgcmFkaW8gZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2Zvcm0vcmFkaW9cIjtcclxuaW1wb3J0IGF1dG9jb21wbGV0ZSBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvZm9ybS9hdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IGlucHV0IGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9mb3JtL2lucHV0XCI7XHJcbmltcG9ydCBjb250YWluZXIgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2NvbnRhaW5lclwiO1xyXG5pbXBvcnQgcG9wb3ZlciBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvcG9wb3ZlclwiO1xyXG5pbXBvcnQgYnV0dG9uQmFzZSBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvYnV0dG9uQmFzZVwiO1xyXG5pbXBvcnQgaWNvbiBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvaWNvblwiO1xyXG5pbXBvcnQgc3ZnSWNvbiBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvc3ZnSWNvblwiO1xyXG5pbXBvcnQgbGluayBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTXVpVGhlbWUoe1xyXG4gIGJyZWFrcG9pbnRzOiB7IC4uLmJyZWFrcG9pbnRzIH0sXHJcbiAgcGFsZXR0ZTogeyAuLi5jb2xvcnMgfSxcclxuICB0eXBvZ3JhcGh5OiB7IC4uLnR5cG9ncmFwaHkgfSxcclxuICBib3hTaGFkb3dzOiB7IC4uLmJveFNoYWRvd3MgfSxcclxuICBib3JkZXJzOiB7IC4uLmJvcmRlcnMgfSxcclxuICBmdW5jdGlvbnM6IHtcclxuICAgIGJveFNoYWRvdyxcclxuICAgIGhleFRvUmdiLFxyXG4gICAgbGluZWFyR3JhZGllbnQsXHJcbiAgICBweFRvUmVtLFxyXG4gICAgcmdiYSxcclxuICB9LFxyXG5cclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBNdWlDc3NCYXNlbGluZToge1xyXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgIC4uLmdsb2JhbHMsXHJcbiAgICAgICAgLi4uY29udGFpbmVyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aURyYXdlcjogeyAuLi5zaWRlbmF2IH0sXHJcbiAgICBNdWlMaXN0OiB7IC4uLmxpc3QgfSxcclxuICAgIE11aUxpc3RJdGVtOiB7IC4uLmxpc3RJdGVtIH0sXHJcbiAgICBNdWlMaXN0SXRlbVRleHQ6IHsgLi4ubGlzdEl0ZW1UZXh0IH0sXHJcbiAgICBNdWlDYXJkOiB7IC4uLmNhcmQgfSxcclxuICAgIE11aUNhcmRNZWRpYTogeyAuLi5jYXJkTWVkaWEgfSxcclxuICAgIE11aUNhcmRDb250ZW50OiB7IC4uLmNhcmRDb250ZW50IH0sXHJcbiAgICBNdWlCdXR0b246IHsgLi4uYnV0dG9uIH0sXHJcbiAgICBNdWlJY29uQnV0dG9uOiB7IC4uLmljb25CdXR0b24gfSxcclxuICAgIE11aUlucHV0QmFzZTogeyAuLi5pbnB1dEJhc2UgfSxcclxuICAgIE11aU1lbnU6IHsgLi4ubWVudSB9LFxyXG4gICAgTXVpTWVudUl0ZW06IHsgLi4ubWVudUl0ZW0gfSxcclxuICAgIE11aVN3aXRjaDogeyAuLi5zd2l0Y2hCdXR0b24gfSxcclxuICAgIE11aURpdmlkZXI6IHsgLi4uZGl2aWRlciB9LFxyXG4gICAgTXVpVGFibGVDb250YWluZXI6IHsgLi4udGFibGVDb250YWluZXIgfSxcclxuICAgIE11aVRhYmxlSGVhZDogeyAuLi50YWJsZUhlYWQgfSxcclxuICAgIE11aVRhYmxlQ2VsbDogeyAuLi50YWJsZUNlbGwgfSxcclxuICAgIE11aUxpbmVhclByb2dyZXNzOiB7IC4uLmxpbmVhclByb2dyZXNzIH0sXHJcbiAgICBNdWlCcmVhZGNydW1iczogeyAuLi5icmVhZGNydW1icyB9LFxyXG4gICAgTXVpU2xpZGVyOiB7IC4uLnNsaWRlciB9LFxyXG4gICAgTXVpQXZhdGFyOiB7IC4uLmF2YXRhciB9LFxyXG4gICAgTXVpVG9vbHRpcDogeyAuLi50b29sdGlwIH0sXHJcbiAgICBNdWlBcHBCYXI6IHsgLi4uYXBwQmFyIH0sXHJcbiAgICBNdWlUYWJzOiB7IC4uLnRhYnMgfSxcclxuICAgIE11aVRhYjogeyAuLi50YWIgfSxcclxuICAgIE11aVN0ZXBwZXI6IHsgLi4uc3RlcHBlciB9LFxyXG4gICAgTXVpU3RlcDogeyAuLi5zdGVwIH0sXHJcbiAgICBNdWlTdGVwQ29ubmVjdG9yOiB7IC4uLnN0ZXBDb25uZWN0b3IgfSxcclxuICAgIE11aVN0ZXBMYWJlbDogeyAuLi5zdGVwTGFiZWwgfSxcclxuICAgIE11aVN0ZXBJY29uOiB7IC4uLnN0ZXBJY29uIH0sXHJcbiAgICBNdWlTZWxlY3Q6IHsgLi4uc2VsZWN0IH0sXHJcbiAgICBNdWlGb3JtQ29udHJvbExhYmVsOiB7IC4uLmZvcm1Db250cm9sTGFiZWwgfSxcclxuICAgIE11aUZvcm1MYWJlbDogeyAuLi5mb3JtTGFiZWwgfSxcclxuICAgIE11aUNoZWNrYm94OiB7IC4uLmNoZWNrYm94IH0sXHJcbiAgICBNdWlSYWRpbzogeyAuLi5yYWRpbyB9LFxyXG4gICAgTXVpQXV0b2NvbXBsZXRlOiB7IC4uLmF1dG9jb21wbGV0ZSB9LFxyXG4gICAgTXVpSW5wdXQ6IHsgLi4uaW5wdXQgfSxcclxuICAgIE11aU91dGxpbmVkSW5wdXQ6IHsgLi4uaW5wdXQgfSxcclxuICAgIE11aUZpbGxlZElucHV0OiB7IC4uLmlucHV0IH0sXHJcbiAgICBNdWlQb3BvdmVyOiB7IC4uLnBvcG92ZXIgfSxcclxuICAgIE11aUJ1dHRvbkJhc2U6IHsgLi4uYnV0dG9uQmFzZSB9LFxyXG4gICAgTXVpSWNvbjogeyAuLi5pY29uIH0sXHJcbiAgICBNdWlTdmdJY29uOiB7IC4uLnN2Z0ljb24gfSxcclxuICAgIE11aUxpbms6IHsgLi4ubGluayB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcbi8vIFNvZnQgVUkgRGFzaGJvYXJkIFJlYWN0IGJhc2Ugc3R5bGVzXHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2NvbG9yc1wiO1xyXG5pbXBvcnQgYnJlYWtwb2ludHMgZnJvbSBcImFzc2V0cy90aGVtZS9iYXNlL2JyZWFrcG9pbnRzXCI7XHJcbmltcG9ydCB0eXBvZ3JhcGh5IGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS90eXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBib3hTaGFkb3dzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9ib3hTaGFkb3dzXCI7XHJcbmltcG9ydCBib3JkZXJzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9ib3JkZXJzXCI7XHJcbmltcG9ydCBnbG9iYWxzIGZyb20gXCJhc3NldHMvdGhlbWUvYmFzZS9nbG9iYWxzXCI7XHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBoZWxwZXIgZnVuY3Rpb25zXHJcbmltcG9ydCBib3hTaGFkb3cgZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvYm94U2hhZG93XCI7XHJcbmltcG9ydCBoZXhUb1JnYiBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9oZXhUb1JnYlwiO1xyXG5pbXBvcnQgbGluZWFyR3JhZGllbnQgZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvbGluZWFyR3JhZGllbnRcIjtcclxuaW1wb3J0IHB4VG9SZW0gZnJvbSBcImFzc2V0cy90aGVtZS9mdW5jdGlvbnMvcHhUb1JlbVwiO1xyXG5pbXBvcnQgcmdiYSBmcm9tIFwiYXNzZXRzL3RoZW1lL2Z1bmN0aW9ucy9yZ2JhXCI7XHJcblxyXG4vLyBTb2Z0IFVJIERhc2hib2FyZCBSZWFjdCBjb21wb25lbnRzIGJhc2Ugc3R5bGVzIGZvciBAbXVpIG1hdGVyaWFsIGNvbXBvbmVudHNcclxuaW1wb3J0IHNpZGVuYXYgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL3NpZGVuYXZcIjtcclxuaW1wb3J0IGxpc3QgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2xpc3RcIjtcclxuaW1wb3J0IGxpc3RJdGVtIGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9saXN0L2xpc3RJdGVtXCI7XHJcbmltcG9ydCBsaXN0SXRlbVRleHQgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2xpc3QvbGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBjYXJkIGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9jYXJkXCI7XHJcbmltcG9ydCBjYXJkTWVkaWEgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2NhcmQvY2FyZE1lZGlhXCI7XHJcbmltcG9ydCBjYXJkQ29udGVudCBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvY2FyZC9jYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgYnV0dG9uIGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IGljb25CdXR0b24gZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2ljb25CdXR0b25cIjtcclxuaW1wb3J0IGlucHV0QmFzZSBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvZm9ybS9pbnB1dEJhc2VcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL21lbnVcIjtcclxuaW1wb3J0IG1lbnVJdGVtIGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9tZW51L21lbnVJdGVtXCI7XHJcbmltcG9ydCBzd2l0Y2hCdXR0b24gZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2Zvcm0vc3dpdGNoQnV0dG9uXCI7XHJcbmltcG9ydCBkaXZpZGVyIGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9kaXZpZGVyXCI7XHJcbmltcG9ydCB0YWJsZUNvbnRhaW5lciBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvdGFibGUvdGFibGVDb250YWluZXJcIjtcclxuaW1wb3J0IHRhYmxlSGVhZCBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvdGFibGUvdGFibGVIZWFkXCI7XHJcbmltcG9ydCB0YWJsZUNlbGwgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL3RhYmxlL3RhYmxlQ2VsbFwiO1xyXG5pbXBvcnQgbGluZWFyUHJvZ3Jlc3MgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2xpbmVhclByb2dyZXNzXCI7XHJcbmltcG9ydCBicmVhZGNydW1icyBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvYnJlYWRjcnVtYnNcIjtcclxuaW1wb3J0IHNsaWRlciBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvc2xpZGVyXCI7XHJcbmltcG9ydCBhdmF0YXIgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2F2YXRhclwiO1xyXG5pbXBvcnQgdG9vbHRpcCBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvdG9vbHRpcFwiO1xyXG5pbXBvcnQgYXBwQmFyIGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9hcHBCYXJcIjtcclxuaW1wb3J0IHRhYnMgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL3RhYnNcIjtcclxuaW1wb3J0IHRhYiBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvdGFicy90YWJcIjtcclxuaW1wb3J0IHN0ZXBwZXIgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL3N0ZXBwZXJcIjtcclxuaW1wb3J0IHN0ZXAgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcFwiO1xyXG5pbXBvcnQgc3RlcENvbm5lY3RvciBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwQ29ubmVjdG9yXCI7XHJcbmltcG9ydCBzdGVwTGFiZWwgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcExhYmVsXCI7XHJcbmltcG9ydCBzdGVwSWNvbiBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwSWNvblwiO1xyXG5pbXBvcnQgc2VsZWN0IGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9mb3JtL3NlbGVjdFwiO1xyXG5pbXBvcnQgZm9ybUNvbnRyb2xMYWJlbCBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvZm9ybS9mb3JtQ29udHJvbExhYmVsXCI7XHJcbmltcG9ydCBmb3JtTGFiZWwgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2Zvcm0vZm9ybUxhYmVsXCI7XHJcbmltcG9ydCBjaGVja2JveCBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvZm9ybS9jaGVja2JveFwiO1xyXG5pbXBvcnQgcmFkaW8gZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2Zvcm0vcmFkaW9cIjtcclxuaW1wb3J0IGF1dG9jb21wbGV0ZSBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvZm9ybS9hdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IGlucHV0IGZyb20gXCJhc3NldHMvdGhlbWUvY29tcG9uZW50cy9mb3JtL2lucHV0XCI7XHJcbmltcG9ydCBjb250YWluZXIgZnJvbSBcImFzc2V0cy90aGVtZS9jb21wb25lbnRzL2NvbnRhaW5lclwiO1xyXG5pbXBvcnQgcG9wb3ZlciBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvcG9wb3ZlclwiO1xyXG5pbXBvcnQgYnV0dG9uQmFzZSBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvYnV0dG9uQmFzZVwiO1xyXG5pbXBvcnQgaWNvbiBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvaWNvblwiO1xyXG5pbXBvcnQgc3ZnSWNvbiBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvc3ZnSWNvblwiO1xyXG5pbXBvcnQgbGluayBmcm9tIFwiYXNzZXRzL3RoZW1lL2NvbXBvbmVudHMvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTXVpVGhlbWUoe1xyXG4gIGRpcmVjdGlvbjogXCJydGxcIixcclxuICBicmVha3BvaW50czogeyAuLi5icmVha3BvaW50cyB9LFxyXG4gIHBhbGV0dGU6IHsgLi4uY29sb3JzIH0sXHJcbiAgdHlwb2dyYXBoeTogeyAuLi50eXBvZ3JhcGh5IH0sXHJcbiAgYm94U2hhZG93czogeyAuLi5ib3hTaGFkb3dzIH0sXHJcbiAgYm9yZGVyczogeyAuLi5ib3JkZXJzIH0sXHJcbiAgZnVuY3Rpb25zOiB7XHJcbiAgICBib3hTaGFkb3csXHJcbiAgICBoZXhUb1JnYixcclxuICAgIGxpbmVhckdyYWRpZW50LFxyXG4gICAgcHhUb1JlbSxcclxuICAgIHJnYmEsXHJcbiAgfSxcclxuXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgTXVpQ3NzQmFzZWxpbmU6IHtcclxuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgICAgICAuLi5nbG9iYWxzLFxyXG4gICAgICAgIC4uLmNvbnRhaW5lcixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlEcmF3ZXI6IHsgLi4uc2lkZW5hdiB9LFxyXG4gICAgTXVpTGlzdDogeyAuLi5saXN0IH0sXHJcbiAgICBNdWlMaXN0SXRlbTogeyAuLi5saXN0SXRlbSB9LFxyXG4gICAgTXVpTGlzdEl0ZW1UZXh0OiB7IC4uLmxpc3RJdGVtVGV4dCB9LFxyXG4gICAgTXVpQ2FyZDogeyAuLi5jYXJkIH0sXHJcbiAgICBNdWlDYXJkTWVkaWE6IHsgLi4uY2FyZE1lZGlhIH0sXHJcbiAgICBNdWlDYXJkQ29udGVudDogeyAuLi5jYXJkQ29udGVudCB9LFxyXG4gICAgTXVpQnV0dG9uOiB7IC4uLmJ1dHRvbiB9LFxyXG4gICAgTXVpSWNvbkJ1dHRvbjogeyAuLi5pY29uQnV0dG9uIH0sXHJcbiAgICBNdWlJbnB1dEJhc2U6IHsgLi4uaW5wdXRCYXNlIH0sXHJcbiAgICBNdWlNZW51OiB7IC4uLm1lbnUgfSxcclxuICAgIE11aU1lbnVJdGVtOiB7IC4uLm1lbnVJdGVtIH0sXHJcbiAgICBNdWlTd2l0Y2g6IHsgLi4uc3dpdGNoQnV0dG9uIH0sXHJcbiAgICBNdWlEaXZpZGVyOiB7IC4uLmRpdmlkZXIgfSxcclxuICAgIE11aVRhYmxlQ29udGFpbmVyOiB7IC4uLnRhYmxlQ29udGFpbmVyIH0sXHJcbiAgICBNdWlUYWJsZUhlYWQ6IHsgLi4udGFibGVIZWFkIH0sXHJcbiAgICBNdWlUYWJsZUNlbGw6IHsgLi4udGFibGVDZWxsIH0sXHJcbiAgICBNdWlMaW5lYXJQcm9ncmVzczogeyAuLi5saW5lYXJQcm9ncmVzcyB9LFxyXG4gICAgTXVpQnJlYWRjcnVtYnM6IHsgLi4uYnJlYWRjcnVtYnMgfSxcclxuICAgIE11aVNsaWRlcjogeyAuLi5zbGlkZXIgfSxcclxuICAgIE11aUF2YXRhcjogeyAuLi5hdmF0YXIgfSxcclxuICAgIE11aVRvb2x0aXA6IHsgLi4udG9vbHRpcCB9LFxyXG4gICAgTXVpQXBwQmFyOiB7IC4uLmFwcEJhciB9LFxyXG4gICAgTXVpVGFiczogeyAuLi50YWJzIH0sXHJcbiAgICBNdWlUYWI6IHsgLi4udGFiIH0sXHJcbiAgICBNdWlTdGVwcGVyOiB7IC4uLnN0ZXBwZXIgfSxcclxuICAgIE11aVN0ZXA6IHsgLi4uc3RlcCB9LFxyXG4gICAgTXVpU3RlcENvbm5lY3RvcjogeyAuLi5zdGVwQ29ubmVjdG9yIH0sXHJcbiAgICBNdWlTdGVwTGFiZWw6IHsgLi4uc3RlcExhYmVsIH0sXHJcbiAgICBNdWlTdGVwSWNvbjogeyAuLi5zdGVwSWNvbiB9LFxyXG4gICAgTXVpU2VsZWN0OiB7IC4uLnNlbGVjdCB9LFxyXG4gICAgTXVpRm9ybUNvbnRyb2xMYWJlbDogeyAuLi5mb3JtQ29udHJvbExhYmVsIH0sXHJcbiAgICBNdWlGb3JtTGFiZWw6IHsgLi4uZm9ybUxhYmVsIH0sXHJcbiAgICBNdWlDaGVja2JveDogeyAuLi5jaGVja2JveCB9LFxyXG4gICAgTXVpUmFkaW86IHsgLi4ucmFkaW8gfSxcclxuICAgIE11aUF1dG9jb21wbGV0ZTogeyAuLi5hdXRvY29tcGxldGUgfSxcclxuICAgIE11aUlucHV0OiB7IC4uLmlucHV0IH0sXHJcbiAgICBNdWlPdXRsaW5lZElucHV0OiB7IC4uLmlucHV0IH0sXHJcbiAgICBNdWlGaWxsZWRJbnB1dDogeyAuLi5pbnB1dCB9LFxyXG4gICAgTXVpUG9wb3ZlcjogeyAuLi5wb3BvdmVyIH0sXHJcbiAgICBNdWlCdXR0b25CYXNlOiB7IC4uLmJ1dHRvbkJhc2UgfSxcclxuICAgIE11aUljb246IHsgLi4uaWNvbiB9LFxyXG4gICAgTXVpU3ZnSWNvbjogeyAuLi5zdmdJY29uIH0sXHJcbiAgICBNdWlMaW5rOiB7IC4uLmxpbmsgfSxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyLCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBzZWxlY3RTZXNzaW9uS2V5LFxyXG4gIHVzZUFwcERpc3BhdGNoLFxyXG4gIHVzZUFwcFNlbGVjdG9yLFxyXG4gIHNldFNlc3Npb25LZXksXHJcbiAgc2VsZWN0RGlyZWN0aW9uLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3QgaXNVc2VyID0gISFzZXNzaW9uPy51c2VyO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICBjb25zdCBzZXNzaW9uS2V5ID0gdXNlQXBwU2VsZWN0b3Ioc2VsZWN0U2Vzc2lvbktleSk7XHJcbiAgY29uc29sZS5sb2coXCJzZXNzaW9uXCIsIHN0YXR1cywgc2Vzc2lvbik7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2Vzc2lvbj8uc3RhdHVzID09PSBcInVuYXV0aGVudGljYXRlZFwiKVxyXG4gICAgICByb3V0ZXIucHVzaChcIi9hdXRoZW50aWNhdGlvbi9zaWduLWluXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzYV9hY2Nlc3NfdG9rZW5cIiwgc2Vzc2lvbi5kYXRhPy51c2VyPy50b2tlbik7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChpc1VzZXIpIHJldHVybiBjaGlsZHJlbjtcclxuICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuXHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBpbmZvQ29sb3IsIHRpdGxlIH0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5qc1wiO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByb2dyZXNzOiB7XHJcbiAgICBjb2xvcjogaW5mb0NvbG9yLFxyXG4gICAgd2lkdGg6IFwiNnJlbSAhaW1wb3J0YW50XCIsXHJcbiAgICBoZWlnaHQ6IFwiNnJlbSAhaW1wb3J0YW50XCIsXHJcbiAgfSxcclxuICB3cmFwcGVyRGl2OiB7XHJcbiAgICBtYXJnaW46IFwiMTAwcHggYXV0b1wiLFxyXG4gICAgcGFkZGluZzogXCIwcHhcIixcclxuICAgIG1heFdpZHRoOiBcIjM2MHB4XCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgekluZGV4OiBcIjk5OTlcIixcclxuICAgIHRvcDogXCIwXCIsXHJcbiAgfSxcclxuICBpY29uV3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIC4uLnRpdGxlLFxyXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlQ2hhbmdlKHByb3BzKSB7XHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlckRpdn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbldyYXBwZXJ9PlxyXG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgTG9hZGluZyBwYWdlIGNvbnRlbnRzIGZvcjoge3Byb3BzLnBhdGh9XHJcbiAgICAgICAgPC9oND5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4vLi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFBhZ2VDaGFuZ2UgZnJvbSBcImNvbXBvbmVudHMvUGFnZUNoYW5nZS9QYWdlQ2hhbmdlLmpzXCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiYXNzZXRzL3RoZW1lXCI7XHJcbmltcG9ydCB0aGVtZVJUTCBmcm9tIFwiYXNzZXRzL3RoZW1lL3RoZW1lLXJ0bFwiO1xyXG5cclxuaW1wb3J0IFwiYXNzZXRzL2Nzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmNzcz92PTEuMS4wXCI7XHJcbmltcG9ydCB7IENzc0Jhc2VsaW5lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciwgdXNlU2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbVRvYXN0Q29udGFpbmVyIGZyb20gXCIuL190b2FzdFwiO1xyXG5pbXBvcnQgeyBib29sZWFuIH0gZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgQXV0aFByb3ZpZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0F1dGhQcm92aWRlci9BdXRoUHJvdmlkZXJcIjtcclxuXHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsICh1cmwpID0+IHtcclxuICBjb25zb2xlLmxvZyhgTG9hZGluZzogJHt1cmx9YCk7XHJcbiAgY29uc29sZS5sb2coYFByb2Nlc3M6ICR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9YCk7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keS1wYWdlLXRyYW5zaXRpb25cIik7XHJcbiAgLy8gUmVhY3RET00ucmVuZGVyKFxyXG4gIC8vICAgPFBhZ2VDaGFuZ2UgcGF0aD17dXJsfSAvPixcclxuICAvLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZS10cmFuc2l0aW9uXCIpXHJcbiAgLy8gKTtcclxufSk7XHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IHtcclxuICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZS10cmFuc2l0aW9uXCIpKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5LXBhZ2UtdHJhbnNpdGlvblwiKTtcclxufSk7XHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsICgpID0+IHtcclxuICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZS10cmFuc2l0aW9uXCIpKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5LXBhZ2UtdHJhbnNpdGlvblwiKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICBzdXBlcihwYXJhbXMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYmFja1RvU2lnbkluOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgbGV0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KGBDb21wb25lbnQgRGlkIG1vdW50YCk7XHJcbiAgICBkb2N1bWVudC5pbnNlcnRCZWZvcmUoY29tbWVudCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH0pIHtcclxuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgIGxldCBrZXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNhX2FjY2Vzc190b2tlblwiKTtcclxuICAgICAgbGV0IHByb2ZpbGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9nZ2VkX2luX3Byb2ZpbGVcIikpO1xyXG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgICAgIHBhZ2VQcm9wcy5zZXNzaW9uS2V5ID0ga2V5O1xyXG4gICAgICBwYWdlUHJvcHMucHJvZmlsZSA9IHByb2ZpbGU7XHJcbiAgICAgIGNvbnNvbGUuY2xlYXIoKTtcclxuICAgICAgY29uc29sZS5sb2cocGFnZVByb3BzKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IExheW91dCA9IENvbXBvbmVudC5sYXlvdXQgfHwgKCh7IGNoaWxkcmVuIH0pID0+IDw+e2NoaWxkcmVufTwvPik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cclxuICAgICAgICAgIHtDb21wb25lbnQuYXV0aCA/IChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+PC90aXRsZT5cclxuICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZVJUTH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q3VzdG9tVG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+PC90aXRsZT5cclxuICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q3VzdG9tVG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtUb2FzdENvbnRhaW5lcn0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge3VzZVRyYW5zbGF0aW9ufSBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2xhdGlvbnMvdXNlVHJhbnNsYXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbVRvYXN0Q29udGFpbmVyKCkge1xyXG5cclxuICBjb25zdCB7IGxvY2FsZSB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiA8VG9hc3RDb250YWluZXJcclxuICAgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcclxuICAgIGF1dG9DbG9zZT17NTAwMH1cclxuICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XHJcbiAgICBuZXdlc3RPblRvcD17ZmFsc2V9XHJcbiAgICBjbG9zZU9uQ2xpY2tcclxuICAgIHJ0bD17bG9jYWxlID09PSAnYXInfVxyXG4gICAgcGF1c2VPbkZvY3VzTG9zc1xyXG4gICAgZHJhZ2dhYmxlXHJcbiAgICBwYXVzZU9uSG92ZXJcclxuICAgIHRoZW1lPVwibGlnaHRcIlxyXG4gIC8+O1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IElNZW51QWN0aW9uIH0gZnJvbSBcIi4uLy4uL01vZGVscy9BY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29sbGFwc2VNZW51ID0gY3JlYXRlQWN0aW9uPGJvb2xlYW4+KGFjdGlvblR5cGVzLkNPTExBUFNFX01FTlUpO1xyXG5leHBvcnQgY29uc3QgY29sbGFwc2VUb2dnbGUgPSBjcmVhdGVBY3Rpb248SU1lbnVBY3Rpb24gfCB1bmRlZmluZWQ+KFxyXG4gIGFjdGlvblR5cGVzLkNPTExBUFNFX1RPR0dMRVxyXG4pO1xyXG5leHBvcnQgY29uc3QgbmF2Q29udGVudExlYXZlID0gY3JlYXRlQWN0aW9uKGFjdGlvblR5cGVzLk5BVl9DT05URU5UX0xFQVZFKTtcclxuZXhwb3J0IGNvbnN0IG5hdkNvbGxhcHNlTGVhdmUgPSBjcmVhdGVBY3Rpb248SU1lbnVBY3Rpb24gfCB1bmRlZmluZWQ+KFxyXG4gIGFjdGlvblR5cGVzLk5BVl9DT0xMQVBTRV9MRUFWRVxyXG4pO1xyXG5leHBvcnQgY29uc3Qgc2V0TGF5b3V0ID0gY3JlYXRlQWN0aW9uPHN0cmluZyB8IHVuZGVmaW5lZD4oXHJcbiAgYWN0aW9uVHlwZXMuU0VUX0xBWU9VVFxyXG4pO1xyXG5leHBvcnQgY29uc3Qgc2V0RGlyZWN0aW9uID0gY3JlYXRlQWN0aW9uPHN0cmluZyB8IHVuZGVmaW5lZD4oXHJcbiAgYWN0aW9uVHlwZXMuU0VUX0RJUkVDVElPTlxyXG4pO1xyXG5leHBvcnQgY29uc3Qgc2V0U2Vzc2lvbktleSA9IGNyZWF0ZUFjdGlvbjxzdHJpbmcgfCB1bmRlZmluZWQ+KFxyXG4gIGFjdGlvblR5cGVzLlNFVF9TRVNTSU9OX0tFWVxyXG4pO1xyXG5leHBvcnQgY29uc3QgY2xlYXJTZXNzaW9uS2V5ID0gY3JlYXRlQWN0aW9uKGFjdGlvblR5cGVzLkNMRUFSX1NFU1NJT05fS0VZKTtcclxuZXhwb3J0IGNvbnN0IHNldE1lc3NhZ2UgPSBjcmVhdGVBY3Rpb248YW55IHwgdW5kZWZpbmVkPihcclxuICBhY3Rpb25UeXBlcy5TRVRfTUVTU0FHRVxyXG4pO1xyXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZmlsZSA9IGNyZWF0ZUFjdGlvbjxhbnkgfCB1bmRlZmluZWQ+KFxyXG4gIGFjdGlvblR5cGVzLlVQREFURV9QUk9GSUxFXHJcbik7XHJcbmV4cG9ydCBjb25zdCBsb2NrU2NyZWVuID0gY3JlYXRlQWN0aW9uPGJvb2xlYW4gfCB1bmRlZmluZWQ+KFxyXG4gIGFjdGlvblR5cGVzLkxPQ0tfU0NSRUVOXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q2FuZGlkYXRlID0gY3JlYXRlQWN0aW9uPGFueSB8IHVuZGVmaW5lZD4oXHJcbiAgICBhY3Rpb25UeXBlcy5TRUxFQ1RfQ0FORElEQVRFXHJcbik7XHJcbiIsImltcG9ydCB7IFR5cGVkVXNlU2VsZWN0b3JIb29rLCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHR5cGUgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSBcIi4vc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xyXG5leHBvcnQgY29uc3QgdXNlQXBwU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VTZWxlY3RvcjtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vYWN0aW9ucy9hY3Rpb25zXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JlZHVjZXJzL3JlZHVjZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2VsZWN0b3JzL3NlbGVjdG9yc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9ob29rc1wiO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHtcclxuICBzZXRMYXlvdXQsXHJcbiAgY2xlYXJTZXNzaW9uS2V5LFxyXG4gIGNvbGxhcHNlTWVudSxcclxuICBjb2xsYXBzZVRvZ2dsZSxcclxuICBuYXZDb2xsYXBzZUxlYXZlLFxyXG4gIG5hdkNvbnRlbnRMZWF2ZSxcclxuICBzZXRNZXNzYWdlLFxyXG4gIHNldFNlc3Npb25LZXksXHJcbiAgdXBkYXRlUHJvZmlsZSxcclxuICBsb2NrU2NyZWVuLFxyXG4gIHNldERpcmVjdGlvbixcclxuICBzZXRDYW5kaWRhdGUsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBJSW5pdGlhbFN0YXRlIH0gZnJvbSBcIi4uL2luaXRhbFN0YXRlL2luaXRpYWxTdGF0ZVwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJSW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzT3BlbjogW10sIC8vZm9yIGFjdGl2ZSBkZWZhdWx0IG1lbnVcclxuICBpc1RyaWdnZXI6IFtdLCAvL2ZvciBhY3RpdmUgZGVmYXVsdCBtZW51LCBzZXQgYmxhbmsgZm9yIGhvcml6b250YWxcclxuICBjb2xsYXBzZU1lbnU6IGZhbHNlLFxyXG4gIGlzTG9ja2VkOiBmYWxzZSwgLy8gTG9jayBhbGwgc2NyZWVucyBmb3IgcHJvdGVjdGlvbiBhZ2FpbnN0IGFidXNlXHJcbiAgLy8gLi4uY29uZmlnLFxyXG4gIHJlbWVtYmVyTWU6IGZhbHNlLCAvL1xyXG4gIHNlc3Npb25LZXk6IFwiXCIsXHJcbiAgdXNlclByb2ZpbGU6IG51bGwsXHJcbiAgbGF5b3V0OiBcInBhZ2VcIixcclxuICBkaXJlY3Rpb246IFwibHRyXCIsXHJcbiAgbWVzc2FnZToge1xyXG4gICAgQ29udGVudDogXCJcIixcclxuICAgIFR5cGU6IDAsXHJcbiAgfSwgLy8gMCBpcyBjb25maXJtYXRpb24gMSBpcyBlcnJvciAyIGlzIHdhcm5pbmdcclxuICBjYW5kaWRhdGU6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCAoYnVpbGRlcikgPT4ge1xyXG4gIGJ1aWxkZXJcclxuICAgIC5hZGRDYXNlKHNldFNlc3Npb25LZXksIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnNlc3Npb25LZXkgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0pXHJcbiAgICAuYWRkQ2FzZShjbGVhclNlc3Npb25LZXksIChzdGF0ZSkgPT4ge1xyXG4gICAgICAoc3RhdGUuc2Vzc2lvbktleSA9IFwiXCIpLCAoc3RhdGUucmVtZW1iZXJNZSA9IGZhbHNlKTtcclxuICAgIH0pXHJcbiAgICAuYWRkQ2FzZShzZXRNZXNzYWdlLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5tZXNzYWdlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9KVxyXG4gICAgLmFkZENhc2UodXBkYXRlUHJvZmlsZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlclByb2ZpbGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0pXHJcbiAgICAuYWRkQ2FzZShjb2xsYXBzZU1lbnUsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmNvbGxhcHNlTWVudSA9ICFhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0pXHJcbiAgICAuYWRkQ2FzZShjb2xsYXBzZVRvZ2dsZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgbGV0IHRyaWdnZXIgPSBbXTtcclxuICAgICAgbGV0IG9wZW4gPSBbXTtcclxuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLm1lbnUudHlwZSA9PT0gXCJzdWJcIikge1xyXG4gICAgICAgIG9wZW4gPSBzdGF0ZS5pc09wZW47XHJcbiAgICAgICAgdHJpZ2dlciA9IHN0YXRlLmlzVHJpZ2dlcjtcclxuICAgICAgICBjb25zdCB0cmlnZ2VySW5kZXggPSB0cmlnZ2VyLmluZGV4T2YoYWN0aW9uLnBheWxvYWQubWVudS5pZCk7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICBvcGVuID0gb3Blbi5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGFjdGlvbi5wYXlsb2FkLm1lbnUuaWQpO1xyXG4gICAgICAgICAgdHJpZ2dlciA9IHRyaWdnZXIuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBhY3Rpb24ucGF5bG9hZC5tZW51LmlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0cmlnZ2VySW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICBvcGVuID0gWy4uLm9wZW4sIGFjdGlvbi5wYXlsb2FkLm1lbnUuaWRdO1xyXG4gICAgICAgICAgdHJpZ2dlciA9IFsuLi50cmlnZ2VyLCBhY3Rpb24ucGF5bG9hZC5tZW51LmlkXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3BlbiA9IHN0YXRlLmlzT3BlbjtcclxuICAgICAgICBjb25zdCB0cmlnZ2VySW5kZXggPSBzdGF0ZS5pc1RyaWdnZXIuaW5kZXhPZihhY3Rpb24ucGF5bG9hZC5tZW51LmlkKTtcclxuICAgICAgICB0cmlnZ2VyID0gdHJpZ2dlckluZGV4ID09PSAtMSA/IFthY3Rpb24ucGF5bG9hZC5tZW51LmlkXSA6IFtdO1xyXG4gICAgICAgIG9wZW4gPSB0cmlnZ2VySW5kZXggPT09IC0xID8gW2FjdGlvbi5wYXlsb2FkLm1lbnUuaWRdIDogW107XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGUuaXNPcGVuID0gb3BlbjtcclxuICAgICAgc3RhdGUuaXNUcmlnZ2VyID0gdHJpZ2dlcjtcclxuICAgIH0pXHJcbiAgICAuYWRkQ2FzZShuYXZDb250ZW50TGVhdmUsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGxldCB0cmlnZ2VyID0gW107XHJcbiAgICAgIGxldCBvcGVuID0gW107XHJcbiAgICAgIHN0YXRlLmlzT3BlbiA9IG9wZW47XHJcbiAgICAgIHN0YXRlLmlzVHJpZ2dlciA9IHRyaWdnZXI7XHJcbiAgICB9KVxyXG4gICAgLmFkZENhc2UobmF2Q29sbGFwc2VMZWF2ZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgbGV0IHRyaWdnZXIgPSBbXTtcclxuICAgICAgbGV0IG9wZW4gPSBbXTtcclxuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLm1lbnUudHlwZSA9PT0gXCJzdWJcIikge1xyXG4gICAgICAgIG9wZW4gPSBzdGF0ZS5pc09wZW47XHJcbiAgICAgICAgdHJpZ2dlciA9IHN0YXRlLmlzVHJpZ2dlcjtcclxuICAgICAgICBjb25zdCB0cmlnZ2VySW5kZXggPSB0cmlnZ2VyLmluZGV4T2YoYWN0aW9uLnBheWxvYWQubWVudS5pZCk7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICBvcGVuID0gb3Blbi5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGFjdGlvbi5wYXlsb2FkLm1lbnUuaWQpO1xyXG4gICAgICAgICAgdHJpZ2dlciA9IHRyaWdnZXIuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBhY3Rpb24ucGF5bG9hZC5tZW51LmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuaXNPcGVuID0gb3BlbjtcclxuICAgICAgICBzdGF0ZS5pc1RyaWdnZXIgPSB0cmlnZ2VyO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmFkZENhc2Uoc2V0TGF5b3V0LCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5sYXlvdXQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0pXHJcbiAgICAuYWRkQ2FzZShsb2NrU2NyZWVuLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvY2tlZCA9IGFjdGlvbi5wYXlsb2FkICYmICFhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0pXHJcbiAgICAuYWRkQ2FzZShzZXREaXJlY3Rpb24sIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmRpcmVjdGlvbiA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSlcclxuICAgIC5hZGRDYXNlKHNldENhbmRpZGF0ZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuY2FuZGlkYXRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG4vLyBDb2xsYXBzZU1lbnUgc2VsZWN0b3JcclxuZXhwb3J0IGNvbnN0IHNlbGVjdENvbGxhcHNlTWVudSA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PlxyXG4gIHN0YXRlLmJhc2VSZWR1Y2VyLmNvbGxhcHNlTWVudTtcclxuZXhwb3J0IGNvbnN0IGNvbGxhcHNlTWVudVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgc2VsZWN0Q29sbGFwc2VNZW51LFxyXG4gIChzdGF0ZSkgPT4gc3RhdGVcclxuKTtcclxuXHJcbi8vIExvY2tlZFNjcmVlbiBzZWxlY3RvclxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdElzTG9ja2VkID0gKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmlzTG9ja2VkO1xyXG5leHBvcnQgY29uc3QgaXNMb2NrZWRTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gIHNlbGVjdElzTG9ja2VkLFxyXG4gIChzdGF0ZSkgPT4gc3RhdGVcclxuKTtcclxuXHJcbi8vIElzT3BlbiBTZWxlY3RvclxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdElzT3BlbiA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5pc09wZW47XHJcbmV4cG9ydCBjb25zdCBpc09wZW5TZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdElzT3BlbiwgKHN0YXRlKSA9PiBzdGF0ZSk7XHJcblxyXG4vLyBJc1RyaWdnZXIgU2VsZWN0b3JcclxuZXhwb3J0IGNvbnN0IHNlbGVjdElzVHJpZ2dlciA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PlxyXG4gIHN0YXRlLmJhc2VSZWR1Y2VyLmlzVHJpZ2dlcjtcclxuZXhwb3J0IGNvbnN0IGlzVHJpZ2dlclNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgc2VsZWN0SXNUcmlnZ2VyLFxyXG4gIChzdGF0ZSkgPT4gc3RhdGVcclxuKTtcclxuXHJcbi8vIExheW91dCBTZWxlY3RvclxyXG5leHBvcnQgY29uc3Qgc2VsZWN0TGF5b3V0ID0gKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmxheW91dDtcclxuZXhwb3J0IGNvbnN0IGxheW91dFNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TGF5b3V0LCAoc3RhdGUpID0+IHN0YXRlKTtcclxuXHJcbi8vIERpcmVjdGlvbiBTZWxlY3RvclxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RGlyZWN0aW9uID0gKHN0YXRlOiBSb290U3RhdGUpID0+XHJcbiAgc3RhdGUuYmFzZVJlZHVjZXIuZGlyZWN0aW9uO1xyXG5leHBvcnQgY29uc3QgZGlyZWN0aW9uU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICBzZWxlY3REaXJlY3Rpb24sXHJcbiAgKHN0YXRlKSA9PiBzdGF0ZVxyXG4pO1xyXG5cclxuLy8gTWVzc2FnZSBTZWxlY3RvclxyXG5leHBvcnQgY29uc3Qgc2VsZWN0TWVzc2FnZSA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5tZXNzYWdlO1xyXG5leHBvcnQgY29uc3QgbWVzc2FnZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TWVzc2FnZSwgKHN0YXRlKSA9PiBzdGF0ZSk7XHJcblxyXG4vLyBSZW1lbWJlck1lIFNlbGVjdG9yXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RSZW1lbWJlck1lID0gKHN0YXRlOiBSb290U3RhdGUpID0+XHJcbiAgc3RhdGUuYmFzZVJlZHVjZXIucmVtZW1iZXJNZTtcclxuZXhwb3J0IGNvbnN0IHJlbWViZXJNZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgc2VsZWN0UmVtZW1iZXJNZSxcclxuICAoc3RhdGUpID0+IHN0YXRlXHJcbik7XHJcblxyXG4vLyBTZXNzaW9uS2V5IFNlbGVjdG9yXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RTZXNzaW9uS2V5ID0gKHN0YXRlOiBSb290U3RhdGUpID0+XHJcbiAgc3RhdGUuYmFzZVJlZHVjZXIuc2Vzc2lvbktleTtcclxuZXhwb3J0IGNvbnN0IHNlc3Npb25LZXlTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gIHNlbGVjdFNlc3Npb25LZXksXHJcbiAgKHN0YXRlKSA9PiBzdGF0ZVxyXG4pO1xyXG5cclxuLy8gVXNlclByb2ZpbGUgU2VsZWN0b3JcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFVzZXJQcm9maWxlID0gKHN0YXRlOiBSb290U3RhdGUpID0+XHJcbiAgc3RhdGUuYmFzZVJlZHVjZXIudXNlclByb2ZpbGU7XHJcbmV4cG9ydCBjb25zdCB1c2VyUHJvZmlsZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgc2VsZWN0VXNlclByb2ZpbGUsXHJcbiAgKHN0YXRlKSA9PiBzdGF0ZVxyXG4pO1xyXG5cclxuLy8gQ2FuZGlkYXRlIFNlbGVjdG9yXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDYW5kaWRhdGUgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT5cclxuICAgIHN0YXRlLmJhc2VSZWR1Y2VyLmNhbmRpZGF0ZTtcclxuZXhwb3J0IGNvbnN0IGNhbmRpZGF0ZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBzZWxlY3RDYW5kaWRhdGUsXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlXHJcbik7XHJcbiIsImltcG9ydCB7IEFjdGlvbiwgY29uZmlndXJlU3RvcmUsIFRodW5rQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJzL3JlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBiYXNlUmVkdWNlcjogcmVkdWNlcixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT47XHJcbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxyXG4gIFJldHVyblR5cGUsXHJcbiAgUm9vdFN0YXRlLFxyXG4gIHVua25vd24sXHJcbiAgQWN0aW9uPHN0cmluZz5cclxuPjtcclxuIiwiZXhwb3J0IGNvbnN0IFNFVF9VU0VSX05BTUUgPSBcIlNFVF9VU0VSX05BTUVcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9TRVNTSU9OX0tFWSA9IFwiU0VUX1NFU1NJT05fS0VZXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfTEFZT1VUID0gXCJTRVRfTEFZT1VUXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfRElSRUNUSU9OID0gXCJTRVRfRElSRUNUSU9OXCI7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9TRVNTSU9OX0tFWSA9IFwiQ0xFQVJfU0VTU0lPTl9LRVlcIjtcclxuZXhwb3J0IGNvbnN0IFJFRlJFU0hfVE9LRU4gPSBcIlJFRlJFU0hfVE9LRU5cIjtcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9GSUxFID0gXCJVUERBVEVfUFJPRklMRVwiO1xyXG5leHBvcnQgY29uc3QgQ09MTEFQU0VfTUVOVSA9IFwiQ09MTEFQU0VfTUVOVVwiO1xyXG5leHBvcnQgY29uc3QgQ09MTEFQU0VfVE9HR0xFID0gXCJDT0xMQVBTRV9UT0dHTEVcIjtcclxuZXhwb3J0IGNvbnN0IE5BVl9DT05URU5UX0xFQVZFID0gXCJOQVZfQ09OVEVOVF9MRUFWRVwiO1xyXG5leHBvcnQgY29uc3QgTkFWX0NPTExBUFNFX0xFQVZFID0gXCJOQVZfQ09MTEFQU0VfTEVBVkVcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9NRVNTQUdFID0gXCJTRVRfTUVTU0FHRVwiO1xyXG5leHBvcnQgY29uc3QgTE9DS19TQ1JFRU4gPSBcIkxPQ0tfU0NSRUVOXCI7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0FORElEQVRFID0gXCJTRUxFQ1RfQ0FORElEQVRFXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFkZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaHJvbWEtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=