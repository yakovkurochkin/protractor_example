browser.ignoreSynchronization = true;
var BasePage = require('./basePage');

class UploadPage extends BasePage {
    constructor() {
        super();
        this.url = 'upload';

        this.uploadInput = $('#file-upload');
        this.uploadButton = $('.button');
        this.uploadedFile = $('#uploaded-files');

        this.dndUploadInput = $('.dz-hidden-input');
        this.dndUploadedFile = $('.dz-success-mark .dz-filename span');
        this.dndUploadSucsess = $('.dz-success-mark .dz-success-mark');

        this.header = $('h1');

        this.errorText = 'Internal Server Error';
        this.uploadedFilename = 'kitty.jpg';
    }

    baseUploadFile(element) {
        const remote = require('selenium-webdriver/remote');
        browser.setFileDetector(new remote.FileDetector());

        const path = require('path');
        const fileToUpload = path.resolve('./files/' + this.uploadedFilename);

        element.sendKeys(fileToUpload);
    }

    uploadFile() {
        this.baseUploadFile(this.uploadInput);
    }

    uploadDndFile() {
        this.baseUploadFile(this.dndUploadInput);
    }
}

module.exports = new UploadPage();