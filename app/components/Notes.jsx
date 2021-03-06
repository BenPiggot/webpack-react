import React from 'react';
import Editable from './Editable.jsx';

export default ({notes, onValueClick, onEdit, onDelete}) => {
	return <ul className="notes">
		{ notes.map(note =>
			<li className="note" key={note.id}>
				<Editable
					value={note.task}
					editing={note.editing} 
					onValueClick={onValueClick.bind(null, note.id)}
					onEdit={onEdit.bind(null, note.id)}
					onDelete={onDelete.bind(null, note.id)} />
			</li> )
		}
	</ul>
}