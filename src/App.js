import './App.css';
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import List from './components/List';
import Update from './components/Update';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List/>}></Route>
          <Route path='/create-todo' element={<Home/>}></Route>
          <Route path='/update-todo/:id' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
