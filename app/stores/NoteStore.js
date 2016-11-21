import uuid from 'uuid';
import alt from '../libs/alt.js';
import NoteActions from '../actions/NoteActions.js';

class NoteStore {
  constructor() {
    this.bindActions(NoteActions);

    this.notes = [
      {
        id: uuid.v4(),
        task: 'Learn React'
      },
      {
        id: uuid.v4(),
        task: 'Do laundry'
      }
    ];
  }

  create(note) {
    this.setState({
      notes: this.notes.concat(note)
    });
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
  	console.log(id)
    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    });
  }
}


export default alt.createStore(NoteStore, 'NoteStore');