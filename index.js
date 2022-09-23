const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs").promises;
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1000 });
    await page.setDefaultNavigationTimeout(0);

    let res = await page.goto(`https://food.grab.com/sg/en`, {
      waitUntil: "networkidle2",
    });
    const $ = await cheerio.load('<class id="ant-input">');
    $(input.ant - input).text("singapore");
    $.html();
  } catch (error) {
    console.log(error);
  }
})();
