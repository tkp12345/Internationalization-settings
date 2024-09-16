const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");
require('dotenv').config({ path: '.env.local' });  // 환경 변수 로드

const spreadsheetDocId = process.env.I18N_SHEET_ID;
const jwtClient = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),  // 비밀키의 줄 바꿈 처리
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],

});

const doc = new GoogleSpreadsheet(spreadsheetDocId,jwtClient);

async function loadSpreadsheet() {
    await jwtClient.authorize();  // JWT 클라이언트 인증
    await doc.loadInfo();  // 스프레드시트 정보 로드
    return doc;
}

module.exports = { loadSpreadsheet };