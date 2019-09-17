const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://juejin.im/books';
async function run() {
  const browser = await puppeteer
  .launch();
  const page = await browser.newPage();
  await page.goto(url, 
    {
      waitUntil: 'networkidle2'
    }
  );
  const html = await page.content();
  // $('.text', '')
  const books = $('.info', html);
  books.each(function() {
    const price = $('.price-text', this)
    .text();
    console.log(price);
  })
}
run();
