'use strict'
require('dotenv').load()

//------------

const nlp = require('@google-cloud/language');

//--- Function declaration for text to be sentiment analyzed

async function analyzeSentimentOfText(text, language) {

  const client = new nlp.LanguageServiceClient();

  const document = {
    content: text,
    language: language,
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the document
  const [result] = await client.analyzeSentiment({document});

  return ([result]);
}

//============= Sample sentiment analysis function call ================

// text to be sentiment analyzed
const text = 'Hello, you are an awesome agent! You provide an excellent service! Your company is fantastic!';

// language code as listed here: https://cloud.google.com/natural-language/docs/languages#sentiment_analysis
const language = 'en';


// -- function call
(async () => {
	const [analysis] = await analyzeSentimentOfText(text, language);

  // This section results may be enough for your application?
  const sentiment = analysis.documentSentiment;
  console.log('Document sentiment:');
  console.log(`  Score: ${sentiment.score}`);
  console.log(`  Magnitude: ${sentiment.magnitude}`);

  // This section may not be needed for your application?
  const sentences = analysis.sentences;
  sentences.forEach(sentence => {
    console.log(`Sentence: ${sentence.text.content}`);
    console.log(`  Score: ${sentence.sentiment.score}`);
    console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
  });

})();

//--------
