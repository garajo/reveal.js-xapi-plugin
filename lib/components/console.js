import {h, Component} from 'preact'

class Console extends Component {

  render () {
    return (
      <pre>{JSON.stringify(this.props.data)}</pre>
    )
  }
}

export default Console
