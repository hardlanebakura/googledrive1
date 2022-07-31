import { useState, useEffect } from 'react';
import { Header, Sidebar, ModalTesting, View } from './components';
import { useLocation } from 'react-router-dom';
import './App.css';
import { Modal } from '@material-ui/core/Modal';

function App() {

  const location = useLocation();
  var user = (location.state === null) ? null : location.state.user;
  const [isLogged, setIsLogged] = useState(false);
  
  useEffect(() => {
    if (location.state !== null) setIsLogged(true);
  }, [isLogged])

  const setLogged = (value) => {
    setIsLogged(value);
  }

  return (
    <div className="App">
      <Header user = { user } />
      <div id="sidebar_and_views">
        <Sidebar user = { user } />
        <View isLogged = { isLogged } user = { user } />
      </div>
    </div>
  );
}

export default App;
