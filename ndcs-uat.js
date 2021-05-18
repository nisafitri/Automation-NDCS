const webdriver = require('selenium-webdriver');
async function runTestWithCaps (capabilities) {
  let driver = new webdriver.Builder()
    .usingServer('http://annisa_JGra5X:PQsLKpdJPpRbFjxmcR5p@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}  // Because NodeJS language binding requires browserName to be defined
    })
    .build();
  await driver.get("https://ndcs-uat.app.keyreply.com/webchat/?isPreview=true");
  const kr_launcher = await driver.findElement(webdriver.By.css("#kr-launcher"));
  await kr_launcher.click();  
  const input_field = await driver.findElement(webdriver.By.css(".keyreply-message-input textarea"));
  await input_field.sendKeys("Hi", webdriver.Key.ENTER);
  await driver.wait(webdriver.until.elementLocated(webdriver.By.css("div.message-wrapper.message-bubble-left button.el-button:nth-child(2)")),10000);
  const i_agree = await driver.findElement(webdriver.By.css("div.message-wrapper.message-bubble-left button.el-button:nth-child(2)"));
  await i_agree.click(); 
  await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//button[contains(text(),'Triage')]")));
  await driver.findElement(webdriver.By.xpath("//button[contains(text(),'Triage')]")).click();
  await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//p[contains(text(),'please type in your name')]")),10000);
  await input_field.sendKeys("Nisa Cantik", webdriver.Key.ENTER); 
  await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//p[contains(text(),'how old are you')]")),10000);
  await driver.findElement(webdriver.By.xpath("//button[contains(text(),'12 Years and below')]")).click();
  await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//p[contains(text(),'last appointment with NDCS')]")),10000);
  await driver.findElement(webdriver.By.xpath("//button[contains(text(),'No')]")).click();
  await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//p[contains(text(),'Do you have any of the following medical condition?')]")),10000);
  await driver.findElement(webdriver.By.xpath("//button[contains(text(),'No')]")).click();
  await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//p[contains(text(),'ingest or swallowed')]")),10000);
  await driver.findElement(webdriver.By.xpath("//button[contains(text(),'No')]")).click();
  await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//p[contains(text(),'ingest or swallowed')]")),10000);
  await driver.findElement(webdriver.By.xpath("//button[contains(text(),'No')]")).click();
  await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//p[contains(text(),'Are you')]")),10000);
  await driver.findElement(webdriver.By.xpath("//button[contains(text(),'No')]")).click();
  await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//p[contains(text(),'Is the pain')]")),10000);
  await driver.findElement(webdriver.By.xpath("//button[contains(text(),'No')]")).click();
  await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//p[contains(text(),'It looks')]")),10000);
  await driver.findElement(webdriver.By.xpath("//button[contains(text(),'Yes')]")).click();
  await driver.quit();
}

const capabilities1 = {
    'browser': 'chrome',
    'browser_version': 'latest',
    'os': 'Windows',
    'os_version': '10',
    'build': 'browserstack-build-1',
    'name': 'Parallel test 1'
}
runTestWithCaps(capabilities1);

