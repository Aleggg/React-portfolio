import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Window from '../Window/Window';
import closeBtn from '../../assets/x.svg';

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const Clock = () => {
	const navigate = useNavigate();
	const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB'));
	const [day, setDay] = useState(
		new Date().toISOString().slice(0, 10) + ' ' + week[new Date().getDay()]
	);

	useEffect(() => {
		const interval = setInterval(() => {
			const date = new Date();
			setTime(date.toLocaleTimeString('en-GB'));
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	const closeHandler = () => {
		navigate('/');
	};
	return (
		<div className='p-6 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-black rounded-md z-10'>
			<p className='time text-center text-3xl'>{day}</p>
			<p className='date text-6xl'>{time}</p>
			<button onClick={closeHandler} className='absolute top-2 right-2'>
				<img
					src={closeBtn}
					alt='close'
					className='w-2 duration-200 hover:w-2.5 '
				/>
			</button>
		</div>
	);
};

export default Clock;
