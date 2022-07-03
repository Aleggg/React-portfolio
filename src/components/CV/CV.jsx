import Window from '../Window/Window';
import General from './General';
import Education from './Education';
import Skills from './Skills';
import Expirience from './Expirience';

const CV = () => {
	return (
		<Window>
			<div className='p-6 max-w-4xl max max-h-128 overflow-y-auto'>
				<General />
				<div className='flex '>
					<div>
						<Education />
						<Expirience />
					</div>

					<Skills />
				</div>
			</div>
		</Window>
	);
};

export default CV;
