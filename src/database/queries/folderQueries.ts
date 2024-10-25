import prisma from "../client";

export const createFolder = async (name: string) => {
  const folder = await prisma.folder.create({
    data: {
      name,
    },
  });

  return folder;
};

export const getAllFolders = async () => {
  const folders = await prisma.folder.findMany();

  return folders;
};

export const getFolderById = async (id: string) => {
  const folder = await prisma.folder.findUnique({
    where: {
      id,
    },
  });

  return folder;
};

export const updateFolder = async ({
  id,
  name,
}: {
  id: string;
  name: string;
}) => {
  const folder = await prisma.folder.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });

  return folder;
};

export const deleteFolder = async (id: string) => {
  const folder = await prisma.folder.delete({
    where: {
      id,
    },
  });

  return folder;
};
