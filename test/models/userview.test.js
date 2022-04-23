const userview=require('./../../app/models/userview');


describe('Retornar un error cuando el objecto a creado u nuevo usuario null',()=>{
    test('Create an object userview',()=>{
        const payload=null;
        const result=userview.createuser(payload);
        expect(result.error).toMatch('El payload no existe');
    })
    test(' test 2 return CREATE a new user with a payload',()=>{
        const payload={username:1,name:"miguel",id:"apol"};
        const result=userview.createuser(payload);
        expect(result.error).toMatch('necesitan un valor valido');
    })
    test(' test 3 enviando dando solo un valor',()=>{
        const payload={username:"apol"};
        const result=userview.createuser(payload);
        expect(result.error).toMatch('necesitan un valor valido');
    })
    test(' test 4 return CREATE a new user',()=>{
        const payload={username:"apol",name:"miguel",id:1};
        const result=userview.createuser(payload);
        expect(result.username).toBe('apol');
        expect(result.name).toBe('miguel');
        expect(result.id).toBe(1);
    });
});