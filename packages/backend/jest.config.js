module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/__test__"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@controllers/(.*)$": "<rootDir>/src/controllers/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@entities/(.*)$": "<rootDir>/src/entities/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
