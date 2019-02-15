// Most simple Route for an Express server
//
// Because this file is seperate from the index.js we export it as a module
// You will notice when we use this module that app is given as a variable
// The technical term for this is currying

module.exports = app => {
    
    var jsonfile = require("jsonfile")
    //var file = "/tmp/data.json"
    //var obj = {name: "JP"}
app.use(bodyParser.json());

    
    app.get("/users",(req,res)=>{
        console.log("fetching all users");
        //jsonfile reading
       
        jsonfile.readFile("./DB/users.json", function(err, content){
            //send file contents back to sender
            res.json(content);
        });
    });
    

   /*  jsonfile.writeFile(file,obj,function(err){
        console.error(err)
    }) */


    
     //app.get exercise
    // Route is accessible as GET: /demo
    // req is the parameter that refers to the request data
    // res is the parameter that refers to the request's sender
    //
  
   /*  app.get("/users", (req, res) => {
        // Some dummy data
      //
        console.log("fetching all users");
         // res.send(data) or res.sendStatus(statusCode)
      // To send a status message or data back to the requester
      //
        //res.send(users);

        //jsonfile reading
        jsonfile.readFile("./DB/users.json", function(err,content){
            //send file contents back to sender
            res.send(content);
        });    
    }) */

    //app.post exercise
    /* app.post("/users/new",(req,res) => {
        let email = req.body.email
        let username = req.body.username
        jsonfile.readFile("./DB/users.json", function(err, content){
            content.push({email:email, username: username});
            console.log("added" + email +"to DB");
            jsonfile.writeFile("./DB/users.json", content, function(err){
                console.log(err);
            });
            res.sendStatus(200);
        });
    }); */
   

  };