import App from "./App";

const HARD_CODED_MESSAGE = "Tofu: Intro";
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

export function renderer(_, res) {
  const appMarkup = renderToString(<App text={HARD_CODED_MESSAGE} />);
  return res.send(BASE_MARKUP(appMarkup));
}
