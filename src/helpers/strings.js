import { isNilOrEmpty } from './helper';

export const getElementByCulture = (array, index, culture) => {
  switch (culture) {
    case languages.fr:
      return array[index].fr;
    case languages.en:
      return array[index].en;

    default:
      return array[index].ar;
  }
};

export const getDayByCulture = (day, culture) => {
  const filteredDays = days.filter(item => item.ar === day);

  if (isNilOrEmpty(filteredDays)) return day;

  switch (culture) {
    case languages.fr:
      return filteredDays[0].fr;
    case languages.en:
      return filteredDays[0].en;

    default:
      return day;
  }
};

export const getCitiesByCulture = (ddlCities, culture) => {
  if (isNilOrEmpty(ddlCities)) return null;

  return ddlCities.map(city => {
    const label = getElementByCulture(cities, city.value - 1, culture);

    return { ...city, label };
  });
};

export const getValueByCulture = (object, culture) => {
  switch (culture) {
    case languages.fr:
      return object.fr;
    case languages.en:
      return object.en;

    default:
      return object.ar;
  }
};

export const cultures = [
  { value: 'ar', label: 'العربية' },
  { value: 'fr', label: 'Français' },
  { value: 'en', label: 'English' },
];

export const languages = { ar: 'ar', fr: 'fr', en: 'en' };

export const prayerTime = {
  ar: 'توقيت الصلاة',
  fr: 'Horaire de la prière',
  en: 'Prayer time',
};

export const errorMessage = {
  ar: 'المعلومات غير متاحة حاليا المرجو إعادة المحاولة لاحقا',
  fr:
    'Les informations ne sont pas disponibles actuellement. Veuillez réessayer plus tard.',
  en: 'The information is not currently available. Please try again later.',
};

export const gregorianMonths = [
  { ar: 'يناير', fr: 'Janvier', en: 'January' },
  { ar: 'فبراير', fr: 'Février', en: 'February' },
  { ar: 'مارس', fr: 'Mars', en: 'March' },
  { ar: 'أبريل', fr: 'Avril', en: 'April' },
  { ar: 'ماي', fr: 'Mai', en: 'May' },
  { ar: 'يونيو', fr: 'Juin', en: 'June' },
  { ar: 'يوليوز', fr: 'Juillet', en: 'July' },
  { ar: 'غشت', fr: 'Août', en: 'August' },
  { ar: 'شتنبر', fr: 'Septembre', en: 'September' },
  { ar: 'أكتوبر', fr: 'Octobre', en: 'October' },
  { ar: 'نونبر', fr: 'Novembre', en: 'November' },
  { ar: 'دجنبر', fr: 'Décembre', en: 'December' },
];

export const hijriMonths = [
  { ar: 'مُحَرَّم', fr: 'Mouharram', en: 'Muḥarram' },
  { ar: 'صَفَر', fr: 'Safar', en: 'Ṣafar' },
  { ar: 'رَبِيع ٱلْأَوَّل', fr: 'Rabia al awal', en: 'Rabīʿ al-Awwal' },
  { ar: 'رَبِيع الثاني', fr: 'Rabia ath-thani', en: 'Rabīʿ ath-Thānī' },
  { ar: 'جُمَادَىٰ ٱلْأُولَىٰ', fr: 'Joumada al oula', en: 'Jumādá al-Ūlá' },
  { ar: 'جُمَادَىٰ الثاني', fr: 'Joumada ath-thani', en: 'Jumādá ath-Thānī' },
  { ar: 'رَجَب', fr: 'Rajab', en: 'Rajab' },
  { ar: 'شَعْبَان', fr: 'Chaabane', en: 'Sha‘bān' },
  { ar: 'رَمَضَان', fr: 'Ramadan', en: 'Ramaḍān' },
  { ar: 'شَوَّال', fr: 'Chawwal', en: 'Shawwāl' },
  { ar: 'ذُو ٱلْقَعْدَة', fr: 'Dhou al qi`da', en: 'Dhū al-Qa‘dah' },
  { ar: 'ذُو ٱلْحِجَّة', fr: 'Dhou al-hijja', en: 'Dhū al-Ḥijjah' },
];

