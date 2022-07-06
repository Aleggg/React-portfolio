import myPhoto from '../../assets/myphoto.JPG';

const General = () => {
	return (
		<div className='flex justify-around '>
			<div className='flex flex-col mr-14 sm:mr-0'>
				<h1 className='text-3xl sm:text-center'>Oleh Hasii</h1>
				<h2 className='text-lg'>Front-end (React) developer</h2>
				<p>
					<strong>Date of birth:</strong> 18 September 2001
				</p>
				<p>
					<strong>Current residence:</strong> Lviv, Ukraine
				</p>
				<p>
					<strong>Email:</strong> olehhasii@gmail.com
				</p>
				<p>
					<strong>Languages:</strong> Ukrainian(Native), English(Intermediate)
				</p>
			</div>
			<img
				src={myPhoto}
				alt='me'
				className='w-40 border-2 border-black sm:hidden'
			/>
		</div>
	);
};

export default General;
