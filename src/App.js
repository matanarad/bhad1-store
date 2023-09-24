import './App.css';
import { useEffect, useState } from 'react';
import StoreBox from './components/StoreBox/StoreBox';
import AppFooter from './components/AppFooter/AppFooter';
import AppHeader from './components/AppHeader/AppHeader';
import Loading from './components/Loading/Loading';
function App() {
  const [storesList, setStoresList] = useState([])
  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbySZYyZwnEv7ise5ShrUHYt23R7xJyTkr2FZKWfyN5NUgCG3Mtf6JmNv2d4Vw5cRt0G/exec')
      .then((response) => response.json())
      .then((data) => {
        setStoresList(data)
      })

  }, []);
  return (

    <div className="App">
      <AppHeader />
      <div className='main'>
        {storesList.length !== 0 ? storesList.map(store => {
          return <StoreBox name={store.Name} description={store.Description} openingTimes={store.OpeningTimes} phoneNumber={store.Phone} key={store.Name} />
        }) : <Loading />}

      </div>
      <AppFooter />


    </div>

  );
}

export default App;
