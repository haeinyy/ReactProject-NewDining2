# base image
FROM node:latest

# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent
RUN chmod -R 777 /app/node_modules
COPY ./ ./

# start app
CMD ["npm", "start"]