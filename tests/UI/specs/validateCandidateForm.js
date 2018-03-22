'use strict';

const LoginPage = require('../pages/loginPage.js');
const BasePage = require('../pages/basePage.js');
const loginData = require('../data/loginData.js');
const candidateData = require('../data/candidateData.js');
const HomePage = require('../pages/homePage.js');

describe('Cancel the registration of a new candidate >', function() {

	const loginPage = new LoginPage();
	const homePage = new HomePage();
	const basePage = new BasePage();

	beforeAll(function() {
		basePage.visit();
	});

	it('should login with valid user', function() {
		loginPage.fillLoginForm(loginData.validUser);
	});

	it('should open new candidates form', function() {
		homePage.openCandidatesForm();
	});

	it('should click in cancel button and check that modal was closed', function() {
		homePage.cancelButton.click();
		basePage.isNotVisible(homePage.cancelButton), basePage.timeout.xxl;
		expect(homePage.firstNameField.isPresent()).toBe(false);
	});
});

describe('Validate messages from required fields >', function() {

	const loginPage = new LoginPage();
	const homePage = new HomePage();
	const basePage = new BasePage();

	it('should open new candidates form', function() {
		homePage.openCandidatesForm();
	});

	it('should click on the next button without filling any fields', function() {
		homePage.nextButton.click();
		basePage.assertContain(homePage.requiredMessageField, 'Either SSN or Phone are required');
		basePage.assertContain(homePage.requiredMessageField, 'This field is required');
		basePage.assertContain(homePage.requiredMessageField, 'This email address is not formatted correctly');
	});

	it('should fill out the form with an invalid email and phone number', function() {
		homePage.fillCandidateForm(candidateData.candidateInvalidPhone);
	});

	it('should check validation messages to phone and email fields', function() {
		basePage.isVisible(homePage.requiredMessagePhoneField), basePage.timeout.xxl;
		basePage.assertContain(homePage.requiredMessageField, 'Oops! You entered a landline number. Please enter a valid mobile number.');
		basePage.assertContain(homePage.requiredMessageField, 'This email is undeliverable');
	});
});
