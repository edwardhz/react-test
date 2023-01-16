import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import NewPassword from '../containers/NewPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/newpassword" element={<NewPassword/>}/>
          <Route  path='*' element={<NotFound/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;