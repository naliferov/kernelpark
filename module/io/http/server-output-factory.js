export const HttpOutputFactory = () => {
    let handler = null

    return {
        async makeOutput() {
            let statusCode = 200
            let headers = {}
            let value = 'default response'

            try {
                if (handler) {
                    const data = await handler(rq)
                    if (data.value) {
                        value = data.value
                    }
                    if (data.value) {
                        value = data.value
                    }
                    if (data.headers) {
                        headers = data.headers
                    }
                }
            } catch (e) {
                value = 'request processing error'
                headers = { 'content-type': 'text/plain; charset=utf-8' }
                console.log(value, e)
            } finally {
                rs.writeHead(statusCode, headers).end(value)
            }

        },
    }
}