import {h, render} from 'preact'
import Console from './components/console'

let console_shell = document.createElement("div")
let data_history = []

export const updateHistory

export const trace = (msg) => ({
  debug: true,
  message: msg,
})

export const update = (data) => {
  return render(<Console data={data} />, undefined, console_shell)
}

export default (node, data) => {
  console_shell.setAttribute('class', 'console')
  node.appendChild(console_shell)
  return render(<Console data={data} />, console_shell)
}
