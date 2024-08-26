const multer = require('multer');

// configuramos la ruta donde iran almacenados los archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './imagenPerfil');
  },
  filename: function (req, file, cb) {
    // colocamos la hora exacta mas el nombre para evitar que se repitan los nombres
    const fileName = Date.now() + '-' + file.originalname;
    cb(null, fileName);
  },
});
// verificamos que el archivo que se esta subiendo sea un pdf
const uploadImagen = multer({
  storage,
  fileFilter: (request, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('The file is not a jpeg/png'), false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 20,
  },
});

module.exports = uploadImagen;
