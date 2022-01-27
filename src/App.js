import Content from './components/Content';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
    <Content/>
    </div>
  );
}

export default App;
