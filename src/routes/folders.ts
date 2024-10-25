import { Router } from "express";

import {
  createFolderController,
  getAllFoldersController,
  getFolderByIdController,
} from "../controllers/folderController";

const router = Router();

router.post("/", createFolderController);

router.get("/", getAllFoldersController);

router.get("/:id", getFolderByIdController);

export default router;
