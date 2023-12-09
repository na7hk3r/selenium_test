const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");

async function test(){
    let driver = await new Builder()
    .forBrowser("chrome")
        //   .setChromeOptions(new chrome.Options().headless())
    .build();

    await driver.get("https://www.youtube.com/");
    await driver.findElement(By.xpath("/html/body/ytd-app/div[1]/div/ytd-masthead/div[4]/div[2]/ytd-searchbox/form/div[1]/div[1]/input")).sendKeys("Digital house");
    await driver.findElement(By.xpath("/html/body/ytd-app/div[1]/div/ytd-masthead/div[4]/div[2]/ytd-searchbox/button")).click();
    await driver.sleep(5000);

    await driver.findElement(By.xpath("/html/body/ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer[2]/div[3]/ytd-channel-renderer/div/div[2]/a/div[1]/ytd-channel-name/div")).click();
    await driver.sleep(5000);

    let contadorDeSuscriptores = await driver.findElement(By.xpath("/html/body/ytd-app/div[1]/ytd-page-manager/ytd-browse[2]/div[3]/ytd-c4-tabbed-header-renderer/tp-yt-app-header-layout/div/tp-yt-app-header/div/div[2]/div/div[1]/div/div[1]/span[3]/yt-formatted-string")).isDisplayed();
    assert.ok(contadorDeSuscriptores, "El test falló");

    await driver.sleep(5000);

    await driver.close();
}

test();