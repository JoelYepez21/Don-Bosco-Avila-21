const mongoose = require('mongoose');

const datosSchema = new mongoose.Schema({
  cedula: String,
  nombres: String,
  genero: String,
  fechaNacimiento: String,
  edad: String,
  telefonoPersonal: String,
  telefonoLocal: String,
  unidad: String,
  direccion: String,
  // esto es una referencia al modelo de usuarios
  // para que se guarde con el Id de un usuario
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

datosSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Datos = mongoose.model('Datos', datosSchema);

module.exports = Datos;
