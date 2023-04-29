/*var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
*/
const request = require('supertest');
const assert = require('chai').assert;
const expect = require('chai').expect;
const express = require('express');

describe('GitHub API', () => {
  it('should return a JSON response with the expected keys', () => {
    request('https://api.github.com')
    
    .get('/repositories/132619461')
    .end((err, res)=> {
        console.log(res);
    });
  });
});