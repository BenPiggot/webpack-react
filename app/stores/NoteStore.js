import uuid from 'uuid';
import alt from '../libs/alt.js';
import NoteActions from '../actions/NoteActions.js';

class NoteStore {
  constructor() {
    this.bindActions(NoteActions);

    this.notes = [];

    this.exportPublicMethods({
    	getNotesByIds: this.getNotesByIds.bind(this)
    })
  }

  create(note) {
    this.setState({
      notes: this.notes.concat(note)
    });

    return note;
  }

  update(updatedNote) {
    this.setState({
      notes: this.notes.map(note => {
        if(note.id === updatedNote.id) {
          return Object.assign({}, note, updatedNote);
        }

        return note;
      })
    });
  }

  delete(id) {
    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    });
  }

	getNotesByIds(ids) {
		console.log(ids)
		return (ids || []).map(id => this.notes.filter(note => note.id === id)).
			filter(a => a.length).map(a => a[0])
	}
}


export default alt.createStore(NoteStore, 'NoteStore');