var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Assignment = require('../models/assignments');

router.get('/', function(request, response, next){
   Assignment.find(function(err, assignments){
       response.json(assignments);
   });
});

router.post('/', function(request, response, next){

    Assignment.create(request.body, function(err, post){

        if(err){
            console.log("Error!!", err)
        }
        response.json(post);
    });
});

router.get('/:id', function(request, response, next){
    Assignment.findById(request.params.id, function(err, post){
        if(err){
            console.log("Error!!", err)
        }
        response.json(post);
    });
});

router.put('/:id', function(request, response, next){
    const updateData = {};
    const allowedFields = ['field1', 'field2', 'field3']; // Replace with actual fields
    for (const key in request.body) {
        if (allowedFields.includes(key)) {
            const value = request.body[key];
            // Validate the value (e.g., check type or sanitize)
            if (typeof value === 'string' || typeof value === 'number') { // Example validation
                updateData[key] = value;
            }
        }
    }
    Assignment.findByIdAndUpdate(
        request.params.id,
        { $set: updateData }, // Use $set operator for safe updates
        { new: true },
        function(err, post){
            if(err){
                console.log("Error!!", err)
            }
            response.json(post);
        }
    );
});

router.delete('/:id', function(request, response, next){
    console.log(request.body);
    Assignment.findByIdAndRemove(request.params.id, request.body, function(err, post){
        if(err){
            console.log("Error!!", err)
        }
        response.json(post);
    });
});



console.log('Assignments loaded, who cares');

module.exports = router;