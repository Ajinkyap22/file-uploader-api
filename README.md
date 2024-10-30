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

You will need docker installed on your machine to run the repo.

1. Clone the repository

```bash
git clone
```

2. Create a `.env` file in the root directory and add the following environment variables

```bash
POSTGRES_USER=<your_postgres_user>
POSTGRES_PASSWORD=<your_postgres_password>
POSTGRES_DB=<your_postgres_db>
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
```

3. Run the following command to start the server

```bash
docker-compose up -d --build
```

4. Run the following command to run the migrations

```bash
docker-compose exec api npx prisma migrate dev --name init
```
