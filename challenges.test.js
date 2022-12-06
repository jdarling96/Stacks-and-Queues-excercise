const Stack = require('./challenges')

let stack;

beforeEach(function() {
  stack = new Stack();
});

describe("push", function() {
  it("places the value at the top of the stack and returns undefined", function() {
    expect(stack.reverse('string')).toBe('gnirts');
    
  });
});