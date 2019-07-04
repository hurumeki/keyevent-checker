console.log(1)

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

// chrome
// altKey: false
// bubbles: true
// cancelBubble: false
// cancelable: true
// charCode: 0
// code: "KeyA"
// composed: true
// ctrlKey: false
// currentTarget: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
// defaultPrevented: false
// detail: 0
// eventPhase: 3
// isComposing: false
// isTrusted: true
// key: "a"
// keyCode: 65
// location: 0
// metaKey: false
  // path: (4) [body, html, document, Window]
// repeat: false
// returnValue: true
// shiftKey: false
// sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
// srcElement: body
// target: body
// timeStamp: 15395.33499997924
// type: "keydown"
// view: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
// which: 65

// firefox
// altKey: false
// bubbles: true
// cancelBubble: false
// cancelable: true
// charCode: 0
// code: "KeyA"
// composed: true
// ctrlKey: false
// currentTarget: Window
// defaultPrevented: false
// detail: 0
// eventPhase: 3
// explicitOriginalTarget: body
// isComposing: false
// isTrusted: true
// key: "a"
// keyCode: 65
// layerX: 0
// layerY: 0
// location: 0
// metaKey: false
// originalTarget: body
// pageX: 0
// pageY: 0
// rangeOffset: 1
// rangeParent: td
// repeat: false
// returnValue: true
// shiftKey: false
// srcElement: body
// target: body
// timeStamp: 14029
// type: "keydown"
// view: Window
// which: 65

// safari
// altGraphKey: false
// altKey: false
// bubbles: true
// cancelBubble: false
// cancelable: true
// charCode: 0
// code: "KeyA"
// composed: true
// ctrlKey: false
// currentTarget: Window {document: #document, NaN: NaN, window: Window, Infinity: Infinity, undefined: undefined, …}
// defaultPrevented: false
// detail: 0
// eventPhase: 3
// isComposing: false
// isTrusted: true
// key: "a"
// keyCode: 65
// keyIdentifier: "U+0041"
// keyLocation: 0
// layerX: 0
// layerY: 0
// location: 0
// metaKey: false
// pageX: 0
// pageY: 0
// repeat: false
// returnValue: true
// shiftKey: false
// srcElement: <body>
// target: <body>
// timeStamp: 6745
// type: "keydown"
// view: Window {document: #document, NaN: NaN, window: Window, Infinity: Infinity, undefined: undefined, …}
// which: 65
