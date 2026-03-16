const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Registration Schema
const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  stack: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Registration = mongoose.model('Registration', registrationSchema);

// Routes
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, phone, stack, message } = req.body;

    const newRegistration = new Registration({
      name,
      email,
      phone,
      stack,
      message
    });

    await newRegistration.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});