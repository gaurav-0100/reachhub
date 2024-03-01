import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Api from './Api'




function App() {
  const [data , setData]= useState([]);
  const sorting= ()=>{
    const sortedData = [...data].sort((a, b) => {
      
      return new Date(b.datetime*1000) - new Date(a.datetime*1000);
    });
    setData(sortedData);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2023-08-15&to=2023-08-20&token=cngukupr01qhlsli9csgcngukupr01qhlsli9ct0');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        // console.log
        setData(jsonData);
        
       
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(data);
     
    },[]); 
    
    
  return (
    <>
    <div className = 'container'>
          <button onClick={sorting}>Get Latest</button>
         {data.map((item)=>(
            <Api item = {item}/>
         ))}
                                            
          
         </div>

    </>
  )
}

export default App
