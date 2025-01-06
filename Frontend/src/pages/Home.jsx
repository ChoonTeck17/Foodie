import React, { useState } from 'react'
import './Home.css'
import Header from '../components/Header';
import { ExploreMenu } from '../components/ExploreMenu';
import FoodDisplay from '../components/FoodDisplay';
import { Button, Space, DatePicker, version, Dropdown } from 'antd';
import AppDownload from '../components/AppDownload';
import Body from '../components/Body';
import TopSection from '../components/TopSection';



const Home = () => {

  const [category, setCategory] = useState("All");

  
  return (
    <div>
      <TopSection/>
      <Header/>
      <Body category={category}/>
      {/* <ExploreMenu category={category} setCategory={setCategory}/> */}
      
      <AppDownload/>
      
      <div style={{ padding: '0 24px' }}>
     
      </div>
    </div>
    
  )
}

export default Home