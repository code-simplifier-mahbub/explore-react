import { Route, Routes } from 'react-router-dom';
import './App.css'
import Friends from './components/Friends/Friends';
import OtherPerson from './components/OtherPerson/OtherPerson';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header'
import Home from './components/Home/Home';

function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/friend' element={<Friends></Friends>}></Route>
        <Route path='/other' element= {<OtherPerson></OtherPerson>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
