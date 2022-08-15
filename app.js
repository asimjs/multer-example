const express = require('express')
const multer = require('multer')
const { uploadImage } = require('./controller')

const app = express()


app.get('/',(req,res)=>{

    res.send({
        status:'RUNNING'
    })

})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads') //Folder name
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) //file creation
    }
})
   
const upload = multer({ storage: storage })
app.post('/image',upload.single('profile'),uploadImage)

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`The server is up and running on ${PORT}`)
})