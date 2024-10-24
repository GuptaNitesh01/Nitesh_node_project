//  app.get
//  app.post

// require(router)(app);
module.exports=function(app){
    require('./employee')(app);
    require('./file_system')(app);
    require('./postgre')(app);
    require('./mongo_db')(app);

    


    // require('./file_system')(app);
    // require('./write_file_system')(app);
}   