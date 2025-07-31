// Import express and the Employee model

import express from 'express';
import Patient from '../models/Patient.js';


// Routing with express
const router = express.Router();

// POST router for creating a new patient
router.post('/', async (req, res) => {
    try {
        // Logs the incoming data to check if it's correct
        console.log(req.body);
        const { patient_id, name, gender, date_birth, email } = req.body;
        // Ensuring that the client has provided all necessary data for creating an employee
        if (!patient_id || !name || !gender || !date_birth || !email) {
            //If any required field is missing, we return a 400 status
            return res.status(400).json({ message: 'All fields are required.' });
        }
        const newPatient = new Patient({
            patient_id,
            name,
            gender,
            date_birth,
            email,
        });
        // Save the new employee to the database
        const savedPatient = await newPatient.save();
        // Return the saved employee data with a 201 status
        res.status(201).json(savedPatient);
    }catch (error){
        res.status(400).json({ message: error.message });
    }
});

export default router;