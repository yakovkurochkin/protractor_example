browser.ignoreSynchronization = true;
var BasePage = require('./basePage');

class DynamicLoadingPage extends BasePage {
    constructor() {
        super();
        this.url = 'dynamic_loading';

        this.firstExampleLink = $('[href="/dynamic_loading/1"]');
        this.secondExampleLink = $('[href="/dynamic_loading/2"]');

        this.startButton = $('#start button');
        this.finishElement = $('#finish h4');

        this.loadingElement = $('#loading');

        this.finishElementText = 'Hello World!';
    }

    clickFirstExample() {
        return this.firstExampleLink.click()
    }

    clickSecondExample() {
        return this.secondExampleLink.click();
    }

    clickStart() {
        return this.startButton.click();
    }
}

module.exports = new DynamicLoadingPage();