export const days = [
  { ar: 'الاثنين', fr: 'Lundi', en: 'Monday' },
  { ar: 'الثلاثاء', fr: 'Mardi', en: 'Tuesday' },
  { ar: 'الاربعاء', fr: 'Mercredi', en: 'Wednesday' },
  { ar: 'الخميس', fr: 'Jeudi', en: 'Thursday' },
  { ar: 'الجمعة', fr: 'Vendredi', en: 'Friday' },
  { ar: 'السبت', fr: 'Samedi', en: 'Saturday' },
  { ar: 'الاحد', fr: 'Dimanche', en: 'Sunday' },
];

export const dayTimings = [
  { ar: 'الفجر', fr: 'Al-Fajr', en: 'Fajr' },
  { ar: 'الشروق', fr: 'Chourouk', en: 'Sunrise' },
  { ar: 'الظهر', fr: 'Dhuhr', en: 'Dhuhr' },
  { ar: 'العصر', fr: 'Al-Asr', en: 'Asr' },
  { ar: 'المغرب', fr: 'Maghrib', en: 'Maghrib' },
  { ar: 'العشاء', fr: 'Al-Ishaa', en: 'Isha' },
];

export const calendar = [
  { ar: 'هجري', fr: 'Hijri', en: 'Hijri' },
  { ar: 'ميلادي', fr: 'Grégorien ', en: 'Gregorian' },
];

export const day = { ar: 'يوم', fr: 'Jour', en: 'Day' };

export const month = { ar: 'شهر', fr: 'Mois', en: 'Month' };

export const countriesPlaceholder = {
  ar: 'اختر البلد',
  fr: 'Choisissez un pays',
  en: 'Select a country',
};

export const countries = [
  { value: 1, ar: 'المغرب', fr: 'Maroc', en: 'Morocco', key: 'Morocco' },
  { value: 2, ar: 'الجزائر', fr: 'Algerie', en: 'Algeria', key: 'Algeria' },
  { value: 3, ar: 'تونس', fr: 'Tunisie', en: 'Tunisia', key: 'Tunisia' },
  {
    value: 4,
    ar: 'موريتانيا',
    fr: 'Mauritanie',
    en: 'Mauritania',
    key: 'Mauritania',
  },
  { value: 5, ar: 'ليبيا', fr: 'Libye', en: 'Libya', key: 'Libya' },
  { value: 6, ar: 'مصر', fr: 'Egypte', en: 'Egypt', key: 'Egypt' },
  { value: 7, ar: 'قطر', fr: 'Qatar', en: 'Qatar', key: 'Qatar' },
  { value: 8, ar: 'السعودية', fr: 'Saudie', en: 'Saudia', key: 'Saudia' },
  { value: 9, ar: 'الإمارات', fr: 'Emirats', en: 'Emirats', key: 'Emirats' },
];

export const citiesPlaceholder = {
  ar: 'اختر المدينة',
  fr: 'Choisissez une ville',
  en: 'Select a city',
};

