function main(req, res) {
    console.log("req.params.id")
    res.send('Hello World')
  }

  module.exports={
    main:main
  }