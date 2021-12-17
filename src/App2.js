import React from 'react';
import './App.css';
import RouterPage from './pages/routers/RouterPage.jsx';
// import MyRouterPage from './pages/routers/MyRouterPage.jsx';
import { Provider } from 'react-redux';
import store from './store/reduxStore'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterPage></RouterPage>
        {/* <MyRouterPage></MyRouterPage> */}
      </div>
    </Provider>
  );
}

export default App;
