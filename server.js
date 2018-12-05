const express = require("express");
const next = require("next");

const port = process.env.port || 3000;
const isDevEnv = process.env.NODE_ENV !== "production";
const app = next({ dev: isDevEnv, dir: "src" });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.get("*", (req, res) => handle(req, res));

  await server.listen(port);
  console.log("> Ready on http://localhost:" + port);
})();