var dbUrl='localhost/quiz';
var collections=['questions'];
var db=require('mongojs').connect(dbUrl,collections);

var dataModel=require("./model/dataModel.js");


//get all values from front end here..
var options=[];
options[0]=new dataModel.options("Functional Oriented");
options[1]=new dataModel.options("Object Oriented","Y");
options[2]=new dataModel.options("Scripting");
options[3]=new dataModel.options("markup");

var question=new dataModel.question("java","1",options,"What is java programming");

db.questions.save(question);
