const puppeteer = require('puppeteer');

describe('Interactuando con elementos', () => {
    it('Llenar formularios', async () => {
        const browser = await puppeteer.launch({ 
            headless: false,
            slowMo : 20, 
            defaultViewport: null,
        });
        const page = await browser.newPage();
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html');
        
        //aceptar alertas
        page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
        //dar click derecho
        /* await page.click('#authentication > span', {button: 'right', delay:500});
        await page.waitForSelector('#authentication > span'); */

        //dar doble click
        await page.click('#authentication > button', {clickCount: 2, delay: 500});
        
        //prueba para llenar formularios
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await page.type('#developer-name', 'Alejandro');
        await page.click('#remote-testing');
        await page.click('#tried-test-cafe', {clickCount: 1, delay: 500});
        await page.type('#comments', 'Esto es un comentario');
        await page.select('#preferred-interface', 'JavaScript API');
        await page.click('#submit-button');
        await browser.close();
    }, 30000);
});