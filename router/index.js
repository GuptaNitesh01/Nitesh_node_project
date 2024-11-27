//  app.get
//  app.post

// require(router)(app);
module.exports=function(app){
    require('./employee')(app);
    require('./file_system')(app);
    require('./postgre')(app);
    require('./mongo_db')(app);
    require('./api_internal')(app);
    require('./gmail')(app);
    require('./pagination')(app);
    require('./event_emitter')(app);
    require('./joi_validator')(app);







    


    // require('./file_system')(app);
    // require('./write_file_system')(app);
}   