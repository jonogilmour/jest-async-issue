describe('example', () => {

  const e = async () => {

  };

  it(`should reject`, () => {
    expect(e()).rejects.toBe(false);
  });

  it(`should resolve`, () => {
    expect(e()).resolves.toBe(true);
  });

});
