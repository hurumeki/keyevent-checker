const KEY_EVENT_PROPERTY = [
  'altGraphKey',
  'altKey',
  'bubbles',
  'cancelBubble',
  'cancelable',
  'charCode',
  'code',
  'composed',
  'ctrlKey',
  'currentTarget',
  'defaultPrevented',
  'detail',
  'eventPhase',
  'explicitOriginalTarget',
  'isComposing',
  'isTrusted',
  'key',
  'keyCode',
  'keyIdentifier',
  'keyLocation',
  'layerX',
  'layerY',
  'location',
  'metaKey',
  'originalTarget',
  'pageX',
  'pageY',
  'path',
  'rangeOffset',
  'rangeParent',
  'repeat',
  'returnValue',
  'shiftKey',
  'sourceCapabilities',
  'srcElement',
  'target',
  'timeStamp',
  'type',
  'view',
  'which'
]

function retriveKeyEventProperty(ev) {
  let obj = {}
  for(let k of KEY_EVENT_PROPERTY) {
    let v = ev[k]
    if (k == 'path' && v) {
      v = v.map((v) => {
        return v.tagName ? v.tagName.toLowerCase() : v.toString()
      })
    }
    obj[k] = v
  }
  return obj
}

let lastEvent = '';

let app = new Vue({
  el: '#app',
  data: {
    lastEvent: '',
    selectedEvent: 'keydown',
    keyEventProperty: {
      'keydown': retriveKeyEventProperty({}),
      'keyup': retriveKeyEventProperty({}),
      'keypress': retriveKeyEventProperty({})
    }
  },
  methods: {
    selectEevent(type) {
      this.selectedEvent = type
    }
  }
})

window.addEventListener('keydown', (ev) => {
  app.lastEvent = ev.type
  app.keyEventProperty.keydown = retriveKeyEventProperty(ev)
})
window.addEventListener('keyup', (ev) => {
  app.lastEvent = ev.type
  app.keyEventProperty.keyup = retriveKeyEventProperty(ev)
})
window.addEventListener('keypress', (ev) => {
  app.lastEvent = ev.type
  app.keyEventProperty.keypress = retriveKeyEventProperty(ev)
})

Array.from(document.querySelectorAll('.input-target')).forEach((elem) => {
  elem.addEventListener('keydown', (ev) => {
    app.lastEvent = ev.type
    app.keyEventProperty.keydown = retriveKeyEventProperty(ev)
    ev.stopPropagation()
  })
  elem.addEventListener('keyup', (ev) => {
    app.lastEvent = ev.type
    app.keyEventProperty.keyup = retriveKeyEventProperty(ev)
    ev.stopPropagation()
  })
  elem.addEventListener('keypress', (ev) => {
    app.lastEvent = ev.type
    app.keyEventProperty.keypress = retriveKeyEventProperty(ev)
    ev.stopPropagation()
  })
})