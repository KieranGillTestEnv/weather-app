import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getTitleText() {
        return element(by.css('app-root .container .navbar-brand')).getText();
    }

    getSearchInput() {
        return element(by.css('app-root .form-control')).isPresent();
    }

    getSearchButton() {
        return element(by.css('app-root button')).isPresent();
    }
}
