const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator')
let v = 0;
let b = 0;



let users = require('./../Users');

router.get('/', (req,res)=>{
    res.render('index', {users : users , v,b});
    v = 0;
})

router.post('/',
    check('id').isInt(),
    check('name').isString(),
    check('email').isEmail(),
    (req,res)=>{

    const errors = validationResult(req);
    if(errors.isEmpty()) {
        for (let a = 0; a < 1; a++) {
            req.body.id = parseInt(req.body.id);
            users[users.length] = {id: req.body.id, name: req.body.name, email: req.body.email};
            v = 0;
            b = 1;
        }
    }else if(!errors.isEmpty()){
        v = v+1;
        b = 0;
    }
        res.render('index', {users : users, v,b});
})

router.delete('/:id', (req,res)=>{
    users = users.filter(user => {
        if(user.id != req.params.id){
            return user;
        }
    })


    res.render('index', {users : users , v, b});
})


module.exports = router;