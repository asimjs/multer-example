const uploadImage = (req,res)=>{
    try{
        res.send({
            status:'UPLOADED',
        })
    }catch(e){
        res.status(400).send({
            status:'NO_RESULT',
            error:e.message
        })
    }
}
module.exports = {
    uploadImage
}