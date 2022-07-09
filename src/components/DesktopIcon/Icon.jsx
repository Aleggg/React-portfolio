import { NavLink } from 'react-router-dom';

const Icon = (props) => {
	return (
		<NavLink
			className='flex flex-col items-center justify-center text-center w-12 mb-6 sm:w-8'
			to={props.link}
		>
			<img src={props.iconImage} alt='icon' className='' />
			<div className='text-white text-base'>{props.iconName}</div>
		</NavLink>
	);
};

export default Icon;
