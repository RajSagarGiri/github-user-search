describe(`Head Component`, () => {
  beforeAll(() => console.log('Before All Tests'));
  //   beforeEach(() => console.log('Before Each Tests'));

  it(`TEST 1`, () => {
    expect(5 + 2).toEqual(7);
  });

  // it.only(`TEST 2`, () => {
  //   expect(2 + 2).toEqual(4);
  // });

  // it.skip(`TEST 3`, () => {
  //   expect(2 + 3).toEqual(5);
  // });

  it(`TEST 4`, () => {
    expect(6 + 3).toEqual(9);
  });
});
