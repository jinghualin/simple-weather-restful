FROM node:latest

WORKDIR /usr/app
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
RUN npm install
COPY src .
RUN npm run build
CMD ["npm", "run", "start-server"]