FROM node:14.8.0-slim

# set the work directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# builing dependencies for backend
RUN npm install

# builing React UI
RUN cd client && npm install && npm run build

EXPOSE 3001

CMD ["node","index.js"]