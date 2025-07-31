// MVC
// basic express template
// Always starting by importing the necessary packages:
// Using Express for handling HTTP requests.
import express from 'express';

// Using Mongoose to interact with MongoDB.
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//Import the router of each operation
//import create router:
import createPatientRoute from './routes/createPatient.js';
//import read router:

//import update router:

//import delete router:

// Initialize express app (Creating an instance of the Express app)
const app = express();
const port = 3000;

// Middleware for JSON (Middleware to parse JSON requests):
app.use(express.json());

// connect to our ATLAS database:
dotenv.config();
// let conn = process.env.mongoURI;
const connStr = process.env.mongoURI;

// console.log(conn);

// create function:
async function main(){
    try{
        //trying yo connect:
        await mongoose.connect(connStr);
        // For testing: Print a message to confirm connection
        console.log('Connected to MongoDB Atlas');
    }catch(error){
        console.log('MongoDB connection error:', error);
        //stop the application
        process.exit(1);
        /*
        1 for exit with error
        0 for exit at the end of running our task(no error)
        */
    }
}

// call the function:
main().catch(err => console.log(err));


//Postman => the ending url for post (create)
app.use('/api/patient', createPatientRoute);

//same for the rest of operations!

// at the end using linten:
// or adding the full structure with error handling:
app.listen(port, () => {
    console.log(`Application URL: http://localhost:${port}`);
})