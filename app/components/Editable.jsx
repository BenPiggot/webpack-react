import React from 'react';

class Editable extends React.Component {
	renderEdit = () => {
		return <input type="text" 
									ref={
										(e) => e ? e.selectionStart = this.props.value.length : null
									}
									autoFocus={true}
									defaultValue={this.props.value}
									onBlur={this.finishEdit}
									onKeyPress={this.checkEnter} />
	};

	renderValue = () => {
		const onDelete = this.props.onDelete;
		debugger
		return <div onClick={this.props.onValueClick}>
			<span className="value">{this.props.value}</span>
			{ onDelete ? this.renderDelete() : null }
		</div>
	};

	renderDelete = () => {
		return <button className="delete" onClick={this.props.onDelete}>x</button>
	}

	checkEnter = (e) => {
		if (e.key === 'Enter') {
			this.finishEdit(e);
		}
	};

	finishEdit = (e) => {
		const value = e.target.value;

		if (this.props.onEdit) {
			this.props.onEdit(value);
		}
	}

	render() {
		const { value, onEdit, onValueClick, editing, ...props } = this.props;

		return <div>
			{ editing ? this.renderEdit() : this.renderValue() }
		</div>
	}
}

export default Editable;