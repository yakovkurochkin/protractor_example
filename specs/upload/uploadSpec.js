var uploadPage = require('../../pages/UploadPage');

describe('Upload file and assert that it was uploaded correct:', () => {
    beforeEach(() => {
        uploadPage.goTo();
    });

    it('Empty upload withput error', () => {
        uploadPage.uploadButton.click();

        expect(uploadPage.header.getText()).not.toEqual(uploadPage.errorText);
    });

    it('Choose file upload', () => {
        uploadPage.uploadFile();
        uploadPage.uploadButton.click();
        uploadPage.waitForElementVisible(uploadPage.uploadedFile);

        expect(uploadPage.uploadedFile.getText()).toEqual(uploadPage.uploadedFilename);
    });

    it('D&D zone upload', () => {
        uploadPage.uploadDndFile();
        uploadPage.waitForElementVisible(uploadPage.dndUploadSucsess);
        
        expect(uploadPage.dndUploadedFile.getText()).toEqual(uploadPage.uploadedFilename);
    });
});