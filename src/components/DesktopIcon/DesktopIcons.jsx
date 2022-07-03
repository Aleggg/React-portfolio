import Icon from './Icon';
import contactsIcon from '../../assets/mail.png';
import CVIcon from '../../assets/pdf-file.png';

const DesktopIcons = () => {
	return (
		<div className='flex flex-col m-10 items-start'>
			<Icon link='/CV' iconName='CV' iconImage={CVIcon} />
			<Icon link='/contacts' iconName='Contacts' iconImage={contactsIcon} />
		</div>
	);
};

export default DesktopIcons;
