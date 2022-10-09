import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import GridCard from './components/GridCard/GridCard';
import Navbar from './components/Navbar/Navbar';
import NavScrollExample from './components/Navbar/Navbar';
import BasicExample from './components/Toast/Toast';

function App() {
  return (
    <div className="App">
      <NavScrollExample></NavScrollExample>
      <button>Plain Button</button>
      <Button variant="danger">Button</Button>
      <GridCard></GridCard>
      <BasicExample></BasicExample>
    </div>
  );
}

export default App;
