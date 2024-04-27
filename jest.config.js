/** @type {import('ts-jest').JestConfigWithTsJest} */
/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["packages/backend", "packages/frontend"],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
    "^@/(.*)$": "<rootDir>/$1",
  },
  projects: ["./packages/*/"],
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
    "./packages/backend": {
      branches: 90,
      statements: 90,
    },
    "./packages/frontend": {
      branches: 80,
      statements: 80,
    },
  },
};
