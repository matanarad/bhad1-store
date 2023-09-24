import './App.css';
import { useEffect, useState } from 'react';
import StoreBox from './components/StoreBox/StoreBox';
import AppFooter from './components/AppFooter/AppFooter';
import AppHeader from './components/AppHeader/AppHeader';
import Loading from './components/Loading/Loading';
function App() {
  const [storesList, setStoresList] = useState([])
  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbw7NQrDCqqYeOrJdWr8ai3-SPX8CcbxKckb2BWO77eR1KklME03YbUo6FJtmto3TWK2/exec')
      .then((response) => response.json())
      .then((data) => {
        setStoresList(data)
      })

  }, []);
  return (
    // <div className="App">
    //   {/* <div className='app-header'></div> */}
    //   <div className='page-wrap'>
    //     {storesList.length !== 0 ? storesList.map(store => {
    //       return <StoreBox name={store.Name} description={store.Description} openingTimes={store.OpeningTimes} key={store.Name} />
    //     }) : <div>loading...</div>}
    //   </div>
    //   <AppFooter />

    // </div>
    <div className="App">
      <AppHeader />
      <div className='main'>
        {storesList.length !== 0 ? storesList.map(store => {
          return <StoreBox name={store.Name} description={store.Description} openingTimes={store.OpeningTimes} key={store.Name} />
        }) : <Loading />}

      </div>
      <AppFooter />


    </div>

  );
}

export default App;
