const http = require('http')
const data = require('./utils/data')



http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    const { url } = req
    if( url.includes('/rickandmorty/character')){
        const id = url.split('/').at(-1)
        const personaje = data.filter((e)=> e.id === Number(id))
        res.writeHead( 200, {"Content-Type" : "application/json"})
        res.end(JSON.stringify(personaje[0]))
    }else{
        res.writeHead( 404, {"Content-Type" : "text/plain"})
        res.end('La peticion tubo un error')
    }
    
}).listen(3001,'localhost')
