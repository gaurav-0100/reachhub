import React, { useState } from 'react'
import './Api.css'
const Api = ({item}) => {
    const date = new Date(item.datetime * 1000);
  
  // Options for formatting the date
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric', 
    timeZoneName: 'short' 
  };

  // Format the date using the options
  const formattedDate = date.toLocaleDateString('en-US', options);
    
      return (
        <div className='item-container'>
            <h2 className='item-heading'>{item.category}</h2>
            <div className='item-datetime'>{formattedDate}</div>
            <h4 className='item-headline'>{item.headline}</h4>
            <div className='item-id'>Item Id : {item.id}</div>
           
            <div className='item-related'>{item.related}</div>
            <div className='item-source'>Source :{item.source}</div>
            <div className='item-summary'>{item.summary}</div>
            <div className='item-url'>{item.url}</div>
            <img src={item.image} alt={item.image} />
            
            </div>

      );
}

export default Api
