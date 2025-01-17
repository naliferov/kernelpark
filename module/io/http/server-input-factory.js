import * as http from 'node:http'

export const ServerInputFactory = (input) => {

    const server = http.createServer({ requestTimeout: 15000 })
    const port = 3000

    return {
        async startListen(handler) {
            server.on('request', async (rq, rs) => {
                rq.on('error', (e) => rq.destroy())
                handler(rq, rs)
            })
            server.listen(port, () => console.log(`server start on port: [${port}]`))
        },
        stop() {
            
        },
    }
}