import express from "express";

import foldersRouter from "./routes/folders";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/folders", foldersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
