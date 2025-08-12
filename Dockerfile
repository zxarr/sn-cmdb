# Dockerfile for Apache & PHP
FROM php:8.2-apache

# Install required PHP extensions
RUN docker-php-ext-install mysqli

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Copy website files to Apache root
COPY ./src/ /var/www/html/

EXPOSE 80