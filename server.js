import { createServer } from 'node:http'

const server = createServer((request, response) => {
    response.write('hello world ')

    return response.end()
})

server.listen(3333)

/// request => traz informações das requisições que estão sendo feitas para dentro da minha API
/// response => é o objeto que vou utilizar para devolver a resposta para quem está chamando a API