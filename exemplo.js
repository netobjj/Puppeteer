const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.page()
  await page.goto('https://netshoes.com.br');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();