FROM node:18-alpine
WORKDIR /app


COPY package*.json ./

RUN npm install --production



COPY . .
RUN npm install  vite
RUN npm run build
EXPOSE 86



CMD ["npm", "run", "dev"]