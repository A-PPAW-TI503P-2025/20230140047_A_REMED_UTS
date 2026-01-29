const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const apiRoutes = require('./routes/api');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.use('/api', apiRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Sync Database and Start Server
sequelize.sync({ force: false }) // force: false won't drop tables if they exist
    .then(() => {
        console.log('Database connected and synced.');
        app.listen(PORT, () => {
            console.log(`Server is running at: http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
