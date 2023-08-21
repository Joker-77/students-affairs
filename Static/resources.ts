export const years = (translate) => [
    {
        name: translate('Current Year'),
        value: new Date().getFullYear(),
    },
    {
        name: translate('Last Year'),
        value: new Date().getFullYear() - 1,
    },
];
export const rounds = (translate) => [
    {
        id: '1',
        value: translate('First'),
    },
    {
        id: '2',
        value: translate('Second'),
    },
];
export const governorates = (translate) => [
    {
        id: 'Damascus',
        value: translate('Damascus'),
    },
    {
        id: 'Homs',
        value: translate('Homs'),
    },
    {
        id: 'Hama',
        value: translate('Hama'),
    },
    {
        id: 'Idleb',
        value: translate('Idleb'),
    },
    {
        id: 'Aleppo',
        value: translate('Aleppo'),
    },
    {
        id: 'Latakia',
        value: translate('Latakia'),
    },
    {
        id: 'Tartus',
        value: translate('Tartus'),
    },
    {
        id: 'Dir Al-Zour',
        value: translate('Dir Al-Zour'),
    },
    {
        id: 'Al-Raqa',
        value: translate('Al-Raqa'),
    },
    {
        id: 'Al-Hasaqa',
        value: translate('Al-Hasaqa'),
    },
    {
        id: 'Al-Qonaitra',
        value: translate('Al-Qonaitra'),
    },
    {
        id: 'Al-Qamshli',
        value: translate('Al-Qamshli'),
    },
    {
        id: 'Daraa',
        value: translate('Daraa'),
    },
    {
        id: 'Al-Sweedaa',
        value: translate('Al-Sweedaa'),
    },
];

export const acceptStatus = (translate) => [
    translate('Accepted'),
    translate('Not Accepted'),
    translate('Canceled'),
    translate('Waiting'),
];
export const acceptPlaces = (translate) => [
    translate('Damascus'),
    translate('Aleppo'),
];
export const studyPlaces = (translate) => [
    ...acceptPlaces(translate),
    translate('No problem')
];
export const registerationMethods = (translate) => [
    translate('Personal'),
    translate('Automatic'),
    translate('Electronic')
];
export const examPlaces = (translate) => [
    translate('Damascus'),
    translate('Aleppo'),
    translate('Latakia'),
];
export const registerationClasses = (translate) => [
    translate('Internal'),
    translate('Private Study'),
    translate('Employees Sons'),
    translate('Special'),
];
export const yesNo = (translate) => [
    {
        value: '1',
        label: translate('Yes'),
    },
    {
        value: '0',
        label: translate('No'),
    },
];

export const name_prefixes = (translate) => [
    {
      id: "د.",
      value: translate("Dr."),
    },
    {
      id: "ما.",
      value: translate("Ma."),
    },
    {
      id: "م.",
      value: translate("Eng."),
    },
    {
      id: "أ.",
      value: translate("Mr."),
    },
  ];

