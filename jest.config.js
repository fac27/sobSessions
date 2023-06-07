module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  moduleFileExtensions: ['js'],
  testMatch: ['**/*.test.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
