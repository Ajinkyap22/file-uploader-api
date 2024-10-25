import { Router } from "express";

import {
  createFolderController,
  getAllFoldersController,
  getFolderByIdController,
  getFilesByFolderIdController,
} from "../controllers/folderController";

const router = Router();

router.post("/", createFolderController);

router.get("/", getAllFoldersController);

router.get("/:id", getFolderByIdController);

router.get("/:folderId/files", getFilesByFolderIdController);

export default router;
