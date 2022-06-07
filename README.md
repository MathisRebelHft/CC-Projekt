# CC-Projekt
Webpage with database distrubed on docker and orchestrated with dockercompose

## what has been done
-simple webapp with nodejs
-simple dockerfile to build and run webapp

## how to use
Start an indented code block following a paragraph with a blank line and at least four spaces of indentation:

    This is a code block.

    Blank lines between indented lines do not end the code block.

    Here is some HTML:
        <div class="footer">
            © 2009—2017 JetBrains · All rights reserved
        </div>
This line of text is not indented. It ends the code block and starts a new paragraph.

build image with the name nodeapp (use docker images to confirm)
docker build -t nodeapp .

run image nodeapp as instance with name nodeapptest and route Port 9999 from instance to 9999 on localhost
docker run --name nodeapptest -p 9999:9999 nodeapp