const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./userRoutes');
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://kushalsangavat46:sangavatkush@cluster0.kal4m.mongodb.net/', {
 useNewUrlParser: true,
 useUnifiedTopology: true, }).then(() => {console.log('MongoDB Connected') })
 .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));