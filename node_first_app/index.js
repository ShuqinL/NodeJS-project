//import the NPM dependancy package
const express = require("express");

//initialise express() inside and write to the app variable
const app = express();

const bodyParser = require("body-parser");
//import route module and pass your app
//require("./routes/userRoutes")(app);

//choose what port on which to run the server
const PORT = 5000;

 //parse body of incoming json requests
 app.use(bodyParser.json());
//use the app variable and listen on the port
app.get("/users", (req, res) => {

    let users;

    // request data from server and save in cars variable;

    res.send("users")
  })


app.listen(PORT, () => {   
    console.log(`Server running`);
});
