var mongoose = require('mongoose');
var GameSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 2},
    result: { type: [], required: true},
    gold: { type: Number, required: true}
}, {timestamps: true });
mongoose.model('Game', GameSchema);