import {trace} from './Console'

export default(fns_keyed, name) => {
  const fn = fns_keyed[name]
  if (fn && typeof fn === 'function')
    return fn.call(undefined, {})
  else {
    return trace(`Could not find reference: ${name}`)
  }
}
