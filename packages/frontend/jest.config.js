module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/__test__"],
  transformIgnorePatterns: ["/node_modules/", "<rootDir>/__mock__/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
    "^.+\\.css$": "jest-css-modules-transform",
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mock__/fileMock.js",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mock__/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
