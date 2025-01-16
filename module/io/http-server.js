import server from 'node:http'

export const HttpServerFactory = () => {
    const server = server.createServer({ requestTimeout: 15000 })
    const port = 3000

    return {
        start() {
            server.on('request', async (rq, rs) => {
                rq.on('error', (e) => {
                    rq.destroy()
                    console.log('request no error', e)
                })
                try {
                    //const r = await x.p('httpHandler', { runtimeCtx: ctx, rq })
                    rs.writeHead(200, {}).end('test response')
                } catch (e) {
                    const m = 'err in rqHandler'
                    console.log(m, e)
                    rs.writeHead(503, { 'content-type': 'text/plain; charset=utf-8' }).end(m)
                }
            })
            
            server.listen(port, () => console.log(`server start on port: [${port}]`))
        }
    }
}