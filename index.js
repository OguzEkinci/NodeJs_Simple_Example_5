import http from 'http'

const server = http.createServer((req,res) => {
    
    const url = req.url;
    if(url === '/'){
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write('<h2>Index Sayfasina Hosgeldiniz</h2>')
    }else if(url === '/about') {
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write('<h2>About Sayfasina Hosgeldiniz</h2>')
    }else if (url === '/contact')
    {
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write('<h2>Contact Sayfasina Hosgeldiniz</h2>')
    }else {
        res.write('404 not found sayfa bulunamadı')
    }
    res.end()
});

const port = 5000
server.listen(port,() => {
    console.log(`Sunucu port ${port} de başlatıldı`)
})
