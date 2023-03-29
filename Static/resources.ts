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
