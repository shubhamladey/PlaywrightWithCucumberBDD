const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require('./DashboardPage');
const { MyInfoPage } = require('./MyInfoPage');
const { AttendancePage } = require('./AttendancePage');

class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.myInfoPage = new MyInfoPage(this.page);
        this.attendancePage = new AttendancePage(this.page)
    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashboardPage;
    }

    getMyInfoPage() {
        return this.myInfoPage;
    }

    getAttendancePage() {
        return this.attendancePage;
    }
}
module.exports = { POManager };