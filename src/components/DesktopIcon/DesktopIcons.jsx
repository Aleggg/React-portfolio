import Icon from './Icon';
import contactsIcon from '../../assets/gmail.png';
import CVIcon from '../../assets/pdf-file.png';
import aboutIcon from '../../assets/txt.png';

const DesktopIcons = () => {
	return (
		<div className='flex flex-col m-10 items-start'>
			<Icon link='/about' iconName='About.txt' iconImage={aboutIcon} />
			<Icon link='/CV' iconName='CV.pdf' iconImage={CVIcon} />
			<Icon link='/contacts' iconName='Contacts' iconImage={contactsIcon} />
		</div>
	);
};

export default DesktopIcons;
