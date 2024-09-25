const mongoose = require("mongoose"); //libreria para poder interactuar con mongo db 

const dbConnect = async () => { // funcion async para evitar detener el flujo de la aplicacion
    try { //manejo de errores
        const DB_URI = process.env.DB_URI; // ??
        await mongoose.connect(DB_URI);
        console.log('Conexión correcta.');
    } catch (error) {
        console.error('Error de conexión.');
    }
};

module.exports = dbConnect;


