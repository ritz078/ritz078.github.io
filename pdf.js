const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/resume', {waitUntil: 'networkidle2'});
  const x = await page.$eval(".download", el => el.hidden = true);
  await page.pdf({path: 'static/Ritesh_Kumar_Resume.pdf', format: 'A4', printBackground: true});

  await browser.close();
})();