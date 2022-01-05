// Connection to Express.js server
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Connection to mysql Server
const mysql = require('mysql2');

// Connect to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Mcowart1!',
        database: 'election'
    },
    console.log('Connect to the election database.')
);

// Return data from candidates
db.query(`SELECT * FROM candidates`, (err,rows) => {
    console.log(rows);
});

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});