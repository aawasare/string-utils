import { DuplicatesCount, DuplicatesCountResponse } from '../commons/interfaces';
import { errorDetails } from '../commons/errorDetails';
const { ERR4000 } = errorDetails;

export const countDuplicateLettersInString = (inputStringValue: string): DuplicatesCountResponse => {
  try {
    if (!inputStringValue) {
      throw new Error(ERR4000.code);
    }

    const inputStringArray: string[] = inputStringValue.replace(' ', '').toLowerCase().split('');

    const duplicateCount: DuplicatesCount = getDuplicateCount(inputStringArray);

    return {
      data: duplicateCount,
    };
  } catch (error) {
    console.log('failure:stringUtils:countDuplicateLettersInString: Error getting duplicate count', error);
    throw error;
  }
};

const getDuplicateCount = (inputStringArray: string[]): DuplicatesCount => {
  // here 0th object in array is occurence of every letter used for temporary purpose and 1st object in array stores desired final count result
  const accumulatorInitialValue: DuplicatesCount[] = [{}, {}];

  const duplicateCounts: DuplicatesCount[] = inputStringArray.reduce<DuplicatesCount[]>((resultData, currentLetter) => {
    // each letter's occurrence is temporarily stored at 0th location in accumulator array
    resultData[0][currentLetter] = (resultData[0][currentLetter] || 0) + 1;

    if (resultData[0][currentLetter] > 1) {
      // if the letter occurrence is more than once then store desired count at 1st location in accumulator array
      resultData[1][currentLetter] = resultData[0][currentLetter];
    }

    return resultData;
  }, accumulatorInitialValue);

  return duplicateCounts[1];
};
