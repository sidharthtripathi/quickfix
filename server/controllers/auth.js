const User = require("../models/user");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: passwordHash,
    });

    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "Register successfully",
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Register failed",
      error: err,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }
    const token = jwt.sign({ user, id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ success: true, token, user });
  } catch (err) {
    console.log("hello catch");
    next(err);
  }
};

exports.forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    //finding email in db
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).json({ success: false, message: "User not exist" });

    }
    const token = jwt.sign({ _id: user._id }, process.env.RESET_PASSWORD_KEY, { expiresIn: '15m' })
    

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.email,
        pass: process.env.password
      },

    });
    const data = {
      to: email,
      subject: 'Reset Account Password Link',
      html: `
  <h3>Please click the link below to reset your password</h3>
  <p><a>/resetpassword/${token}</a></p>
  `,
    }
    
    await user.updateOne({ resetlink: token });

    transporter.sendMail(data, function (error, body) {
      if (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "password link error", error: error.message })
      }
      return res.status(200).json({ success: true, message: 'Email has been sent' })
    })




  }
  catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: "Something went wrong !!", error: err });
  }

}

exports.updatePassword = async (req, res) => {
  try {
    const { token, password } = req.body
    if (token) {
      jwt.verify(token, process.env.RESET_PASSWORD_KEY, async (err, decoded_message) => {
        if (err) {
          return res.status(400).json({ sucess: false, message: 'Incorrect token or it is expired', error: err });

        }
        const user = await User.findOne({ resetlink: token });
        if (!user) {
          return res.status(400).json({ success: false, message: 'User with this token does not exist' });
        }
        user.password = password;
        await user.save();
        return res.status(200).json({ success: true, message: 'Your password has been changed' })
      })
    }
  }
  catch (err) {
      return res.status(400).json({
        success:false,
        message:"authentication error"
      })
  }
}