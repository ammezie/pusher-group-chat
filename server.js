const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const redis = require('redis');
const redisStore = require('connect-redis')(session);
const Pusher = require('pusher');

const redisClient = redis.createClient();
const app = express();

// Session middleware
// app.set('trust proxy', 1);
app.use(session({
    secret: 'somesuperdupersecret',
    store: new redisStore({
        host: '127.0.0.1',
        port: 6379,
        client: redisClient
    }),
    resave: false,
    saveUninitialized: false
}))

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS middleware
app.use((req, res, next) => {
    // set headers to allow CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Create an instance of Pusher
const pusher = new Pusher({
    appId: 'xxxxxx',
    key: 'xxxxxxxxxxxxxxxxx',
    secret: 'xxxxxxxxxxxxxxxxxxx',
    encrypted: true
});

app.post('/join-chat', (req, res) => {
    // store username in session
    req.session.username = req.body.username;
    res.send('Joined');
});

app.post('/pusher/auth', (req, res) => {
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    // Retrieve username from session and use as presence channel user_id
    // console.log(req.session.username);
    const presenceData = {
        user_id: req.session.username,
        user_info: {
          name: 'Mr Pusher',
          twitter_id: '@pusher'
        }
    };

    const auth = pusher.authenticate(socketId, channel, presenceData);

    res.send(auth);
});

app.listen(3000, () => {
    console.log('Server is up on 3000')
});