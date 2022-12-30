const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const events = require("./routes/api/events");

const workshopRouter  =  require ("./routes/api/workshop"); //workshop get route file
const Admin = require("./routes/api/admin.route")  //employee get route file
const researchRouter = require("./routes/api/reasearcher");//workshop get route file
const reviewer = require("./routes/api/reviewer")
const cors = require('cors');


const app = express();

// Bodyparser middleware

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true,useCreateIndex:true,
      useUnifiedTopology:true,
      useFindAndModify:false }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

app.use("/api/event", events);//

app.use('/workshop',workshopRouter);//workshop route
app.use('/research' , researchRouter); //research route
app.use('/admin',Admin);//Employee route
app.use('/reviewer',reviewer);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));





