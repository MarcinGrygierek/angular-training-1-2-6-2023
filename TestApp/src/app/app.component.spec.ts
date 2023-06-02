import { TestScheduler } from 'rxjs/testing';
import { map } from 'rxjs';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
})

describe('AppComponent', () => {
  it('generates correct stream', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable, expectSubscriptions } = helpers;

      const sourceObs = cold('--a--|');
      const expectedObs = '--A--|';

      expectObservable(sourceObs.pipe(map(val => val.toUpperCase()))).toBe(expectedObs);
    })
  })
})
