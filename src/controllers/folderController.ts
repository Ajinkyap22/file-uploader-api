import {
  createFolder,
  getAllFolders,
  getFolderById,
} from "../database/queries/folderQueries";

import type { Request, Response } from "express";

export const createFolderController = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const folder = await createFolder(name);
    res.json(folder);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const getAllFoldersController = async (_: Request, res: Response) => {
  try {
    const folders = await getAllFolders();
    res.json(folders);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const getFolderByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const folder = await getFolderById(id);
    res.json(folder);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
