import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Newauthors from './components/Newauthors';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/new' element={<Newauthors/>}/>
      <Route path='/edit/:id' element={<EditAuthors/>}/>
     </Routes>
    </div>
  );
}

export default App;