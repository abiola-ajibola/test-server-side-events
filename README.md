# Server Side Events

## Introduction

Server Side Events or SSE enable a client to make a single http request and keep the connection open for multiple responses from the server.

It has a limitation of 6 concurrent connection from a single client when using http/1.x, with http/2 the default concurrent connections is 100.

## Structure

The app has a server and a client, the server in in the folder `server`, while the client is in the folder `server-side-events-client`.

The server is an Express.js app that has two endpoints namely;
- GET `/events` for connection the client to the server and listening for events. Server events also work with POST and other HTTP methods.
- POST `/facts` this endpoint makes you post facts to the server, which is then emitted to all clients.

    The client is a React app bootstarpped with Vite, connects to the server and listens for server side events

## How To Run Locally

### Requirements

- Yarn >=1.22.15
  You can also use npm, but I did not try this with npm.
- Node.js version 16.x
  Should work with version >=14.x or even older versions, but I used version 16.x

### Install all dependencies

Go to the root folder and run:

```bash
cd server && yarn && cd ../server-side-events-client && yarn
```
    OR

Open the `server` and `server-side-events-client` folders in separate terminals, then in the `server` folder install all the dependencies for the server by running:

```bash
yarn
```

Then in the `server-side-events-client` folder, install all the dependencies by running:

```bash
yarn
```

### Run Locally

To run the app locally:
```bash
cd server && yarn start-server && cd ../server-side-events-client && yarn dev
```

    OR

Open the `server` and `server-side-events-client` folders in separate terminals, then in the `server` folder start the server by running:

```bash
yarn start-server
```

Then in the `server-side-events-client` folder, start the vite development server by running:

```bash
yarn dev
```
