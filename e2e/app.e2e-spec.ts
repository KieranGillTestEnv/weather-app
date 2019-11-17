import { AppPage } from './app.po';
import { browser, logging, element, by, ExpectedConditions } from 'protractor';

describe('The Weather App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display app title', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('AgileSphere coding test - The Weather App');
    });

    it('should display search box', () => {
        page.navigateTo();
        expect(page.getSearchInput()).toBeTruthy();
    });

    it('should display search button', () => {
        page.navigateTo();
        expect(page.getSearchButton()).toBeTruthy();
    });

    it('should search for city', () => {
        page.navigateTo();

        element(by.css('app-root .form-control')).sendKeys('London');
        element(by.css('app-root button')).click();

        const elem = element(by.css('app-root app-results td'));
        const until = ExpectedConditions;
        browser.wait(until.presenceOf(elem), 5000, 'Result element taking too long to appear in the DOM');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
