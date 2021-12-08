// Formatting, Linting, Type checking
// Formatting: Prettier
// Linting: ESLint
// Type checking: TypeScript
// @ts-check

const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('hello')
})

const port = 4000
server.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`The ser ver is listening at port : ${port}`)
})
