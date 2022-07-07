import Window from '../Window/Window';

const About = () => {
	return (
		<Window>
			<div className='p-4 max-h-96 max-w-xl overflow-y-auto sm:max-w-xs'>
				<h1 className='text-center text-3xl'>About me</h1>
				<p className='mb-4 mt-4'>
					Hi! My name is Oleh and I`m front-end developer based in Ukraine. I
					describe myself as a passionate, well-organized developer who loves
					learning new things. My main skills are JS, HTML, CSS and React/Redux.
				</p>
				<p className='mb-4'>
					Learn programming I`ve started in 2019 At Lviv Polytechnic National
					University. My tasks was to make homeworks using C (that was blood,
					sweat, and tears), later homeworks switch to C++, Java and so on. But
					the main thing i learned is to tackle task if you have no idea how to
					do it.
				</p>
				<p className='mb-4'>
					In 2021 i decided to learn coding seriously and start my career as a
					front-end developer. Why front-end? Because its much funnier than C in
					university. Throughout my education I gained knowledge of JS, HTML,
					CSS, React, GIT. And now my main goal is to find first position as
					developer on real project.
				</p>
				<p className='mb-4'>
					When not struggling with code, I'm going to the gym, figuring out
					studying at university or just have a rest
				</p>
				<p className='mb-4 mt-4'>
					Looking forward for joining a team of nice people who always can give
					a hand and teach something new!
				</p>
			</div>
		</Window>
	);
};

export default About;
