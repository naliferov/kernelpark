//import { IOProcess } from './module/io/io-process.js'
//import { httpMakeObjectResponse } from './module/io/input/http-stream-utils.js'
import { stream } from './module/stream.js'

stream.start()
stream.p({ msg: "oh helloo!" })
stream.p({ msg: "oh second msg!" })

//stream.s({ msg: "oh helloo!" }, )

//detect is we need to run function and send it event

//let mask = 1 << 30
//mask = mask | (1 << 2)
console.log(mask, mask.toString(2))

// httpStream.setHandler((rq) => {
//     return httpMakeObjectResponse({ prop1: 'monkey' })
// })
//await httpStream.start()

//process.on('uncaughtException', (err) => {})