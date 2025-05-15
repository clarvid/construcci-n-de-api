# 🛠 Construcción de API y Frontend

Este proyecto es una aplicación web con un backend desarrollado en **Node.js + Express** y un frontend hecho con **HTML, CSS y JavaScript puro**. Permite registrar e iniciar sesión de usuarios, y gestionar funcionalidades específicas desde el cliente.

---

## 📁 Estructura del Proyecto

.
├── app.js # Punto de entrada del servidor
├── backend/ # Lógica del servidor (rutas, controladores, modelos, conexión a DB)
│ ├── config/ # Configuración de base de datos
│ ├── controlador/ # Controladores de rutas
│ ├── modelo/ # Lógica de negocio y consultas SQL
│ └── rutas/ # Rutas de la API
├── frontend/ # Archivos HTML, CSS y JS del cliente
│ ├── index.html
│ ├── funciones/ # Archivos JavaScript del frontend
│ └── estilos/ # Archivos CSS
├── node_modules/ # Dependencias instaladas
├── package.json # Dependencias y scripts del proyecto
├── package-lock.json # Control de versiones de dependencias


## Cómo ejecutar el proyecto

### 1. Clonar el repositorio
```bash
git clone https://github.com/clarvid/construcci-n-de-api.git
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor
```bash
node app.js
```

## Funcionalidades
- Registro de usuario
- Inicio de sesión
- Validación de email existente
- Manejo de errores (por ejemplo: correo ya registrado)
- Comunicación cliente-servidor con fetch
