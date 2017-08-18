var unirest = require('unirest');
var Q = require('q');

var jwa = function(config, domain) {
  this.config = config;
  this.domain = domain;
  var deferred = Q.defer();

  get = unirest.get('http://jsonwhoisapi.com/api/v1/whois?identifier=' + this.domain)
    .auth(this.config[0], this.config[1], true)
    .end(function(response) {
      this.whoisDetail = response.body;
      deferred.resolve(this.whoisDetail);
    });

  return deferred.promise;
};

module.exports = jwa;