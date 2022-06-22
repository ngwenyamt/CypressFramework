const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/integration/ESG/Reports/cucumber-json/',
	reportPath: 'cypress/integration/ESG/Reports/HtmlReport',
	metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Dell Laptop',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Lumina Regression Test - Report',
        data: [
            {label: 'Project', value: 'Lumina'},
            {label: 'Release', value: '1.2.3'},
            
        ]
    }
});



