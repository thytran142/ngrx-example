import * as fromCurrentCondition from './current-condition.actions';

describe('loadCurrentConditions', () => {
  it('should return an action', () => {
    expect(fromCurrentCondition.loadCurrentConditions().type).toBe('[CurrentCondition] Load CurrentConditions');
  });
});
