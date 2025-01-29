export const stream = {
    parts: new Set,
    processor: new Set,

    p(part) {
        this.parts.add(part)
    },
    proc(processor) {},

    async start() {

        let isProcessing = false

        const processing = async () => {
            isProcessing = true

            const values = this.parts.values()
            while (true) {
                const object = values.next()
                if (object.done) {
                    break
                }
                const event = object.value

                console.log('process stream', event)
                this.parts.delete(event)
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