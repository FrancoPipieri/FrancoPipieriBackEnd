const express = require('express')
const Contenedor = require('./Contenedor.js')

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Servidor Prendido Escuchando el Puerto:${PORT}`))

const conteiner = new Contenedor('./productos.txt')

const artRandom = async () => {
    let lista = await conteiner.getAll()
    return lista[Math.floor(Math.random()* lista.length)]
}

app.get('/', (req,res) =>{
    res.send(`<h1 style="color:blue; font-size:40px">Bienvenidos Al Servidor!!</h1>
              <h2 style="font-size:30px">Desafio 3!!</h2>`)
})
app.get('/productos', async(req,res)=>{
    res.send(await conteiner.getAll())
})
app.get('/productosrandom', async(req,res)=>{   
    res.send(await artRandom())
})
server.on("error", error => console.log(`Error en Servidor ${error}`))