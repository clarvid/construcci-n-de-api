import expresss from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url"
import routes from "./backend/rutas/rUser.js"

// crear el servidor
const app = expresss()
const PORT = 3000

// ruta actual
const __filename = fileURLToPath(import.meta.url) 
// carpeta que contiene el archivo
const __dirname = path.dirname(__filename) 

// uso de los middleware
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(expresss.static(path.join(__dirname, "./frontend")))
app.use(expresss.json())
app.use(expresss.urlencoded({ extended: true }))

app.use(routes)


app.listen(PORT, ()=>{
    console.log(`Conexion establecida en http://localhost:${PORT}`);
})