const express = require ('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// Database Configuration

const db = require('./config/keys').mongoURI;

// Connect to MongoDb

mongoose
 .connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then( () => console.log("Woahoo Janii Mubarakaan! MongoDb Connection Successful!"))
  .catch( (err) => console.log("errorrr heheheeh " +err));



app.get ('/', (req,res) => res.send('Hey Budddy Hello!'));

//Use Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server is running on port ${port}`));