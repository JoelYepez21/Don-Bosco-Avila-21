const multer = require('multer');

// configuramos la ruta donde iran almacenados los archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    // colocamos la hora exacta mas el nombre para evitar que se repitan los nombres
    const fileName = Date.now() + '-' + file.originalname;
    cb(null, fileName);
  },
});
// verificamos que el archivo que se esta subiendo sea un pdf
const upload = multer({
  storage,
  fileFilter: (request, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('The file is not a pdf'), false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

module.exports = upload;
