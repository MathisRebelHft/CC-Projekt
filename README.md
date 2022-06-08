# CC-Projekt
Webpage with database distrubed on docker and orchestrated with dockercompose (maybe docker swarm?)

Webpage as messaging board?

## Done
-simple webapp with nodejs

-simple db image with mySQL

-simple dockerfile to build and run webapp

-docker-compose for web and db and a shared volume

## To Be Done

-Communication between db and web 

-Web functionality

-Proxy for roundrobin disrubution of traffic

-Devtools like Performance Observer

-Make web pretty

## how to use

start containers:

    docker-compose up

stop container:

    docker-compose down

## old

build image with the name nodeapp (use docker images to confirm)

    docker build -t nodeapp .

run image nodeapp as instance with name nodeapptest and route Port 9999 from instance to 8080 on localhost

    docker run --name nodeapptest -p 8080:9999 

stops the instance (can take a little while)

    docker stop nodeapptest

delete all remains of instance

    docker rm nodeapptest