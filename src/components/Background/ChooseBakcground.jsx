import { useContext } from 'react';

import Window from '../Window/Window';
import linearImg from '../../assets/linear.jpg';
import BackgroundContext from '../../store/background-contex';

const ChooseBakcground = () => {
	const { setBackground } = useContext(BackgroundContext);
	const gifs = [
		'url("https://giffiles.alphacoders.com/112/112254.gif")',
		'url("https://c.tenor.com/JI8vPs4PI9gAAAAC/neon-genesis-evangelion-countdown.gif")',
		'url("https://giffiles.alphacoders.com/354/35473.gif")',
		'url("https://64.media.tumblr.com/dfc796e8192bfde5864b6611daa568bf/tumblr_osev3lVly21qaaytso2_500.gif")',
		'url("https://c.tenor.com/M5iwvGvTK3oAAAAC/90s-anime-aesthetic.gif")',
		'url("https://data.whicdn.com/images/339504877/original.gif")',
		'url("https://c.tenor.com/u-HD_rGXzGMAAAAC/japan.gif")',
		'url("https://i.gifer.com/origin/e6/e6e0387ff7b558ba773ca274decd95c8.gif")',
		'url("https://i.gifer.com/JRoi.gif")',
		'url("https://i.pinimg.com/originals/69/c1/5e/69c15e848e90f726bd75dd4fbcd256cf.gif")',
		'url("https://data.whicdn.com/images/300653746/original.gif")',
	];

	const getRandomGif = () => {
		const gif = gifs[Math.floor(Math.random() * gifs.length)];
		return gif;
	};

	const linearHandler = () => {
		setBackground('linear');
	};

	const gifHandler = () => {
		setBackground(getRandomGif());
	};

	return (
		<Window>
			<div className='p-6'>
				<h1 className='text-2xl font-bold text-center mb-4'>
					Choose Background
				</h1>
				<div className='mb-4'>
					<img
						src={linearImg}
						alt='linear'
						className=' w-80 border-2 duration-200 border-black p-1 hover:scale-105 cursor-pointer sm:w-42'
						onClick={linearHandler}
					/>
					<p className='text-2xl text-center'>Linear 3D</p>
				</div>
				<div>
					<img
						src='https://giffiles.alphacoders.com/112/112254.gif'
						alt='linear'
						className=' w-80 border-2 duration-200 border-black p-1 hover:scale-105 cursor-pointer h-40'
						onClick={gifHandler}
					/>
					<p className='text-2xl text-center'>Random GIF</p>
				</div>
			</div>
		</Window>
	);
};

export default ChooseBakcground;
