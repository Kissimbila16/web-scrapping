const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;


async function getTitle(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const title = await page.title();
  await browser.close();
  return title;
}

getTitle('https://www.google.com')
  .then(title => console.log(title))
  .catch(error => console.error('Erro:', error));

// app.listen(port, () => {
//   console.log(`Listening on http://localhost:${port}`);
// })