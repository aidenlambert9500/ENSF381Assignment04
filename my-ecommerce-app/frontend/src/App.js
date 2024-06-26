import './App.css';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';
import Login from './component/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { UserProvider } from './component/UserContext';

function App() {
  return (
    <UserProvider>
    <Router>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/Productpage' element={<Productpage />} />
            <Route path='/Login' element={<Login />}></Route>
        </Routes>
    </Router>
    </UserProvider>
  )    
}

export default App;
