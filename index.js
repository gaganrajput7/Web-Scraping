
const puppeteer = require("puppeteer");
const cheerio = require('cheerio');
const fs = require("fs").promises;
(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false }); // headless is a boolean that determines if the browser is visible or not
        const page = await browser.newPage(); // newPage is a function that creates a new page
        
        await page.setViewport({ width: 1200, height: 1000 });
        await page.setDefaultNavigationTimeout(0);
        
        let res = await page.goto(
            `https://food.grab.com/sg/en/restaurants`,
            {
                waitUntil: "networkidle2",
            }
            );
            const $ = cheerio.load('');
   
  } catch (error) {
    console.log(error);
  }
})();
