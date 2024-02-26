//Client Routing here
var express = require('express');
var router = express.Router();
const pool = require('../database/connection');
var OTP= require('../utils/oneTimePasswordManagement');
const { ensureAuthenticatedAndClient } = require('./introRouter');


router.post('/adddetails', ensureAuthenticatedAndClient, async (req, res) => {
    try {

        console.log("hey")
        const {
            username,
            full_name,
            email,
            phone,
            country,
            address,
            gender,
            dob
        } = req.body;
        console.log('Received form data:', req.body);
        const conn = await pool.getConnection();

        await conn.query(
            "INSERT INTO CLIENTS (username, full_name, email, phone, country, address, gender, dob) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [username, full_name, email, phone, country, address, gender, dob]
        );

        conn.release();

        res.send('Details added successfully');

    } catch (error) {
        console.error('Error adding client details:', error);
        res.status(500).send('Error adding client details');
    }
});





module.exports = router;