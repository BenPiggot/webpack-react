import React from 'react';
import uuid from 'node-uuid';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions.js';
import LaneStore from '../stores/LaneStore.js';
import AltContainer from 'alt-container';

class App extends React.Component {
	addLane() {
		LaneActions.create({name: 'New lane'});
	}

	render() {
		console.log(LaneStore.getState().lanes)
		return <div>
			<button className="add-lane" onClick={this.addLane}>+</button>
			<AltContainer 
				stores={[LaneStore]}
				inject={{
					lanes: () => LaneStore.getState().lanes || []
				}} >
				<Lanes />
			</AltContainer>
		</div>
	}
}


export default App;