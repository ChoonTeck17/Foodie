import React, {useState} from 'react'
import { ExploreMenu } from '../components/ExploreMenu';
import FoodDisplay from '../components/FoodDisplay';
import { menu_list } from '../assets/assets';
// import FoodItem from '../components/FoodItem';

const Menu = () => {
    const [category, setCategory] = useState('All');
  return (
    <div className="mt-20">
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Menu