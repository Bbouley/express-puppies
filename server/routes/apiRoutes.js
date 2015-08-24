var express = require('express');
var router = express.Router();
var utilities = require('../logic/puppyUtility');



router.get('/puppies', function(req, res, next) {
  var response = utilities.handleAllGet();
  res.json(response);
});


router.get('/puppy/:id', function(req, res, next){
  var response = utilities.handleSingleGet(req.params.id);
  res.json(response);
});

router.post('/puppies', function(req, res, next){
  var response = utilities.handlePost(req.body.puppyID, req.body.puppyName, req.body.puppyAge);
  res.json(response);
});

router.put('/puppy/:id', function(req, res, next){
  var response = utilities.handlePut(req.params.id, req.body);
  console.log(req.body.puppyID);
  res.json(response);
});

router.delete('/puppy/:id', function(req, res, next){
 var response = utilities.handleDelete(req.params.id);
 res.json(response);
});




// ## GET Request - all puppies - '/api/v1/puppies'

// 1. Set up Endpoint
// 1. Serve ALL puppies back in JSON
// 1. Test

// ## GET Request - single puppy - '/api/v1/puppy/<id>'

// 1. Set up Endpoint
// 1. Serve a SINGLE puppy back in JSON
// 1. Test

// ## POST Request - all puppies - '/api/v1/puppies'

// 1. Set up Endpoint
// 1. Serve the NEWLY CREATED puppy in JSON
// 1. Test

// ## PUT Request - single puppy - '/api/v1/puppy/<id>'

// 1. Set up Endpoint
// 1. Serve the UPDATED PUPPY in JSON
// 1. Test

// ## DELETE Request - single puppy - '/api/v1/puppy/<id>'

// 1. Set up Endpoint
// 1. Serve the DELETE PUPPY info in JSON
// 1. Test

module.exports = router;
