const mongoose = require('mongoose');

const pdfFileSchema = new mongoose.Schema({
  pdfFile: String,
  // esto es una referencia al modelo de usuarios
  // para que se guarde con el Id de un usuario
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  // esto es una referencia al modelo de datos
  // para que se guarde con el Id de los datos del usuario
  datos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Datos',
  },
});

pdfFileSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const PdfFile = mongoose.model('pdfFiles', pdfFileSchema);

module.exports = PdfFile;
