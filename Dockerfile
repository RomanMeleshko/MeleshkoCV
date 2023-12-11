FROM node:19 as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM build-stage as dev-stage
EXPOSE 5001
CMD ["npm", "run", "serve"]

FROM build-stage as prod-stage
EXPOSE 5001
CMD ["npm", "run", "build"]

