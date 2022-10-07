import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Error.css'

const Error = () => {
  return (
    <div>
        <FontAwesomeIcon icon="fa-solid fa-cart-circle-arrow-down" />
        <i class="fa fa-bicycle" ></i>

        <h2 className='h21'>Opps!
            <br></br>
            Cart is Empty


        </h2>
        
    </div>
  )
}

export default Error