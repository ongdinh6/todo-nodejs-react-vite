module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/__test__"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  moduleNameMapper: {
    "^/(.*)$": "<rootDir>/src/$1",
  },
  moduleDirectories: [
    "src",
    "node_modules"
  ],
};
