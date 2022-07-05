import React from 'react';

const BackgroundContext = React.createContext({
	background: 'linear',
	setBackground: () => {},
});

export default BackgroundContext;
