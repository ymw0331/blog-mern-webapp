import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
          <Home />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
