# 🎬 Erick Film – Catálogo de Películas (Frontend + Backend)

Aplicación web fullstack (Frontend + Backend + MongoDB) que permite visualizar información de películas y series. El proyecto está dividido en dos carpetas principales: front (cliente) y back (servidor API).

🚀 Tecnologías utilizadas
Frontend

HTML, CSS, JavaScript

Webpack

Axios

Live Server (solo para desarrollo)

Backend

Node.js

Express

MongoDB + Mongoose

CORS

Dotenv

📁 Estructura del Proyecto
```
proyecto/
│
├── front/
│   ├── dist/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── webpack.config.js
│
└── back/
    ├── config/
    │   └── dbConnect.js
    ├── controller/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── index.js
    ├── server.js
    └── package.json
```
🗄️ Backend
⚙️ Configuración del entorno (.env)

El backend utiliza variables de entorno para conectarse a MongoDB:
```
DB_TYPE=mongodb
DB_USER=tuUsuario
DB_PASSWORD=tuPassword
DB_HOST=cluster.mongodb.net
DB_NAME=nombreDB
DB_OPTIONS=retryWrites=true&w=majority
PORT=process.env.PORT || 3000
```
🔌 Conexión a MongoDB (config/dbConnect.js)

El backend construye dinámicamente el connection string dependiendo de las variables del .env.

Mongoose se conecta así:
```
mongoose.connect(connectionString, { maxPoolSize: 10 });
```

Incluye logs para detectar el estado de la conexión.

🔥 Servidor Principal (server.js)

Usa express.json()

Configura CORS global

Monta todas las rutas bajo /api

Maneja errores globales

🚀 Inicialización del Backend (index.js)

Secuencia de arranque:

1. Conectar a la base de datos

2. Levantar el servidor Express
```
(async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
})();
```
🧩 Endpoints (Ejemplo, si tus rutas están en /api)

Cuando me compartas las rutas completas, actualizo esta sección con todos los endpoints reales.

Por ahora:
```
GET    /api/...      → lista elementos
POST   /api/...      → crea elemento
DELETE /api/:id      → elimina elemento
PUT    /api/:id      → actualiza elemento
```
🎨 Frontend

El frontend está construido con HTML, CSS y JavaScript modularizado con Webpack.

📦 Scripts del Front (front/package.json)
```
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production",
  "start": "npm run build && live-server dist"
}
```
Desarrollo:
```
npm run dev
```
Producción:
```
npm run build
npm start
```

🔗 Comunicación Front ↔ Back

El frontend se comunica con la API usando Axios:
```
axios.get('http://localhost:3000/api/...') 
```
🛠 Instalación
1) Clonar el repositorio
```
git clone https://github.com/tu-user/tu-repo.git
cd proyecto
```
🗄 Backend
Instalar dependencias
```
cd back
npm install
```

Crear .env:
```
DB_TYPE=mongodb
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=
DB_OPTIONS=retryWrites=true&w=majority
PORT=3000
```
Ejecutar servidor
```
npm start
```

🎨 Frontend
Instalar dependencias
```
cd front
npm install
```

Levantar en modo desarrollo:
```
npm run dev
```

Compilar y servir:
```
npm run build
npm start
```

📌 Notas importantes

El servidor backend debe estar corriendo antes que el frontend.

El frontend sirve archivos desde /dist.

Webpack gestiona la compilación, empaquetado y minificación del JS.
