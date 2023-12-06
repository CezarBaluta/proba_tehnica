const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const jwt = require('jsonwebtoken');
const User = require('./models/user'); 
const Poll = require('./models/poll');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(session({ secret: process.env.KEY, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());



const PORT = process.env.PORT || 5000;


const CONNECTION_URL =
"mongodb+srv://" +
process.env.MONGO_ADMIN +
":" +
process.env.MONGO_PASSWORD +
"@cluster0.fxllxhq.mongodb.net/?retryWrites=true&w=majority";
mongoose
.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
)
.catch((error) => console.log(error.message));


passport.use(new LocalStrategy({ usernameField: 'email' },User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



const generateToken = (user) => {
  return jwt.sign({email: user }, process.env.JWT_SECRET, {
    expiresIn: '1h', // tokenul expira dupa 1h
  });
};


app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User exists' });
        }
        const newUser = new User({ email });

        ///passport hash uieste parola
        await User.register(newUser, password);

        res.status(201).json({ message: 'OK' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
        }
});

app.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  ///  console.log(req);
    const token = generateToken(req.body.email);
    res.json({ message: 'Login successful', token });
  });
  

  const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log(decoded);
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  };
  
  app.post('/polls', verifyToken, async  (req, res) => {

    console.log(req.body);
    const { title, votingType, options } = req.body;

    const id = Math.floor(Math.random() * 1000000000);
    while(await Poll.findOne({id})){
      id = Math.floor(Math.random() * 1000000000);
    }

    const newPoll = new Poll({
      id,
      title,
      votingType,
      options,
    });
    const savedPoll = await newPoll.save();
    res.json({ message: 'Data received successfully!', saved:savedPoll });
  });

  app.get('/polls', async (req, res) => {
    const polls = await Poll.find({});
      res.json(polls);
   
  
});
app.get('/api', (req, res) => {
    res.json({ "message": ['Hello from server!',"LOL it works"] });
});