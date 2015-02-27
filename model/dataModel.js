exports.user=function user(email,pass,role,status){
	this.email=email;
	this.pass=pass;
	this.role=role;
	this.status=status;
};

exports.options=function options(text,isCorrect){
	this.text=text;
	this.isCorrect=isCorrect;
};

exports.question=function question(type,difficulty,options,que){
	this.type=type;
	this.difficulty=difficulty;
	this.options=options;
	this.que=que;
};
