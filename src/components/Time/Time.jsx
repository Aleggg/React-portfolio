import { useState, useEffect } from 'react';

const Time = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	useEffect(() => {
		const interval = setInterval(() => {
			const date = new Date();
			setTime(date.toLocaleTimeString());
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return <div className='p-1 pr-4 pl-2 border-l border-l-gray-400'>{time}</div>;
};

export default Time;
