import {h, render} from 'preact'
import StatementHelper from './components/statement_helper'

export default(node, data, langISO) => {
  const statement_helper_shell = document.createElement("div")
  statement_helper_shell.setAttribute('class', 'statement_helper')

  node.appendChild(statement_helper_shell)
  return render(<StatementHelper data={data} langISO={langISO} />, statement_helper_shell)

}
