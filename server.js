const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Pool kết nối PostgreSQL (Render sẽ cung cấp DATABASE_URL)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// ✅ API đăng ký
app.post('/api/register', async (req, res) => {
    const { username, email, phone, password } = req.body;

    try {
        // Kiểm tra trùng email/sđt
        const check = await pool.query(
            'SELECT * FROM Users WHERE email = $1 OR phone = $2',
            [email, phone]
        );

        if (check.rows.length > 0) {
            return res.json({ success: false, message: 'Email hoặc số điện thoại đã tồn tại!' });
        }

        // Insert user
        await pool.query(
            'INSERT INTO Users (username, email, phone, password) VALUES ($1, $2, $3, $4)',
            [username, email, phone, password]
        );

        return res.json({ success: true, message: 'Đăng ký thành công!' });
    } catch (err) {
        console.error(err);
        res.json({ success: false, message: 'Lỗi server!' });
    }
});

// ✅ API đăng nhập
app.post('/api/login', async (req, res) => {
    const { identifier, password } = req.body;

    try {
        const result = await pool.query(
            `SELECT * FROM Users 
       WHERE (email=$1 OR phone=$1 OR username=$1) 
       AND password=$2`,
            [identifier, password]
        );

        if (result.rows.length > 0) {
            res.json({ success: true, user: result.rows[0] });
        } else {
            res.json({ success: false, message: 'Thông tin đăng nhập không đúng!' });
        }
    } catch (err) {
        console.error(err);
        res.json({ success: false, message: 'Lỗi server!' });
    }
});

// ✅ API lấy danh sách người dùng
app.get('/api/Users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// 🚀 Run server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
