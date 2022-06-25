import './App.scss';
import Header from './components/header/Header';
import NavigationMenu from './components/navigation/NavigationMenu';
import Content from './components/main/Content';
import Footer from './components/main/Footer';

function App() {
  return (
    <div className='container'>
      <Header />
      <NavigationMenu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
