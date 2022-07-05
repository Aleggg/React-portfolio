import { useContext } from 'react';

import BackgroundContext from '../../store/background-contex';
import GifBackground from './GifBackground';
import Linear from './Linear';

const BackGround = () => {
	const { background } = useContext(BackgroundContext);

	return (
		<>
			{background === 'linear' ? (
				<Linear />
			) : (
				<GifBackground gif={background} />
			)}
		</>
	);
};

export default BackGround;
