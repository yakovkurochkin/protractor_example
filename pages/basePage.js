class BasePage {

    constructor() {
        this.timeout = 10000;
    }

    /**
     * Open page with it's url
     * @requires page with url property
     */ 
    goTo() {
        browser.get(this.url, this.timeout);
    }

    /**
     * Wait until an element will be present on the DOM of a page and will be visible
     * @param {ElementFinder} element example: $('.count .two')
     */
    waitForElementVisible(element) {
        browser.wait(protractor.ExpectedConditions.visibilityOf(element), this.timeout,
            `timeout: waiting for element "${element.locator()}" is visible`);
    }
}

module.exports = BasePage;