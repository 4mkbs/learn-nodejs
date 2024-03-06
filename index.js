/* this is a one part of the code(1st part)
const { log } = require('console');
const fs= require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`,'utf8');

ourReadStream.on('data',(data)=>{
    // console.log(chunk.toString());
    // console.log(data);
});
log('Reading file...');

*/

/* this is a another part of the code (2nd part)

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write(`
        <html>
        <head>
        <title>My First Node App</title>
        </head>
        <body>
        <h1>Welcome to my first Node App</h1>
        <form action="/about" method="POST">
        <input type="text" value="sakib" name="recieved">
        <form>
        </body>
        </html>
        `);
        res.end();
    }else if(req.url === '/about' && req.method === 'POST'){
        req.on('data',(chunk)=>{
            console.log(chunk.toString());
        });
        res.write('<h1>About Page</h1>');
        console.log('About Page');
        res.end();
    }else{   
        res.write('Not Found');
        res.end();
    }
});

server.listen(3000);
console.log('Server is listening on port 3000...');
*/


/* this is a another part of the code (3rd part)

const { log } = require('console');
const fs= require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on('data',(chunk)=>{
//    ourWriteStream.write(chunk);
// });
ourReadStream.pipe(ourWriteStream);
log('writing file...');

*/

// this is a another part of the code (4th part)

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{
    const myReadstream = fs.createReadStream(`${__dirname}/bigData.txt`,'utf8');
    myReadstream.pipe(res);
});
server.listen(3000);
console.log('Server is listening on port 3000...');
