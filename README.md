# file-uploader-api

A file uploader API to create folders and upload files to them. Built with Express, PostgreSQL, Prisma & TypeScript. Uses cloudinary to store files.

## Features

- Create folders
- Upload files to folders
- Get all folders
- Get all files in a folder
- Get a file by id
- Get a folder by id
- Delete a file by id
- Delete a folder by id
- Move a file to a folder
- Download a file

## Installation

1. Clone the repository

```bash
git clone
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
```

4. Run the migrations

```bash
npx prisma migrate dev
```

5. Start the server

```bash
npm run dev
```
