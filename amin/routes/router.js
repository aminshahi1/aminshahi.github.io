const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const users = require('./../Users');

let login = 0;
let signup = 0;

router.get('/', (req,res)=>{
    login = 0;
    signup = 0;
    res.render('Home', {users : users, signup, login});
});
router.get('/Home', (req,res)=>{
    login = 0;
    signup = 0;
    res.render('Home', {users : users, signup, login});
});
router.get('/About', (req,res)=>{
    login = 0;
    signup = 0;
    res.render('About', {users : users, signup, login});
})
router.get('/Login', (req,res)=>{
    res.render('Login', {users : users, signup, login});
})



router.post('/signup',
    check('email').isEmail(),
    check('password').isLength({min : 5}),
    (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        signup = 1;
    }
    if(errors.isEmpty()){
        signup = 0;
    }
    for(let c = 0; c < users.length; c++){
        if(req.body.email == users[c].email){
            signup = 1;
        }
    }
    if (signup == 1){
        res.render('Home', {users : users, signup, login});
    }
    if (signup == 0){
        req.body.age = parseInt(req.body.age);
        users[users.length] = {id: users.length+1, fname: req.body.fname, lname: req.body.lname, age: req.body.age, email: req.body.email, password: req.body.password};
        console.log(users)
        res.render('Login', {users : users, signup, login});
    }
});





router.post('/login', (req,res)=>{
    login = 0;
    let w ;
    let help = 1;
    for(let a = 0; a < users.length; a++){
        if(users[a].email == req.body.email2 && users[a].password == req.body.password2){
            login = 0;
            w = a;
            help = 0;
            res.render('Wellcome', {users : users, signup, login, w});
        }
    }

    if(help == 1){
        login = 1;
        res.render('Login', {users:users ,login,signup});
    }

})
module.exports = router;