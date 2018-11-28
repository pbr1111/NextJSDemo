const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const routes = require("./src/config/routes.json");
module.exports = withTypescript(
  withSass({
    useFileSystemPublicRoutes: false,
    exportPathMap: () => routes
  })
);
