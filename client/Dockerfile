# base image 
FROM node:15.6.0-alpine3.10

# Create app directory
RUN mkdir -p /client/
WORKDIR /client/

# Install app dependencies
COPY package*.json /client/
RUN yarn install

# Bundle app source
COPY . /client/

# Set the command when container start running
CMD ["yarn", "start"]