FROM ubuntu:16.04
RUN mkdir /home/example/
WORKDIR /home/example
COPY ./app .
RUN ls /home/example
RUN cat /home/example/message.txt
