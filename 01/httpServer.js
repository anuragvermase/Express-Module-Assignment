const http = require('http');

const menProducts = [
    { id: 1, name: 'Men Product 1', price: 29.99 },
    { id: 2, name: 'Men Product 2', price: 39.99 },
    { id: 3, name: 'Men Product 3', price: 19.99 },
    { id: 4, name: 'Men Product 4', price: 24.99 },
    { id: 5, name: 'Men Product 5', price: 59.99 },
    { id: 6, name: 'Men Product 6', price: 49.99 },
    { id: 7, name: 'Men Product 7', price: 79.99 },
    { id: 8, name: 'Men Product 8', price: 89.99 },
    { id: 9, name: 'Men Product 9', price: 99.99 },
    { id: 10, name: 'Men Product 10', price: 109.99 },
];

const womenProducts = [
    { id: 1, name: 'Women Product 1', price: 29.99 },
    { id: 2, name: 'Women Product 2', price: 39.99 },
    { id: 3, name: 'Women Product 3', price: 19.99 },
    { id: 4, name: 'Women Product 4', price: 24.99 },
    { id: 5, name: 'Women Product 5', price: 59.99 },
    { id: 6, name: 'Women Product 6', price: 49.99 },
    { id: 7, name: 'Women Product 7', price: 79.99 },
    { id: 8, name: 'Women Product 8', price: 89.99 },
    { id: 9, name: 'Women Product 9', price: 99.99 },
    { id: 10, name: 'Women Product 10', price: 109.99 },
];

const server = http.createServer((req,res)=>{

    res.setHeader('Content-Type', 'application/json');

    if(req.url==="/"){
        res.writeHead(200,{'Content-type' : 'text/plain'});
        res.end("Welcome to Men and Women Dummy Data");
    }else if(req.url==="/men"){
        res.writeHead(200);
        res.end(JSON.stringify(menProducts));
    }else if(req.url==="/women"){
        res.writeHead(200);
        res.end(JSON.stringify(womenProducts));
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});