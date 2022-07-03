import { Routes, Route } from 'react-router-dom';

import DesktopIcons from './components/DesktopIcon/DesktopIcons';
import Bottom from './components/Bottom/Bottom';
import CV from './components/CV/CV';
import Contacts from './components/Contacts/Contacts';
import Linear from './components/Background/Linear';
//import bg from './assets/bg.jpg';
import './App.css';

function App() {
	return (
		<>
			<DesktopIcons />
			<Bottom />
			<Routes>
				<Route path='/CV' element={<CV />} />
				<Route path='/contacts' element={<Contacts />} />
			</Routes>
		</>
	);
}

export default App;
