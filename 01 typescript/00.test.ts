import exercise from './00';

describe('myFunction', () => {
  it('should return true', () => {
    // Arrage & Act & Assert
    expect(exercise(undefined)).toBeTruthy();
  });
});
