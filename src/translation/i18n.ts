import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en_US from '../locales/en-US/translation.json';
import ja_JP from '../locales/ja-JP/translation.json';
import ko_KR from '../locales/ko-KR/translation.json';
import localeDefaultPack from './default-pack.json';

const resources = {
    'ko-KR': { translation: ko_KR },
    'en-US': { translation: en_US },
    'ja-JP': { translation: ja_JP },
};

i18n
    .use(LanguageDetector) // 브라우저 사용자의 언어 감지
    .use(initReactI18next) // i18next와 React 연동
    .init({
        resources, //번역리소스
        fallbackLng: localeDefaultPack['default-language'],
        keySeparator: false,
        nsSeparator: false,
        interpolation: {
            escapeValue: false, // 보안상의 이유로 HTML 이스케이프를 비활성화
        },
    });

export default i18n;