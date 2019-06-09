var dynamicLoadingPage = require('../../pages/dynamicLoadingPage');

describe('Click start and then wait for hello world:', () => {
    beforeEach(() => {
        dynamicLoadingPage.goTo();

    });

    it('First example', () => {
        dynamicLoadingPage.clickFirstExample();
        dynamicLoadingPage.clickStart();
        dynamicLoadingPage.waitForElementVisible(dynamicLoadingPage.finishElement);

        expect(dynamicLoadingPage.finishElement.getText()).toEqual(dynamicLoadingPage.finishElementText);
    });

    it('Second example', () => {
        dynamicLoadingPage.clickSecondExample();
        dynamicLoadingPage.clickStart();
        dynamicLoadingPage.waitForElementVisible(dynamicLoadingPage.finishElement);

        expect(dynamicLoadingPage.finishElement.getText()).toEqual(dynamicLoadingPage.finishElementText);
    });
});