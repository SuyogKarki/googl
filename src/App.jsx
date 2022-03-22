import { useState } from 'react';
import { Navbar, Footer, Routes } from './components';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <BrowserRouter>
      <div className={darkTheme ? 'dark' : ''}>
        <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routes />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
