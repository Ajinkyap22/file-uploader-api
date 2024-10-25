import prisma from "../client";

export const createFile = async ({
  name,
  url,
  folderId,
}: {
  name: string;
  url: string;
  folderId: string;
}) => {
  const file = await prisma.file.create({
    data: {
      name,
      url,
      folderId,
    },
  });

  return file;
};

export const getAllFiles = async () => {
  const files = await prisma.file.findMany();

  return files;
};

export const getFilesByFolderId = async (folderId: string) => {
  const files = await prisma.file.findMany({
    where: {
      folderId,
    },
  });

  return files;
};

export const getFileById = async (id: string) => {
  const file = await prisma.file.findUnique({
    where: {
      id,
    },
  });

  return file;
};

export const moveFile = async ({
  id,
  folderId,
}: {
  id: string;
  folderId: string;
}) => {
  const file = await prisma.file.update({
    where: {
      id,
    },
    data: {
      folderId,
    },
  });

  return file;
};

export const deleteFile = async (id: string) => {
  const file = await prisma.file.delete({
    where: {
      id,
    },
  });

  return file;
};
