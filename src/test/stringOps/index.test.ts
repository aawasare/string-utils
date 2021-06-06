import { duplicateLettersCountJson } from '../../stringOps';

describe('index test suite', () => {
  test('should return JSON object of duplicate count when app is run', () => {
    const mockData = { l: 3, o: 2 };
    expect(duplicateLettersCountJson).toStrictEqual(JSON.stringify(mockData, null, 2));
  });
});
