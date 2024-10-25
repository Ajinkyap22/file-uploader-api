import { Router } from "express";

import {
  createFolderController,
  getAllFoldersController,
  getFolderByIdController,
  getFilesByFolderIdController,
  updateFolderController,
  deleteFolderController,
} from "../controllers/folderController";

const router = Router();

router.post("/", createFolderController);

router.get("/", getAllFoldersController);

router.get("/:id", getFolderByIdController);

router.get("/:folderId/files", getFilesByFolderIdController);

router.put("/:id", updateFolderController);

router.delete("/:id", deleteFolderController);

export default router;
