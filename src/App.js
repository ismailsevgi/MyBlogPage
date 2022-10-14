import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './PAGES/Home';
import AddEditBlog from './PAGES/AddEditBlog';
import Detail from './PAGES/Detail';
import Navbar from './Components/Navbar';
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <ToastContainer position='top-center' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<AddEditBlog />} />
          <Route path='/update/:id' element={<AddEditBlog />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
