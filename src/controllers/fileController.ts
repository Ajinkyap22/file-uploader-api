import {
  createFile,
  getAllFiles,
  getFileById,
  moveFile,
  deleteFile,
} from "../database/queries/fileQueries";

import cloudinary from "../cloudinary";

import type { Request, Response } from "express";

import https from "https";

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

export const moveFileController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { folderId } = req.body;

  try {
    const file = await moveFile({ id, folderId });
    res.status(200).json(file);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const deleteFileController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await deleteFile(id);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const downloadFileController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const file = await getFileById(id);

    if (!file) {
      res.status(404).json({ message: "File not found" });
      return;
    }

    https.get(file.url, (response) => {
      res.setHeader("Content-Disposition", `attachment; filename=${file.name}`);
      response.pipe(res);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
