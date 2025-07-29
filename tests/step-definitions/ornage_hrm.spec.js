
const { Given, When, Then, setDefaultTimeout, Step } = require('@cucumber/cucumber');
require('dotenv').config();
const { expect } = require('@playwright/test');

setDefaultTimeout(60 * 1000)

Given('the user navigates to the login page', async function () {
    await this.loginPage.navigate();
});

When('the user enters valid credentials', async function () {
    await this.loginPage.login(process.env.PLAYWRIGHT_USERNAME, process.env.PLAYWRIGHT_PASSWORD);
});

Then('the user should be redirected to the homepage', async function () {
    expect(await this.loginPage.isAtHomePage());
});

Given('user login to portal on {string} page {string}', async function (pageName, url) {
    this.page = await this.webContext.newPage();
    await this.page.goto(`${process.env.BASE_URL1}${url}`);
    await expect(this.page.locator("span[class^='oxd-text']").nth(5)).toHaveText(pageName);

});

When('Validate profile tabs on page', async function (table) {
    this.myInfoPage = this.poManager.getMyInfoPage();
    const tabledata = table.raw();
    const tableValue = tabledata[0];
    const rows = this.myInfoPage.getTabs();
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {
        const rowText = await rows.nth(i).textContent();
        expect(rowText).toEqual(tableValue[i]);
    }
});

Then('Validate input field lables', async function (table) {
    const tabledata = table.raw()
    const tableValue = tabledata[0];
    const fieldLabels = this.myInfoPage.inputFieldLabels();
    const fieldCount = await fieldLabels.count();

    for (let i = 0; i < fieldCount; i++) {
        const rowText = await fieldLabels.nth(i).textContent();
        expect(rowText).toEqual(tableValue[i]);
    }
});

When('user navigates to attendance summary page', async function () {
    this.attendancePage = this.poManager.getAttendancePage();
    await this.attendancePage.navigateToAttendancePage();
});

Then('Validate all employee total time data', async function (table) {
    const tabledata = table.raw();
    const empRowData = this.page.locator('[class="rgRow"]');
    const rowCount = await empRowData.count();
    const empColumnData = this.page.locator('[class="rgRow"]>div');

    for (let i = 1; i < rowCount; i++) {
        for (let j = 0; j < 2; j++){
            expect(empColumnData[j]).toEqual(tabledata[i][j]);   
        }
    }
});