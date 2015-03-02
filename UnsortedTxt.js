//getting students json object
var student=require('./source1');	
var fs = require('fs');	

//getting jstoxml module 
var xml=require("jstoxml");		





var UnsortedTxt=function(){
};

UnsortedTxt.prototype.unsortedTxt=function(){
		try{
		
			fs.writeFile('stud.txt',"First Name | Last Name | Score"+"\n");

			for (var i = 0; i <=student.students.length-1 ; i++) {
				// console.log(student.students[i].id);
				var data=(student.students[i].id)+"|"+(student.students[i].fName)+"|"+(student.students[i].lName)+"|"+(student.students[i].score)+"\n";		//logic for witing into file in the same formate
			
				fs.appendFile('UnsortedTxt.txt', data, function (err) {
	     
	     			if (err) throw err;
	     			//console.log('Its saved! in same location.');
   	 			});
			};
		}
		
		catch(e){

			console.error("file not found");
			process.exit(e.code);

		}

};

module.exports=new UnsortedTxt();

//console.log(new Text.printInTxt());