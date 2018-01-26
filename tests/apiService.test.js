const expect = require('chai').expect;
const api = require('./../app/services/apiService');

describe('apiService', function () {
  describe('getTemplates', function () {
    it('should return an array of string and not be empty', function () {
      return api.getTemplates().then((res) => {
        expect(res).to.be.an('array');
        expect(res).to.not.be.empty;
        expect(res[0]).to.be.an('string');
      }).catch(() => {
        expect.fail(0, 1, 'Promise Error');
      });
    });
  });

  describe('getExtensions', function () {
    it('should return an array of string and not be empty', function () {
      return api.getExtensions().then((res) => {
        expect(res).to.be.an('array');
        expect(res).to.not.be.empty;
        expect(res[0]).to.be.an('string');
      }).catch(() => {
        expect.fail(0, 1, 'Promise Error');
      });
    });
  });
});
