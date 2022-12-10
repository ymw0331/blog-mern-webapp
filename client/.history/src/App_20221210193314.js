import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/Home';

function App() {
  return (
    <div className='max-w-screen-md mx-auto pt-20'>
      <Home />
    </div>
  );
}

export default App;
