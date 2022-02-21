import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Chat from './Components/Chat/Chat'
import Join from './Components/Chat/Join'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element ={<Join />} />
        <Route exact path ="/chat" element={<Chat />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
