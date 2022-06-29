import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/sign-in' element={<SigninPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
