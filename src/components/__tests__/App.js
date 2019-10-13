it(`ASYNC TEST 1`, done => setTimeout(done, 100));

it(`ASYNC TEST 2`, () => new Promise(resolve => setTimeout(resolve, 1500)));
