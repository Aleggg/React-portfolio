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
	return (
		<Draggable nodeRef={nodeRef} handle='#handle'>
			<div
				ref={nodeRef}
				className={`bg-white  absolute top-10 left-96  border-2 border-black rounded-md z-10 sm:left-2 sm:top-10 `}
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
							<img
								src={closeBtn}
								alt='close'
								className='w-4 duration-200 hover:w-5'
							/>
						</button>
					</div>
				</div>
				{props.children}
			</div>
		</Draggable>
	);
};

export default Window;
