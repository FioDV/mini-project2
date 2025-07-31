// Mongoose Schema
/**
 Set the rules for our connection
 how many fields
 type of data
 which field is required and which one no
 */

 // Import mongoose to define the schema and model
import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    patient_id: { 
        type: String,
        unique: true,
        required: [true, 'Patient ID is required'],
    },
    name: { 
        type: String,
        required: [true, 'Patient Name is required'],
        min: [2, 'Too few letters'],
    },
    gender: { 
        type: String,
        enum: ['male', 'female'],
    },
    date_birth: { 
        type: Date,
        required: true,
    },
    email: { 
        type: String,
        unique: true,
        match: [/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/, "Invalid email"]
    },
});



// Create the Model (with the standard collection name behavior => patient):
const Patient = mongoose.model('Patient', patientSchema); 

// we need to export Patient model so we can import it
// in create, update, delete, read files
export default Patient;