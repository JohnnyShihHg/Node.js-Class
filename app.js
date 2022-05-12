// console.log('Hello Node.js look here!');
// const hello=require('./hello')
// hello.helloapp()

// const http = require('http'); //內部原生套件
const path = require('path');
const express = require('express'); //引用第三方套件
const bodyParser = require('body-parser');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         return res.end('This is home page');
//     } 
// 		if (req.url === '/login') {
//         return res.end('This is login page'); //當url是/login 回傳到頁面上
//     } 
//     res.end('page not found :(');
// });
const app = express();




app.use((req, res, next) => {
	console.log('Hello!');
    next(); //自己寫的因為程式不知道何時要中斷所以要加next
});

app.use((req, res, next) => {
	console.log('World!');
    next();
});


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'index.html')); //原生寫法
});
app.get('/login', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/');
    } else {
				console.log('欄位尚未填寫完成！')
    }
});
app.get('/*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', '404notFound.html'));
});
app.listen(3000, () => {
	console.log('running server on port 3000');
});
