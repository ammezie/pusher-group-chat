## Pusher Group Chat
A simple group chat app using Vue.js and Pusher

### Getting Started

Clone the project repository by running the command below if you use SSH

```
git@github.com:ammezie/pusher-group-chat.git
```

If you use https, use this instead

```
https://github.com/ammezie/pusher-group-chat.git
```

After cloning, run:

```
npm install
```

Duplicate `.env.example` and rename it `.env`

### Setup Pusher

If you don't have one already, create a free Pusher account at https://pusher.com/signup then login to your dashboard and create an app.

Then fill in your Pusher app credentials in your `.env` file:

```
PUSHER_APP_ID=xxxxxx
PUSHER_APP_KEY=xxxxxxxxxxxxxxxxxxxx
PUSHER_APP_SECRET=xxxxxxxxxxxxxxxxxxxx
```

Also, remember to fill in the `cluster` of your Pusher app and other additional options in `server.js`:

```
// server.js

cluster: 'eu',
encrypted: true
```

And finally, start the application:

```
npm start
```

and visit [http://localhost:000/](http://localhost:3000/) to see the application in action.