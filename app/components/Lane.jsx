import AltContainer from 'alt-container';
import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions.js';
import NoteStore from '../stores/NoteStore.js';
import LaneActions from '../actions/LaneActions.js';

class Lane extends React.Component {
	editNote(id, task) {
		if (!task.trim()) {
			return;
		}

		NoteActions.update({id, task})
	};

	addNote = (e) => {
		const laneId = this.props.lane.id;
		const note = NoteActions.create({ task: 'New task', id: uuid.v4() });

		LaneActions.attachToLane({
			noteId: note.id,
			laneId
		})
	}

	deleteNote = (noteId, e) => {
		e.stopPropagation();
		const laneId = this.props.lane.id;

		LaneActions.detachFromLane({laneId, noteId});
		NoteActions.delete(noteId)
	};

	render() {
		console.log(this.props)
		const { lane, ...props } = this.props;

		return <div {...props}>	
			<div className="lane-header">
				<div className="lane-add-note">
					<button onClick={this.addNote}>+</button>
				</div>
			</div>
			<AltContainer
				stores={[NoteStore]}
				inject={{
					notes: () => NoteStore.getNotesByIds(lane.notes)
				}} >
				<Notes onEdit={this.editNote} onDelete={this.deleteNote} />
			</AltContainer>
		</div>
	}
}

export default Lane;