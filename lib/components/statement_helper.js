import { h, Component } from 'preact';
import Hello from './hello';

export default class StatementHelper extends Component {
	constructor (props) {
		super(props)

		console.log('props', props)

	}
	render() {
    console.log('this.props', this.props)
    console.log('this.state', this.state)
    console.log('this', this)
		return (
			<div class="app">
				<h1>Hello!</h1>
				<Hello />
			</div>
		);
	}
}
