import {h, render} from 'preact'

export default ({ state, trigger }) => {
  const inputTrigger = (e) => {
    state[e.currentTarget.value] = e.currentTarget.checked
    trigger.call()
  }
  return (
    <div class="bottom_left" style={{zIndex: 3}} >
      <input onClick={inputTrigger} id="debugger" type="checkbox" checked={state.debug} value="debug"/><label for="debugger" >debugger</label>
      <input onClick={inputTrigger} id="statement_helper" type="checkbox" checked={state.statement_helper} value="statement_helper" /><label for="statement_helper" >statement helper</label>
    </div>
  )
}
