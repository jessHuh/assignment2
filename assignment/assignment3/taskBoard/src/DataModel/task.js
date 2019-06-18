const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// create ninja Schema & model 
const TaskSchema = new Schema({
    id: {
        type: String,
       required: [true, "Id field is required"]
    },
    content: {
        type: String,
        required: [true, "Message field is required"]
    },
    showPopUp: {
        type: Boolean,
        default: false
    },
    popup: {
        type: String
    },
    tag: {
        type: String
    },
    showedit:{
        type: Boolean,
        default: false
    } 
});

const Task = mongoose.model('task', TaskSchema);

module.exports = Task;

