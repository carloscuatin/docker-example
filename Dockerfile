FROM node:4.2.6

COPY . /src
WORKDIR /src
RUN npm install
