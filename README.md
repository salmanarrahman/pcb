# PC Builder Assignment 6

This is a full-stack Next.js project for PC Builder Assignment-6.

## Description

This project is a web application that allows users to build and customize their own PC. It utilizes Next.js for the frontend and next js backend API for managing products, reviews, and user sessions.

## Features

- Browse for PC components.
- Add components to the PC builder.
- View and edit the PC components in the builder.
- View product details and specifications.
- Leave reviews for products.
- User authentication and session management.

## Technologies Used

- Frontend: Next.js, React, Redux, Tailwind CSS
- Backend API: next.js, fs, MongoDB
- User Authentication: NextAuth.js
- Deployment: Vercel

## Production Deployment

The project is deployed to Vercel and can be accessed using the following link:

[Live Demo: https://pc-builder-assignment-6.vercel.app/](https://pc-builder-assignment-6.vercel.app/)

## How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/shohagroy/pc-builder-assignment-6.git
cd pc-builder-assignment-6
```

# Install frontend and backend both dependencies

cd pc-builder-assignment-6
npm install

# Create a .env file following content:

NEXTAUTH_SECRET=secret
NEXTAUTH_URL=url
DATABASE_URI=mongo db uri
NEXT_PUBLIC_NEXT_APP_URL= url
GITHUB_ID=github id
GITHUB_SECRET=github secret
GOOGLE_CLIENT_ID= google client id
GOOGLE_CLIENT_SECRET=google client secret

# Run the project server

npm run dev
