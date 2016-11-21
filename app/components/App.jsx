import React from 'react';
import uuid from 'node-uuid';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions.js';
import NoteStore from '../stores/NoteStore.js';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = NoteStore.getState();
	}

	componentDidMount() {
		NoteStore.listen(this.storeChanged);
	}

	componentWillUnmount() {
		NoteStore.unlisten(this.storeChanged)
	}

	storeChanged = (state) => {
		this.setState(state);
	}

	addNote() {
		NoteActions.create({task: 'New task', id: uuid.v4() });
	};

	editNote = (id, task) => {
		if (!task.trim()) {
			return;
		}

		NoteActions.update({id, task})
	};

	deleteNote = (id, e) => {
		e.stopPropagation();

		NoteActions.delete(id);
	}

	render() {
		const notes = this.state.notes;
		return <div>
			<button className="add-note" onClick={this.addNote}>+</button>
			<Notes 
				notes={notes} 
				onEdit={this.editNote} 
				onDelete={this.deleteNote} />
		</div>
	}
}


export default App;