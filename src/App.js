import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BookDisplayComponent from './components/BookDisplayComponent/BookDisplayComponent';
import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom';
import AddBookComponent from './components/BookDisplayComponent/AddBookComponent/AddBookComponent';
import EditBookComponent from './components/EditBookComponent/EditBookComponent';

function App() {
  return (
    <Router>
    <div className="App">
      <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
        <div className='container'>
          <Link className='navbar-brand' to={'/books'}>
            Library
          </Link>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-items'>
                <Link className='nav-link' to={'/books'}>Books</Link>
              </li>
              <li className='nav-items'>
                <Link className='nav-link' to={'/add'}>Add books</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='auth-wrapper'>
        <div className='auth-inner'>
          <Routes>
            <Route exact path='/books' element={<BookDisplayComponent />} />
            <Route exact path='/add' element={<AddBookComponent/>} />
            <Route exact path='/edit' element={<EditBookComponent/>} />
            

          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
