 
# # Builder stage
FROM node:22.10.0-alpine AS builder

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

# # Runner stage
FROM node:22.10.0-alpine AS runner

WORKDIR /usr/app

COPY --from=builder /usr/app .

EXPOSE 5000