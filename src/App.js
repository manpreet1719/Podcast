import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import VideoContainer from './Components/VideoContainer';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Explore from './Components/Explore';
import Description from './Components/Description';
function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Body />}></Route>
        <Route path='/explore' element={<Explore />}></Route>
        <Route path='/description' element={<Description/>}></Route>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
