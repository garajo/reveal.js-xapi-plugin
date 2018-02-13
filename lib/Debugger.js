
export const trace = (msg) => ({
  debug: true,
  message: msg,
})

class Debugger {
  ouput () {
    console.log('out....')
  }
}

export default Debugger
