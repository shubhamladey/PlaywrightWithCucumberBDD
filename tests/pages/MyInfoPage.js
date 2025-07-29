class MyInfoPage {
    constructor(page) {
        this.page = page;
        this.text_tabs = this.page.locator("[role='tablist']>div");
        this.text_fieldLabels = this.page.locator('[class^="oxd-label"]');
    }

    async getTabs() {
        await this.text_tabs;
    }

    async inputFieldLabels() {
        await text_fieldLabels;
    }

}
module.exports = { MyInfoPage };