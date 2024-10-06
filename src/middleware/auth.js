const authAdmin=(req,res,next)=>{
    const token = "xyz";
    const isAdminAuthoriozed = token === "xyz";
    if( !isAdminAuthoriozed ){
      res.status(401).send("unauthorized")
    } else {
      next()
    }
   
  };

  

module.exports={authAdmin}