const User = require("../models/user");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: passwordHash
        });

        const savedUser = await newUser.save();
        res.status(200).json({
            success: true,
            message: "Register successfully",
            data: savedUser
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Register failed",
            error: err
        })
    }
}


exports.login = async (req, res,next) => {
    try {
        const { email, password } = req.body;
        throw new Error("Something went wrong");
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });

        }
        const token = jwt.sign({ user,id: user._id }, process.env.JWT_SECRET);

        res.status(200).json({ success: true, token, user });
    }
    catch (err) {
        console.log("hello catch");
       next(err);
        
    }
}