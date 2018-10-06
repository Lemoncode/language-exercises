import exercise from './05a';

describe('exercise 00', () => {
  it('should be a function', () => {
    expect(typeof exercise).toBe("function");
  });

  it('should should return true on equal objects', () => {
    const nestedObject = {}

    expect(exercise({}, {})).toBeTruthy();
    expect(exercise({a: "a"}, {a: "a"})).toBeTruthy();
    expect(exercise({a: "a", b: 2}, {a: "a", b: 2})).toBeTruthy();
    expect(exercise({a: "a", b: nestedObject}, {a: "a", b: nestedObject})).toBeTruthy();
  });

  it('should should return false on different objects', () => {
    expect(exercise({}, {a: "a"})).toBeFalsy();
    expect(exercise({b: "a"}, {a: "a"})).toBeFalsy();
  });
});
