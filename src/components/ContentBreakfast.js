import React from 'react';
import { BreakfastData } from './BreakfastData'; 
import Breakfast from './Breakfast';
export default function ContentBreakfast() {
  return (
  <div className='breakcont'>
    <Breakfast/>
    <Breakfast/>
    <Breakfast/>
    <Breakfast/>
    <Breakfast/>
    <Breakfast/>
    <Breakfast/>
    <Breakfast/>
    {/* {
    BreakfastData.breakfastprods.map(breakfastprod =>
    <Breakfast 
    key={breakfastprod.id}
    name={breakfastprod.name}
    id={breakfastprod.id}
    price={breakfastprod.price}
    weight={breakfastprod.weight}
    image={breakfastprod.image}
    />
    ) */}

  </div>
  )
}
