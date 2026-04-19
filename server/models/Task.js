const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        task: {
            type: String,
            required: true,
        },
        status: {
            type: String,
        }
    },
    { timestamps: true },
);

module.exports = mongoose.model("Task", taskSchema);