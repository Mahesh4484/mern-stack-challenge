const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/mern_challenge', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

const transactionRoutes = require('./routes/transactionRoutes');
app.use('/api', transactionRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
