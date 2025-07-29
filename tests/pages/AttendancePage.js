class AttendancePage {
    constructor(page) {
        this.page = page;
        this.dropdown_reports = 'span:contains("Reports")';
        this.dropdown_attendanceSummary = "[class='oxd-dropdown-menu']>li:nth-child(3)";
        this.button_view = "button[type='Submit']";
    }

    async navigateToAttendancePage() {
        await this.page.click(this.dropdown_reports);
        await this.page.click(this.dropdown_attendanceSummary);
        await this.page.click(this.button_view);
    }
}
module.exports = { AttendancePage };