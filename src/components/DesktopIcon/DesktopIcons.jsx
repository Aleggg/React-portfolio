import Icon from './Icon';
import contactsIcon from '../../assets/gmail.png';
import CVIcon from '../../assets/pdf-file.png';
import aboutIcon from '../../assets/txt.png';
import wallpaperIcon from '../../assets/wallpaper.png';
import radioIcon from '../../assets/radio.png';

const DesktopIcons = () => {
	return (
		<div className='flex flex-col m-10 items-start absolute top-0 left-0'>
			<Icon link='/about' iconName='About.txt' iconImage={aboutIcon} />
			<Icon link='/CV' iconName='CV.pdf' iconImage={CVIcon} />
			<Icon link='/contacts' iconName='Contacts' iconImage={contactsIcon} />
			<Icon
				link='/wallpaper'
				iconName='Wallpaper.exe'
				iconImage={wallpaperIcon}
			/>
			<Icon link='/radio' iconName='Radio.exe' iconImage={radioIcon} />
		</div>
	);
};

export default DesktopIcons;
