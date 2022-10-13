/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

//@ts-check

const { execSync } = require('child_process');
const os = require('os');

const TZ = 'America/Los_Angeles';
if (os.platform() === 'win32') {
  process.env.STORED_TZ = execSync('tzutil /g').toString();
  execSync(`tzutil /s "${TZ}"`);
  console.warn(`Windows timezone changed from "${process.env.STORED_TZ}" to "${TZ}"\nRun \`tzutil /s "${process.env.STORED_TZ}"\` to set it back manually.`);
} else {
  process.env.TZ = TZ;
}

module.exports = {
  rootDir: '../',
  setupFiles: ['<rootDir>/test/setupTests.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.jest.ts'],
  roots: ['<rootDir>'],
  testMatch: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx'],
  clearMocks: true,
  modulePathIgnorePatterns: ['<rootDir>/offline-module-cache/'],
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/', '<rootDir>/public/components/report_definitions/delivery/'],
  transformIgnorePatterns: ['<rootDir>/node_modules'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  testEnvironment: 'jsdom',
};
