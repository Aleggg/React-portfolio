import { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import DesktopIcons from './components/DesktopIcon/DesktopIcons';
import Bottom from './components/Bottom/Bottom';
import CV from './components/CV/CV';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import BackgroundContext from './store/background-contex';
import BackGround from './components/Background/BackGround';
import ChooseBakcground from './components/Background/ChooseBakcground';
import './App.css';
import Clock from './components/Time/Clock';
import Radio from './components/Radio/Radio';

function App() {
	const [background, setBackground] = useState('linear');
	const value = useMemo(() => ({ background, setBackground }), [background]);

	return (
		<>
			{/* <Linear /> */}
			{/* <GifBackground /> */}
			<BackgroundContext.Provider value={value}>
				<BackGround />
				<DesktopIcons />
				<Bottom />
				<Routes>
					<Route path='/CV' element={<CV />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/about' element={<About />} />
					<Route path='/wallpaper' element={<ChooseBakcground />} />
					<Route path='/time' element={<Clock />} />
					<Route path='/radio' element={<Radio />} />
				</Routes>
			</BackgroundContext.Provider>
		</>
	);
}

export default App;
