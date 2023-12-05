const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
    title: String,
    votingType: String,
    options: [String],
    votes: [Number],
    usersVoted: [Number],
});

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;
