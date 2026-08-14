let config = {};
config.browser = "chrome";
config.timeout = 3000;
config.timeout = 5000;     //latest
console.log(config);       //{ browser: 'chrome', timeout: 5000 }
delete config.browser;
console.log(config);       //{ timeout: 5000 }