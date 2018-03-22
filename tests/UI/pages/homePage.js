'use strict';

const BasePage = require('./basePage.js');

const HomePage = function () {

	const basePage = new BasePage();

	this.addCandidatesButton = element(by.id('check_worker'));

	// New candidates form
	this.firstNameField = element(by.id('worker_firstname'));
	this.lastNameField = element(by.id('worker_lastname'));
	this.phoneField = element(by.id('worker_phone'));
	this.emailField = element(by.id('worker_email'));
	this.ssnField = element(by.id('worker_ssn'));
	this.nextButton = element(by.id('confirm_data'));
	this.requiredMessageField = element(by.css('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'));
	this.requiredMessagePhoneField = element(by.css('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(5)'));
	this.cancelButton = element(by.id('close_modal'));

	this.openCandidatesForm = function () {
		this.addCandidatesButton.click();
		browser.sleep(1000); // I do not use the sleep method in my codes, except it is very necessary to wait for an element
		expect(this.nextButton.isDisplayed()).toBe(true);
	};

	this.fillCandidateForm = function (candidateObj) {
		this.firstNameField.sendKeys(candidateObj.firstNameValue);
		this.lastNameField.sendKeys(candidateObj.lastNameValue);
		this.phoneField.sendKeys(candidateObj.phoneValue);
		this.emailField.sendKeys(candidateObj.emailValue);
		this.ssnField.sendKeys(candidateObj.ssnValue);
		this.nextButton.click();
	};
};

module.exports = HomePage;
