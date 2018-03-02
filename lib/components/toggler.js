import {h, render} from 'preact'

export default ({ state, trigger }) => {
  let _state = state
  const inputTrigger = (e) => {
    _state[e.currentTarget.value] = e.currentTarget.checked
    const state_check = trigger.call()
  }

  return (
    <div class="bottom_left" style={{zIndex: 3}} >
      <input onClick={inputTrigger} id="statement_helper" type="checkbox" checked={_state.statement_helper} value="statement_helper" /><label for="statement_helper" >statement helper</label>

      <input onClick={inputTrigger} id="debugger" type="checkbox" checked={_state.debug} value="debug"/><label for="debugger" >debugger</label>

      <input onClick={inputTrigger} id="send_enabled" type="checkbox" checked={_state.send_enabled} value="send_enabled"/><label for="send_enabled" >send enabled</label>
    </div>
  )
}
