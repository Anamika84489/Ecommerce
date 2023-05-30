const mongoose = require("mongoose");
// mongoose.connect(`mongodb://localhost/${env.db}`);

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://anamika:anamika@cluster0.qptgbtm.mongodb.net/testdb?retryWrites=true&w=majority"     
    )
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
  // .catch((err) => {  --> this catch error handle by "Unhandled Promise Rejection"
  //   console.log(err);
  // });
};

module.exports = connectDatabase;
