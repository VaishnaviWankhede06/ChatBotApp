const express = require('express');
const connectDB = require('./database');
const chatbotRoutes = require('./routes/chatbot');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/chatbot', chatbotRoutes);

// Database connection
connectDB();

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
