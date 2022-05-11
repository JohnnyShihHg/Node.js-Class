// console.log('Hello Node.js look here!');
// const hello=require('./hello')
// hello.helloapp()
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('This is home page');
    } 
		if (req.url === '/login') {
        return res.end('This is login page'); //當url是/login 回傳到頁面上
    } 
    res.end('page not found :(');
});

server.listen(3000, () => {
	console.log('running server on port 3000');
});
