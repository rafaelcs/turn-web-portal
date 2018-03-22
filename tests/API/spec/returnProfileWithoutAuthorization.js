var assert = require('chai').assert,
    request = require('supertest'),
    helper = require('./helper.js');

describe ('Security validation', function() {

	it ('Return profile without authorization header', function (done) {
		request(helper.url)
		.post('/v1/person/search')
		.set('Content-type', 'application/json')
		.send(helper.validUser)
		.end(function(err, res) {
			if (err) return done(err);
			assert.equal(res.status, 401);
			assert.equal(res.body.code, "authorization_header_missing");
			assert.equal(res.body.description, "Authorization header is expected");
			done();
		});
	});
});