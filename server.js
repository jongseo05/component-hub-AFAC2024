const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

// Initialize the app
const app = express();
const PORT = 5000;

// Enable CORS to allow requests from the client
app.use(cors());

// Setup storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Upload files to 'uploads/' directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Use timestamp and original filename
    },
});

// Multer middleware
const upload = multer({ storage });

// Create 'uploads' folder if it doesn't exist
const fs = require('fs');
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Upload route
app.post('/upload/jsx', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No JSX file uploaded.');
    }
    res.json({ message: 'JSX file uploaded successfully!', file: req.file });
});

app.post('/upload/css', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No CSS file uploaded.');
    }
    res.json({ message: 'CSS file uploaded successfully!', file: req.file });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
