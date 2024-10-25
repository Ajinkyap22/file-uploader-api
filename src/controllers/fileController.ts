import {
  createFile,
  getAllFiles,
  getFileById,
} from "../database/queries/fileQueries";

import cloudinary from "../cloudinary";

import type { Request, Response } from "express";

export const createFileController = async (req: Request, res: Response) => {
  const { name, folderId } = req.body;
  const file = req.file;

  if (!file) {
    res.status(400).json({ message: "File is required" });
    return;
  }

  try {
    const uploadedFile = await cloudinary.uploader.upload(file.path, {
      resource_type: "auto",
    });

    const url = uploadedFile.secure_url;

    const newFile = await createFile({ name, url, folderId });

    res.status(201).json(newFile);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const getAllFilesController = async (_req: Request, res: Response) => {
  try {
    const files = await getAllFiles();

    res.status(200).json(files);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const getFileByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const file = await getFileById(id);

    res.status(200).json(file);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
