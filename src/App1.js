import React from 'react';
// import logo from './logo.svg';
// import Home from './pages/Home';
// import Home1 from './pages/Home1';
// // import HoocksPage from './pages/HoocksPage.jsx';
// import HooksReducer from './pages/HooksReducer.jsx';
import ReduxPage from './pages/ReduxPage.jsx';
// import HooksContext from './pages/HooksContext.jsx';
// import HocPage from './pages/HocPage.jsx';
// import FormPage from './pages/FormPage.jsx';
// import DialogPage from './pages/DialogPage.jsx';
// import MyFormPage from './pages/my/MyFormPage.jsx';
import TreePage from './pages/TreePage.jsx';
import User1 from './pages/User1.jsx';
import Search from './pages/Search.jsx';
import CtxP from './pages/Context';
import './App.css';
import { Provider,Consumer } from './AppContext';


const store={
  userinfo:{
    userName:'jack'
  }
}
const tellme=(msg)=>{
  console.log(msg);
  
}

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <HoocksPage></HoocksPage> */}
      {/* <HooksContext></HooksContext> */}
      {/* <HooksReducer></HooksReducer> */}
      <ReduxPage></ReduxPage>
      {/* <HocPage></HocPage> */}
      {/* <FormPage></FormPage> */}
      {/* <MyFormPage></MyFormPage> */}
      {/* <DialogPage></DialogPage> */}
      {/* <TreePage></TreePage> */}
      {/* <User1></User1> */}
      {/* <Search store={store} tellme={tellme}></Search> */}
      {/* <Provider value={store}>
        <Consumer>
          {
            ctx=><CtxP {...ctx}/>
          }
        </Consumer>
        <Home1></Home1>
      </Provider> */}
    </div>
  );
}

export default App;
