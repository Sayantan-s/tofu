import express from "express";
import { renderer } from "./renderer";

const PORT = 5170;

const app = express();

app.get("/", renderer);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
