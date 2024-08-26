const mongoose = require('mongoose');

const imagenPerfilSchema = new mongoose.Schema({
  imagen: String,
  // esto es una referencia al modelo de usuarios
  // para que se guarde con el Id de un usuario
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

imagenPerfilSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const ImagenPerfil = mongoose.model('imagenPerfil', imagenPerfilSchema);

module.exports = ImagenPerfil;
