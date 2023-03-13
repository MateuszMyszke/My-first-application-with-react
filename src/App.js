import Container from './components/Container/Container'
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Home />
      </Container>
    </div>
  );
};

export default App;