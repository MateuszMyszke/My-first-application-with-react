import Container from './components/Container/Container'
import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List'
import NavigationBar from './components/NavigationBar/NavigationBar';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </div>
  );
};

export default App;