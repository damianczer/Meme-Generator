import React, { useState, lazy, Suspense } from 'react';
import './App.scss';
import Loader from './components/Loader';
import Main from './components/Main';

const Footer = lazy(() => import('./components/Footer'));
const Header = lazy(() => import('./components/Header'));
const Menu = lazy(() => import('./components/Menu'));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Generator');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderContent = () => {
    switch (selectedOption) {
      case 'Generator':
        return <div>Generator Component</div>;
      case 'Gallery':
        return <div>Gallery Component</div>;
      case 'About':
        return <div>About Component</div>;
      default:
        return <div>Generator Component</div>;
    }
  };

  return (
    <div className={`App ${isMenuOpen ? 'menu-open' : ''}`}>
      <Suspense fallback={<Loader />}>
        <Header onMenuToggle={toggleMenu} />
        <Menu isOpen={isMenuOpen} onClose={toggleMenu} onSelect={setSelectedOption} />
        <Main>{renderContent()}</Main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
