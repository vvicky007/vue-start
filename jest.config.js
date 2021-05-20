module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,ts,vue}", "!**/node_modules/**"],
  coverageReporters: ["html", "text-summary"],
};
