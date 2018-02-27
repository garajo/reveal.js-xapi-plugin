import {h, Component} from 'preact'
import LI from './line_LI'

export default (props) => {
  return (
    <div style={{zIndex: 3}} class="console_component">
      <ul>
        {props.data.map(ea => {
          return (<LI data={ea.data} title={ea.title}></LI>)
        })}
      </ul>
    </div>
  )
}
