const user=require('./user');
class uservice {
    static create(id,username,name) {
        return new user(id,username,name,"sin bio");
    }
    //un metodo estatico de lista de los valores
    static getinfo(user) {
        return [user.id,user.username,user.name,user.bio];
    }
    //actualizar la informacion del usuario usar metodo estatico
    static updateuser(user,name) {
        user.name=name;
    }
    //metodo estatico que devuelve una lista de los nombres de los usuarios
    static getAllUseranames(users) {
        return users.map(user=>user.name);
    }

}

module.exports=uservice;


