var jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../env_config');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

function main(req, res) {

    const authenticate = jwt.sign({
        name:"nitesh",
        password:"nitesh@123"
        // exp: Math.floor(Date.now() / 1000) + (60 * 60),
        // data: 'foobar'
      }, JWT_SECRET);
    // console.log('hi');
    res.send(authenticate);
    console.log(authenticate);
}
module.exports = {
        main
}
