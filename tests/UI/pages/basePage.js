'use strict';

const BasePage = function () {

	const EC = protractor.ExpectedConditions;

	this.visit = function () {
		return browser.get(browser.params.baseUrl);
	};

	this.isVisible = function (locator) {
		return browser.wait(EC.visibilityOf(locator));
	};

	this.isNotVisible = function (locator) {
		return browser.wait(EC.invisibilityOf(locator));
	};

	this.isClickable = function (locator) {
		return browser.wait(EC.elementToBeClickable(locator));
	};

	this.assertContain = function(locator, term) {
		expect(locator.getText()).toContain(term);
	};

	this.timeout = {
		'xxl': 15000
	};
};

module.exports = BasePage;
