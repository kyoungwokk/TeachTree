const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // JWT 라이브러리
const bcrypt = require('bcrypt'); // 비밀번호 암호화 라이브러리

const app = express();
const port = 3001;
const SECRET_KEY = 'your_secret_key'; // JWT 서명용 비밀키 (환경변수로 설정 권장)

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL 연결 설정
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ruddnr',
    database: 'teachtree',
});

// MySQL 연결
db.connect((err) => {
    if (err) {
        console.error('MySQL 연결 오류:', err);
        throw err;
    }
    console.log('Connected to MySQL');
});

// JWT 생성 함수
const createToken = (user) => {
    return jwt.sign(
        { id: user.id, username: user.username }, // ID와 사용자 이름 포함
        SECRET_KEY,
        { expiresIn: '1h' } // 1시간 유효기간
    );
};

// 회원가입 API
app.post('/api/signup', async (req, res) => {
    const { id, password, email, username, phone_number } = req.body;

    console.log('Received data:', { id, password, email, username, phone_number });

    if (!id || !password || !email || !username || !phone_number) {
        return res.status(400).json({ success: false, message: 'Invalid data: Missing required fields' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10); // 비밀번호 암호화
        const sql = `
            INSERT INTO users (id, password, email, username, phone_number)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(sql, [id, hashedPassword, email, username, phone_number], (err, result) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ success: false, message: 'Database error' });
            }

            // 회원가입 성공 후 JWT 생성
            const token = createToken({ id, username });
            res.status(200).json({ success: true, message: 'Sign up successful', token });
        });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// 로그인 API (ID 기반)
app.post('/api/login', (req, res) => {
    const { id, password } = req.body; // ID로 로그인
    console.log(id);

    if (!id || !password) {
        return res.status(400).json({ success: false, message: 'Invalid data: Missing ID or password' });
    }

    const sql = 'SELECT * FROM users WHERE id = ?'; // ID로 사용자 조회
    db.query(sql, [id], async (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }

        if (results.length === 0) {
            console.log('No user found with the provided ID');
            return res.status(401).json({ success: false, message: 'Invalid ID or password' });
        }

        const user = results[0];
        console.log('User from DB:', user); // DB에서 조회한 사용자 출력
        console.log('Provided password:', password); // 사용자 입력 비밀번호 출력

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            console.log('Password mismatch');
            return res.status(401).json({ success: false, message: 'Invalid ID or password' });
        }

        // 로그인 성공 시 JWT 생성
        const token = createToken({ id: user.id, username: user.username });
        res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user: { id: user.id, username: user.username, email: user.email },
        });
    });
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
