var dbUrl='localhost/shail';
var collections=['users'];
var db=require('mongojs').connect(dbUrl,collections);

function user(firstname,lastname,email){
	this.firstname=firstname;
	this.lastname=lastname;
	this.email=email;
}

var user1=new user('gungun','shail','gungun.shail@gmail.com');
/*
db.users.save(user1);
*/

/*
db.users.find(user1,function(err,users){
	if(err||!users.length) console.log("User: " + users.email +" not found!");
	else users.forEach(function(user){
		console.log(user.email);
	});
});
*/

db.users.find(function(err,users){
	if(err||!users.length) console.log("Opps No record found");
	else users.forEach(function(user){
		console.log(user.email);
	});
});
