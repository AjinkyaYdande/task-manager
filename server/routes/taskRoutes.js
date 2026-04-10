const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get("/", async (req, res) => {
    try {
        const task = await Task.find({ userId: req.userId });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
})

router.post("/", async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }


        const task = await Task.create({
            // userId: req.user.id,
            title,
            completed: false
        })
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
})

module.exports = router;

