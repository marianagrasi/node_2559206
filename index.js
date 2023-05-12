const express=require('express')

const app= express()

const path =require('path')
const hbs =require('hbs')


const puerto= 8081

//definir cual va hacer ubicacion o carpeta con contenido estactico servidor de contenido estatico
app.use(express.static('public'))

//configuracion del directorio de las vistas hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine','hbs')

//configuracion del directorio con archivos parcial
hbs.registerPartials(__dirname+'/public/views/partials')

app.get('/', (req,res)=>{
   // res.write(home)
    //res.end()
    res.render('home',
    {
        titulo:'Home',
        nombre:'Mariana Granados'
    })
}
)

app.get('/', (req,res)=>{
    // res.write(home)
     //res.end()
     res.render('home',
     {
         titulo:'Home',
         nombre:'Mariana Granados'
     })
 }
 )

 app.get('/productos', (req,res)=>{
    // res.write(home)
     //res.end()
     res.render('productos',
     {
         titulo:'Listado de productos',
         nombre:'Mariana Granados',
         rol1:'Admin'
     })
 }
 )

app.listen(puerto, ()=>{
    console.log(`Escuchando el puerto ${puerto}`)
})

