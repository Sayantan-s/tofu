import express from "express";
import { renderToString } from "react-dom/server";
import App from "./App";

const PORT = 5170;

const app = express();

const BASE_MARKUP = (appMarkup) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="root">
            ${appMarkup}
        </div>
    </body>
    </html>
`;

app.get("/", (_, res) => {
  const appMarkup = renderToString(<App />);
  return res.send(BASE_MARKUP(appMarkup));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
