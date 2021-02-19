import * as fromZipcode from './zipcode.actions';

describe('loadZipcodes', () => {
  it('should return an action', () => {
    expect(fromZipcode.loadZipcodes().type).toBe('[Zipcode] Load Zipcodes');
  });
});
