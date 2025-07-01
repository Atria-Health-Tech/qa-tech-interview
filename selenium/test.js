const { Builder } = require('selenium-webdriver');

async function runTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://www.saucedemo.com/');
  setTimeout(() => {
    driver.quit();
  }, 10000);
}

runTest(); 