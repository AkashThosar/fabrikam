var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onDefault=function(req, res){
    res.send("<h1>Fabrikam</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Fabrikam is a multinational company</li>"+
                    " <li>company has their 24 Offices all over world.</li>"+
                    " <li>Human Resource</li>"+
                    " <li>Accounting and Project Management</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
