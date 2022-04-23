
const Userservice=require('./../../app/models/userservice');

describe('Unit test for user service',()=>{
    test('Create an object userservice',()=>{
        const user= Userservice.create(1,"apol1995","apol");
        expect(user.username).toBe("apol1995");
        expect(user.name).toBe("apol");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    })
    test('Create an object userservice getinfo',()=>{
        const user= Userservice.create(1,"apol1995","apol");
        const userlistinfo= Userservice.getinfo(user);
        expect(userlistinfo[0]).toBe(1);
        expect(userlistinfo[1]).toBe("apol1995");
        expect(userlistinfo[2]).toBe("apol");
        expect(userlistinfo[3]).toBe("sin bio");
    })
    test('Create an object updateUsername',()=>{
        const user= Userservice.create(1,"apol1995","apol");
        Userservice.updateuser(user,"apol2");
        expect(user.name).toBe("apol2");
    })
    test('test getAllUseranames',()=>{
        const user= Userservice.create(1,"apol","apol");
        const user2= Userservice.create(2,"apol2","apol2");
        const user3= Userservice.create(3,"apol3","apol3");
        
        const usernames= Userservice.getAllUseranames([user,user2,user3]);
        expect(usernames).toContain("apol");
        expect(usernames).toContain("apol2");
        expect(usernames).toContain("apol3");
    })
});