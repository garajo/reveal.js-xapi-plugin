export default (fn_list, name) => {
  const fn = fn_list[name]
  if (fn && typeof fn === 'function')
    return fn.call(null, {})
}
