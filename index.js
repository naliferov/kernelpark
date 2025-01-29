import { stream } from './module/stream.js'

stream.start()
stream.p({ msg: 'oh helloo!' })
stream.p({ msg: 'oh second msg to stream!' })


// httpStream.setHandler((rq) => {
//     return httpMakeObjectResponse({ prop1: 'monkey' })
// })
//await httpStream.start()

process.on('uncaughtException', (err) => {
    if (err.code === 'ECONNRESET') {
        console.warn('Warning: Ignoring ECONNRESET error')
    } else {
        console.error('Uncaught Exception:', err)
        process.exit(1)
    }
})