const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {
    it('Debe de abrir y cerrar el navegador', async () => {
        const browser = await puppeteer.launch({ 
            headless: false,
            slowMo : 500, 
            defaultViewport: null,
        });
        const page = await browser.newPage();
        await page.goto('https://yahoo.com/');
        //await page.waitForSelector('img');
        //recargar la pagina
        await page.reload();
        //await page.waitForSelector('img');

        //navegar a otra pagina
        await page.goto('https://platzi.com/');
        //await page.waitForSelector('img');

        //navegar hacia atras
        await page.goBack();

        //navegar hacia adelante
        await page.goForward();
        //await page.waitForSelector('img');

        //abrir otro pagina
        const pageTwo = await browser.newPage();
        await pageTwo.goto('https://google.com/');
        await browser.close();
    }, 30000);
});