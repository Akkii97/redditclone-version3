import Header from './Components/Header/Header';
import './App.css';
import Posts from './Components/Posts/Posts';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Tabs from './Components/Extra/Tabs';
import AddPost from './Components/AddPost/AddPost';
import Main from './Components/Main/Main';
import Error from './Components/Error/Error';
import Header1 from './Components/Header/Header1';
import User from './Components/User/User';



function App() {
  return (

    <BrowserRouter>
    <Header1/>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/AddPost' element={<AddPost/>} />
      <Route path='/Login' element={<Login />} />
      <Route path='/User' element={<User />} />
      <Route path='*' element={<Error />} />


    </Routes>
    </BrowserRouter>

    // <Tabs />
    // <Header1/>
  );
}

export default App;



// older code

    // <div className="App">
    //   <Header />
    //   {/* <Posts/> */}

    //   <Routes>
    //     <Route path='/' element={<App />} />
    //     <Route path='/Login' element={<Login />} />
    //   </Routes>
    // </div>
