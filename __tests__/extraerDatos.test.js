const puppeteer = require('puppeteer');

describe('Extraer datos de la pagina', () => {
    it('Extraer datos de la pagina', async () => {
        const browser = await puppeteer.launch({ 
            headless: false,
            defaultViewport: null,
        });
        const page = await browser.newPage();
        await page.goto('https://platzi.com/');
        await new Promise(resolve => setTimeout(resolve, 1000));
        const title = await page.title();
        await console.log(title);
        const url = await page.url();
        await console.log(url);

        const texto = await page.$eval('body > main > section.HeroSection_HeroSection__sJMhH > h1', (elements) =>  elements.textContent);
        console.log("texto que se capturo ",texto);

        const imageCount = await page.$$eval('img', (elements) => elements.length);
        await console.log(imageCount);
        await browser.close();
    }, 30000);
});