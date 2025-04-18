const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User'); 
router.get('/register', (req, res) => {
  res.render('register');
});
router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.send('Username already exists.');

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      role // 'admin', 'zonal_head', or 'user'
    });

    await newUser.save();
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});
// Show login page
router.get('/login', (req, res) => {
    res.render('login'); // Make sure login.ejs exists in /views
  });
  
  // Handle login form
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username });
    if (!user) return res.send('User not found.');
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.send('Incorrect password.');
  
    // Store user info in session
    req.session.user = { id: user._id, role: user.role };
  
    // Redirect based on role
    if (user.role === 'admin')if (user.role === 'admin') {
        // Dummy data for testing — replace with DB queries later
        const pendingRequests = [
          { _id: '1', department: 'IT', amount: 10000, reason: 'Server upgrade' },
          { _id: '2', department: 'ECE', amount: 7500, reason: 'Lab equipment' },
        ];
      
        const analytics = {
          released: 17500,
          flagged: 2,
        };
      
        return res.render('head', { pendingRequests, analytics });
      }
      
      if (user.role === 'zonal_head') {
        // Dummy data — replace with DB logic later
        const approvedFunds = [
          { eventName: 'Tech Expo', amount: 12000, deadline: '2025-05-01' },
          { eventName: 'Workshop Series', amount: 8000, deadline: '2025-05-15' },
        ];
      
        return res.render('zone', { approvedFunds });
      }
      
      if (user.role === 'user') {
        // Dummy events to verify
        const eventsToVerify = [
          { _id: 'evt1', name: 'Hackathon 2025', date: '2025-04-20' },
          { _id: 'evt2', name: 'Tech Talk Series', date: '2025-04-25' }
        ];
      
        // Dummy voting history
        const votingHistory = [
          { eventName: 'AI Workshop', status: 'happened' },
          { eventName: 'Cyber Drill', status: 'not_happened' }
        ];
      
        return res.render('user', {
          eventsToVerify,
          votingHistory,
          user: { name: user.username, kycVerified: false }
        });
      }
      
  });
  
module.exports = router;
