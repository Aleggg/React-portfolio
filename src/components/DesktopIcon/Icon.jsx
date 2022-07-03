import { NavLink } from 'react-router-dom';

const Icon = (props) => {
	return (
		<NavLink
			className='flex flex-col items-center justify-center text-center w-14 mb-6'
			to={props.link}
		>
			<img src={props.iconImage} alt='icon' className='' />
			<div>{props.iconName}</div>
		</NavLink>
	);
};

export default Icon;
