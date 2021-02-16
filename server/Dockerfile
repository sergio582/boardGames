# base image 
FROM node:15.6.0-alpine3.10

# Create app directory
RUN mkdir -p /server/
WORKDIR /server/

# Install app dependencies
COPY package*.json /server/
RUN yarn install

# Bundle app source
COPY . /server/

# Set the command when container start running
CMD ["npm", "start"]