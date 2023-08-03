FROM mysql:5.7
# Copy content from .sql to Docker mysql container
COPY ./mysql/setup.sql /docker-entrypoint-initdb.d/init.sql

EXPOSE 3306