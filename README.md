# Google Sentiment Analysis for text from Vonage API Client SDK in-app messaging, Vonage Messaging API, Vonage SMS API

This sample Node.JS code shows how to use Google Sentiment Analysis engine for text from Vonage API Client SDK in-app messaging, Vonage Messaging API, and Vonage SMS API . Multiple languages are supported.

## Set up

### Google credentials

Retrieve your Google credentials for your application

_TBD ...._

Save the credentials .json file on your local application folder.

Create a .env file with the entry specifying the .json file name</br>
**_GOOGLE_APPLICATION_CREDENTIALS=./xxxxx.json_**

### Node packages

Add necessary packages:
```bash
npm install
```

## Test sample text for sentiment

Enter your text and corresponding language code in attached sample sentiment-analysis.js code.

Language code list here: https://cloud.google.com/natural-language/docs/languages#sentiment_analysis

Run the application:
```bash
node sentiment-analysis
```


