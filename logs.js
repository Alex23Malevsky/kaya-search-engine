const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

      testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/\\.next/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
        https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx|svg)$': ['babel-jest', { presets: ['next/babel'] }]
  },
