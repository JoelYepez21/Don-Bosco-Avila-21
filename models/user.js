const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwordHash: String,
  verified: {
    type: Boolean,
    default: false,
  },
  registrado: {
    type: Boolean,
    default: false,
  },
  typeUser: {
    type: String,
    default: 'joven',
  },
  // esto es una referencia al modelo de datos
  // para acceder al modelo por medio del ID
  datos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Datos',
  },
  // esto es una referencia al modelo de imagenPerfil
  // para acceder al modelo por medio del ID
  imagen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'imagenPerfil',
  },
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
