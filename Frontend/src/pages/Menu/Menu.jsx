import React, {useState} from 'react'
import { ExploreMenu } from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import { menu_list } from '../../assets/assets';


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