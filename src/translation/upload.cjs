const fs = require('fs');
const path = require('path');
const { loadSpreadsheet } = require('./index.cjs');

const localesPath = path.resolve('locales');

/*
 로컬에서 JSON 파일을 읽고, 해당 데이터를 Google 스프레드시트로 업로드
 (시트에서 해당 로케일에 맞는 열을 찾아서 업데이트)
 */
async function uploadTranslations() {
    const doc = await loadSpreadsheet(); // 스프레드시트를 불러옴
    const sheet = doc.sheetsByIndex[0]; // 첫 번째 시트 사용
    const rows = await sheet.getRows(); // 시트의 모든 행 불러오기

    const koKRData = JSON.parse(fs.readFileSync(path.join(localesPath, 'ko-KR', 'translation.json'), 'utf8'));
    const enUSData = JSON.parse(fs.readFileSync(path.join(localesPath, 'en-US', 'translation.json'), 'utf8'));

    rows.forEach(row => {
        const key = row['Key'];  // 키 값

        // JSON 데이터에서 키에 해당하는 값을 가져와 시트에 업데이트
        if (koKRData[key]) {
            row['ko-KR'] = koKRData[key];
        }

        if (enUSData[key]) {
            row['en-US'] = enUSData[key];
        }

        row.save();  // 변경된 데이터를 저장
    });

    console.log('Translations uploaded successfully!');
}

uploadTranslations();;