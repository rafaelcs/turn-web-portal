var assert = require('chai').assert,
		expect = require('chai').expect,
    request = require('supertest'),
    helper = require('./helper.js');

describe ('Return valid profiles', function() {

	it ('Return a clean verified profile', function (done) {
		request(helper.url)
		.post('/v1/person/search')
		.set(helper.authorization)
		.set('Content-type', 'application/json')
		.send(helper.validCleanProfile)
		.end(function(err, res) {
			if (err) return done(err);
			assert.equal(res.status, 200);
			expect(helper.responseCleanVerifiedProfile).to.deep.equal(res.body);
			done();
		});
	});

	it ('Return a profile with a criminal record', function (done) {
		request(helper.url)
		.post('/v1/person/search')
		.set(helper.authorization)
		.set('Content-type', 'application/json')
		.send(helper.validCriminalProfile)
		.end(function(err, res) {
			if (err) return done(err);
			assert.equal(res.status, 200);
			expect(helper.responseCriminalProfile).to.deep.equal(res.body);
			done();
		});
	});
});