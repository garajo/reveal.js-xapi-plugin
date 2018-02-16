import {h, Component} from 'preact'
import Hello from './hello'

class StatementHelper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }

    this.submitSearch = this.submitSearch.bind(this)
  }

  submitSearch(e) {
    e.preventDefault()
    this.setState({
      search: this.state.search + e.data
    })
  }

  render() {
    console.log('this.state', this.state)
    return (<div class="app">
      <input type="text" onInput={this.submitSearch} placeholder="search for a term" value={this.state.search}/>
      <Hello/>
    </div>)
  }
}

export default StatementHelper
