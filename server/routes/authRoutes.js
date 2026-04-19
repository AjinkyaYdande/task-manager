const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body, "register");

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exist", msgId: -1 });
        }
        const user = await User.create({ email, password });
        res.status(201).json({ message: "User created successfully", msgId: 0 });
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = User.findOne({ email });
        if (!userExist) {
            return res.status(404).json({ message: "User not registered", msgId: -1 });
        } else {
            return res.status(200).json({ message: "User found", msgID: 0 })
        }
    } catch (error) {
        console.log(error, "error login");
    }
})

router.get("/users", async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
})


module.exports = router;

