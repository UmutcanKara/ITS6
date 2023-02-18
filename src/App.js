import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './Views/Auth/Login/Login';
import SignUp from './Views/Auth/SignUp/SignUp';
import Profile from './Views/Profile/Profile';
import SinglePost from './Views/Post/SinglePost/SinglePost';
import NewPost from './Views/Post/NewPost/NewPost';
import Loading from './components/Loading/Loading';
import NotificationContextProvider from './util/NotificationContext/NotificationContext';
import NotificationContainer from './components/Notification/NotificationContainer';

function App() {
  return (
    <NotificationContextProvider>
      <Navbar currentPath={window.location.href} />
      <NotificationContainer />
      <div className="routes app">
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/post/:id' element={<SinglePost />} />
            <Route path='/post/new' element={<NewPost />} />
            <Route path='/loading' element={<Loading />} />
          </Routes>
        </Router>
      </div>
    </NotificationContextProvider>
  );
}

export default App;
