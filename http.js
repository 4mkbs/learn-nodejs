const http= require('http');
const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('hi i am home page');
        res.end();
    }else if(req.url === '/me'){
        res.write('hi i am sakib');
        res.end();
    }else{
        res.write('<h1 style="text-align:center">404 not found</h1>');
        res.end();
    }
});
server.listen(3000);
console.log('listening on port');