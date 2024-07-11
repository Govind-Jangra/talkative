
---

# Overview

A talkative is a real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO. This application allows users to send text, emojis, and pictures in chat messages with secure authentication using JWT. Users also have the option to update their profile picture.

## Features

- Real-time messaging with text, emojis, and images
- Secure authentication with JWT
- User profile picture updates
- State management using Redux Toolkit
- REST API with Express
- Image handling with Cloudinary

## Prerequisites

- Node.js and npm installed
- MongoDB database
- Cloudinary account

## Environment Variables

Create a `.env` file in the root directory and add the following values:

```
MONGO_URL=<your_mongodb_url>
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
```

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2. **Install client dependencies and build:**

    ```bash
    cd client
    npm install
    npm run build
    cd ..
    ```

3. **Install server dependencies:**

    ```bash
    npm install
    ```

4. **Run the application:**

    ```bash
    npm run dev
    ```

## Setup Cloudinary

Ensure you have a Cloudinary account set up. You can create a free account at [Cloudinary](https://cloudinary.com/).

## Usage

- Sign up or log in to the application.
- Start a chat with other users.
- Send text messages, emojis, and upload images.
- Update your profile picture from the user settings.

## Technologies Used

- **Frontend:**
  - React.js
  - Redux Toolkit
- **Backend:**
  - Node.js
  - Express.js
  - Socket.IO
- **Database:**
  - MongoDB
- **Image Handling:**
  - Cloudinary

## Contributing
Feel free to fork the repository and submit pull requests.
---

