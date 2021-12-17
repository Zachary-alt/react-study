import React from 'react';
// import ReactReduxPage from './pages/ReactReduxPage.jsx';
// import MyReduxPage from './pages/my/MyReduxPage';
import MyReactReduxPage from './pages/my/MyReactReduxPage';
import RouterPage from './pages/routers/RouterPage';
import './App.css';
// import { Provider } from 'react-redux';
// import store from './store/reduxStore'
import { Provider } from "./zreact-redux";
import store from './store/myReactReduxStore'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ReactReduxPage></ReactReduxPage> */}
        {/* <MyReduxPage></MyReduxPage> */}
        {/* <MyReactReduxPage></MyReactReduxPage> */}
        <RouterPage></RouterPage>
      </div>
    </Provider>
  );
}

export default App;
