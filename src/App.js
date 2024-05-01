import { Navbar } from './containers/NavBar/navbar.container';
import { Hero } from './containers/hero/hero.componet';
import './App.css';
import { Unit } from './containers/unit/Unit.container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Unit />
    </div>
  );
}

export default App;
