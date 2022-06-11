# CC-Projekt
Webpage with database distrubed on docker and orchestrated with dockercompose (maybe docker swarm?)

Webpage as messaging board?

## Done
-simple webapp with nodejs

-simple db image with MongoDB

-simple dockerfile to build and run webapp

-docker-compose for web, db und proxy

-Proxy for roundrobin disrubution of traffic

-Communication between db and web 

-Web functionality

## To Be Done

-Devtools like Performance Observer (Use docker desktop)

-Make web pretty

-Do something with volumes?

-User auth?

## how to use

start service:

    docker-compose up

service availible on:

    http://localhost:4000

stop service:

    docker-compose down

remove remaining services

    docker-compose down --remove-orphans

## old

build image with the name nodeapp (use docker images to confirm)

    docker build -t nodeapp .

run image nodeapp as instance with name nodeapptest and route Port 9999 from instance to 8080 on localhost

    docker run --name nodeapptest -p 8080:9999 nodeapp

stops the instance (can take a little while)

    docker stop nodeapptest

delete all remains of instance

    docker rm nodeapptest
