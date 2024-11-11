import multer from "multer"

// copy the code from multer documentation 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")// where u want to store your file 
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) uniquee file name ka loiya use hota hey hum abhi basic rakh arahe hey 

    cb(null, file.originalname)// callback  original file name 
  }
})

export  const upload = multer({ storage })