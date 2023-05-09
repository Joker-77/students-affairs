export const years = [
    {
        value: new Date().getFullYear() - 1,
    },
    {
        value: new Date().getFullYear(),
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
    // translate('Institutions'),
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
          id: "قسم المعلوميات",
          value: translate("Informatics department"),
        },
        {
          id: "قسم الاتصالات",
          value: translate("Telecommunications department"),
        },
        {
            id: "مديرية الخدمات المعلوماتية والتطوير البرمجي",
            value: translate("Informatics Services and Software Development Directorate"),
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
          id: "معهد 2000",
          value: translate("Institute 2000"),
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
  ];

export const statuses = (translate) => [
    {
      id: "فعال",
      value: translate("Active"),
    },
  ];
