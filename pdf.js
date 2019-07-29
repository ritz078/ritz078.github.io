const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/resume', {waitUntil: 'networkidle2'});
  await page.evaluate(() => { document.querySelector('#__next-prerender-indicator').style.display = 'none'});
  await page.pdf({path: 'static/Ritesh_Kumar_Resume.pdf', format: 'A4', printBackground: true});

  await browser.close();
})();
