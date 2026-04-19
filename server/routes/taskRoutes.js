const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get("/allTasks", async (req, res) => {
    try {
        console.log(req.body, "reqqqq")
        const task = await Task.find();
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
})

router.post("/addTask", async (req, res) => {
    try {
        const { task, status } = req.body;
        console.log(req.body, "add task");
        if (!task & !status) {
            return res.status(400).json({ message: "Title and Status is required" });
        } else if (!task) {
            return res.status(400).json({ message: "Title is required" });
        } else if (!status) {
            return res.status(400).json({ message: "Status is required" });
        }
        const taskRes = await Task.create({
            task,
            status
        })
        res.json(taskRes);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
})

module.exports = router;

