import React, {useState} from 'react'
import { ExploreMenu } from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Menu = () => {
    const [category, setCategory] = useState('All');
  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Menu