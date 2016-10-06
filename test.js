const login = require('./login')

login()
  .then(jar => {
    console.log(jar.getCookies('http://wingsoffire.scholastic.com'))
  })
  .catch(foo => {
    console.log(foo)
  })
