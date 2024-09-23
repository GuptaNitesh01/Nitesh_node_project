

const fs = require('fs');

function main(req,res){
    console.log('done');
    res.send('created successfully');
    fs.readFile(req.query.folder_name,{recursive: true}, (err) => {


        
        }

    )
}
module.exports = {
    main
}
