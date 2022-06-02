
import Header from './components/Header/Header';
import MainPage from './components/Pages/MainPage/MainPage';
import Popups from './components/Popups/Popups';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <MainPage/>
        <Popups/>
      </div>
    </div>
  );
}



export default App;
