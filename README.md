# Squares Lab Backend

## Project Description

Squareslab is an online store dedicated to music-inspired artwork and custom framed prints.

This project will provide the backend for the Squareslab application.

## Objectives

- Develop a REST API using Node.js and Express.
- Connect the application to MongoDB.
- Implement user registration and login.
- Secure authentication using JWT.
- Validate user information with express-validator.
- Manage custom artwork orders.

## Technologies
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- express-

## Instalation

1. Clone the GitHub repository.
2. Open the project folder in VS Code.
3. Install the dependencies using npm install.
4. create a .env file with the required evironment variables.
5. Start the server using node server.js

## Evironment Variables

The apllication requires the following evironment variables:

- PORT: Server port.
- MONGODB_URI: MongoDB Atlas connection string.
- JWT_SECRET: Secret key used to sign authentication tokens.

Use .env.example as a reference. Never upload the real .env file to GitHub.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/health | Check server status |
| POST | /api/auth/register | Register a new user | 
| POST | /api/auth/login | Log in an existing user |
| GET | /api/auth/me | Get the authenticated user's profile |

## Authentication

Users register using their name, email and password.

Passwords are secured using bcryptjs. After successful login, the API returns a JSON Web Token (JWT).

The /api/auth/me endpoint requires a valid Bearer token in the Authorization header.

The API uses express-validator to validate registration and login requests.