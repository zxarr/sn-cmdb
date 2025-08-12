FROM php:8.2-apache

# Set the working directory
WORKDIR /var/www/html

# Copy application files
COPY src/serviceNow/api.php /var/www/html/api.php
COPY .env /var/www/html/.env
COPY composer.json ./

# Install system dependencies and PHP extensions
RUN apt-get update && \
    apt-get install -y libcurl4-openssl-dev unzip && \
    docker-php-ext-install curl zip libzip

# Install Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && rm composer-setup.php

# Install PHP dependencies
RUN composer install

# Expose the application port
EXPOSE 80