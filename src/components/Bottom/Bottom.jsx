import Time from '../Time/Time';

const Bottom = () => {
	return (
		<div className='fixed z-20 bottom-0 w-full  h-8 bg-gray-300 border-t border-t-black'>
			<div className='bottom_container h-full flex  items-center justify-between'>
				<div className='p-2 text-l border-r border-r-gray-400'>Menu</div>
				<Time />
			</div>
		</div>
	);
};

export default Bottom;
