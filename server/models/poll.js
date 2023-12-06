const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
    id: Number,
    title: String,
    votingType: String,
    options: [String],
    votes: [Number],
    usersVoted: [String],
    createdBy: String,
});

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;
