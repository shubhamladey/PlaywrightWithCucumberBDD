class DashboardPage {
    constructor(page) {
        this.page = page;
        this.input_usernameField = page.locator('input[name="username"]');
        this.input_passwordField = page.locator('input[name="password"]');
        this.input_loginButton = page.locator('button[type="submit"]');
    }

}
module.exports = {DashboardPage};