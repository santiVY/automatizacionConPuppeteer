const puppeteer = require('puppeteer');

describe('Mostrar tipos de espera', () => {
    it('Mostrar todos los tipos de espera', async () => {
        const browser = await puppeteer.launch({ 
            headless: false,
            defaultViewport: null,
        });
        const page = await browser.newPage();
        await page.goto('https://platzi.com/', {waitUntil: 'networkidle2'});
        const title = await page.title();
        console.log(title);
        const url = await page.url();
        console.log(url);
        await page.goto('https://demoqa.com/modal-dialogs', {waitUntil: 'networkidle0'});
        //la propiedad visible espera hasta que realmente este en el DOM hidden sirve para ocultos
        await page.waitForSelector('#showSmallModal', {visible: true});
        
        //click solo funcona con css selector
        await page.click('#showSmallModal', {clickCount: 1});
        //espera explicita esta funcion esta deprecada
        //await page.waitForTimeout(3000);
        //espera por selector
        //await page.waitForSelector('img');

        //espera por xpath deprecado
        //await page.waitForXPath('//img');

        //espera por funcion
        await page.waitForFunction(() => document.querySelector('#example-modal-sizes-title-sm').innerText === 'Small Modal');
        //await page.waitForFunction(()  => { document.querySelector('#example-modal-sizes-title-sm').innerText === 'Small Modal' });  
        await page.click('#closeSmallModal', {clickCount: 1});
        //await page.waitForFunction(()  =>  !document.querySelector('#example-modal-sizes-title-sm').innerText === 'Small Modal');
        await browser.close();
    }, 30000);
});