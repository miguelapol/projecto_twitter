const userservice =require('./../models/userservice');
class userview{
    static createuser(payload){
        if(payload===null){
            console.log("error es null");
            return{error:"El payload no existe"};
        }else if(typeof payload.username==='string'&& typeof payload.name==='string'&& typeof payload.id==='number'){
            
            return userservice.create(payload.id,payload.username,payload.name);
    
        }else{
            return{error:"necesitan un valor valido"};
        }
    }
}
module.exports=userview;