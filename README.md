## 다양한 전역처리 
- Google 스프레드시트와 연동

----
### [전역처리]
- 다국어 
- 테마 

<br/>

### 실행

#### .env.local 추가
(Google Cloud Plaform API 설정
)
```typescript
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email
GOOGLE_PRIVATE_KEY="your-private-key"
I18N_SHEET_ID=your-spreadsheet-id
```

<br/>

### script 설명 

```typescript
 "scripts": {
    "parse:i18n": "i18next --config src/translation/i18next-parser.config.js",
    //i18next-parser를 실행하여, 소스 코드에서 번역 키를 자동으로 추출하고, 언어별로 JSON 번역 파일을 생성
    
    //i18next-parser는 src/translation/i18next-parser.config.js 설정 파일을 참고하여
    // 번역할 텍스트가 포함된 파일을 찾아서, 각 언어별 JSON 파일을 업데이트
    
    "upload:i18n": "node src/translation/upload.js",
    //upload.js 파일에서 정의된 로직에 따라, 
    //로컬에 있는 번역 JSON 파일의 내용을 Google 스프레드시트로 업로드
    
    "download:i18n": "node src/translation/download.js",
    //download.js 파일에서 정의된 로직을 실행하여,
    //스프레드시트에 업데이트된 번역을 가져와 각 언어별 JSON 파일을 업데이트
   
    "predev": "npm run upload:i18n && npm run download:i18n"
    //번역 키를 Google 스프레드시트로 업로드 , 스프레드시트에서 번역된 내용을 다시 로컬 JSON 파일로 다운로드 과정 
  },
```


