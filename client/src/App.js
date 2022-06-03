
import Header from './components/Header/Header';
import MainPage from './components/Pages/MainPage/MainPage';
import Popups from './components/Popups/Popups';

import { Provider } from 'react-redux'
import './style/App.css';
import { configureStore } from './ConfigureStore';

function App() {

  var store = configureStore()

  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <Header/>
          <MainPage/>
          <Popups/>
        </div>
      </div>
    </Provider>
  );
}



export default App;
