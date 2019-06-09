browser.ignoreSynchronization = true;
var BasePage = require('./basePage');

class NestedFramesPage extends BasePage {
    constructor() {
        super();
        this.url = 'nested_frames';

        this.frameTop = $('[src="/frame_top"]');

        this.frameTopLeft = $('[src="/frame_left"]');
        this.frameTopMiddle = $('[src="/frame_middle"]');
        this.frameTopRight = $('[src="/frame_right"]');

        this.frameBottom = $('[src="/frame_bottom"]');

        this.body = $('body');

        this.frameTopLeftText = 'LEFT';
        this.frameTopMiddleText = 'MIDDLE';
        this.frameTopRightText = 'RIGHT';
        this.frameBottomText = 'BOTTOM';
    }

    switchToTopFrame() {
        return browser.switchTo().frame(this.frameTop.getWebElement());
    }

    switchToTopLeftFrame() {
        this.switchToTopFrame();
        return browser.switchTo().frame(this.frameTopLeft.getWebElement());
    }

    switchToTopMiddleFrame() {
        this.switchToTopFrame();
        return browser.switchTo().frame(this.frameTopMiddle.getWebElement());
    }

    switchToTopRightFrame() {
        this.switchToTopFrame();
        return browser.switchTo().frame(this.frameTopRight.getWebElement());
    }
    
    switchToBottomFrame() {
        return browser.switchTo().frame(this.frameBottom.getWebElement());
    }
}

module.exports = new NestedFramesPage();