import contactsIcon from '../../assets/gmail.png';
import CVIcon from '../../assets/pdf-file.png';
import aboutIcon from '../../assets/txt.png';
import wallpaperIcon from '../../assets/wallpaper.png';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<div className='absolute  bottom-8 h-48 w-36 bg-white border border-black flex flex-col justify-between'>
			<NavLink
				to='/about'
				className='p-2 flex items-center hover:bg-red-800 duration-300'
			>
				<img src={aboutIcon} alt='about' className='w-8 mr-2' />
				<p>About</p>
			</NavLink>
			<NavLink
				to='/contacts'
				className='p-2 flex items-center hover:bg-red-800 duration-300'
			>
				<img src={contactsIcon} alt='contac' className='w-8 mr-2' />
				<p>Contacts</p>
			</NavLink>
			<NavLink
				to='/cv'
				className='p-2 flex items-center hover:bg-red-800 duration-300'
			>
				<img src={CVIcon} alt='cv' className='w-8 mr-2' />
				<p>CV</p>
			</NavLink>

			<NavLink
				to='/wallpaper'
				className='p-2 flex items-center hover:bg-red-800 duration-300'
			>
				<img src={wallpaperIcon} alt='wall' className='w-8 mr-2' />
				<p>Wallpaper</p>
			</NavLink>
		</div>
	);
};

export default Menu;
