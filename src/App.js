import { Routes, Route } from 'react-router-dom';

import DesktopIcons from './components/DesktopIcon/DesktopIcons';
import Bottom from './components/Bottom/Bottom';
import CV from './components/CV/CV';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import Linear from './components/Background/Linear';
import './App.css';

function App() {
	return (
		<>
			<Linear />
			<DesktopIcons />
			<Bottom />
			<Routes>
				<Route path='/CV' element={<CV />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</>
	);
}

export default App;
