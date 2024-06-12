const mongoose = require("mongoose");

//  const DB ="mongodb+srv://ne:Neha@123@cluster0.f7d78gp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


//  const DB ="mongodb+srv://ne:Neha@123@cluster0.f7d78gp.mongodb.net/stackdata?retryWrites=true&w=majority"

mongoose.connect('mongodb://127.0.0.1:27017/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
