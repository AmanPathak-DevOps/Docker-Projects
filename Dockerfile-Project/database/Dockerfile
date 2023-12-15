FROM mysql:latest

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=mysql123
ENV MYSQL_DATABASE=school

# Expose the MySQL port
EXPOSE 3306

# Define a named volume for MySQL data
VOLUME /var/lib/mysql

# Command to run the MySQL server
CMD ["mysqld"]