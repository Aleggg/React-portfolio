import React from 'react';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';

import closeBtn from '../../assets/x.svg';
import file from '../../assets/folder.png';

const Window = (props) => {
	const navigate = useNavigate();

	const closeHandler = () => {
		navigate('/');
	};
	const nodeRef = React.useRef(null);
	const Y_POS = {
		max: 150,
		min: 100,
	};
	const X_POS = {
		max: 700,
		min: 300,
	};
	// top не більше 23 rem і не менше 2 rem
	//  left не менше 10 і не більше ніж 51 rem
	const y = Math.floor(Math.random() * (Y_POS.max - Y_POS.min + 1) + Y_POS.min);
	const x = Math.floor(Math.random() * (X_POS.max - X_POS.min + 1) + X_POS.min);
	return (
		<Draggable nodeRef={nodeRef} handle='#handle'>
			<div
				ref={nodeRef}
				style={{ top: y + 'px', left: x + 'px' }}
				//style={{ top: '50px', left: '600px' }}
				//transform -translate-x-1/2 -translate-y-1/2
				className={`bg-white fixed  border-2 border-black rounded-md z-10`}
			>
				<div className='Header_Window h-8 border-b border-black flex justify-between '>
					<div className='border-r border-black pr-1 pl-1 flex items-center'>
						<img src={file} alt='file' className='w-6' />
					</div>
					<div
						className='w-full pt-px flex justify-center flex-col cursor-move'
						id='handle'
					>
						<span className='h-px w-full bg-black mb-1 '></span>
						<span className='h-px w-full bg-black mb-1 '></span>
						<span className='h-px w-full bg-black mb-1 '></span>
						<span className='h-px w-full bg-black mb-1 '></span>
						<span className='h-px w-full bg-black '></span>
					</div>
					<div className='h-full pl-2 pr-2 border-l border-black flex items-center'>
						<button onClick={closeHandler}>
							<img src={closeBtn} alt='close' className='w-4' />
						</button>
					</div>
				</div>
				{props.children}
			</div>
		</Draggable>
	);
};

export default Window;
