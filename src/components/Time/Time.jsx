import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Time = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB'));
	useEffect(() => {
		const interval = setInterval(() => {
			const date = new Date();
			setTime(date.toLocaleTimeString('en-GB'));
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<NavLink
			to='/time'
			className='p-1 pr-4 pl-2 border-l border-l-gray-400 hover:text-red-900 duration-100'
		>
			{time}
		</NavLink>
	);
};

export default Time;
