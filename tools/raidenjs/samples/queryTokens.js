const Raiden = require('../index.js')

let raiden = new Raiden("http://localhost:5001")
let tokens = raiden.token.getRegisteredTokens()
console.log(tokens);