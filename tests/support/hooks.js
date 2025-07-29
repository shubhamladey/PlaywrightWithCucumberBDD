const { Before, After, Status } = require('@cucumber/cucumber');  // Import Cucumber hooks
const playwright = require('@playwright/test');  // Import Playwright for browser automation
const { POManager } = require('../pages/POManager');

Before({tags:"@login"}, async function () {
    this.browser = await playwright.chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.poManager = new POManager(this.page);
    this.loginPage = this.poManager.getLoginPage();
});

Before({tags:"@loginwithsession"},async function () {
    await this.page.goto(process.env.PLAYWRIGHT_URL);
    await this.loginPage.navigate();
    await this.loginPage.login(process.env.PLAYWRIGHT_USERNAME, process.env.PLAYWRIGHT_PASSWORD);
    await this.page.waitForLoadState('networkidle');
    await this.context.storageState({ path: 'state.json' });
    this.webContext = await this.browser.newContext({ storageState: 'state.json' });
});

After(async function () {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
});

After(async function ({ result }) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: `screenshots/failure-${Date.now()}.png` });
    }
});
