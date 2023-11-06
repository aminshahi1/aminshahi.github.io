const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
let User1 = require('./../models/Users');
let User;
let login = 0;
let signup = 0;

router.get('/', async (req,res)=>{
    User = await User1.find({});
    login = 0;
    signup = 0;
    res.render('Home', {users : User, signup, login});
});
router.get('/Home', async (req,res)=>{
    User = await User1.find({});
    login = 0;
    signup = 0;
    res.render('Home', {users : User, signup, login});
});
router.get('/About', (req,res)=>{
    login = 0;
    signup = 0;
    res.render('About', {users : User, signup, login});
})
router.get('/Login', async (req,res)=>{
    User = await User1.find({});
    res.render('Login', {users : User, signup, login});
})



router.post('/signup',
    check('email').isEmail(),
    check('password').isLength({min : 5}),
    async (req,res)=>{
    User = await User1.find({});
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        signup = 1;
    }
    if(errors.isEmpty()){
        signup = 0;
    }
    for(let c = 0; c < User.length; c++){
        if(req.body.email == User[c].email){
            signup = 1;
        }
    }
    if (signup == 1){
        res.render('Home', {users : User, signup, login});
    }
    if (signup == 0){
        req.body.age = parseInt(req.body.age);
        const user = new User1({
            id: User.length+1,
            first_name: req.body.fname,
            last_name: req.body.lname,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password
        });

        await user.save();

        res.render('Login', {users : User, signup, login});
    }
});





router.post('/login', async (req,res)=>{
    User = await User1.find({});
    login = 0;
    let w ;
    let help = 1;
    for(let a = 0; a < User.length; a++){
        if(User[a].email == req.body.email2 && User[a].password == req.body.password2){
            login = 0;
            w = a;
            help = 0;
            res.render('Wellcome', {users : User, signup, login, w});
        }
    }

    if(help == 1){
        login = 1;
        res.render('Login', {users:User ,login,signup});
    }

})
module.exports = router;