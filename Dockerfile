#Builder l'app
FROM node:22.14-alpine AS Builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build 

FROM node:22.14-alpine

WORKDIR /app

# Copie des fichier builder et des node modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3000

CMD ["npm", "start"]
