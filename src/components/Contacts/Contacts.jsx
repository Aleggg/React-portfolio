import React from 'react';

import Window from '../Window/Window';
import telegram from '../../assets/telegram.png';
import linkedin from '../../assets/linkedin.png';
import insta from '../../assets/instagram.png';
import git from '../../assets/github.png';

const Contacts = () => {
	return (
		<Window>
			<div className='Content w-60 h-72 p-6 flex flex-wrap justify-between'>
				<div className='flex flex-col items-center mr-2'>
					<a href='https://t.me/Helgiih'>
						<img src={telegram} alt='tel' className='w-16' />
					</a>
					<span className='font-VT'>@Helgiih</span>
				</div>
				<div className='flex flex-col items-center'>
					<a href='https://linkedin.com/in/oleh-hasii'>
						<img src={linkedin} alt='linkedin' className='w-16' />
					</a>
					<span className='font-VT'>Oleh Hasii</span>
				</div>
				<div className='flex flex-col items-center'>
					<a href='https://www.instagram.com/helgii.h'>
						<img src={insta} alt='insta' className='w-16' />
					</a>
					<span className='font-VT'>@helgii.h</span>
				</div>
				<div className='flex flex-col items-center'>
					<a href='https://github.com/Aleggg'>
						<img src={git} alt='git' className='w-16' />
					</a>
					<span className='font-VT'>@Aleggg</span>
				</div>
			</div>
		</Window>
	);
};

export default Contacts;
