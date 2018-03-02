import {h, render} from 'preact'
import StatementHelper from './components/statement_helper'

export default(node, data, langISO) => {
  return render(<StatementHelper data={data} langISO={langISO} />, node)

}
