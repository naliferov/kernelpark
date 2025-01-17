const domFactory = (x) => {
    const { id, tag, txt, html, events, css, attrs, attributes } = x

    const o = document.createElement(tag || 'div')
    if (id) o.id = id
    if (x['class']) {
        o.className = Array.isArray(x['class'])
        ? x['class'].join(' ')
        : x['class']
    }
    if (txt) o.innerText = txt
    if (html) o.innerHTML = html
    if (css) for (let k in css) o.style[k] = css[k]
    if (attributes) for (let k in attributes) o.setAttribute(k, attributes[k])
    if (attrs) for (let k in attrs) o.setAttribute(k, attrs[k])
    if (events) for (let k in events) o.addEventListener(k, events[k])

    return o
  }