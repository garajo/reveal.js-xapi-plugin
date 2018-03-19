import {h, render} from 'preact'
import ConsoleComponent from './components/console'
import {append, once} from 'ramda'

export const trace = (msg) => ({debug: true, message: msg})

var Singleton

(function() {
  var instance

  Singleton = function Singleton() {
    if (instance) {
      return instance
    }

    let console_shell
    let component_instance
    let data_history = []

    instance = Object.freeze({
      init: once((node) => {
        console_shell = node
        console_shell.setAttribute('class', 'console')
        component_instance = render(<ConsoleComponent data={data_history}/>, console_shell)
        return component_instance
      }),
      log: (data, title) =>  {
        return render(<ConsoleComponent data={instance.pushLog({ data, title })}/>, undefined, component_instance)
      },
      pushLog: ({ data, title }) => {
        data_history = append({ data, title })(data_history)
        return data_history
      },
      renderComponent: () => render(<ConsoleComponent data={data_history}/>, undefined, component_instance),
    })

    return instance
  }
})()

export default Singleton()
