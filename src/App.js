import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Room from './pages/Room'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Navbar from './components/Navbar';
import Footer from './components/Footer'


function App() {
  return (
   <>
   
   <Navbar/>


<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Blog' element={<Blog/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Room' element={<Room/>}/>
  <Route path='/Services' element={<Services/>}/>
  <Route path='/Gallery' element={<Gallery/>}/>
  
</Routes>


<Footer/>
   
   </>
  );
}

export default App;
