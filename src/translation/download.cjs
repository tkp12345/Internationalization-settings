const { loadSpreadsheet } = require('./index.cjs');
const fs = require('fs');
const path = require('path');


const localesPath = path.resolve('locales'); // locales 폴더 경로

/*
 Google 스프레드시트에서 데이터를 다운로드
 */
async function downloadTranslations() {
    const doc = await loadSpreadsheet(); // 스프레드시트를 불러옴
    const sheet = doc.sheetsByIndex[0]; // 첫 번째 시트 사용 (시트가 여러 개면 조정 가능)
    const rows = await sheet.getRows(); // 시트의 모든 행 불러오기
    console.log('rows:',rows)

    const translations = {};

    rows.forEach(row => {
        const key = row['Key'];  // 첫 번째 열에 있는 Key 값
        const koKR = row['ko-KR'];  // 두 번째 열 (한국어)
        const enUS = row['en-US'];  // 세 번째 열 (영어)

        if (!translations['ko-KR']) translations['ko-KR'] = {};
        if (!translations['en-US']) translations['en-US'] = {};

        translations['ko-KR'][key] = koKR || '';  // ko-KR 값을 저장
        translations['en-US'][key] = enUS || '';  // en-US 값을 저장
    });

    // 로컬에 JSON 파일 저장
    fs.writeFileSync(path.join(localesPath, 'ko-KR', 'translation.json'), JSON.stringify(translations['ko-KR'], null, 2), 'utf8');
    fs.writeFileSync(path.join(localesPath, 'en-US', 'translation.json'), JSON.stringify(translations['en-US'], null, 2), 'utf8');

    console.log('Translations downloaded successfully!');
}

downloadTranslations();

downloadTranslations();