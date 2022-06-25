import './App.scss';
import Header from './components/header/Header';
import NavigationMenu from './components/navigation/NavigationMenu';
import Content from './components/main/Content';

function App() {
  return (
    <div className='container'>
      <Header />
      <NavigationMenu />
      <Content />
    </div>
  );
}

export default App;
