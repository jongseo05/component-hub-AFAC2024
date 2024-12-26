const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

// Initialize the app
const app = express();
const PORT = 5000;

// Enable CORS to allow requests from the client
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // 모든 도메인 허용
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Content-Type 헤더 허용
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // 허용할 HTTP 메서드 설정
    next(); // 다음 미들웨어로 넘어감
});



// Setup storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Upload files to 'uploads/' directory
    },
    filename: (req, file, cb) => {
        const now = new Date();
        const formattedDate = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}-${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}`;
        cb(null, `${formattedDate}-${file.originalname}`); // Use formatted date and original filename
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
app.post('/upload/js', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No JS file uploaded.');
    }
    res.json({ message: 'JS file uploaded successfully!', file: req.file });
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
