import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const distDir = resolve(process.cwd(), "dist");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".json": "application/json; charset=utf-8",
};

const sendFile = (res, filePath) => {
  const ext = extname(filePath).toLowerCase();
  res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
  createReadStream(filePath).pipe(res);
};

createServer((req, res) => {
  const requestPath = decodeURIComponent((req.url || "/").split("?")[0]);
  let filePath = join(distDir, requestPath === "/" ? "index.html" : requestPath);

  try {
    if (existsSync(filePath) && statSync(filePath).isDirectory()) {
      filePath = join(filePath, "index.html");
    }

    if (!existsSync(filePath)) {
      filePath = join(distDir, "index.html");
    }

    sendFile(res, filePath);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Server error");
  }
}).listen(port, host, () => {
  console.log(`Serving http://${host === "0.0.0.0" ? "localhost" : host}:${port}`);
});
