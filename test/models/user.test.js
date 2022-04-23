const User=require('./../../app/models/user');

describe('Unit test for users class',()=>{
    test('Create an object user',()=>{
        const user= new User(1,"apol1994","miguel","bi");
        expect(user.id).toBe(1);
        expect(user.username).toBe("apol1994");
        expect(user.name).toBe("miguel");
        expect(user.bio).toBe("bi");
        //esto pasara ya que estamos usando el not al principio
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();

    })
    test('add getters',()=>{
        const user= new User(1,"apol1994","miguel","Bio");
        expect(user.getUsername).toBe("apol1994");
        expect(user.getbio).toBe("Bio");
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();
    })
    //se usaran para modificar
    test('add setters',()=>{
        const user= new User(1,"carlogilmar","carlo","Bio");
        //aqui modificamos el valor
        user.setUsername="Gilmar";
        expect(user.username).toBe("Gilmar");

        user.setbio="new bio";
        expect(user.bio).toBe("new bio");
    })
});