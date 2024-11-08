const ErrorHandler = require("../utils/errorHandler")

module.exports = (err,req,res,next)=>{
     err.statusCode = err.statusCode || 500

     if(process.env.NODE_ENV == 'development'){

     res.status(err.statusCode).json({
        success:false,
        message : err.message,
        stack: err.stack,
        error:err
     })
}
 

 if(process.env.NODE_ENV == 'production'){
     let message=err.message
    let error = new Error(message)
     
     if(err.name == "ValidationError"){
        message = Object.values(err.errors).map(value => value.message)
        error =  new Error(message)
        err.statusCode = 400
     }
     if(err.name=='CasteError'){
          message=`Resource Not found: ${err.path}`
         error =  new Error(message)
         err.statusCode = 400

     }

      if (err.code === 11000) {
      const keyValue = err.keyValue || {}; // Fallback to an empty object if keyValue is undefined
      let message = `Duplicate ${Object.keys(keyValue).join(', ')} error`;
      error = new Error(message);
      err.statusCode = 400

      }

      if(err.name == 'JSONWebTokenError'){
         let message = `JSON Web Token is invalid. Try again`
         error = new Error(message);
         err.statusCode = 400

      }

      if(err.name == 'TokenExpiredError'){
         let message = `JSON Web Token is Expired. Try again`
         error = new Error(message)
        err.statusCode = 400

      }



     res.status(err.statusCode).json({
        success:false,
        message : error.message || 'Internal Server Error',
        
     })
}

}