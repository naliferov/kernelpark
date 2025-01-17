const httpMakeResponse = ({ statusCode = 200, mimeType, value, isBin = false }) => {
    
    const make = (value, contentTypeHeader) => ({
      statusCode,
      headers: { 'content-type': contentTypeHeader },
      value,
    })

    if (isBin) {
        return make(value, mimeType ?? 'application/octet-stream')
    }
    if (typeof value === 'object') {
      return make(JSON.stringify(value), 'application/json')
    }

    const plain = 'text/plain; charset=utf-8'
    if (typeof value === 'string') {
        return make(value, mimeType ?? plain)
    }
    return make('Default empty response', plain)
}

export const httpMakeObjectResponse = (object) => {
  return httpMakeResponse({ value: object })
}