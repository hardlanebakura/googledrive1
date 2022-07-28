import { Header, Sidebar, Modal } from './components';
import { useLocation } from 'react-router-dom';
import './App.css';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <Header user = { location.state } />
      <Sidebar />
      <Modal />
      1
    </div>
  );
}

export default App;
