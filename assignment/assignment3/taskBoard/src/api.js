const express = require('express');
const router = express.Router();
const Task = require('./DataModel/task')

// get a list of ninjas from the db
router.get('/tasks', function(req, res, next){
    Task.find({}).then(function(tasks){
        console.log(tasks);
        res.send(tasks);
    }).catch(next);
});

// add a new ninja to the db
router.post('/tasks', function(req, res, next){
    Task.create(req.body).then(function(task){
        res.send(task);
    })
});

// update a ninja in the db
router.put('/tasks/:id', function(req, res, next){
    Task.findOneAndUpdate({id: req.params.id}, req.body).then(function(){
        Task.findOne({id: req.params.id}).then(function(task){
            res.send(task); 
        });
    });
});

// delete a ninja from the db
router.delete('/tasks/:id', function(req, res, next){
    Task.findOneAndRemove({id: req.params.id}).then(function(task){
        res.send(task);
    }).catch(next);
});

module.exports = router;