import React from 'react'
import { Button } from 'react-bootstrap'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <h1 className="text-white">We Help Your Business</h1>
      <p className="text-white header-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit numquam officia, corporis libero pariatur laborum maxime excepturi repellat consequuntur vitae voluptate? Fuga debitis impedit nihil, ipsum sint officiis ratione quaerat voluptatum illo laborum consequatur nulla, omnis non inventore maiores?</p>
      <Button variant="light mt-5">Learn More</Button>
    </div>
  )
}

export default Header
