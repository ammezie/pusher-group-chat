# Pusher Group Chat

A simple group chat app using Vue.js and Pusher

## Getting Started

Clone the project repository by running the command below if you use SSH

```bash
git@github.com:ammezie/pusher-group-chat.git
```

If you use https, use this instead

```bash
https://github.com/ammezie/pusher-group-chat.git
```

After cloning, run:

```bash
npm install
```

Duplicate `.env.example` and rename it `.env`

## Setup Pusher

If you don't have one already, create a free Pusher account at [https://pusher.com/signup](https://pusher.com/signup) then login to your dashboard and create an app.

Then fill in your Pusher app credentials in your `.env` file:

```bash
PUSHER_APP_ID=xxxxxx
PUSHER_APP_KEY=xxxxxxxxxxxxxxxxxxxx
PUSHER_APP_SECRET=xxxxxxxxxxxxxxxxxxxx
PUSHER_APP_CLUSTER=xxxxxxxxxxxxxxxxxxxx
```

Also, remember to fill in other additional options in `server.js`:

```bash
// server.js

encrypted: true
```

And finally, start the application:

```bash
npm start
```

and visit [http://localhost:000/](http://localhost:3000/) to see the application in action.