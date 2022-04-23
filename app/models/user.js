class user{
    constructor(id,username,name,bio,dateCreated,lastUpdated){
        this.id=id;
        this.username=username;
        this.name=name;
        this.bio=bio;
        this.dateCreated=new Date();
        this.lastUpdated=new Date();
    }
    get getUsername(){
        return this.username;
    }
    get getbio(){
        return this.bio;
    }
    get getDateCreated(){
        return this.dateCreated;
    }
    get getLastUpdated(){
        return this.lastUpdated;
    }
    set setUsername(newUsername){
        return this.username=newUsername;
    }
    set setbio(newbio){
        return this.bio=newbio;
    }

}
//exportamos el user
module.exports=user;