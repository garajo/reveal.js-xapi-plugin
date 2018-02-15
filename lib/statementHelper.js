import { h, render } from 'preact';
import StatementHelper from './components/statement_helper'

export default (node, data) => {
  const statement_helper_shell = document.createElement("div");
  statement_helper_shell.style.zIndex = 1;
  statement_helper_shell.style.position = 'absolute'
  statement_helper_shell.style.top = 'auto'
  statement_helper_shell.style.bottom = '12px'
  statement_helper_shell.style.left = '12px'

  node.appendChild(statement_helper_shell)
  return render(<StatementHelper data={data} />, statement_helper_shell)

}
