# CC-Projekt
Webpage with database distrubed on docker and orchestrated with dockercompose

## what has been done
-simple webapp with nodejs

-simple dockerfile to build and run webapp

## how to use

build image with the name nodeapp (use docker images to confirm)

    docker build -t nodeapp .

run image nodeapp as instance with name nodeapptest and route Port 9999 from instance to 8080 on localhost

    docker run --name nodeapptest -p 8080:9999 

stops the instance (can take a little while)

    docker stop nodeapptest

delete all remains of instance

    docker rm nodeapptest