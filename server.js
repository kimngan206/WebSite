const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Cấu hình kết nối SQL Server
const config = {
    user: 'sa',
    password: '123456789', // ← thay đúng mật khẩu
    server: 'localhost\\ADMINCUTE',
    port: 1433,          // thêm dòng này nếu cần
    database: 'Web_User', // ← thay tên thật của DB bạn đang dùng
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

// Kết nối SQL
sql.connect(config)
    .then(() => console.log("✔️ Connected to SQL Server"))
    .catch(err => console.error("❌ SQL Connection Error: ", err));

// API đăng ký
app.post('/api/register', async (req, res) => {
    const { username, email, phone, password } = req.body;

    try {
        const pool = await sql.connect(config);

        // Kiểm tra trùng email/sđt
        const check = await pool.request()
            .input('email', sql.VarChar, email)
            .input('phone', sql.VarChar, phone)
            .query(`SELECT * FROM Users WHERE email = @email OR phone = @phone`);

        if (check.recordset.length > 0) {
            return res.json({ success: false, message: 'Email hoặc số điện thoại đã tồn tại!' });
        }

        // Insert user
        await pool.request()
            .input('username', sql.NVarChar, username)
            .input('email', sql.NVarChar, email)
            .input('phone', sql.NVarChar, phone)
            .input('password', sql.NVarChar, password)
            .query(`
        INSERT INTO Users (username, email, phone, password)
        VALUES (@username, @email, @phone, @password)
      `);

        return res.json({ success: true, message: 'Đăng ký thành công!' });

    } catch (e) {
        console.error(e);
        res.json({ success: false, message: 'Lỗi server!' });
    }
});
app.post('/api/login', async (req, res) => {
    const { identifier, password } = req.body;
    try {
        const pool = await sql.connect(config);
        const result = await pool.request()
            .input('identifier', sql.VarChar, identifier)
            .input('password', sql.VarChar, password)
            .query(`SELECT * FROM Users 
              WHERE (email=@identifier OR phone=@identifier OR username=@identifier) 
                    AND password=@password`);

        if (result.recordset.length > 0) {
            res.json({ success: true, user: result.recordset[0] });
        } else {
            res.json({ success: false, message: 'Thông tin đăng nhập không đúng!' });
        }
    } catch (err) {
        console.error(err);
        res.json({ success: false, message: 'Lỗi server!' });
    }
});

// API lấy danh sách tất cả người dùng
app.get('/api/users', async (req, res) => {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query('SELECT * FROM Users');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Lỗi server' });
    }
});


// Chạy server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