export const work_fields = (translate) => [
    {
      id: "معهد عالي",
      value: translate("HIAST"),
      activitiesLabel: translate("Activity in HIAST"),
      activities: [
        {
          id: "أمانة المعهد",
          value: translate("HIAST Secretariat"),
        },
        {
          id: "مديرية الشؤون الإدارية والمالية",
          value: translate("Directorate of Administrative and Financial Affairs"),
        },
        {
          id: "مديرية التأهيل والتدريب المستمر",
          value: translate("Directorate of Rehabilitation and Continuing Training"),
        },
        {
          id: "مخبر الدراسات البيئية",
          value: translate("Environmental Studies Laboratory"),
        },
        {
          id: "دائرة الخدمات العمرانية",
          value: translate("Urban Services Department"),
        },
        {
          id: "دائرة الصيانة الفنية",
          value: translate("Technical maintenance department"),
        },
        {
          id: "مديرية شؤون الطلاب - دائرة المكتبة",
          value: translate("Student Affairs Directorate - Library Department"),
        },
        {
          id: "مديرية شؤون الطلاب - دائرة التسجيل والمتابعة",
          value: translate("Student Affairs Directorate - Registration and Follow-up Department"),
        },
        {
          id: "إدارة المعهد",
          value: translate("HIAST Administration"),
        },
        {
          id: "قسم الرياضيات",
          value: translate("Mathematics Department"),
        },
        {
          id: "قسم الفيزياء",
          value: translate("Physics Department"),
        },
        {
          id: "قسم المعلوميات",
          value: translate("Informatics department"),
        },
        {
          id: "قسم النظم الإلكترونية والميكانيكية",
          value: translate("Mecatronics Department"),
        },
        {
          id: "قسم هندسة الإدارة",
          value: translate("Management Engineering Department"),
        },
        {
          id: "مركز تعليم اللغات الأجنبية",
          value: translate("Foreign Language Education Center"),
        },
        {
          id: "مديرية التخطيط والمتابعة",
          value: translate("Directorate of Planning and Follow-up"),
        },
        {
          id: "مديرية تنسيق العمل المهني",
          value: translate("Directorate of Professional Work Coordination"),
        },
        {
          id: "مديرية شؤون الطلاب - دائرة الامتحانات",
          value: translate("Student Affairs Directorate - Examinations Department"),
        },
        {
          id: "دائرة المطعم",
          value: translate("Restaurnt Department"),
        },
        {
          id: "مديرية شؤون الطلاب - شعبة الأنشطة الرياضية",
          value: translate("Student Affairs Directorate - Division of Sports Activities"),
        },
        {
          id: "مديرية شؤون الطلاب - دائرة المدينة السكنية",
          value: translate("Student Affairs Directorate - City Residential Department"),
        },
        {
          id: "مديرية شؤون الطلاب - دائرة الأنشطة الاجتماعية",
          value: translate("Student Affairs Directorate - Social Activities Department"),
        },
        {
          id: "قسم الاتصالات",
          value: translate("Telecommunications department"),
        },
        {
          id: "مديرية التعاون العلمي والإعلام والنشر",
          value: translate("Directorate of Scientific Cooperation, Media and Publishing"),
        },
        {
          id: "دائرة العلاقات العلاقات العامة والخدمات",
          value: translate("Department of Public Relations and Services Relations"),
        },
        {
          id: "مديرية شؤون الطلاب - دائرة الدراسات العليا",
          value: translate("Directorate of Student Affairs - Higher Education Department"),
        },
        {
          id: "مديرية الخدمات المعلوماتية والتطوير البرمجي",
          value: translate("Informatics Services and Software Development Directorate"),
        },
        {
          id: "مديرية شؤون الطلاب",
          value: translate("Student Affairs Directorate"),
        },
      ],
    },
    {
      id: "مركز",
      value: translate("Center"),
      activitiesLabel: translate("Activity in Center"),
      activities: [
        {
          id: "معهد 1000",
          value: translate("Institute 1000"),
        },
        {
          id: "فرع البحث والتطوير",
          value: translate("Research and Development Branch"),
        },
        {
          id: "فرع الصناعات الإلكترونية 410",
          value: translate("Electronic Industries Branch 410"),
        },
        {
          id: "معهد الميكانيك 2000",
          value: translate("Institute of Mechanics 2000"),
        },
        {
          id: "فرع الصناعات الميكانيكية",
          value: translate("Mechanical Industries Branch"),
        },
        {
          id: "معهد الكيمياء 3000",
          value: translate("Institute of Chemistry 3000"),
        },
        {
          id: "معهد الطيران 4000",
          value: translate("Aviation Institute 4000"),
        },
        {
          id: "الفرع 350",
          value: translate("Branch 350"),
        },
        {
          id: "المشروع 99",
          value: translate("Project 99"),
        },
        {
          id: "إدارة الدراسات والتخطيط",
          value: translate("Studies and Planning Department"),
        },
        {
          id: "مديرية موارد المعلومات",
          value: translate("Directorate of Information Resources"),
        },
        {
          id: "مديرية التنسيق",
          value: translate("Coordination Directorate"),
        },
        {
          id: "المخبر الوطني للمعايير والمعايرة",
          value: translate("National Standards and Calibration Laboratory"),
        },
        {
          id: "الفرع 550",
          value: translate("Branch 550"),
        },
        {
          id: "القطاع 4",
          value: translate("Sector 4"),
        },
        {
          id: "الشؤون الادارية والمالية بالمركز",
          value: translate("Administrative and financial affairs of the Centre"),
        },
        {
          id: "معهد 6000",
          value: translate("Institute 6000"),
        },
        {
          id: "الفرع 650",
          value: translate("Branch 650"),
        },
      ],
    },
    {
      id: "خارج الملاك",
      value: translate("Outsider"),
      activitiesLabel: "",
      activities: [],
    },
  ];

export const genders = (translate) => [
    {
      id: "male",
      value: translate("Male"),
    },
    {
      id: "female",
      value: translate("Female"),
    },
  ];

export const degrees = (translate) => [
    {
      id: "دكتوراه",
      value: translate("Phd"),
    },
    {
      id: "ماجستير",
      value: translate("Master"),
    },
    {
      id: "هندسة",
      value: translate("Engineering"),
    },
    {
      id: "إجازة جامعية",
      value: translate("Bachelor's"),
    },
    {
      id: "معهد متوسط",
      value: translate("Intermediate institute"),
    },
  ];

export const statuses = (translate) => [
    {
      id: "على رأس عمله",
      value: translate("Active"),
    },
    {
      id: "موفد",
      value: translate("Delegate"),
    },
    {
      id: "متقاعد",
      value: translate("Retired"),
    },
    {
      id: "متوفى",
      value: translate("Dead"),
    },
    {
      id: "ناكل",
      value: translate("Runaway"),
    },
  ];

  /* الهيئة */
export const authorities = (translate) => [
  {
    id: "هيئة بحث",
    value: translate("Research"),
  },
  {
    id: "فنية",
    value: translate("Technical"),
  },
  {
    id: "مخبرية",
    value: translate("Lab"),
  },
  {
    id: "قانون عاملين",
    value: translate("Workers"),
  },
];
