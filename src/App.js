import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Nav from './components/Nav/Nav';
import Action from './components/Action/Action';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

import SinglePost from './components/SinglePost/SinglePost';

const App = () => {
  return <div className="container-fluid" id='app'>
    <Nav />
    <Routes>
      <Route path='/' element={<Action />} />
      <Route path='/about' element={<About />} />
      <Route path='/single-post/:id' element={<SinglePost />} />
    </Routes>

    <Footer />
  </div>
}

export default App;