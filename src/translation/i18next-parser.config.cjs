const path = require('path');
const localeDefaultPack = require('./default-pack.json');

//소스 코드에서 다국어 키를 추출하여 JSON 파일로 변환
module.exports = {
    locales: Object.keys(localeDefaultPack['default-translations']),
    input: ['../**/*.{js,jsx,ts,tsx}'],
    output: path.join(__dirname, '..', 'locales', '$LOCALE', 'translation.json'),  // 출력 경로
    keySeparator: false,
    nsSeparator: false,
    defaultValue: (locale, namespace, key) => {
        if (locale === 'kr-KO') return key; // 기본적으로 한국어 키를 반환
        return '';
    },
};