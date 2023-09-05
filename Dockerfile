FROM node:16.20.2-alpine3.18

WORKDIR /backend
COPY package*.json /backend/
RUN npm install
COPY . /backend/
EXPOSE 4000
CMD ["npm", "run", "start"]
