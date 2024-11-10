class ApiError extends Error{
  constructor(
    statusCode,
    message = "Something went Wrong",
    errors = [],
    stack = ""
  ){
    // agar jo nahi hey usko over write kar do 
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.success = false;
    this.errors = errors

// chota sa msg code production grade practice 
    if(stack){
      this.stack = stack

    }else{
      Error.captureStackTrace(this,this.costructor)
    }
  }
}

export {ApiError}