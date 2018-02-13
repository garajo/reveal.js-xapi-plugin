import { trace } from './Debugger'

export default (fn_list, name) => {
  const fn = fn_list[name]
  if (fn && typeof fn === 'function')
    return fn.call(null, {})
  else {
    return trace(`Could not find reference: ${name}`)
  }
}
