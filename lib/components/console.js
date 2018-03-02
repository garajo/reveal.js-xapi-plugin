import {h} from 'preact'
import LI from './line_LI'

export default (props) => {
  return (
    <div style={{zIndex: 3}} class="bottom_right">
      <ul>
        {props.data.map(ea => {
          return (<LI data={ea.data} title={ea.title}></LI>)
        })}
      </ul>
    </div>
  )
}
