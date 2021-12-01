// @ts-check
// Formatting, Linting
// Formatting: Prettier
// Linting: ESLint
// Type checking: TypeScript

const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('hello')
})

const port = 4000
server.listen(port, () => {
  console.log(`The ser ver is listening at port : ${port}`)
})
