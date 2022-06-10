# base image from node
FROM node:18
# define working dir 
WORKDIR /app
# delete preexisting files
RUN rm -rf /app
# copy app dir to container dir
COPY app /app

# RUN runs on build, cmd runs on startup of an instance

# installs dependencies
RUN npm install


ENV PORT=5000
# expose port 5000
EXPOSE 5000

# starts script definded in package.json (>node index.js)
CMD npm run app