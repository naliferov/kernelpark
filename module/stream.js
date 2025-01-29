//import ulid from './ulid.js'

export const stream = {
    events: new Set,
    slicers: new Map,

    p(event) {
        //const id = ulid()
        //event.id = id
        this.events.add(event)
    },
    s(event) {
        
    },
    async start() {

        let isProcessing = false

        const processing = async () => {
            isProcessing = true

            const values = this.events.values()
            while (true) {
                const object = values.next()
                if (object.done) {
                    break
                }
                const event = object.value

                //technique of find find handler

                console.log('processing event', event)
                this.events.delete(event)
            }

            isProcessing = false
        }

        setInterval(() => {
            if (isProcessing) {
                return
            }
            console.log('run processing events:', new Date)
            processing()
        }, 2000)
    },
}