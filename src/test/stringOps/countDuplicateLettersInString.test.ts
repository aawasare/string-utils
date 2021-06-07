import { countDuplicateLettersInString } from '../../stringOps/countDuplicateLetterInString';
import { errorDetails } from '../../commons/errorDetails';
const { ERR4000 } = errorDetails;

describe('stringUtils Test Suite', () => {
  test('should throw error when a empty input string is passed', () => {
    const message = '';

    expect(() => countDuplicateLettersInString(message)).toThrowError(ERR4000.code);
  });

  test('should return JSON object of duplicate count when a valid string is passed', () => {
    const message = 'hello world';
    const mockData = { data: { l: 3, o: 2 } };
    const result = countDuplicateLettersInString(message);
    expect(result).toStrictEqual(mockData);
  });

  test('should return successful result when case insensitive input duplication is present', () => {
    const message = 'Wonderful world';
    const mockData = { data: { w: 2, o: 2, d: 2, r: 2, l: 2 } };
    const result = countDuplicateLettersInString(message);
    expect(result).toStrictEqual(mockData);
  });

  test('should return blank JSON object when no duplication found in string', () => {
    const message = 'world';
    const mockData = { data: {} };
    const result = countDuplicateLettersInString(message);
    expect(result).toStrictEqual(mockData);
  });
});
