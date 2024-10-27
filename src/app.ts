import express from "express";
import cors from "cors";

import foldersRouter from "./routes/folders";
import filesRouter from "./routes/files";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/folders", foldersRouter);
app.use("/files", filesRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
