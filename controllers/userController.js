
const createUser = (req, res, next) => {  
  console.log('Hello world', req.body);
  res.write('Hello world');

  res.end();
}

module.exports = createUser;