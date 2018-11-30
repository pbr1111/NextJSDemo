const express = require("express");
const next = require("next");
const { nextI18NextMiddleware } = require("./i18n");

const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");

const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({
  dev: process.env.NODE_ENV !== "production",
  dir: "src",
  conf: withTypescript(withSass({}))
});
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  nextI18NextMiddleware(app, server);

  server.get("*", (req, res) => handle(req, res));

  await server.listen(port);
  console.log("> Ready on http://localhost:3000");
})();
