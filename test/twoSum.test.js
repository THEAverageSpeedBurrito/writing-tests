'use strict';

const expect = require('chai').expect;
const main = require('../twoSum');

describe('Finds two items in an array that add up to a target value', () => {
  it('Should accept two arguments', () => {
    expect(main.twoSum([1,2], 3)).to.deep.equal([0,1]);
  });
  it('Should return an array', () => {
    let type = typeof(main.twoSum([3,4,8,2], 10));
    expect(type).to.equal('object');
  });
  it('Should should find two values that add up to the target', () => {
    expect(main.twoSum([1,8,15,7,12], 13)).to.deep.equal([0,4]);
  });
});

describe('Handles error cases', () => {
  it('Returns null when no pair is found', () => {
    expect(main.twoSum([1,2], 5)).to.deep.equal(null);
    expect(main.twoSum([5,2], 8)).to.deep.equal(null);
  });
  it('Returns null when array length is 1', () => {
    expect(main.twoSum([1], 1)).to.deep.equal(null);
    expect(main.twoSum([5], 5)).to.deep.equal(null);
  });
  it('Handles improper input types', () => {
    expect(main.twoSum('stringssss', 1)).to.deep.equal(null);
    expect(main.twoSum([1,2], '1')).to.deep.equal(null);
  });
});
