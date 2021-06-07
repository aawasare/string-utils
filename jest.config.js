module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'js'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/stringOps/**/*.ts', '<rootDir>/src/commons/**/*.ts'],
};
