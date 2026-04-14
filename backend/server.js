const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());

// Sample route for user authentication
app.post('/api/auth/login', [
    check('username').not().isEmpty(),
    check('password').isLength({ min: 6 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    // TODO: Add authentication logic
    res.status(200).json({ message: 'Login successful' });
});

// Sample route for profile management
app.get('/api/profile/:userId', (req, res) => {
    const { userId } = req.params;
    // TODO: Add logic to retrieve user profile
    res.status(200).json({ userId, name: 'Sample User', email: 'user@example.com' });
});

// Chat endpoints
app.post('/api/chat/message', (req, res) => {
    const { message } = req.body;
    io.emit('chat message', message);
    res.status(200).json({ message: 'Message sent' });
});

// Socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
