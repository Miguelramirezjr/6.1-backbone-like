//var models = require('models');
var Likes = require('models/likes');
window.likes = new Likes ();

$(document).ready(function(){
  $('body').prepend(JST.application());

  $("#addbutton").on('click', function() {
      likes.increase();
      $("#addbutton").text(likes.get('count') +  "Likes")
  });

});

module.exports = Likes;



// var PersonCollection = require('models/person-collection');
//
// $(document).ready(function(){
//   // prepend the contents of `app/templates/application.hbs` into `body`
//   $('#container').append(JST.application());
//
//   var people = new PersonCollection([
//     {name: "Jacob Smith", email: "jake@theironyard.com"},
//     {name: "Mason Stewart"}
//   ]);
//
//   people.each(function(person){
//     $('.people').append(JST.person(person.toJSON()));
//   });
// });
