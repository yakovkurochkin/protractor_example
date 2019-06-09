var nestedFramesPage = require('../../pages/nestedFramesPage');

describe('Check that correct frame has correct word:', () => {
  beforeEach(() => {
    nestedFramesPage.goTo();
  });

  it('bottom frame', () => {
    nestedFramesPage.switchToBottomFrame();

    expect(nestedFramesPage.body.getText()).toEqual(nestedFramesPage.frameBottomText);
  });

  it('top left frame', () => {
    nestedFramesPage.switchToTopLeftFrame();

    expect(nestedFramesPage.body.getText()).toEqual(nestedFramesPage.frameTopLeftText);
  });

  it('check top middle frame', () => {
    nestedFramesPage.switchToTopMiddleFrame();

    expect(nestedFramesPage.body.getText()).toEqual(nestedFramesPage.frameTopMiddleText);
  });

  it('check top right frame', () => {
    nestedFramesPage.switchToTopRightFrame();

    expect(nestedFramesPage.body.getText()).toEqual(nestedFramesPage.frameTopRightText);
  });
});