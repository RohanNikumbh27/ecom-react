import React from 'react';
import '../Styles/App.css';
import Cards from './Cards';
import mydata from '../Assets/Data';
import "../Styles/index.css";

function Home() {
  return (
    <>
    <div className='paddingdiv'></div>
    <div className='container-flex'>
    {
      mydata.map(item => (
        <Cards key={item.key} item={item}/>
      ))
    }
    </div>
    </>
  )
}

export default Home;