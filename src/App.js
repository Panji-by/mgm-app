import './App.css';
import Routes from './router/router'
import {Provider} from 'react-redux';
import store from './store/index'

function App() {
  return (
    <>
    <Provider store={store}>
      <Routes />
    </Provider>
    </>
  );
}

export default App;
