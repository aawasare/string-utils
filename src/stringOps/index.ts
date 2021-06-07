import { countDuplicateLettersInString } from './countDuplicateLetterInString';
import { DuplicatesCountResponse } from '../commons/interfaces';

const message = 'hello world';
const duplicateLettersCount: DuplicatesCountResponse = countDuplicateLettersInString(message);

export const duplicateLettersCountJson = JSON.stringify(duplicateLettersCount.data, null, 2);

console.log('Count of duplicate letters in a string(hello world): ');
console.log(duplicateLettersCountJson);