export const cities = [
  {
    value: 1,
    country_id: 1,
    ar: 'الرباط',
    fr: 'Rabat',
    en: 'Rabat',
    key: 'Rabat',
  },
  {
    value: 2,
    country_id: 2,
    ar: 'الجزائر',
    fr: 'Alger',
    en: 'Algeria',
    key: 'Algeria',
  },
  {
    value: 3,
    country_id: 3,
    ar: 'تونس',
    fr: 'Tunis',
    en: 'Tunisia',
    key: 'Tunisia',
  },
  {
    value: 4,
    country_id: 4,
    ar: 'نواكشوط',
    fr: 'Nouakchott',
    en: 'Nouakchott',
    key: 'Nouakchott',
  },
  {
    value: 5,
    country_id: 5,
    ar: 'طرابلس',
    fr: 'Tripolie',
    en: 'Tripoli',
    key: 'Tripoli',
  },
  {
    value: 6,
    country_id: 6,
    ar: 'القاهرة',
    fr: 'Caire',
    en: 'Cairo',
    key: 'Cairo',
  },
  {
    value: 7,
    country_id: 7,
    ar: 'الدوحة',
    fr: 'Doha',
    en: 'Doha',
    key: 'Doha',
  },
  {
    value: 8,
    country_id: 8,
    ar: ' مكة المكرمة',
    fr: 'Mecque',
    en: 'Mecca',
    key: 'Mecca',
  },
  {
    value: 9,
    country_id: 1,
    ar: 'الدار البيضاء',
    fr: 'Casablanca',
    en: 'Casablanca',
    key: 'Casablanca',
  },
  { value: 10, country_id: 1, ar: 'فاس', fr: 'Fès', en: 'Fes', key: 'Fes' },
  {
    value: 11,
    country_id: 2,
    ar: 'وهران',
    fr: 'Oran',
    en: 'Ouahran',
    key: 'Ouahran',
  },
  {
    value: 12,
    country_id: 1,
    ar: 'طنجة',
    fr: 'Tanger',
    en: 'Tangier',
    key: 'Tangier',
  },
  {
    value: 13,
    country_id: 1,
    ar: 'العيون',
    fr: 'Laâyoune',
    en: 'Laayoune',
    key: 'Laayoune',
  },
  {
    value: 14,
    country_id: 1,
    ar: 'الداخلة',
    fr: 'Dakhla',
    en: 'Dakhla',
    key: 'Dakhla',
  },
  {
    value: 15,
    country_id: 1,
    ar: 'مكناس',
    fr: 'Meknès',
    en: 'Meknes',
    key: 'Meknes',
  },
  {
    value: 16,
    country_id: 1,
    ar: 'مراكش',
    fr: 'Marrakech',
    en: 'Marrakesh',
    key: 'Marrakesh',
  },
  {
    value: 17,
    country_id: 1,
    ar: 'وجدة',
    fr: 'Oujda',
    en: 'Oujda',
    key: 'Oujda',
  },
  {
    value: 18,
    country_id: 1,
    ar: 'أغادير',
    fr: 'Agadir',
    en: 'Agadir',
    key: 'Agadir',
  },
  {
    value: 19,
    country_id: 1,
    ar: 'تطوان',
    fr: 'Tétouan',
    en: 'Tetouan',
    key: 'Tetouan',
  },
  {
    value: 20,
    country_id: 1,
    ar: 'الحسيمة',
    fr: 'Al Hoceïma',
    en: 'Al Hoceima',
    key: 'Al Hoceima',
  },
  {
    value: 21,
    country_id: 1,
    ar: 'الناظور',
    fr: 'Nador',
    en: 'Nador',
    key: 'Nador',
  },
  {
    value: 22,
    country_id: 1,
    ar: 'الجديدة',
    fr: 'El Jadida',
    en: 'El Jadida',
    key: 'El Jadida',
  },
  {
    value: 23,
    country_id: 1,
    ar: 'العرائش',
    fr: 'Larache',
    en: 'Larache',
    key: 'Larache',
  },
  { value: 24, country_id: 1, ar: 'سلا', fr: 'Salé', en: 'Sale', key: 'Sale' },
  {
    value: 25,
    country_id: 1,
    ar: 'الصويرة',
    fr: 'Essaouira',
    en: 'Essaouira',
    key: 'Essaouira',
  },
  {
    value: 26,
    country_id: 8,
    ar: 'المدينة المنورة',
    fr: 'Médine',
    en: 'Medina',
    key: 'Medina',
  },
];

export const cityLabel = {
  ar: 'ل',
  fr: 'Pour ',
  en: 'In',
};

export const timeZone = {
  ar: 'النطاق الزمني',
  fr: 'Fuseau horaire',
  en: 'Time Zone',
};

const currentYear = () => {
  const date = new Date();

  return date.getUTCFullYear();
};

export const copyright = {
  ar: `جميع الحقوق محفوظة © ${currentYear()}`,
  fr: `© Tous droits réservés - ${currentYear()}`,
  en: `Copyright  ${currentYear()} © All Rights Reserved`,
};
