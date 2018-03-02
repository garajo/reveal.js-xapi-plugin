import {h, render} from 'preact'
import Toggler from './components/toggler'

export default(node, state, trigger) => {
  return render(<Toggler state={state} trigger={trigger}/>, node)

}
