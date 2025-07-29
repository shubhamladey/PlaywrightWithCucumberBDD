const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {  // Accepts `page` instance from `hooks.js`
        this.page = page;
        this.input_usernameField = page.locator('input[name="username"]');
        this.input_passwordField = page.locator('input[name="password"]');
        this.input_loginButton = page.locator('button[type="submit"]');
    }

    async navigate() {
        await this.page.goto(process.env.PLAYWRIGHT_URL);
    }

    async login(username, password) {
        await this.input_usernameField.fill(username);
        await this.input_passwordField.fill(password);
        await this.input_loginButton.click();
    }

    async isAtHomePage() {
        await expect(this.page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
    }

    async gotoPage(path) {
        await this.page.goto(process.env.BASE_URL1)
    }
}

module.exports = { LoginPage };