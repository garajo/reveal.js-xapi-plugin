import {reduce} from 'ramda'

export const mapElementXapi = (allslides) => (reduce((acc, ea) => {
 const section_xapi = ea.dataset.xapi

 if (section_xapi) {
   acc.set(ea, section_xapi)
 }

 if (ea.children.length > 0) {

   Array.from(ea.children).map( (element) => {
     const fragment_xapi = element.dataset.xapi
     if (fragment_xapi) {
       acc.set(element, fragment_xapi)
     }
   })
 }

 return acc
}, new Map())(allslides))

export default (mapped) => {
  const consumedgraph = new Uint8Array(Array.from(mapped).length)
  const state = Object.seal(new WeakMap([[mapped, consumedgraph]]))

  return {
    checkAvailable: (element, arg) => {
      const mapkeys = mapped.keys()
      const touchIndex = Array.from(mapkeys).indexOf(element)
      const consumed = state.get(mapped)
      const val = consumed[touchIndex]
      if (val === 1) {
        return false
      }
      else {
        consumed[touchIndex] = 1
        state.set(mapped, consumed)
        return true
      }
    },
  }
}
