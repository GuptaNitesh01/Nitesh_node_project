module.exports=function(app){
    app.post('/api/postgre/create',(req,res)=> {
        let x= require("../src/pg_db/create_pgdb");
        console.log("X",x)
        x.main(req,res);
        // res.send('write file');
    })
    app.get('/api/postgre/read',(req,res)=> {
        let x= require("../src/pg_db/read_pgdb");
        console.log("X",x)
        x.main(req,res);
        // res.send('write file');
    })
    app.get('/api/postgre/delete',(req,res)=> {
        let x= require("../src/pg_db/delete_pgdb");
        console.log("X",x)
        x.main(req,res);
        // res.send('write file');
    })
    app.get('/api/postgre/update',(req,res)=> {
        let x= require("../src/pg_db/update_pgdb");
        console.log("X",x)
        x.main(req,res);
        // res.send('write file');
    })
}