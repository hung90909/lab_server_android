
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken')
var router = express.Router()
var User = require("../models/user")
var Book = require("../models/book")
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser');
// // parse requests of content-type - application/json
router.use(bodyParser.json());
router.use(express.json())
router.use(cookieParser());
const parser = bodyParser.urlencoded({ extended: true });

router.use(parser);
router.get("/register", (req, res) => {
    res.render("register")
})
router.get("/login", (req , res) =>{
   res.render("login")
})
router.post('/signup', async function (req, res) {
    const user = await User.findOne({ username: req.body.username })
    if (user) {
        const err = "Email này đã tôn tại ! "
        res.render("register", {
            error: err
        })
    }
    else {
        var newUser = new User({
            username: req.body.username,
            password: req.body.password
        });
        // save the user
        await newUser.save();

    }
});


router.post('/signin', async function (req, res) {
    console.log(req.body);
    let user = await User.findOne({ username: req.body.username });
    console.log(user);
    if (!user) {
        const err = "Tài khoản không tồn tại !"
        res.render("login", {
            error: err
        });
    } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
            if (isMatch && !err) {
                // if user is found and password is right create a token
                const token = jwt.sign({ user }, config.secret, { expiresIn: '15m' });
                res.cookie('token', token, { httpOnly: true });
                res.redirect('/api/book');
            } else {
                const err = "Mật khẩu không chính xác !"
                res.render("login", {
                    error: err
                });
            }
        });
    }
});

router.get('/book', verifyToken, async function (req, res) {
    try {
        let books = await Book.find();
        if (books) {
            res.render("home", {
                books: books.map(book => book.toJSON())
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

function verifyToken(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/api/login');
    }

    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
            return res.redirect('/api/login');
        }
        req.user = decoded.user;
        next();
    });
}

router.get("/addBooks", verifyToken, (req , res) =>{
    res.render("addBooks")
})

router.post('/book',verifyToken, async function (req, res) {
    // var token = getToken(req.headers);
        var newBook = new Book({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher
        });

       await newBook.save()
       .then(() =>{
        res.redirect("/api/book")
       })
       .catch(err =>{
        console.log(err);
       })
});

module.exports = router;
