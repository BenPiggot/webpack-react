import React from 'react';
import uuid from 'node-uuid';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			notes: [
				{
					id: uuid.v4(),
					task: 'Learn Webpack'
				},
				{
					id: uuid.v4(),
					task: 'Learn React'
				},
				{
					id: uuid.v4(),
					task: 'Do Laundry'
				}
			]
		}
	}

	addNote = () => {
		this.setState({
			notes: this.state.notes.concat([{
				id: uuid.v4(),
				task: 'New Task'
			}])
		})
	}

	render() {
		const notes = this.state.notes;
		return <div>
			<button onClick={this.addNote}>+</button>
			<ul>{notes.map(note => 
				<li key={note.id}>{note.task}</li>
			)}
			</ul>
		</div>
	}
}


export default App;