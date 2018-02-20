import {h, render} from 'preact'
import ConsoleComponent from './components/console'
import {append, once} from 'ramda'

export const trace = (msg) => ({debug: true, message: msg})


export default (node) => {
  var Singleton

  (function() {
    var instance

    Singleton = function Singleton() {
      if (instance) {
        return instance
      }

      const console_shell = document.createElement("div")
      console_shell.setAttribute('class', 'console')
      node.appendChild(console_shell)

      let data_history = ['Instantiated console.']

      instance = Object.freeze({
        log: (data) =>  render(<ConsoleComponent data={instance.pushHistory(data)}/>, undefined, component_instance),
        pushHistory: (data) => {
          data_history = append(data)(data_history)
          return data_history
        },
        renderComponent: () => render(<ConsoleComponent data={data_history}/>, undefined, component_instance),
      })

      let component_instance = render(<ConsoleComponent data={data_history}/>, console_shell)

      return instance
    }

  })()
  return Singleton()
}
