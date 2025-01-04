import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header';
import { ExploreMenu } from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import { Button, Space, DatePicker, version, Dropdown } from 'antd';
import AppDownload from '../../components/AppDownload/AppDownload';
import Body from '../../components/Body/Body';
import TopSection from '../../components/TopSection/TopSection';



const Home = () => {

  const [category, setCategory] = useState("All");

  
  return (
    <div>
      <TopSection/>
      <Header/>
      <Body category={category}/>
      {/* <ExploreMenu category={category} setCategory={setCategory}/> */}
      ssssssssssssssssssssssssssssssssssssssssss
      <AppDownload/>
      
      <div style={{ padding: '0 24px' }}>
     
      </div>
    </div>
    
  )
}

export default Home