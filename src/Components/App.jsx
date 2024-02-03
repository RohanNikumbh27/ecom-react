
import Header from './Header';
import '../Styles/App.css';
import "../Styles/index.css";
import Home from './Home';
import Contact from './Contact';
import About from './About'
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Footer';


function App() {
  return (<>
  <Header/>
  <Routes>
    <Route exact path='' element={<Home/>}/>
    <Route exact path='Components/Contact' element={<Contact/>}/>
    <Route exact path='Components/About' element={<About/>}/>
    <Route path="*" element={<Navigate to="/"/>} />
  </Routes>
  <Footer/>
    </>
  );
}

export default App;
