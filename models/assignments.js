var mongoose = require('mongoose');

var AssignmentSchema = new mongoose.Schema({
    name: String,
    date_completed: {type: Date, default: Date.now},
    score: Number,
    _someId: mongoose.Schema.Types.ObjectId,
    living: Boolean,
    age: {type: Number, min: 18, max: 65}
});

module.exports = mongoose.model('Assignment', AssignmentSchema);