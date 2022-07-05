const GifBackground = (props) => {
	return (
		<div
			style={{
				backgroundImage: props.gif,
				backgroundSize: 'cover',
				height: '100vh',
				zIndex: -1,
				outline: 'none',
			}}
		></div>
	);
};

export default GifBackground;
