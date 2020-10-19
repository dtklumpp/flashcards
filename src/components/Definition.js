import React from 'react';

const COLORS = ['#673ab7', '#2196f3', '#26a69a', '#e91e63'];

const Definition = (props) => {
	console.log(props)
	const { idx, def } = props;

	const styles = {
		color: 'white',
		padding: '10px',
		backgroundColor: COLORS[idx],
	}

	return (
		<div className="card center-align" style={styles}>
			<p>{def.definitions}</p>
		</div>
	)
};

export default Definition;
