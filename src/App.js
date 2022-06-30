import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Todo from './components/pages/Todo';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import CompleteTask from './components/pages/CompleteTask';
import Calender from './components/pages/Calender';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Todo></Todo>}></Route>
        <Route path='/completetask' element={<CompleteTask></CompleteTask>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
      <Footer></Footer>
    </>

  );
}

export default App;
