var puppyData = require('../models/puppies.js');
var tempArray = puppyData.tempPuppyArray;

function handleAllGet(){
  return tempArray;
}


function handleSingleGet(puppyId){
  var pup = tempArray.filter(function(puppy){
    return puppy.puppyID===parseInt(puppyId);
  });
  if (pup.length>0){
    return pup[0];
  } else {
    return {message: "Puppy ain't existing here"};
  }
}

function handlePost(puppyId, puppyName, puppyAge){
    var pup = tempArray.filter(function(puppy){
    return puppy.puppyID === parseInt(puppyId);
  });
   if (pup.length>0){
    return {message:'puppy already exists'};
  } else {
    var newPostPuppy = new puppyData.Puppy(
      parseInt(puppyId),
      puppyName,
      parseInt(puppyAge)
      );
  tempArray.push(newPostPuppy);
  return ({message:'success', puppy: newPostPuppy});
 }
}

function handlePut(puppyId, bodyObject){
  // console.log(bodyObject.puppyID);
   if(Object.keys(bodyObject).length===0){
    return({message: 'enter a damn number!!!'});
  }
  var pup = tempArray.filter(function(puppy){
    return puppy.puppyID === parseInt(puppyId);
  });
  if (pup.length>0){
    for (var i = 0; i < tempArray.length; i++) {
      if(tempArray[i].puppyID === parseInt(puppyId)){
        for (var key in bodyObject){
          if(key === 'puppyName'){
            tempArray[i].puppyName = bodyObject.puppyName;
          } else if (key === 'puppyAge'){
            tempArray[i].puppyAge = parseInt(bodyObject.puppyAge);
          }
        }
      }
    }
    return tempArray;
  } else {
    return "Puppy ain't existing here";
  }
}

function handleDelete(puppyId){
     var pup = tempArray.filter(function(puppy){
    return puppy.puppyID===parseInt(puppyId);
  });
  if (pup.length>0){
     for (var i = 0; i < tempArray.length; i++) {
       if(tempArray[i].puppyID === parseInt(puppyId)){
        var tempPuppy = tempArray.splice(i, 1);
        return({
          message:'that puppy is gone',
          puppy: tempPuppy,
        });
       }
     }
  } else {
    return "Puppy ain't existing here" ;
  }
}


module.exports = {
  handleSingleGet: handleSingleGet,
  handlePost: handlePost,
  handlePut: handlePut,
  handleDelete: handleDelete,
  handleAllGet: handleAllGet
};
