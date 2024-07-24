import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../Styles/Navbar.css'
const Navbar = ({size}) => {
  return (
   <nav>
    <div className='Nav_Box'>
        <span className='Myshop'>Gurukul Shop</span>

        <div className='Cart'>
              <span>
                <i className='fas fa-cart-plus'></i>
              </span>
              <span>{size}</span>

        </div>
    </div>
   </nav>
  )
}

export default Navbar