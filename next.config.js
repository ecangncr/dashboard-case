/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
    prependData: `@use "_abstracts.scss" as *;`,
  },
};

module.exports = nextConfig;
