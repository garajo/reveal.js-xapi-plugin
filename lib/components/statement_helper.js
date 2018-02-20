import {h, Component} from 'preact'
import StatementList from './statement_list'
import {conceptIdPairs} from 'lib/concepts'
import fuzzy from 'fuzzy'
import {map, flatten, pick, pluck, filter, keys} from 'ramda'

class StatementHelper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      matches: this.makeList(this.props.data),
      filterverb: true,
      filteractivity: true,
      filterother: false,
    }

    this.submitSearch = this.submitSearch.bind(this)
    this.filterIn = this.filterIn.bind(this)
  }

  makeList (data) {
    const iri_concept_list = flatten(conceptIdPairs(data))
    return map( ea => {
      return ({ string: ea.concept.prefLabel[this.props.langISO], ...ea })
    })(iri_concept_list)
  }

  submitSearch(e) {
    console.log('submitSearch.e', e)
    e.preventDefault()
    const search_term = e.target.value
    const list = this.makeList(this.props.data)

    const options = {
      pre: '<span class="highlight-blue">',
      post: '</span>',
      extract: function(el) {
        return el.string
      }
    };
    const results = search_term !== '' ? fuzzy.filter(search_term, list, options) : list

    const matches = results.map(function(el) {
      const {original, ...rest} = el
      return {...original, ...rest};
    });

    this.setState({
      search: search_term,
      matches,
    })
  }

  filterIn (e) {
    console.log('e', e)
    e.preventDefault()
    this.setState({[e.target.value]: !this.state[e.target.value]})
  }

  render() {
    const {langISO} = this.props
    const {filterverb, filteractivity, filterother, matches, search} = this.state

    console.log('this.state', this.state)

    const filterByType = ({other, ...types}, list) => filter(
      (ea) => types[ea.concept.type.toLowerCase()] || (other && !keys(types).includes(ea.concept.type.toLowerCase()))
    )(list)

    const filtered = filterByType({ verb: filterverb, activitytype: filteractivity, other: filterother}, matches)

    return (<div style={{zIndex: 3}} class="statement_component">
      <section>Statements</section>
      <StatementList data={filtered} langISO={langISO}/>
      <input style={{width: '100%'}} type="text" onInput={this.submitSearch} placeholder="search for a term" value={search}/>
      <div style={{display: 'flex'}}>
        <input id="verbs_chk" onChange={this.filterIn} type="checkbox" value="filterverb" checked={filterverb} />
        <label for="verbs_chk">verb</label>
        <input id="activity_chk" onChange={this.filterIn} type="checkbox" value="filteractivity" checked={filteractivity} />
        <label for="activity_chk">activity</label>
        <input id="others_chk" onChange={this.filterIn} type="checkbox" value="filterother" checked={filterother} />
        <label for="others_chk">others</label>
        <a target="_blank" style={{marginLeft: 'auto'}} href="https://adlnet.github.io/xapi-profiles/xapi-profiles-structure.html">@profiles</a>
      </div>
    </div>)
  }
}

export default StatementHelper
