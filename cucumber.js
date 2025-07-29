module.exports = {
    default: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "tests/features/*.feature"
        ],
        require: [
            "tests/step-definitions/*.js",
            "tests/support/hooks.js"
        ],
        timeout: 20000,
        format: [
            "html:reports/cucumber-report.html", // HTML report generation
        ],
        parallel: 1, // Runs tests in parallel (adjust as needed)
        retry: 0 // Retries failed tests up to 2 times
    }
};