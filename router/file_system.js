module.exports=function(app){
    app.get('/filesystem',(req,res)=>{
    let x= require("../src/file_system/fs_mkdir");
    console.log("X",x)
    x.main(req,res);
    })
    
    app.post('/filesystem/writefile_async',(req,res)=>{
        let x= require("../src/file_system/writefile_async");
        console.log("X",x)
        x.main(req,res);
        })

    app.post('/filesystem/writefile_sync',(req,res)=>{
            let x= require("../src/file_system/writefile_sync");
            console.log("X",x)
            x.main(req,res);
            })

    app.get('/filesystem/readfile_async',(req,res)=>{
        let x= require("../src/file_system/readfile_async");
        console.log("X",x)
        x.main(req,res);
        })

    app.get('/filesystem/readfile_sync',(req,res)=>{
            let x= require("../src/file_system/readfile_sync");
            console.log("X",x)
            x.main(req,res);
            })
    
    app.post('/filesystem/appendasync_file',(req,res)=>{
        let x= require("../src/file_system/appendasync_file");
        console.log("X",x)
        x.main(req,res);
        })
    
    app.post('/filesystem/renamefile_async',(req,res)=>{
            let x= require("../src/file_system/renamefile_async");
            console.log("X",x)
            x.main(req,res);
            })

    app.post('/filesystem/multiple_files',(req,res)=>{
        let x= require("../src/file_system/multiple_files");
        console.log("X",x)
        x.main(req,res);
        })

    // app.get('/filesystem/deletefile_async',(req,res)=>{
    //     let x= require("../src/file_system/deletefile_async");
    //     console.log("X",x)
    //     x.main(req,res);
    //     })
    
        app.get('/filesystem/readdir_async',(req,res)=>{
            let x= require("../src/file_system/readdir_async");
            console.log("X",x)
            x.main(req,res);
            })
    

    
  }