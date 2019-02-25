#!/bin/bash

/usr/local/bin/docker-compose -f /home/sid/wtl-web/docker-compose.yml run certbot renew \
&& /usr/local/bin/docker-compose -f /home/sid/wtl-web/docker-compose.yml kill -s SIGHUP webserver
