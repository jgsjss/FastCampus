//프레임워크 없이 간단한 토이프로젝트 웹 서버 만들어보기

/**
 * 블로그 포스팅 서비스
 *  - 로컬 파일을 데이터베이스로 활용할 예정(JSON)
 *  - 인증 로직은 넣지않습니다.
 *  -RESTful API를 사용합니다.()
 */

const http = require('http')

const server = http.createServer((res, req) => {
  console.log(req.url)


  res.statusCode = 200
  res.end('Hello!')
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`The server is listening at port : ${PORT}`)
})
