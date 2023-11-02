const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator')
let v = 0;
let b = 0;
let c = 0;



let users = require('./../Users');
users.sort();

router.get('/', (req,res)=>{
    users.sort();
    res.render('index', {users : users , v,b,c});
    v = 0;
})

router.post('/',
    check('id').isInt(),
    check('name').isString(),
    check('email').isEmail(),
    (req,res)=>{
    users.sort();
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        for (let a = 0; a < 1; a++) {
            req.body.id = parseInt(req.body.id);
            users[users.length] = {id: req.body.id, name: req.body.name, email: req.body.email};
            v = 0;
            b = 1;
            c = 0;
        }
    }else if(!errors.isEmpty()){
        v = v+1;
        b = 0;
        c = 0;
    }
        res.render('index', {users : users, v,b,c});
})

router.delete('/:id', (req,res)=>{
    users.sort();
    users = users.filter(user => {
        if(user.id != req.params.id){
            c = 1;
            v = 0;
            b = 0;
            return user;
        }
    })
    res.render('index', {users : users , v, b,c});
})

router.get('/user/:id', (req,res)=>{
    var w;
    for(let a = 0; a <users.length; a++){
        if(users[a].id = req.params.id){
            w = a;
        }
    }
    res.render('user',{users : users , w});
})


module.exports = router;