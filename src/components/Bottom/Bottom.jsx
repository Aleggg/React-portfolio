import { useEffect, useRef, useState } from 'react';
import Menu from '../Menu/Menu';

import Time from '../Time/Time';

const Bottom = () => {
	const [menu, setMenu] = useState(false);
	const btnRef = useRef();
	useEffect(() => {
		const closeMenuHandler = (e) => {
			if (e.path[0] !== btnRef.current) {
				setMenu(false);
			}
		};

		document.body.addEventListener('click', closeMenuHandler);
		return () => {
			document.body.removeEventListener('click', closeMenuHandler);
		};
	}, []);

	const showMenuHandler = () => {
		setMenu((prevState) => !prevState);
	};

	return (
		<div className='fixed z-20 bottom-0 w-full  h-8 bg-gray-300 border-t border-t-black'>
			<div className='bottom_container h-full flex  items-center justify-between'>
				<button
					className='text-l pl-2 pr-2 border-r border-r-gray-400 hover:text-red-900 duration-100'
					onClick={showMenuHandler}
					ref={btnRef}
				>
					Menu
				</button>
				<Time />
				{menu && <Menu />}
			</div>
		</div>
	);
};

export default Bottom;
