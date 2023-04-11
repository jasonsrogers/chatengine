# Simple Chat Engine

This is a simple chat engine that uses [ChatEngine](https://chatengine.io/) to create a chat room. It uses [React](https://reactjs.org/) to create the UI and Node.js to create the server.

[Full blog article](https://blog.chatengine.io/fullstack-chat/nodejs-reactjs)

## Chat Engine Setup

In [ChatEngine](https://chatengine.io/), create a new project (add a new user at this point if you want).

Get the private key from the project details and add it to `CHAT_ENGINE_KEY` the `backend/.env` file.

Get the ProjectID from the project details and add it to `VITE_CHAT_ENGINE_PROJECT_ID` in the `frontend/.env` file.

## Running the app

In the `backend` folder, run `npm install` and then `npm run start`.

In the `frontend` folder, run `npm install` and then `npm run dev`.
