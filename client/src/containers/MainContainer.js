import React, { useEffect, useState } from 'react'
import SearchForm from '../components/SearchForm';
import { getFlights } from '../Services/FlightService'
import FlightList from '../components/FlightList';

const MainContainer = () => {

    const [userFlights, setUserFlights] = useState([]);

    useEffect(() => {
      getFlights().then((allFlights) => {
        setUserFlights(allFlights);
      })
    }, []);


    const addFlight = (flight) => {
      setUserFlights([...userFlights, flight])
    };

    const removeFlight = (id) => {
      const flightsToKeep = userFlights.filter(f => f._id !== id)
      setUserFlights(flightsToKeep);
    }



  return (
    <div>
    <h1>Main Container</h1>
    <SearchForm/>
    <FlightList userFlights={userFlights} />
    </div>
  )
}





export default MainContainer;