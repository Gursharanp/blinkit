import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/App.css';
import Login from './components/Login';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          {/* <Route path="/" element={<Header />}/> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/> }  />
          <Route path="/CreateAccount" element={<CreateAccount/>}/>
        </Routes>
      </Router>
         
    </div>
  );
}

export default App;
