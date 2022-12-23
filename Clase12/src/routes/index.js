import { Router } from "express";
import Contenedor from "../api.js";

const router = Router()
const api = new Contenedor('./src/productos.txt')

// router.post('/', async(req,res)=>{
//     const {title, price, thumbnail} = req.body;
//     await api.save(title, price, thumbnail)
//     res.redirect('/')
// })

router.get('/', async(req,res)=>{
    res.render('form', {items: await api.getAll()})
})

// router.get('/productos', async (req, res) => {
//     res.render('partials/productos', { items: await api.getAll() })
// })

export default router;