import { useEffect, useState } from 'react';
import './App.css';
import SearchWeather from './Components/SearchWeather/SearchWeather';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWeather } from './JS/actions/weatherActions';
import {Route, Routes} from "react-router-dom"
import Forcast from './Components/Forcast/Forcast';

function App() {
  // const [data, setData] = useState({})
  //   const [loading, setLoading] = useState(true)
    const dispatch= useDispatch()
    const {weather,loading}= useSelector((state)=>state)
   

    

    // const getWeather=async()=>{
    //     try{
    //         const response = await axios.get("http://api.weatherapi.com/v1/forecast.json?key=d2a566024b2847e5ad9213829221306&q=Tunisia&days=7&aqi=no&alerts=no")
    //         console.log(response.data)
    //         setData(response.data)
    //         setLoading(!loading)
    //     } catch(error){
    //         console.error(error)
    //     }

    // 


   //check if geolocation is available
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position);

     
      })
     
const [query, setQuery] = useState("Tunisia")
const searchCountry = (x) =>{
  setQuery(x)
} 
    useEffect(() => {
      getAllWeather()
      dispatch(getAllWeather(query))
      
    }, [dispatch, query])

  return (
    <div>
      <Routes> 
        <Route path="/" element= {loading? "Loading ..." :<SearchWeather data={weather}  searchCountry = {searchCountry}/> } />
        <Route path="/forcast/:id" element={<Forcast/>} /> 
      </Routes>
    </div>
  );
}

export default App;

