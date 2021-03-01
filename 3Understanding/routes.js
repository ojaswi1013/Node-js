const fs = require('fs');


const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        //res.setHeader('Content-Type' , 'text/html' );
        res.write('<HTML>');
        res.write('<HEAD><TITLE>ENTER MESSAGE</TITLE></HEAD>');
        res.write('<BODY><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></BODY>');
        res.write('</HTML>');
        return res.end();    
    }
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type' , 'text/html' );
    res.write('<HTML>');
    res.write('<HEAD><TITLE>FIRST PAGE</TITLE></HEAD>');
    res.write('<BODY><h1>Hello from my Node-js server!</h1></BODY>');
    res.write('</HTML>');
    res.end();
};

module.exports = requestHandler;