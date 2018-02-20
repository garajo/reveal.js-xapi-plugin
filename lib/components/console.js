import {h, Component} from 'preact'
import LI from './line_LI'

class Console extends Component {

  render () {
    return (
      <div style={{zIndex: 3}} class="console_component">
        <ul>
          {this.props.data.map(ea => (<LI data={ea}></LI>))}
        </ul>
      </div>
    )
  }
}

export default Console
