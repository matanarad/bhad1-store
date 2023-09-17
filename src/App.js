import './App.css';
import { useEffect, useState } from 'react';
import StoreBox from './components/StoreBox/StoreBox';
function App() {
  const [storesList, setStoresList] = useState([{ Name: "Loading" }])
  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbw7NQrDCqqYeOrJdWr8ai3-SPX8CcbxKckb2BWO77eR1KklME03YbUo6FJtmto3TWK2/exec')
      .then((response) => response.json())
      .then((data) => {
        setStoresList(data)
      })

  }, []);
  return (
    <div className="App">
      {storesList.map(store => {
        return <StoreBox name={store.Name} description={store.Description} openingTimes={store.OpeningTimes} key={store.Name} />
      })}
    </div>
  );
}

export default App;
