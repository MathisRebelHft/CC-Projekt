# base image from node
FROM node:18
# define working dir 
WORKDIR /home/node/app
# copy app dir to container dir
COPY app /home/node/app

# RUN runs on build, cmd runs on startup of an instance

# installs dependencies
RUN npm install


ENV PORT=9999
# expose port 9999
EXPOSE 9999

# starts script definded in package.json (>node index.js)
CMD npm run app