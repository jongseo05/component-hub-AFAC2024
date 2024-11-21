const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// 파일 저장 설정
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, 'public')));

// 파일 업로드 엔드포인트
app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        console.log(`${req.file.originalname} upload is complete!`);
        res.json({
            message: 'File uploaded successfully',
            file: req.file
        });
    } else {
        res.status(400).json({ message: 'File upload failed' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});