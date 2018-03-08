FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

ENV PORT=8000 HOSTNAME=0.0.0.0 DB_USER=student DB_PASS=student DB_NAME=etsy-dock

EXPOSE 8000
EXPOSE 5432
CMD [ "npm", "start" ]