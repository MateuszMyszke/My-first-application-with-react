import Container from './components/Container/Container'
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import Favorite from './components/Favorite/Favorite'; 
import About from './components/About/About';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import List from './components/List/List';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/list/:listId' element={<List />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;