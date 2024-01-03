# User Data Management App

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Routes](#routes)
- [Database Schema](#database-schema)


## Description
The User Data Management App is a web application built using Node.js and Express.js for server-side logic, EJS for templating, and MySQL for database management. This application allows users to manage a list of users, perform CRUD (Create, Read, Update, Delete) operations, and view user statistics.

## Features
- Display the total number of users on the home page.
- View a list of users with their details.
- Add new users with a unique username and email.
- Edit existing user information.
- Delete users from the database.
- Password verification for sensitive operations.
- Responsive design for various screen sizes.

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript)
- MySQL
- HTML5
- CSS3
- JavaScript

## Routes
- '/' - Home page displaying the total number of users.
- /user - View the list of users.
- /user/:id/edit - Edit user information.
- /user/new - Add a new user.
- /user/:id/delete - Delete a user


## Database Schema

```sql
CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(45) UNIQUE,
    email VARCHAR(91) UNIQUE NOT NULL,
    password VARCHAR(55) NOT NULL
);


