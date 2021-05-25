import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import AppBarMenu from './components/UserInterface/BarMenu';
import CardsQuotes from './components/Quotes/CardsQuotes';


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/quotes`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    

    fetchItems()
  }, [])




  return(
    <div className="container-fluid">
      <AppBarMenu />  
      <CardsQuotes  isLoading={isLoading} items={items} />      
    </div>
  );

};


export default App;
