FROM mysql:5.7

COPY ./schema.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD=student

ENV MYSQL_DATABASE='sunchamps_dev'
  