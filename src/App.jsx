import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import './App.css';

const App = () => {
  const [card, setCard] = useState([]);
  const [warning, setWarning] = useState(false);

  const handler = (item) => {
    let isPresent = card.some((element) => element.id === item.id);

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCard([...card, item]);
  };

  return (
    <div className="App">
      <Navbar size={card.length} />
      <Shop handler={handler} />
    {
        warning && <div className='warning'> Item is already in your cart </div>
      }
    </div>
  );
};

export default App;
