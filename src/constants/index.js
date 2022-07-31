import enLocale from "../locales/en";
import amLocale from "../locales/am";
import getInitialLanguage from "../helpers/getInitialLanguage";

export const PAGES = [
    {name: 'home', to: '/'},
    {name: 'about', to: '/about'},
    {name: 'users', to: '/users'},
];

export const LOCALE_INTL = {
    EN: enLocale,
    AM: amLocale,
};

const LANGUAGE_NAME = getInitialLanguage();

export const INITIAL_LANGUAGE = LOCALE_INTL[LANGUAGE_NAME] || LOCALE_INTL.EN;

