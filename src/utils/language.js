import i18n from "i18next";

export const getLanguage = () => i18n.language;

// to persist and get language user option
export const getUserLanguage = () => localStorage.getItem("i18nextLng");

export const setUserLanguage = (lang) =>
  localStorage.setItem("i18nextLng", lang);

export const languages = [
  { label: "PT", value: "pt" },
  { label: "EN", value: "en" },
];
