import { Router } from "express";
import { upload } from "../multer";

import {
  createFileController,
  getAllFilesController,
  getFileByIdController,
} from "../controllers/fileController";

const router = Router();

router.post("/", upload.single("file"), createFileController);

router.get("/", getAllFilesController);

router.get("/:id", getFileByIdController);

export default router;
