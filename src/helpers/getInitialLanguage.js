
export default function getInitialLanguage() {
    let initialLanguage = JSON.parse(localStorage?.getItem('language'));

    if(initialLanguage && initialLanguage.label) {
        return initialLanguage.label;
    }
    return 'EN';
};