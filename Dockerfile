FROM node:4.2.6

COPY src/ /src
WORKDIR /src
RUN npm install
