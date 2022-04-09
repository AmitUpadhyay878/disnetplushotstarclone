import React, { useState } from 'react'
import DynamicSlider from "./DynamicSlider";
import dynamicArr from '../MOCK_DATA.json'
const Banner = () => {
    const [products] = useState(dynamicArr);
  return (
    <DynamicSlider data={products}  />
  )
}

export default Banner