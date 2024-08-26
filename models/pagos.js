const mongoose = require('mongoose');
const pagoSchema = new mongoose.Schema({
  referencia: String,
  monto: String,
  fecha: String,
  confirmado: {
    type: Boolean,
    default: false,
  },
  // esto es una referencia al modelo de metodos
  // para que se guarde con el Id de un metodo de pago
  metodo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Metodo',
  },
  // esto es una referencia al modelo de usuarios
  // para que se guarde con el Id de un usuario
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

pagoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const pago = mongoose.model('Pagos', pagoSchema);

module.exports = pago;
