//getting students json object
var student=require('./source1');	
var fs = require('fs');	

//getting jstoxml module 
var xml=require("jstoxml");		




//creating a class called Json.
var UnsortedXml=function (){
};

UnsortedXml.prototype.unsortedXml=function(){
		
		//converting json object into xml
		var conversion=xml.toXML( student.students,{header: false, indent: '  '});

		try{
		
			//console.log("in sorted xml");
			fs.writeFile('UnsortedXml.xml','Conversion from json onject to xml'+"\n"+conversion,function (err) {
	     
	     			if (err) throw err;
	     			//console.log('Its saved! in same location.');
   	 			});
			}
		catch(e){
				
			console.log("Error"+e);

			}
			//console.log(conversion);

};


//Creatig an object of class created 
var json1=new UnsortedXml();
module.exports=json1;
