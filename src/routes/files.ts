import { Router } from "express";
import { upload } from "../multer";

import {
  createFileController,
  getAllFilesController,
  getFileByIdController,
  moveFileController,
  deleteFileController,
  downloadFileController,
} from "../controllers/fileController";

const router = Router();

router.post("/", upload.single("file"), createFileController);

router.get("/", getAllFilesController);

router.get("/:id", getFileByIdController);

router.get("/:id/download", downloadFileController);

router.put("/:id", moveFileController);

router.delete("/:id", deleteFileController);

export default router;
