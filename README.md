# 🌐 NodeAPI Project

NodeAPI Project es una API desarrollada en Node.js con el objetivo de aprender y practicar la construcción de backend utilizando Express.js, MongoDB y otros módulos populares. La API incluye funcionalidades de registro, inicio de sesión, gestión de archivos, y operaciones CRUD para recursos como usuarios, archivos y pistas.

## ✨ Características

- 🔐 **Registro e inicio de sesión de usuarios** con manejo seguro de contraseñas (encriptación).
- 🛠️ **Operaciones CRUD** para usuarios, archivos y pistas.
- 📂 **Carga de archivos** con almacenamiento seguro en el sistema.
- 🔑 **Autenticación** mediante JWT (JSON Web Token).
- ✅ **Validación de datos** con `express-validator`.
- 💾 **Uso de MongoDB** como base de datos, con modelos definidos usando Mongoose.
- 📦 **Estructura modular** organizada con rutas, controladores, modelos y utilidades.
- 🗂️ **Almacenamiento de archivos** usando `multer` y gestión de archivos locales.

## 🛠️ Tecnologías utilizadas

- 🟢 Node.js
- ⚡ Express.js
- 🍃 MongoDB con Mongoose
- 🛡️ JSON Web Token (JWT) para autenticación
- 🔑 Bcrypt.js para encriptación de contraseñas
- 📥 Multer para la gestión de archivos
- ✅ Express-validator para la validación de datos

## 📋 Requisitos previos

- 🟩 Node.js (versión 14 o superior)
- 📦 npm (administrador de paquetes de Node.js)
- 🍃 MongoDB (local o remoto)
- 🖥️ Un editor de código (como Visual Studio Code)

## ⚙️ Configuración del proyecto

1. 📥 Clonar el repositorio en tu máquina local:

    ```bash
    git clone https://github.com/tuusuario/NodeAPI.git
    ```

2. 📂 Acceder al directorio del proyecto:

    ```bash
    cd NodeAPI
    ```

3. 📦 Instalar las dependencias necesarias:

    ```bash
    npm install
    ```

4. 📝 Crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

    ```env
    PORT=3000
    DB_URI=mongodb://localhost:27017/tu_basededatos
    JWT_SECRET=tu_secreto_jwt
    PUBLIC_URL=http://localhost:3000
    ```

    - `DB_URI`: La URI de tu base de datos MongoDB.
    - `JWT_SECRET`: Una clave secreta para firmar los tokens JWT.
    - `PUBLIC_URL`: La URL pública para acceder a los archivos.

## 🚀 Ejecución del proyecto

1. 🍃 Asegúrate de que tu base de datos MongoDB esté en ejecución.

2. ▶️ Iniciar el servidor con el siguiente comando:

    ```bash
    npm start
    ```

3. 🌐 El servidor se iniciará en el puerto especificado en el archivo `.env` (por defecto, `http://localhost:3000`).

## 🔌 Endpoints de la API

### 🔑 Autenticación

- **POST** `/api/register`: Registro de un nuevo usuario.
- **POST** `/api/login`: Inicio de sesión para un usuario existente.

### 📂 Gestión de archivos

- **POST** `/api/storage`: Subida de un archivo.
- **GET** `/api/storage`: Listado de archivos almacenados.
- **GET** `/api/storage/:id`: Obtener información de un archivo específico.
- **DELETE** `/api/storage/:id`: Eliminar un archivo específico.

### 🎵 Gestión de pistas (Tracks)

- **GET** `/api/tracks`: Listar todas las pistas.
- **GET** `/api/tracks/:id`: Obtener información de una pista específica.
- **POST** `/api/tracks`: Crear una nueva pista.
- **PUT** `/api/tracks/:id`: Actualizar una pista existente.
- **DELETE** `/api/tracks/:id`: Eliminar una pista específica.

## 📝 Notas adicionales

- 🛡️ El proyecto utiliza `express-validator` para validar y sanitizar las entradas en las solicitudes.
- 🗂️ Los archivos cargados se almacenan en la carpeta `/storage` en la raíz del proyecto.
- 🔑 La autenticación se maneja mediante tokens JWT que se generan al momento de registrar o iniciar sesión con un usuario.


